/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { Topic } from '../types';

export const mockTestG7Topic: Topic = {
    title: 'G7 模拟口测 (2025年12月)',
    description: '常规问答、性格描述、个人经历等综合模拟测试。',
    sections: [
        {
            title: '一、考查个人信息回答',
            questions: [
                'Tell me about yourself.',
                'What do you think about your English level?',
            ],
        },
        {
            title: '二、考查兴趣爱好',
            questions: [
                'What do you like to do in your spare time?',
                'What are you good at?',
                'Can you recommend me a book? Why?',
                'How often do you ______?',
                'Do you like reading?',
                'Do you like sports?',
                'Do you have any pets in your family? Do you like pets?',
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
                'What are your strengths?',
                'What do you want to improve in yourself?',
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
                'What is your favorite subject in the school? Why?',
                'What book have you recently read? What did you learn from it?',
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
            title: '第二部分 图片描述',
            pictureItems: [
                {
                    title: '看图说话',
                    imageUrl: 'https://github.com/user-attachments/assets/74b7829a-2553-4371-9705-01e4e207d570',
                    questions: [
                        'Please describe this picture.',
                        'What is the robot doing?',
                        'Where do you think this picture was taken?',
                        'What do you think about robots like this? Will they be helpful or dangerous?',
                        'What might happen next?',
                    ],
                    thoughts: [
                        '主体: 描述图片中的机器人，它的外观和姿态。',
                        '动作: 描述它在做什么，例如制作咖啡，与人互动。',
                        '环境: 描述背景，例如厨房，桌子上的物品。',
                        '思考/联想: 讨论这张图片引发的关于人工智能、未来科技和人类与机器人关系的思考。',
                        '故事: 想象一下这个场景背后的故事，以及接下来可能发生的事情。'
                    ],
                    expressions: [
                        { term: 'humanoid robot', definition: '人形机器人' },
                        { term: 'In the foreground/background', definition: '在前景/背景中' },
                        { term: 'It seems to be...', definition: '它似乎在...' },
                        { term: 'This picture makes me think about...', definition: '这张照片让我想到了...' },
                        { term: 'Artificial intelligence (AI)', definition: '人工智能' },
                        { term: 'The future of technology', definition: '科技的未来' },
                        { term: 'It could be beneficial for humanity.', definition: '它可能对人类有益。' },
                    ],
                    example: `This picture shows a humanoid robot standing in what looks like a modern kitchen. The robot has a sleek, white and black design and appears to be quite advanced.

In its hands, the robot is holding a white mug, perhaps making coffee or tea. It seems to be performing a domestic task, suggesting a future where robots assist with daily chores. On the counter, there are other kitchen items like a coffee machine and some cups.

The robot's posture is very human-like. It seems focused on its task. This image makes me think about the future of artificial intelligence and how robots will integrate into our daily lives. On one hand, it's exciting to imagine having help with housework. On the other hand, it also raises questions about technology and jobs.

Overall, it's a very thought-provoking image about technology and the future.`
                }
            ]
        }
    ]
};