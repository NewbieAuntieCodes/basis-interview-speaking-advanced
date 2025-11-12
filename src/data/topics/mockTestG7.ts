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
            title: '第一部分 常规问答',
            questions: [
                '1. Can you introduce yourself?',
                '2. What do you like doing in your free time?',
                '3. What is your greatest strength?',
                '4. Why do you want to study at our school?',
                '5. What is your favorite subject?',
                '6. Tell me about a time you faced a challenge.',
            ],
        },
        {
            title: '第二部分 看图说话',
            pictureItems: [
                {
                    title: '看图说话',
                    imageUrl: 'https://img.freepik.com/free-photo/glowing-robotic-chef-prepares-gourmet-meal-in-futuristic-kitchen-generated-by-ai_188544-39144.jpg',
                    questions: [
                        'Please describe this picture.',
                        'What is the robot doing in the kitchen?',
                        'What kind of food is it preparing?',
                        'Do you think robots will help with housework in the future? Why or why not?',
                        'What are the pros and cons of having robots in our daily lives?',
                    ],
                    thoughts: [
                        '主体: 一个机器人正在厨房里准备食物。',
                        '环境: 这是一个现代化的厨房，看起来很干净，有很多厨具。',
                        '动作: 机器人正专注于切菜或摆盘，动作看起来很精准。',
                        '思考/联想: 这幅画让我想到了未来的智能家居生活。机器人可以帮助我们做家务，节省我们的时间。但这也会引出一些问题，比如对人类就业的影响。',
                    ],
                    expressions: [
                        { term: 'humanoid robot', definition: '人形机器人' },
                        { term: 'futuristic kitchen', definition: '未来主义的厨房' },
                        { term: 'preparing a meal', definition: '准备一顿饭' },
                        { term: 'slicing vegetables', definition: '切蔬菜' },
                        { term: 'automated assistance', definition: '自动化辅助' },
                        { term: 'pros and cons', definition: '优点和缺点' },
                        { term: 'impact on employment', definition: '对就业的影响' },
                    ],
                    example: `This picture shows a modern-looking robot working in a kitchen. The kitchen is clean and well-equipped. The robot is standing by the counter and seems to be preparing food, perhaps slicing some vegetables for a salad or a fancy dish. It looks very focused on its task.

This image makes me think about the future with smart robots and how they might become a part of our daily lives. On one hand, it's exciting to imagine robots helping with chores like cooking and cleaning, which would give us more free time. On the other hand, it also makes me wonder what will happen to people's jobs if robots can do them instead. It's an interesting topic to think about.`
                }
            ]
        },
        {
            title: '第三部分 选词填空',
            quiz: quizG7MockTest[0]
        }
    ]
};