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
                        { term: 'humanoid figure', definition: '人形人物' },
                        { term: 'exposed circuitry', definition: '裸露的电路' },
                        { term: 'CAPTCHA test', definition: '验证码测试' },
                        { term: 'The irony is that...', definition: '讽刺的是...' },
                        { term: 'This image raises questions about...', definition: '这张图片引发了关于...的问题' },
                        { term: 'artificial intelligence (AI)', definition: '人工智能' },
                        { term: 'consciousness', definition: '意识' },
                        { term: 'the blurring line between humans and machines', definition: '人类与机器之间模糊的界限' },
                    ],
                    example: `This is a very thought-provoking black and white drawing. It shows a humanoid figure sitting at a computer. The figure looks human from the side, but the top of its head is open, revealing complex circuitry, which tells us it's a robot or an android.

The robot is looking at a computer screen. On the screen, there is a CAPTCHA test with a box that says "I'm not a robot." This is very ironic because the character is, in fact, a robot trying to pass a test designed to keep robots out.

At the bottom of the picture, there's a caption that says, "You can do this, Sophia." This name might refer to Sophia, the famous real-life social humanoid robot. The message sounds like encouragement. It could be from a person watching, or maybe it's the robot's own internal thought, which makes the scene even more interesting.

This picture makes me think about the future of artificial intelligence. It questions what it means to be "human" and how we distinguish ourselves from advanced machines. It's a clever and slightly humorous take on a very complex topic.`
                }
            ]
        }
    ]
};