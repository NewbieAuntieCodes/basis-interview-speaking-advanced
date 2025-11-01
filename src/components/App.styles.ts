/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import styled, { css } from 'styled-components';

export const AppContainer = styled.div`
    padding: 20px;
`;

export const Header = styled.header`
    text-align: center;
    margin-bottom: 50px;
    h1 {
        color: #2d3748;
        font-size: 3em;
        text-shadow: none;
        margin-bottom: 20px;

        @media (max-width: 768px) {
            font-size: 2.2em;
            margin-bottom: 30px;
        }
    }
`;

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 20px;
        padding: 10px;
    }
`;

export const Card = styled.div`
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
    transition: transform 0.2s, box-shadow 0.2s;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }

    h3 {
        margin-bottom: 15px;
        color: #4a5568;
        font-size: 1.25em;
    }

    p {
        color: #718096;
        font-size: 0.9em;
        line-height: 1.5;
    }
`;

// Styles for Topic Detail View
export const DetailContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const BackButton = styled.button`
    background: #4a5568;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    margin-bottom: 30px;
    transition: background-color 0.2s;

    &:hover {
        background: #2d3748;
    }
`;

export const TopicHeader = styled.h2`
    color: #2d3748;
    font-size: 2.5em;
    margin-bottom: 30px;
    text-align: center;
`;

export const Section = styled.section`
    margin-bottom: 40px;
    border-left: 4px solid #4a5568;
    padding-left: 20px;
`;

export const SectionTitle = styled.h3`
    color: #4a5568;
    font-size: 1.8em;
    margin-bottom: 20px;
`;

export const TopicImage = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ContentBlock = styled.div`
    margin-bottom: 15px;
    
    h4 {
        color: #718096;
        font-size: 1.2em;
        margin-bottom: 10px;
    }

    p, ul, li {
        color: #4a5568;
        font-size: 1em;
        line-height: 1.7;
    }

    ul {
        list-style-position: inside;
        padding-left: 10px;
    }

    strong {
        color: #2d3748;
    }
`;

export const ClickableHeader = styled.h4`
    cursor: pointer;
    user-select: none;
    transition: color 0.2s;

    &:hover {
        color: #2d3748;
    }
`;

export const ExpressionGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
`;


// --- Styles for Multiple Choice Quiz ---

export const QuizContainer = styled(DetailContainer)``;

export const QuizHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

export const Score = styled.p`
    font-size: 1.2em;
    font-weight: bold;
    color: #2d3748;
`;

export const QuizButton = styled(BackButton)`
    margin-bottom: 0;
    background-color: #718096;

    &:hover {
        background-color: #4a5568;
    }
`;

export const Passage = styled.div`
    background: #f7fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 30px;
    line-height: 3;
    color: #4a5568;
    font-size: 1.1em;

     > span {
        white-space: pre-wrap;
    }
`;

export const InlineQuestionContainer = styled.span`
    display: inline-block;
    vertical-align: middle;
    margin: 0 0.25em;
    padding: 0.25em;
    background: #e9e9e9;
    border: 1px solid #ccc;
    border-radius: 6px;

    .question-number {
        font-weight: bold;
        margin-right: 0.5em;
        color: #2d3748;
    }

    .options-wrapper {
        display: inline-flex;
        flex-wrap: wrap;
        gap: 5px;
        align-items: center;
        vertical-align: middle;
    }
`;

interface InlineOptionProps {
    isSelected: boolean;
    isCorrect?: boolean;
}

export const InlineOption = styled.button<InlineOptionProps>`
    display: inline-block;
    border: 1px solid #cbd5e0;
    border-radius: 5px;
    padding: 4px 8px;
    margin: 2px;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 0.9em;
    color: #4a5568;
    background: white;
    font-family: inherit;

    &:hover:not(:disabled) {
        border-color: #4299e1;
    }

    ${({ isSelected, isCorrect }) => {
        let styles = '';

        if (isCorrect === true) { // Submitted and this is the correct answer
            styles += `
                border-color: #48bb78;
                background-color: #f0fff4;
                color: #2f855a;
                font-weight: bold;
            `;
        } else if (isCorrect === false) { // Submitted, was selected, but is wrong
            styles += `
                border-color: #f56565;
                background-color: #fff5f5;
                color: #c53030;
                font-weight: bold;
            `;
        } else if (isSelected) { // Not submitted, just selected
             styles += `
                border-color: #4299e1;
                background-color: #ebf8ff;
                color: #2c5282;
                font-weight: bold;
             `;
        }
        
        // Bolder border for any selected/evaluated option
        if (isSelected || isCorrect !== undefined) {
             styles += `
                border-width: 2px;
                padding: 3px 7px;
             `;
        }

        return css`${styles}`;
    }}

    &:disabled {
        cursor: not-allowed;
        opacity: 0.8;
    }
`;

export const QuizSelectorContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
`;

export const QuizSelectorHeader = styled.h2`
    color: #2d3748;
    font-size: 2em;
    text-align: center;
    margin-bottom: 30px;
`;

export const AnalysisContainer = styled.div`
    margin-top: 40px;
    border-top: 2px solid #e2e8f0;
    padding-top: 30px;
`;

export const AnalysisTitle = styled.h3`
    font-size: 1.8em;
    color: #2d3748;
    margin-bottom: 20px;
    text-align: center;
`;

export const AnalysisItem = styled.div`
    background: #f7fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
    
    p {
        margin-bottom: 10px;
        font-size: 1.1em;
        line-height: 1.6;
    }
`;

export const AnswerKey = styled.span<{ isCorrect: boolean }>`
    font-weight: bold;
    color: ${({ isCorrect }) => (isCorrect ? '#2f855a' : '#c53030')};
    background-color: ${({ isCorrect }) => (isCorrect ? '#f0fff4' : '#fff5f5')};
    padding: 2px 6px;
    border-radius: 4px;
    border: 1px solid ${({ isCorrect }) => (isCorrect ? '#9ae6b4' : '#fecaca')};
`;

export const AnswerExplanation = styled.p`
    color: #4a5568;
    font-style: italic;
    border-left: 3px solid #718096;
    padding-left: 15px;
    margin-top: 15px !important;
`;