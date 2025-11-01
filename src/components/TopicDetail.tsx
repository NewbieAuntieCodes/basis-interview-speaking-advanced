/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
import { Topic } from '../data/types';
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
                </Section>
            ))}
        </DetailContainer>
    );
};

export default TopicDetail;