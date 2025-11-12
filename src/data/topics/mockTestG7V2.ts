/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { Topic } from '../types';

export const mockTestG7V2Topic: Topic = {
    title: '贝赛思模拟面试一模测试卷 G7',
    description: '基于真实试卷的 BASIS G7 模拟面试，包含常规问答和看图说话。',
    sections: [
        {
            title: '第一部分 常规问答',
            questions: [
                '1. Can you introduce yourself?',
                '2. Why did you choose BASIS?',
                '3. What is your favorite subject and why?',
                '4. Can you tell me about a hobby or activity that you really enjoy?',
                '5. How do you spend your weekends or holidays?',
                '6. Can you describe a time when you worked with a group and what you learned from it?',
                '7. Who is someone you admire and why?',
                '8. Can you tell me about a mistake you made and what you learned from it?',
                '9. If you could plan a school event or activity, what would it be and why?',
                '10. What new skill or knowledge do you want to learn this year and why?',
            ],
        },
        {
            title: '第二部分 看图说话',
            pictureItems: [
                {
                    title: '看图说话',
                    imageUrl: 'https://luckboxmagazine.com/app/uploads/2019/10/Screen-Shot-2019-10-16-at-11.03.45-AM-768x782.png',
                    questions: [
                        'Please describe this picture.',
                        'What is the person or robot doing?',
                        'What is ironic or interesting about what is on the computer screen?',
                        'What does the text "You can do this, Sophia." suggest?',
                        'What thoughts does this picture bring to your mind about artificial intelligence?',
                    ],
                    thoughts: [
                        '主体: 一个像人一样的机器人，它的大脑部分是裸露的电路，正坐在电脑前。',
                        '动作: 机器人正在尝试通过一个“我不是机器人”的验证码测试。',
                        '细节: 屏幕上有一个复选框，上面写着“I\'m not a robot”。图片的底部有一句鼓励的话：“You can do this, Sophia.”',
                        '思考/联想: 这幅画充满了讽刺意味——一个机器人需要证明自己不是机器人。这让我们思考人工智能、意识以及人与机器之间日益模糊的界限。',
                        '故事: "Sophia"可能是一个高级人工智能的名字，她正在接受某种测试，以模仿或理解人类的行为。鼓励的话语可能来自创造她的人，也可能是她自己的内心独白。',
                    ],
                    expressions: [
                        { term: 'a human-like robot', definition: '像人的机器人' },
                        { term: 'visible wires and computer parts', definition: '可见的电线和电脑零件' },
                        { term: '"I\'m not a robot" check', definition: '“我不是机器人”验证' },
                        { term: 'The funny/strange thing is that...', definition: '有趣/奇怪的是...' },
                        { term: 'This picture makes me think about...', definition: '这张图片让我想到了...' },
                        { term: 'artificial intelligence (AI)', definition: '人工智能' },
                        { term: 'the ability to think and feel', definition: '思考和感受的能力' },
                        { term: 'it\'s hard to tell the difference between people and robots', definition: '很难区分人和机器人' },
                    ],
                    example: `This is a very interesting black and white drawing. It shows a human-like robot sitting at a computer. The robot looks like a person from the side, but the top of its head is open, showing wires and computer parts inside. This tells us it's a robot.

The robot is looking at the computer screen. On the screen, there is an "I'm not a robot" check. This is very funny and strange because the character is actually a robot trying to pass a test that is made to stop robots.

At the bottom of the picture, there are words that say, "You can do this, Sophia." This name could be for Sophia, a famous real robot. The message sounds like nice words to help her. It could be from a person watching, or maybe it's the robot's own thought, which makes the picture more interesting.

This picture makes me think about the future of AI. It makes us ask, "What does it mean to be human?" and "How can we tell the difference between people and smart robots?" It's a smart and funny way to show a difficult idea.`
                }
            ]
        },
        {
            title: '第三部分 选词填空',
            quiz: {
                id: 'quiz-g7-mock-test-v2',
                title: 'Protecting the Environment',
                passage: "People around the world are trying to ({1}) the environment. Many cities have problems with ({2}) because there are too many cars. Some people choose to ride a bike or take the bus to help reduce ({3}). Others plant trees and use less ({4}) to save energy. If everyone makes a small ({5}), the world will become cleaner and greener.",
                questions: [
                    { 
                        id: 1, 
                        options: ['save', 'hurt', 'forget'], 
                        answer: 'save', 
                        explanation: '“save the environment” 是一个固定搭配，意为“拯救环境”或“保护环境”。选项 “hurt”（伤害）与句意相反，而“forget”（忘记）在上下文中不合逻辑。因此，正确答案是 save。' 
                    },
                    { 
                        id: 2, 
                        options: ['air', 'water', 'land'], 
                        answer: 'air', 
                        explanation: '后文提到“too many cars”（太多的汽车），汽车是造成空气问题（air problems）或空气污染的主要原因。虽然汽车也可能导致水和土地污染，但空气问题是与汽车最直接和最相关的问题。因此，正确答案是 air。' 
                    },
                    { 
                        id: 3, 
                        options: ['pollution', 'population', 'vacation'], 
                        answer: 'pollution', 
                        explanation: '骑自行车或乘坐公共汽车是为了“reduce pollution”（减少污染）。选项 “population”（人口）和 “vacation”（假期）与环保出行的目的无关。因此，正确答案是 pollution。' 
                    },
                    { 
                        id: 4, 
                        options: ['electricity', 'rice', 'sunlight'], 
                        answer: 'electricity', 
                        explanation: '句子的目标是“to save energy”（节约能源）。少用“electricity”（电）是节约能源的一种直接方式。选项 “rice”（米饭）是食物，与能源无关；而“sunlight”（阳光）是自然能源，人们通常不会通过“少用”它来节约能源。因此，正确答案是 electricity。'
                    },
                    { 
                        id: 5, 
                        options: ['effort', 'mistake', 'rule'], 
                        answer: 'effort', 
                        explanation: '“make a small effort” 是一个固定搭配，意为“付出一份小小的努力”。这句话的意思是如果每个人都贡献一份力量，世界就会变得更好。选项 “mistake”（错误）和 “rule”（规则）放入句中语义不通。因此，正确答案是 effort。'
                    }
                ]
            }
        }
    ]
};