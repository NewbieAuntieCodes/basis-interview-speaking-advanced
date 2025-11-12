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
                    imageUrl: 'https://imgsrv2.voi.id/NWty40U3jqCaU-SBICbSkffr7dUIox7HoDl0Nq5hrko/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy81Mjg0MDAvMjAyNTEwMjkxNTI1LW1haW4uanBn.jpg',
                    questions: [
                        'Please describe this picture.',
                        'What are the family members and the robot doing?',
                        'How do the people seem to feel about the robot?',
                        'Do you think robots could be good companions for families in the future? Why or why not?',
                        'What are the potential benefits and drawbacks of having robots in our homes?',
                    ],
                    thoughts: [
                        '主体: 一个家庭（父母和女儿）正在客厅里与一个机器人互动。',
                        '环境: 这是一个温馨的家庭客厅，有沙发和舒适的灯光。',
                        '动作: 机器人似乎在和孩子说话或玩耍，父母则在一旁微笑地看着。',
                        '思考/联想: 这幅画让我想到了未来机器人可能成为家庭成员，陪伴孩子成长。这既带来了便利和新奇，也可能引发关于情感连接和过度依赖科技的思考。',
                    ],
                    expressions: [
                        { term: 'humanoid robot', definition: '人形机器人' },
                        { term: 'family living room', definition: '家庭客厅' },
                        { term: 'interacting with', definition: '与……互动' },
                        { term: 'AI companion', definition: '人工智能伴侣' },
                        { term: 'emotional connection', definition: '情感连接' },
                        { term: 'over-reliance on technology', definition: '对科技的过度依赖' },
                        { term: 'family bonding', definition: '家庭凝聚力' },
                    ],
                    example: `This picture shows a warm family scene in a living room, where a mother, a father, and their young daughter are interacting with a humanoid robot. The family is sitting together on a couch, and they are all looking at the robot with smiles.

The robot is standing in front of them and seems to be communicating with the little girl, who looks particularly curious and happy. The parents seem relaxed and pleased to see their child engaging with the robot. The atmosphere is very positive and suggests that the robot is a welcome part of their home.

This image makes me think about the future role of AI in our daily lives. On one hand, having an AI companion could be very helpful for education and entertainment, especially for children. On the other hand, it's important to consider how this might affect human relationships and whether we might become too dependent on technology. Overall, it's a fascinating glimpse into a possible future.`
                }
            ]
        },
        {
            title: '第三部分 选词填空',
            quiz: quizG7MockTest[0]
        }
    ]
};