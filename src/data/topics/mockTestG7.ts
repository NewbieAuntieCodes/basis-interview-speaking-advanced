/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { Topic } from '../types';
import { quizG7MockTest } from '../quizzes/quizG7MockTest';

export const mockTestG7Topic: Topic = {
    title: 'G7 模拟口测 (2025年12月)',
    description: 'BASIS G7 模拟面试，包含常规问答、看图说话和选词填空。',
    sections: [
        {
            title: '第一部分 常规回答',
        },
        {
            title: '一、考查个人信息问答',
            questions: [
                '1. Tell me about yourself.',
                '2. What do you think about your English level?',
            ],
        },
        {
            title: '二、考查兴趣爱好',
            questions: [
                '1. What do you like to do in your spare time?',
                '2. What are you good at?',
                '3. Can you recommend me a book? Why?',
                '根据学生回答的下一个问题:',
                '4. How often do you ____?',
                '5. Do you like reading?',
                '6. Do you like sports?',
                '7. Do you have any pets in your family? Do you like pets?',
            ],
        },
        {
            title: '三、考查性格描述',
            questions: [
                'How will your best friend describe you.',
            ],
        },
        {
            title: '四、考查优缺点',
            questions: [
                '1. What are your strengths?',
                '2. What do you want to improve in yourself?',
            ],
        },
        {
            title: '五、考查个人经历',
            questions: [
                'Tell me about a challenge you have faced and how you overcame it.',
            ],
        },
        {
            title: '六、考查综合素质',
            questions: [
                'Do you prefer working alone or in a team? Why?',
            ],
        },
        {
            title: '七、考查在校情况, 学习科目/校园活动',
            questions: [
                '1. What is your favorite subject in the school? Why?',
                '2. What book have you recently read? What did you learn from it?',
            ],
        },
        {
            title: '八、考查择校问题',
            questions: [
                'What do you know about Basis?',
            ],
        },
        {
            title: '九、考查未来规划',
            questions: [
                'What major do you want to study in university?',
            ],
        },
        {
            title: '十、其他',
            questions: [
                'If you could change one thing about your school, what would it be?',
            ],
        },
        {
            title: '第二部分 看图说话',
            pictureItems: [
                {
                    title: '看图说话',
                    imageUrl: 'https://imgsrv2.voi.id/NWty40U3jqCaU-SBICbSkffr7dUIox7HoDl0Nq5hrko/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy81Mjg0MDAvMjAyNTEwMjkxNTI1LW1haW4uanBn.jpg',
                    questions: [
                        'Please describe this picture.',
                        'What is the robot doing with its hands?',
                        'How would you describe the robot\'s face?',
                        'What do you think the robot is trying to communicate?',
                        'Do you think robots can have feelings like love? Why or why not?',
                    ],
                    thoughts: [
                        '主体: 一个看起来很像人的机器人。',
                        '动作: 机器人用双手比出了一个爱心的形状。',
                        '环境: 背景是黑色的，很简单，让人的注意力都集中在机器人身上。',
                        '细节: 机器人的脸是灰色的，表情很平静。它的手看起来很复杂，像人的手。',
                        '思考/联想: 这个动作通常是人类用来表达爱或友好的方式。一个机器人做这个动作，会让人思考机器人是否也能表达情感，或者这只是程序设定好的动作。',
                    ],
                    expressions: [
                        { term: 'a robot that looks like a person', definition: '一个人形机器人' },
                        { term: 'making a heart shape', definition: '比一个心形' },
                        { term: 'dark background', definition: '深色背景' },
                        { term: 'calm face', definition: '平静的脸' },
                        { term: 'show love or friendship', definition: '表达爱或友誼' },
                        { term: 'express feelings', definition: '表达情感' },
                        { term: 'programmed to do something', definition: '被编程去做某事' },
                    ],
                    example: `This picture shows a close-up of a robot that looks very much like a person. The background is dark, which makes the robot stand out.

The robot is using its hands to make a heart shape. This is a sign that people use to show love or friendship. The robot's face is calm and its eyes are looking forward.

This picture is interesting. It makes me wonder if robots can have feelings. Maybe this robot is trying to say something nice, or maybe it was just programmed by a person to make this heart shape. It shows that robots are becoming more and more like humans.`
                }
            ]
        },
        {
            title: '第三部分 选词填空',
            quiz: quizG7MockTest[0]
        }
    ]
};