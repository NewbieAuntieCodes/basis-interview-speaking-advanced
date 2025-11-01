/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
import { GlobalStyle } from '../styles/GlobalStyle';
import { AppContainer, Header, CardsContainer, Card } from './App.styles';
import { topicsData } from '../data/topicsData';
import { Topic } from '../data/types';
import TopicDetail from './TopicDetail';
import MultipleChoiceQuiz from './MultipleChoiceQuiz';

const DseSpeakingHubApp: React.FC = () => {
    const [view, setView] = useState<'home' | 'topic' | 'quiz'>('home');
    const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

    const handleCardClick = (topic: Topic) => {
        if (topic.isQuiz) {
            setView('quiz');
        } else if (topic.sections && topic.sections.length > 0) {
            setSelectedTopic(topic);
            setView('topic');
        } else {
            alert('Content for this topic is coming soon!');
        }
    };

    const handleBack = () => {
        setSelectedTopic(null);
        setView('home');
    };

    const renderContent = () => {
        switch (view) {
            case 'topic':
                return <TopicDetail topic={selectedTopic!} onBack={handleBack} />;
            case 'quiz':
                return <MultipleChoiceQuiz onBack={handleBack} />;
            case 'home':
            default:
                return (
                    <CardsContainer>
                        {topicsData.map((topic, index) => (
                            <Card key={index} onClick={() => handleCardClick(topic)}>
                                <h3>{topic.title}</h3>
                                <p>{topic.description}</p>
                            </Card>
                        ))}
                    </CardsContainer>
                );
        }
    }

    return (
        <>
            <GlobalStyle />
            <AppContainer>
                <Header>
                    <h1>贝思思面试口语（高级）</h1>
                </Header>
                {renderContent()}
            </AppContainer>
        </>
    );
};

export default DseSpeakingHubApp;