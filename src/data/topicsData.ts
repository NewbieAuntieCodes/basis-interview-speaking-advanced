/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { Topic, AppCategory } from './types';
import { selfIntroductionTopic } from './topics/selfIntroduction';
import { hobbyTopic } from './topics/hobby';
import { personalityDescriptionTopic } from './topics/personalityDescription';
import { personalExperienceTopic } from './topics/personalExperience';
import { schoolTopic } from './topics/school';
import { studyTopic } from './topics/study';
import { mockTestG7Topic } from './topics/mockTestG7';

export const appContentData: AppCategory[] = [
    {
        title: '教材内容',
        topics: [
            selfIntroductionTopic,
            hobbyTopic,
            personalityDescriptionTopic,
            personalExperienceTopic,
            schoolTopic,
            studyTopic,
            { title: '第七类 Future Plan 未来计划', description: '关于未来的规划和设想。', sections: [] },
            { title: '第八类 Friends 朋友', description: '关于朋友和友谊的话题。', sections: [] },
            { title: '第九类 Family 家庭', description: '讨论家庭成员、宠物、休闲活动和亲密关系。', sections: [] },
            { title: '第十类 Hometown 家乡', description: '介绍家乡、交通、美食，以及对国家的了解和自豪感。', sections: [] },
            { 
                title: '第十一类 Picture Description 看图说话', 
                description: '分为三种：生活场景类、学术场景类、数据图标描述（偏学术）', 
                sections: [
                    {
                        title: '一、生活场景类',
                        pictureItems: [
                            {
                                title: '图片 1',
                                imageUrl: 'https://p2.itc.cn/images01/20230401/b1534166438944c09fac3d266f6f7bb0.jpeg',
                                questions: [
                                    'Please describe this picture.',
                                    'What are the people in the picture doing?',
                                    'Where do you think this picture was taken?',
                                    'How do you think the people are feeling? Why?',
                                    'What might happen next?',
                                ],
                                thoughts: [
                                    '人物: 描述人物的数量、衣着和装备。',
                                    '动作: 描述他们在做什么，例如攀登、行走。',
                                    '地点: 描述环境，例如山顶、蓝天、远处的雪山。',
                                    '感受/氛围: 推断他们的情绪，例如专注、坚定、兴奋但也很小心。',
                                    '故事: 想象一下他们为什么要登山，以及接下来会做什么。'
                                ],
                                expressions: [
                                    { term: 'This is a picture of...', definition: '这是一张关于……的图片。' },
                                    { term: 'In the picture, there is / there are...', definition: '在图片里，有……' },
                                    { term: 'The man / woman is wearing...', definition: '这个男人/女人穿着……' },
                                    { term: 'He / She / They are (doing sth)...', definition: '他/她/他们正在（做某事）……' },
                                    { term: 'The weather looks...', definition: '天气看起来……' },
                                    { term: 'I think they feel...', definition: '我认为他们感觉……' },
                                    { term: 'The picture makes me think of...', definition: '这张图片让我想起……' },
                                ],
                                example: `This picture shows two men climbing a mountain. It looks like a sunny day because the sky is blue.

They are wearing special clothes for climbing, like helmets and big bags. They are walking carefully on the rocks. In the background, there are many mountains with snow on top.

One man is in the front, and the other man is following him. They look very focused.

I think they feel a little tired but also very excited. Climbing mountains is hard work, but the view from the top must be beautiful. They are working together like a good team.`
                            },
                            {
                                title: '图片 2',
                                imageUrl: 'https://media.licdn.com/dms/image/v2/C4D12AQFBKVVBzYxGGA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1585311686401?e=2147483647&v=beta&t=jNv7y5XxLdxSD6AMJ2vKpdAW-pVsVBjMGp69GeOeT8s',
                                questions: [
                                    'Please describe this picture.',
                                    'What is the person in the picture doing?',
                                    'Where do you think this person is?',
                                    'What can you see outside the window?',
                                    'How do you think the person is feeling? Why?',
                                ],
                                thoughts: [
                                    '人物: 描述图片中的人物、宠物。',
                                    '动作: 描述他们在做什么，例如在家办公、开视频会议。',
                                    '地点: 描述环境，例如房间、书桌、窗外。',
                                    '物品: 描述房间里的物品，例如电脑、卫生纸、小狗的玩具。',
                                    '感受/氛围: 推断人物的情绪，以及窗外的特殊情况（病毒）暗示的背景。'
                                ],
                                expressions: [
                                    { term: 'This is a picture of...', definition: '这是一张关于……的图片。' },
                                    { term: 'In the picture, there is / there are...', definition: '在图片里，有……' },
                                    { term: 'The person is sitting at a desk.', definition: '这个人正坐在书桌前。' },
                                    { term: 'He / She is working from home.', definition: '他/她正在家办公。' },
                                    { term: 'Outside the window, I can see...', definition: '窗外，我能看到……' },
                                    { term: 'I think he / she feels...', definition: '我认为他/她感觉……' },
                                    { term: 'This picture reminds me of...', definition: '这张图片让我想起了……' },
                                ],
                                example: `In this picture, I see a person working at a desk in their room. They are sitting in front of a computer and seem to be in a video call with other people.

The room looks like a home office. There is a dog resting on the floor and many rolls of toilet paper are on the floor too.

Through the big window, I can see a city. But there are also some red virus-like things floating in the air. This probably means the person is staying home to be safe from a sickness outside.

I think the person might feel a bit lonely because they can't go outside. But they can still talk to friends or coworkers on the computer, which is nice. The dog is also good company.`
                            },
                            {
                                title: '图片 3',
                                imageUrl: 'https://www.sciencetechnologya.com/storage/upload/Images/_1629701051_NakkX3VDuB.jpg',
                                questions: [
                                    'Please describe this picture.',
                                    'What are the two boys doing?',
                                    'Where do you think they are?',
                                    'How do they seem to feel? Why?',
                                    'What do you think they are looking at on the computer?',
                                ],
                                thoughts: [
                                    '人物: 描述两个男孩的外貌和衣着。',
                                    '动作: 描述他们在做什么，例如一起看电脑、打字。',
                                    '地点: 推测他们所在的地点，例如家里、客厅。',
                                    '物品: 描述图片中的主要物品，就是笔记本电脑。',
                                    '感受/氛围: 描述他们的表情和氛围，例如开心、专注、合作。',
                                ],
                                expressions: [
                                    { term: 'In the picture, I can see...', definition: '在图片里，我能看到……' },
                                    { term: 'There are two boys.', definition: '有两个男孩。' },
                                    { term: 'They are sitting side by side.', definition: '他们并排坐着。' },
                                    { term: 'They are looking at a laptop screen.', definition: '他们正在看笔记本电脑的屏幕。' },
                                    { term: 'The boy in the green shirt is typing.', definition: '穿绿色T恤的男孩正在打字。' },
                                    { term: 'They both look happy and interested.', definition: '他们看起来都很开心和感兴趣。' },
                                    { term: 'Maybe they are playing a game or doing homework together.', definition: '也许他们正在一起玩游戏或做作业。' },
                                ],
                                example: `This picture shows two young boys sitting together at a table. They are sharing a laptop computer.

The boy on the right is wearing a green T-shirt, and he is typing on the keyboard. He has a smile on his face. The boy on the left is wearing a red polo shirt, and he is looking at the screen with a small smile.

They seem to be very focused on what's on the computer. I think they are in a living room because the background looks like a home.

They might be playing a computer game together, or maybe they are working on a school project. They look like they are having a good time and enjoying each other's company.`
                            },
                            {
                                title: '图片 4',
                                imageUrl: 'https://i2-prod.mirror.co.uk/article35171741.ece/ALTERNATES/s1023/1_Little-boys-using-digital-tablets.jpg',
                                questions: [
                                    'Please describe this picture.',
                                    'What are the two boys doing?',
                                    'Where do you think they are?',
                                    'How do they seem to feel? Why?',
                                    'What do you think about children using tablets?',
                                ],
                                thoughts: [
                                    '人物: 描述两个男孩，他们的姿势和专注的表情。',
                                    '动作: 描述他们正在做什么，例如躺在地板上，各自使用平板电脑。',
                                    '地点: 推测他们所在的地点，例如家里的地板上，光线温暖。',
                                    '物品: 描述图片中的主要物品，平板电脑。',
                                    '感受/氛围: 描述他们的表情和氛围，例如开心、专注、沉浸在自己的世界里。',
                                ],
                                expressions: [
                                    { term: 'In this picture, there are two young boys.', definition: '在这张图片里，有两个小男孩。' },
                                    { term: 'They are lying on the floor.', definition: '他们正躺在地板上。' },
                                    { term: 'Each of them is holding a tablet.', definition: '他们每人都拿着一个平板电脑。' },
                                    { term: 'They look very focused on their screens.', definition: '他们看起来非常专注于屏幕。' },
                                    { term: 'The boy on the right is smiling.', definition: '右边的男孩在微笑。' },
                                    { term: 'It seems like they are playing games or watching videos.', definition: '看起来他们像是在玩游戏或看视频。' },
                                    { term: 'The sunlight is coming from the background, creating a warm feeling.', definition: '阳光从背景中照射进来，营造出一种温暖的感觉。' },
                                ],
                                example: `This picture shows two young boys lying on the carpet, each busy with their own tablet. The warm sunlight from the background makes the scene feel very cozy.

The boy on the left is wearing a dark blue striped shirt, and the boy on the right is in a light blue striped shirt. Both of them are looking down at their screens with great concentration. The boy on the right has a happy smile, which suggests he is enjoying whatever he is watching or playing.

They seem to be at home, probably in their living room or bedroom. They are completely absorbed in their digital world. It looks like they are having a quiet and entertaining time together, even though they are interacting with their devices instead of each other.`
                            }
                        ]
                    }
                ] 
            },
            { title: '第十二类 Read aloud 朗读', description: '朗读练习，提升发音和流利度。', sections: [] },
            { title: '第十三类 Multiple Choice 选词填空', description: '练习选词填空题，提升语法和词汇。', sections: [], isQuiz: true },
        ]
    },
    {
        title: '模拟测试',
        topics: [
            mockTestG7Topic
        ]
    }
];