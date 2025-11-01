/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { Topic } from '../types';

export const personalExperienceTopic: Topic = {
    title: '第四类 Personal Experience 个人经历',
    description: '描述特定时刻、个人与社会类话题、专注与匆忙的经历等。',
    sections: [
        {
            title: '一、描述特定时刻',
            questions: [
                'Tell me about your happiest/saddest moment.',
                'Tell me about a time when you were disappointed or embarrassed.',
                'Describe a time when you felt really challenged. How did you overcome this challenge?',
                'What do you do when you meet challenge?',
                'What is an obstacle you\'ve faced and how did you get through it?',
                'Describe a time that you fail to do sth.',
            ],
            expressions: [
                { term: 'public speaking', definition: '公共演讲' },
                { term: 'nervous, stage-fright, anxious, embarrassing', definition: '谈谈心情' },
                { term: 'My hands are trembling. My mind goes blank.', definition: '台上的表现' },
                { term: 'determined to overcome/combat my anxiety and get better at it', definition: '下定决心做好演讲' },
                { term: 'watch some speaking videos', definition: '看一些口语视频' },
                { term: 'practice with my classmates/teachers', definition: '和我的同学/老师练习' },
                { term: 'record my voice, listen to myself and make improvements', definition: '录下自己的声音，倾听自己的演讲，做出改进' },
            ],
            example: `Happiest/Saddest Moment:
I won the first prize in the ... competition. I was thrilled. I was over the moon. My hard work finally paid off.
I was low/down/blue/gloomy/upset.

Disappointed/Embarrassed Moment:
When: I was about 10 years old.
Who & Where: My dad and I went to a museum.
What: We were looking at an exhibition and I grabbed the side of his shirt and acted like I blew my nose on it and said I missed our cats at home. But when I looked up it was not my dad! It was some other guy that was there with his family. He was wearing the same color of shirt as my dad was. I looked at him and said sorry and that I really didn't blow my nose on him, then ran to find my dad who was in the next room. I was crying by then and told my dad I was mad at him for moving and not telling me, then told him what happened. My dad giggled, but said he'd hold my hand so I would know where he was from now on.
How I felt: I saw the man later and he just smiled at me, but I was dying of embarrassment!

Failing Moment:
What happened: fail to catch the flight
Who: my parents and I
Where: We planned to pay a visit to Hawaii and spent our Christmas there. We really looked forward to this tour and had arranged everything beforehand.
Why: But on the day we left, we couldn't make it to the airport on time because it was raining heavily, and we were totally stuck on the road. At last, we had to cancel the flight.
How we feel: All of us were super upset.`
        },
        {
            title: '二、个人类话题',
            questions: [
                'Tell me about a treasured gift you received.',
                'Tell me about your biggest achievement.',
                'Do you wear the same style of clothes on weekdays and weekends?',
                'Can you describe the place where you live?',
                'If you had unlimited money, what would you do with it and why?',
                'Can you be happy all the time? Is it important to be happy?',
            ],
            expressions: [
                { term: 'got the first prize in the robot controlling/computer programming/piano/English speaking/calligraphy/fencing/ballet ... contest', definition: '最大成就' },
                { term: 'be voted as the monitor/vice monitor/study representative in class', definition: '最大成就' },
                { term: 'formal: school uniform and school bag', definition: '穿着风格' },
                { term: 'casual: jeans; sweat pants; t-shirt; hoodie; sneakers; high-heels; jewelry; flip-flops; sweatshirt', definition: '穿着风格' },
                { term: 'go on a shopping spree → It makes me happy.', definition: '无限金钱' },
                { term: 'travel around the world → want to experience different culture, try new food and meet different people', definition: '无限金钱' },
                { term: 'donate money to charities or build non-profit hospitals and schools → want to give back to the world and improve people\'s qualities of life', definition: '无限金钱' },
            ],
            example: `Treasured Gift:
1: A dress. It's a nude-pink/light-green gown, and it looks stunning! It is a slim-fitting dress, with a lot of lace at the bottom. Since it is mainly made of silk, it is so soft and comfortable. The dress is so elegant and flowy.
2: A suit. It's navy-blue, and it is really sharp-looking and well-fitted. The cut and design were so exquisite, stylish and expensive-looking. I have to say, I look very handsome and dapper in this suit. The whole outfit is so elegant and tasteful, I love it.

Place Where You Live:
I live in an apartment near the city center. I live on the 16th floor. There is a subway station near my apartment. And there is a hospital around the corner. My neighborhood is peaceful and safe.

Happiness:
(思路: positive vs negative; optimistic vs. pessimistic)
A1: No, it's really difficult to be happy all the time.
A2: Yeah, absolutely. Happiness boosts the ties among people, promotes study and work efficiency and makes our lives more meaningful. Optimism will help us navigate through the ups and downs of life.`
        },
        {
            title: '三、社会类话题',
            questions: [
                'What do you think can improve your local community and make it a better place to live?',
                'What current events are you following closely and how do they impact you and your community?',
                'What story in the news in the past few months has really caught your attention and why?',
                'Describe immoral behaviors that you see in public.',
            ],
            expressions: [
                { term: 'promote public transportation', definition: '促进公共交通' },
                { term: 'build a smoke-free society', definition: '建设无烟社会' },
                { term: 'care for the old, the poor and the homeless', definition: '关心老人、穷人和无家可归的人' },
                { term: 'plant more trees', definition: '多种树' },
                { term: 'alleviate the burden on students', definition: '给学生减负' },
                { term: 'the invention of the COVID-19 vaccine', definition: '新冠病毒疫苗的发明' },
                { term: 'help to combat/fight against the virus/epidemic/pandemic', definition: '帮助对抗这种病毒/传染病/流行病' },
                { term: 'improve people\'s quality of life', definition: '提高人们生活质量' },
                { term: 'boost the economy', definition: '推动经济' },
                { term: 'promote the world peace', definition: '促进世界和平' },
                { term: 'smoking in public places', definition: '在公共场所吸烟' },
                { term: 'spitting or littering everywhere', definition: '随地吐痰或乱扔垃圾' },
                { term: 'talking loud or making noises', definition: '大声说话或制造噪音' },
                { term: 'jumping in the queue', definition: '插队' },
                { term: 'shoplifting', definition: '入店行窃' },
            ]
        },
        {
            title: '四、专注类话题',
            questions: [
                'When do you need to be focused?',
                'What may distract you when you\'re trying to stay focused?',
                'What do you do to help you concentrate?',
                'Is it difficult for you to stay focused on something?',
            ],
            expressions: [
                { term: 'get distracted', definition: '分心' },
                { term: 'improve study efficiency/work efficiency', definition: '提高学习/工作效率' },
                { term: 'Social media is a big distraction.', definition: '社交媒体让人分心。' },
                { term: 'electronic products', definition: '电子产品' },
                { term: 'how to stay focused', definition: '保持专注的方法' },
                { term: 'to-do list', definition: '待办事项列表' },
                { term: 'choose a task you would like to get done', definition: '选择一个你想要完成的任务' },
                { term: 'take a 5-minute break', definition: '休息5分钟' },
                { term: 'cut down on interruptions', definition: '减少干扰' },
                { term: 'train your mind like a muscle', definition: '像训练肌肉一样训练你的大脑' },
            ],
        },
        {
            title: '五、匆忙类话题',
            questions: [
                'What do you always do in a hurry? Why?',
                'What kind of things would you never do in a hurry?',
                'Do you usually go out in a hurry?',
                'Do you like to be in a hurry?',
            ],
            expressions: [
                { term: 'procrastination', definition: '拖延症' },
                { term: 'poor time management', definition: '糟糕的时间管理' },
                { term: 'exams/tests/interviews/important appointments', definition: '检查/测试/面试/重要的约会' },
                { term: 'hang out with friends', definition: '与朋友出去逛' },
                { term: 'spend time with family', definition: '与家人一起消磨时间' },
                { term: 'DIY', definition: '自己动手做' },
                { term: 'reading', definition: '阅读' },
            ],
            example: `If I forgot to do something that is urgent, I would definitely do it in a rush because I want to make up the loss.
Things that don't specify deadlines are always put off by myself because I feel that, to improve my working and learning efficiency, I should prioritize other things that have time limits.
I suddenly realize that time is running out.
I overestimate my time management skills, which is something I really need to rectify.`
        },
        {
            title: '六、野餐类话题',
            questions: [
                'Did you go on a picnic when you were a child?',
                'How often do you go on a picnic now?',
                'Where do you go on a picnic?',
                'What\'s the difference between a picnic and cooking at home?',
            ],
            expressions: [
                { term: 'riverbank', definition: '河岸' },
                { term: 'national park', definition: '国家公园' },
                { term: 'wetland park', definition: '湿地公园' },
                { term: 'beaches', definition: '海滩' },
                { term: 'rooftop', definition: '屋顶' },
                { term: 'relax/release stress', definition: '放松/释放压力' },
                { term: 'enjoy the cool breeze', definition: '感受清风' },
                { term: 'how often', definition: '多久一次' },
                { term: 'prepare food by ourselves', definition: '自己准备食物' },
                { term: 'bond with family and friends', definition: '与家人和朋友建立联系' },
                { term: 'enjoy/spend quality time with people I love', definition: '和我爱的人共度美好时光' },
                { term: 'outdoor/indoor', definition: '户外/户内' },
                { term: 'normal home meal/snacks', definition: '正常的家庭餐/零食' },
            ],
            example: `When you cook at home, you would usually enjoy the steaming hot food with various tableware. However, having a picnic means most food is not with high temperature as there aren't such cooking utensils.`
        },
        {
            title: '七、熬夜类话题',
            questions: [
                'Do you often stay up late?',
                'What do you do when you stay up late?',
                'How do you feel when you stay up late?',
            ],
            expressions: [
                { term: '1. Reasons to stay up late:', definition: '' },
                'watch TV/play games/chat with friends on the phone 看剧/游戏/和朋友手机聊天',
                'do homework/work 做作业/工作',
                'hard to fall asleep/can\'t sleep well/sick 睡眠障碍/睡得不好/生病',
                { term: '2. Feeling:', definition: '' },
                'tired 疲惫的',
                'over-tired/exhausted 过度疲劳的',
                'anxious 焦虑的',
                'stressful 压力大的',
                'nervous 紧张的',
                'bleary-eyed 迷糊的',
                'not mentally sharp enough 反应不够快',
            ],
            example: `I sometimes just stay awake chatting to friends on my phone, reading novels, or following my favourite TV shows.
I usually feel okay if I've had a good lie-down in bed in the morning.
If I can't sleep well at night, I won't be able to focus during my work/study.`
        },
        {
            title: '八、早起类话题',
            questions: [
                'Do you often get up early in the morning?',
                'What do you usually do when you get up early?',
                'Do you get up early on weekends?',
                'Why do you get up early?',
            ],
            expressions: [
                { term: 'have a fixed routine', definition: '有固定的日程安排' },
                { term: 'exercise/work out/go to the gym', definition: '锻炼，健身' },
                { term: 'morning classes/extra-curricular activities', definition: '早课，课外活动' },
                { term: 'good for my health', definition: '对身体好' },
                { term: 'First big thing is having a healthy breakfast.', definition: '第一件重要的事是吃一顿健康的早餐。' },
                { term: 'shower', definition: '淋浴' },
                { term: 'make coffee', definition: '煮咖啡' },
                { term: 'check messages/emails', definition: '查信息/邮件' },
                { term: 'feed my cat/dog', definition: '喂猫/狗' },
                { term: 'watch morning news', definition: '看早间新闻' },
            ],
            example: `In general, I do not want to get up early on weekends. But sometimes, I would like to have a day trip with my friends on weekends, so we have to get up early.`
        }
    ]
};