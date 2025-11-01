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
                example: `In this picture, I can see two men on a high mountain. The sky is clear and blue, suggesting it's a nice day for an outdoor adventure.

The men are wearing professional climbing gear, including helmets, backpacks, and ropes. This tells me they are serious mountaineers. They are carefully walking on a rocky peak, with snowy mountains far away in the background.

The man in front seems to be leading the way and looking down to find a safe path. The man behind is following him closely.

I think they are feeling focused and determined. Mountain climbing is very challenging, so they must pay close attention to every step. At the same time, they might feel excited and proud because the view from the top is probably amazing. They look like they are working together as a team to reach their goal.`
            }
        ] 
    },
    { title: '第十二类 Read aloud 朗读', description: '朗读练习，提升发音和流利度。', sections: [] },
    { title: '第十三类 Multiple Choice 选词填空', description: '练习选词填空题，提升语法和词汇。', sections: [], isQuiz: true },
];