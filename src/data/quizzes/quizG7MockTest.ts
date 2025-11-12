/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { Quiz } from '../types';

export const quizG7MockTest: Quiz[] = [
    {
        id: 'quiz-g7-mock-test',
        title: 'G7 模拟测试: 选词填空',
        passage: "As global temperatures continue to rise, scientists have been investigating how human activities ({1}) the problem of climate change. One important factor that contributes to this issue is ({2}), which increases the amount of carbon dioxide in the atmosphere. While some experts focus on the role of fossil fuels, ({3}) believe that the agricultural industry also plays a significant part in global warming. Many countries are now working towards reducing their carbon emissions, ({4}) the challenges they face in shifting to renewable energy. This transition is crucial in tackling the ({5}) caused by climate change, such as extreme weather events and rising sea levels.",
        questions: [
            { 
                id: 1, 
                options: ['increase', 'reduce', 'improve'], 
                answer: 'increase', 
                explanation: '上下文讨论的是人类活动加剧气候变化问题，因此“increase”（增加）是合乎逻辑的选择。' 
            },
            { 
                id: 2, 
                options: ['deforestation', 'reforestation', 'overpopulation'], 
                answer: 'deforestation', 
                explanation: '森林砍伐（deforestation）减少了吸收二氧化碳的树木数量，从而增加了大气中的二氧化碳含量。' 
            },
            { 
                id: 3, 
                options: ['others', 'another', 'the other'], 
                answer: 'others', 
                explanation: '“一些专家”（Some experts）与另一组专家形成对比。“Others”（另一些人）是正确的复数代词，用来指代这第二组人。' 
            },
            { 
                id: 4, 
                options: ['although', 'because', 'despite'], 
                answer: 'despite', 
                explanation: '“Despite”（尽管）是一个介词，用于表示对比，后面跟名词短语（“the challenges”）。它的意思是“in spite of”。'
            },
            { 
                id: 5, 
                options: ['benefits', 'challenges', 'distractions'], 
                answer: 'challenges', 
                explanation: '极端天气和海平面上升是气候变化带来的负面后果或“挑战”（challenges）的例子。'
            }
        ]
    }
];
