/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { Topic } from '../types';

export const selfIntroductionTopic: Topic = { 
    title: '第一类 Self-introduction 自我介绍', 
    description: '包括自我介绍、名字含义、生日、家乡等话题。',
    sections: [
        {
            title: '一、自我介绍',
            questions: [
                'Tell me something about you, including your family background and where you grew up?',
                'Describe yourself or tell me more about yourself.',
                "What's your name/May I have your name, please?"
            ],
            thoughts: [
                "name 中文姓名+英文姓名 My name's ___ / I am ___ / Please call me ___",
                'city 城市 I come from ___',
                'family background 家庭背景 (简单介绍家庭成员人数，爸爸妈妈职业等)',
                'education/awards 教育/奖项',
                'hobbies/interest 兴趣爱好',
                'likes and dislikes 喜欢与不喜欢的东西',
                'personality, etc. 性格描述',
            ],
            expressions: [
                { term: 'adventurous', definition: '有冒险精神的' },
                { term: 'courageous', definition: '勇敢的' },
                { term: 'creative', definition: '创新的' },
                { term: 'curious', definition: '充满好奇的' },
                { term: 'energetic', definition: '精力充沛的' },
                { term: 'enthusiastic', definition: '热情的' },
                { term: 'positive', definition: '积极的' },
                { term: 'helpful', definition: '乐于助人的' },
                { term: 'observant', definition: '善于观察的' },
                { term: 'organized', definition: '有组织性的' },
                { term: 'patient', definition: '耐心的' },
                { term: 'focused', definition: '专注的' },
                { term: 'hardworking/industrious', definition: '努力的' },
                { term: 'dedicated', definition: '热衷的' },
                { term: 'reliable', definition: '可靠的' },
            ],
            example: `Thank you for giving this opportunity to me to introduce myself. I am ___ (your name). There are five members in my family including me. I am native to a ___ (city name). Currently, I am studying at the ___ (school name). -- 个人背景信息介绍

I am a self-motivated and disciplined soul. I am always keen to improve myself by learning new things whenever I get a chance. -- 性格描述

I have received ___ (awards). -- 获得的学校奖励

Apart from studies, I enjoy participating in drama. I am a badminton player too.

In my spare time, I enjoy spending time with friends, sometimes cooking, listening to music, reading, travelling, and playing outdoor sports. -- 个人爱好/兴趣

Thank you!`
        },
        {
            title: '二、名字含义',
            questions: ['Does your name have any special meaning?'],
            thoughts: ['how you got it 名字的由来', 'meaning 含义'],
            expressions: [
                'I got my name from my ___',
                'The word "___" means ___ in Chinese. (bravery 勇敢, kindness 善良, love 爱, etc.)',
                'My parents hope I could become a ___ (brave/kind/caring, etc.) person one day.',
                'My parents hope the name would bring me luck.',
            ]
        },
        {
            title: '三、生日',
            questions: ['When is your birthday?'],
            thoughts: [
                'date 日期',
                'how to celebrate 如何庆祝',
                'talk about a gift that you treasure the most 讲一个对自己很重视的礼物'
            ],
            expressions: [
                'My birthday is on ___ (month 月份 + day 日期)',
                'celebrate my birthday with a bunch of close friends 与好友一起庆祝',
                'have a big feast 吃大餐',
                'hang out 出去',
                'receive gifts from friends and family members 收获家人和朋友的礼物',
                'shopping mall 商场',
            ]
        },
        {
            title: '四、家乡',
            questions: ['Briefly introduce the place where you were born.'],
            thoughts: [
                'locations 地点',
                'what is it like 怎么样',
                'what is it renowned for 以什么而出名',
                'landscapes 景点',
                'food 食物',
                'culture 文化',
                'why you like it or dislike it 喜欢和不喜欢的理由'
            ],
            expressions: [
                "It's located in ... 它位于...",
                "It's a densely-populated city. 它是一个人口密集的城市。",
                'There are many skyscrapers. 有很多高楼大厦。',
                'places of interest 名胜古迹',
                'beautiful landscapes 漂亮的风景',
                "It's renowned/well-known/famous for ... 它以...出名。",
                'I like my city because/the reason why I like my city is (that) ___... 我喜欢我城市的原因是...',
            ]
        }
    ]
};
