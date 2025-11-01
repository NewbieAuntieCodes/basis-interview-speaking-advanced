/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useMemo } from 'react';
import { quizzes } from '../data/quizzes/multipleChoiceData';
import { Quiz } from '../data/types';
import {
    QuizContainer,
    BackButton,
    TopicHeader,
    Passage,
    Score,
    QuizHeader,
    QuizButton,
    CardsContainer,
    Card,
    QuizSelectorContainer,
    QuizSelectorHeader,
    InlineQuestionContainer,
    InlineOption,
    AnalysisContainer,
    AnalysisTitle,
    AnalysisItem,
    AnswerKey,
    AnswerExplanation
} from './App.styles';

interface MultipleChoiceQuizProps {
    onBack: () => void;
}

const QuizView: React.FC<{ quiz: Quiz, onBack: () => void }> = ({ quiz, onBack }) => {
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
        <QuizContainer>
            <BackButton onClick={onBack}>&larr; 返回列表</BackButton>
            <TopicHeader>{quiz.title}</TopicHeader>
            
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
        </QuizContainer>
    );
};


const MultipleChoiceQuiz: React.FC<MultipleChoiceQuizProps> = ({ onBack }) => {
    const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);

    if (selectedQuiz) {
        return <QuizView quiz={selectedQuiz} onBack={() => setSelectedQuiz(null)} />;
    }

    return (
        <QuizSelectorContainer>
             <BackButton onClick={onBack}>&larr; 返回</BackButton>
            <QuizSelectorHeader>选择一篇练习</QuizSelectorHeader>
            <CardsContainer>
                {quizzes.map(quiz => (
                    <Card key={quiz.id} onClick={() => setSelectedQuiz(quiz)}>
                        <h3>{quiz.title}</h3>
                        <p>{quiz.questions.length} questions</p>
                    </Card>
                ))}
            </CardsContainer>
        </QuizSelectorContainer>
    );
};

export default MultipleChoiceQuiz;