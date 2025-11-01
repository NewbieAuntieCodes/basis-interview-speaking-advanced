/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { Topic } from './types';
import { selfIntroductionTopic } from './topics/selfIntroduction';
import { hobbyTopic } from './topics/hobby';
import { personalityDescriptionTopic } from './topics/personalityDescription';
import { personalExperienceTopic } from './topics/personalExperience';
import { schoolTopic } from './topics/school';
import { studyTopic } from './topics/study';

export const topicsData: Topic[] = [
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
                title: '一、生活场景类 (图片一)',
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
                title: '二、生活场景类 (图片二)',
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
            }
        ] 
    },
    { title: '第十二类 Read aloud 朗读', description: '朗读练习，提升发音和流利度。', sections: [] },
    { title: '第十三类 Multiple Choice 选词填空', description: '练习选词填空题，提升语法和词汇。', sections: [], isQuiz: true },
];