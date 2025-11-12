/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useMemo } from 'react';
import { Topic, TopicSection, Quiz } from '../data/types';
import { 
    DetailContainer, 
    BackButton, 
    TopicHeader, 
    Section, 
    SectionTitle, 
    ContentBlock,
    ExpressionGrid,
    TopicImage,
    SideBySideContainer,
    SideBySideImageContainer,
    SideBySideTextContainer,
    CarouselContainer,
    CarouselSlide,
    NavArrow,
    DotsContainer,
    Dot,
    BottomNavArrowContainer,
    BottomNavArrow,
    Passage,
    Score,
    QuizHeader,
    QuizButton,
    InlineQuestionContainer,
    InlineOption,
    AnalysisContainer,
    AnalysisTitle,
    AnalysisItem,
    AnswerKey,
    AnswerExplanation
} from './App.styles';

interface TopicDetailProps {
    topic: Topic;
    onBack: () => void;
}

const renderExpressions = (expressions: (string | { term: string; definition: string })[]) => {
    const useGrid = expressions.some(exp => typeof exp === 'object' && exp !== null);

    if (useGrid) {
        return (
            <ExpressionGrid>
                {expressions.map((exp, i) => {
                    if (typeof exp === 'string') {
                        if (exp.endsWith(':')) {
                            return <div key={i} style={{ gridColumn: '1 / -1', marginTop: '15px', marginBottom: '5px', color: '#4a5568', fontWeight: 'bold' }}>{exp}</div>;
                        }
                        return <p key={i}>{exp}</p>;
                    } else {
                        return <p key={i}><strong>{exp.term}</strong> {exp.definition}</p>;
                    }
                })}
            </ExpressionGrid>
        );
    }

    return (
        <ul>
            {(expressions as string[]).map((exp, i) => <li key={i}>{exp}</li>)}
        </ul>
    );
};

const EmbeddedQuiz: React.FC<{ quiz: Quiz }> = ({ quiz }) => {
    const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
    const [submitted, setSubmitted] = useState(false);

    const handleOptionChange = (questionId: number, option: string) => {
        if (submitted) return;
        setUserAnswers(prev => ({ ...prev, [questionId]: option }));
    };

    const resetQuiz = () => {
        setUserAnswers({});
        setSubmitted(false);
    };

    const score = useMemo(() => {
        if (!submitted) {
             const answeredCount = Object.keys(userAnswers).length;
             return `${answeredCount} / ${quiz.questions.length}`;
        }
        return quiz.questions.reduce((acc, q) => {
            return userAnswers[q.id] === q.answer ? acc + 1 : acc;
        }, 0);
    }, [userAnswers, submitted, quiz.questions]);


    const renderPassageWithInlineQuestions = () => {
        const parts = quiz.passage.split(/(\(\{\d+\}\))/g);

        return (
            <Passage>
                {parts.map((part, index) => {
                    const match = part.match(/\(\{(\d+)\}\)/);
                    if (match) {
                        const questionId = parseInt(match[1], 10);
                        const q = quiz.questions.find(q => q.id === questionId);
                        if (!q) return <span key={index}>{part}</span>;

                        return (
                            <InlineQuestionContainer key={`q-${q.id}`}>
                                <span className="question-number">({q.id})</span>
                                <div className="options-wrapper">
                                    {q.options.map((option, i) => {
                                        const letter = String.fromCharCode(65 + i);
                                        const isSelected = userAnswers[q.id] === option;
                                        const isAnswerCorrect = option === q.answer;

                                        let isCorrectProp: boolean | undefined = undefined;
                                        if (submitted) {
                                            if (isAnswerCorrect) {
                                                isCorrectProp = true;
                                            } else if (isSelected && !isAnswerCorrect) {
                                                isCorrectProp = false;
                                            }
                                        }

                                        return (
                                            <InlineOption
                                                key={option}
                                                isSelected={isSelected}
                                                isCorrect={isCorrectProp}
                                                onClick={() => handleOptionChange(q.id, option)}
                                                disabled={submitted}
                                            >
                                                {letter}. {option}
                                            </InlineOption>
                                        );
                                    })}
                                </div>
                            </InlineQuestionContainer>
                        );
                    }
                    return <span key={index}>{part}</span>;
                })}
            </Passage>
        );
    };
    
    return (
        <ContentBlock>
            {renderPassageWithInlineQuestions()}
            
            <QuizHeader>
                <Score>分数: {submitted ? `${score} / ${quiz.questions.length}`: score}</Score>
                <div>
                    <QuizButton onClick={resetQuiz} style={{ marginRight: '10px' }}>重置</QuizButton>
                    <QuizButton onClick={() => setSubmitted(true)} disabled={submitted}>检查答案</QuizButton>
                </div>
            </QuizHeader>
            
            {submitted && (
                <AnalysisContainer>
                    <AnalysisTitle>答案解析</AnalysisTitle>
                    {quiz.questions.map(q => {
                        const userAnswer = userAnswers[q.id];
                        const isCorrect = userAnswer === q.answer;
                        return (
                            <AnalysisItem key={`analysis-${q.id}`}>
                                <p><strong>问题 {q.id}:</strong></p>
                                <p>你的答案: <AnswerKey isCorrect={isCorrect}>{userAnswer || '未作答'}</AnswerKey></p>
                                <p>正确答案: <AnswerKey isCorrect={true}>{q.answer}</AnswerKey></p>
                                {q.explanation && (
                                    <AnswerExplanation>
                                        <strong>解析:</strong> {q.explanation}
                                    </AnswerExplanation>
                                )}
                            </AnalysisItem>
                        );
                    })}
                </AnalysisContainer>
            )}
        </ContentBlock>
    );
};

const PictureCarousel: React.FC<{ section: TopicSection }> = ({ section }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isExampleVisible, setIsExampleVisible] = useState(false);
    const pictureItems = section.pictureItems || [];
    const currentItem = pictureItems[currentIndex];

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? pictureItems.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        setIsExampleVisible(false); // Reset visibility on slide change
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === pictureItems.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setIsExampleVisible(false); // Reset visibility on slide change
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
        setIsExampleVisible(false); // Reset visibility on slide change
    };

    if (!currentItem) return null;

    return (
        <CarouselContainer>
            <NavArrow className="left" onClick={goToPrevious} disabled={pictureItems.length <= 1}>
                &#10094;
            </NavArrow>
            <CarouselSlide key={currentIndex}>
                <h4 style={{ textAlign: 'center', fontSize: '1.4em', color: '#4a5568', marginBottom: '20px' }}>{currentItem.title}</h4>
                <TopicImage src={currentItem.imageUrl} alt={currentItem.title} />
                
                {currentItem.questions && currentItem.questions.length > 0 && (
                    <ContentBlock>
                        <h4>常见问题</h4>
                        <ul>
                            {currentItem.questions.map((q, i) => <li key={i}>{q}</li>)}
                        </ul>
                    </ContentBlock>
                )}
                {currentItem.thoughts && currentItem.thoughts.length > 0 && (
                    <ContentBlock>
                        <h4>思路</h4>
                        <ul>
                            {currentItem.thoughts.map((t, i) => <li key={i}>{t}</li>)}
                        </ul>
                    </ContentBlock>
                )}
                {currentItem.expressions && currentItem.expressions.length > 0 && (
                    <ContentBlock>
                        <h4>表达</h4>
                        {renderExpressions(currentItem.expressions)}
                    </ContentBlock>
                )}
                {currentItem.example && (
                    <ContentBlock>
                        <BackButton onClick={() => setIsExampleVisible(!isExampleVisible)} style={{marginBottom: 0}}>
                            {isExampleVisible ? 'Hide' : 'Check'}
                        </BackButton>
                        {isExampleVisible && (
                             <SideBySideContainer>
                                <SideBySideImageContainer>
                                    <TopicImage src={currentItem.imageUrl} alt="范文参考图片" style={{ margin: '0' }}/>
                                </SideBySideImageContainer>
                                <SideBySideTextContainer>
                                    <p style={{ whiteSpace: 'pre-wrap', background: '#f9f9f9', padding: '15px', borderRadius: '5px', fontStyle: 'italic', margin: 0 }}>
                                        {currentItem.example}
                                    </p>
                                </SideBySideTextContainer>
                            </SideBySideContainer>
                        )}
                    </ContentBlock>
                )}
            </CarouselSlide>
            <NavArrow className="right" onClick={goToNext} disabled={pictureItems.length <= 1}>
                &#10095;
            </NavArrow>
            <DotsContainer>
                {pictureItems.map((_, slideIndex) => (
                    <Dot
                        key={slideIndex}
                        isActive={currentIndex === slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        aria-label={`Go to slide ${slideIndex + 1}`}
                    />
                ))}
                 <BottomNavArrowContainer>
                    <BottomNavArrow onClick={goToPrevious} disabled={pictureItems.length <= 1}>
                        &#10094;
                    </BottomNavArrow>
                    <BottomNavArrow onClick={goToNext} disabled={pictureItems.length <= 1}>
                        &#10095;
                    </BottomNavArrow>
                </BottomNavArrowContainer>
            </DotsContainer>
        </CarouselContainer>
    );
};

const TopicDetail: React.FC<TopicDetailProps> = ({ topic, onBack }) => {
    const [visibleExamples, setVisibleExamples] = useState<Record<number, boolean>>({});

    const toggleExampleVisibility = (index: number) => {
        setVisibleExamples(prev => ({ ...prev, [index]: !prev[index] }));
    };

    return (
        <DetailContainer>
            <BackButton onClick={onBack}>&larr; 返回</BackButton>
            <TopicHeader>{topic.title}</TopicHeader>
            {topic.sections.map((section, index) => (
                <Section key={index}>
                    <SectionTitle>{section.title}</SectionTitle>
                    
                    {section.pictureItems && section.pictureItems.length > 0 ? (
                        <PictureCarousel section={section} />
                    ) : section.quiz ? (
                        <EmbeddedQuiz quiz={section.quiz} />
                    ) : (
                        <>
                            {section.imageUrl && <TopicImage src={section.imageUrl} alt={section.title} />}
                            
                            {section.questions && section.questions.length > 0 && (
                                <ContentBlock>
                                    <h4>常见问题</h4>
                                    <ul>
                                        {section.questions.map((q, i) => <li key={i}>{q}</li>)}
                                    </ul>
                                </ContentBlock>
                            )}
                            {section.thoughts && section.thoughts.length > 0 && (
                                <ContentBlock>
                                    <h4>思路</h4>
                                    <ul>
                                        {section.thoughts.map((t, i) => <li key={i}>{t}</li>)}
                                    </ul>
                                </ContentBlock>
                            )}
                            {section.expressions && section.expressions.length > 0 && (
                                <ContentBlock>
                                    <h4>表达</h4>
                                    {renderExpressions(section.expressions)}
                                </ContentBlock>
                            )}
                            {section.example && (
                                <ContentBlock>
                                    <BackButton onClick={() => toggleExampleVisibility(index)} style={{marginBottom: 0}}>
                                        {visibleExamples[index] ? 'Hide' : 'Check'}
                                    </BackButton>
                                    {visibleExamples[index] && (
                                        section.imageUrl ? (
                                            <SideBySideContainer>
                                                <SideBySideImageContainer>
                                                    <TopicImage src={section.imageUrl} alt="范文参考图片" style={{ margin: '0' }}/>
                                                </SideBySideImageContainer>
                                                <SideBySideTextContainer>
                                                    <p style={{ whiteSpace: 'pre-wrap', background: '#f9f9f9', padding: '15px', borderRadius: '5px', fontStyle: 'italic', margin: 0 }}>
                                                        {section.example}
                                                    </p>
                                                </SideBySideTextContainer>
                                            </SideBySideContainer>
                                        ) : (
                                            <p style={{ whiteSpace: 'pre-wrap', background: '#f9f9f9', padding: '15px', borderRadius: '5px', fontStyle: 'italic', marginTop: '15px' }}>
                                                {section.example}
                                            </p>
                                        )
                                    )}
                                </ContentBlock>
                            )}
                        </>
                    )}
                </Section>
            ))}
        </DetailContainer>
    );
};

export default TopicDetail;