/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { Topic } from '../types';

export const studyTopic: Topic = {
    title: '第六类 Study 学习',
    description: '探讨学校科目、文理科学习、学习时间与习惯、社团活动等。',
    sections: [
        {
            title: '一、学校科目类',
            questions: [
                'Please tell me about your studies.',
                'Do you like studying? Why or why not?',
                'How many languages can you speak?',
                'What do you study at school?',
                'What school subjects do you like?',
                'Introduce your favourite subjects in the school.',
                'Tell me something about your courses, what is your favourite subject at school?',
                'Why or what courses have been most difficult or most challenging for you?',
                'What is your greatest academic accomplishment or failure?',
                'Which subjects are you best at? Please describe the reasons.',
                'What is your least favourite subject, and why do you dislike it?',
                'Do you have much homework every day?',
                'What are your favourite/best subjects?',
            ],
            thoughts: [
                '需要强调对问题不同问法的反应',
                '如若观点不够同样可以串用 (Who is your favourite teacher? Why?) 中的内容',
                'My + 某一学科 teacher, who is a knowledgeable lady/man, helps me a lot. She never crammed anything into us and always told us how to improve the skill by ourselves.',
            ],
            expressions: [
                { term: 'Chinese 语文', definition: 'like poems' },
                { term: 'Math 数学', definition: 'like solving puzzles' },
                { term: 'Music 音乐', definition: 'good at singing' },
                { term: 'English 英语', definition: 'want to make some friends from other countries' },
                { term: 'Physics 物理', definition: 'want to be a physician' },
                { term: 'Geography 地理', definition: 'know more about our planet' },
                { term: 'Biology 生物', definition: 'like animals' },
                { term: 'Chemistry 化学', definition: 'do experiments' },
                { term: 'History 历史', definition: 'know more about my home country, enjoy visiting museums' },
                { term: 'Politics 政治', definition: 'political news' },
                { term: 'PE 体育', definition: 'like doing sports' },
                { term: 'Economics 经济', definition: 'want to know how the society operates' },
                { term: 'Education 教育学', definition: 'want to be a teacher' },
                { term: 'Business 商业', definition: 'want to have my own company' },
                { term: 'Astronomy 天文学', definition: 'want to study other planets' },
                { term: 'Psychology 心理学', definition: 'understand people\'s mind' },
            ],
            example: `My favourite subject is + ... (学科).\nFirstly, I'm good at and interested in ... (对...感兴趣).\nSecondly, I prefer to join ... (某种类型和学科有关的) after-school activities. I can make many friends in these activities. We may have a lot common topics (共同话题) to chat with.\nFinally, ... (学科) is widely used in life ... 在生活中运用广泛.`
        },
        {
            title: '二、理科学学习类',
            questions: [
                'Do you like solving math problems?',
                'Is math difficult for you?',
                'When do you usually use math skills in real life?',
                'Do people in your country consider math important?',
            ],
            expressions: [
                '有关数学的词汇:',
                { term: 'calculation', definition: '计算' },
                { term: 'work out complex problems', definition: '解决/算出复杂的题目' },
                { term: 'solve puzzle', definition: '解决问题' },
                { term: 'foundation', definition: '基础' },
                { term: 'critical', definition: '至关重要的' },
                { term: 'logical', definition: '逻辑的' },
                '可以运用数学的地方:',
                { term: 'grocery store', definition: '食品杂货店' },
                { term: 'at the cashier', definition: '在收银台' },
                { term: 'vendor', definition: '小贩、摊贩' },
            ]
        },
        {
            title: '三、文科学学习类',
            questions: [
                'Do you think it is important to study history?',
            ],
            expressions: [
                { term: 'culture', definition: '文化' },
                { term: 'multiculture', definition: '多元文化' },
                { term: 'custom', definition: '风俗' },
                { term: 'tradition', definition: '传统' },
                { term: 'expose myself to a different culture', definition: '感受不同地方的文化' },
                { term: 'broaden horizons', definition: '拓宽视野' },
                { term: 'see things from different perspectives', definition: '从不同角度看待问题' },
            ]
        },
        {
            title: '四、学习时间和习惯类',
            questions: [
                'Do you prefer to study in the mornings or the afternoons?',
                'How do you balance life and study?',
                'Do you like studying? Why? Why not?',
                'How to evaluate your learning ability and attitude?',
                'Do you like studying alone or with others?',
            ],
            expressions: [
                '1. 喜欢早上: 做什么事情+感受+好处',
                { term: 'sleepy/drowsy', definition: '困的' },
                { term: 'woozy', definition: '晕的' },
                { term: 'early bird', definition: '早鸟' },
                { term: 'preview', definition: '预习' },
                { term: 'review', definition: '复习' },
                '2. 喜欢下午: 做什么事情+感受+好处',
                { term: 'take a nap', definition: '小憩' },
                '3. 喜欢晚上: 做什么事情+感受+好处',
                { term: 'burn the midnight oil', definition: '点灯熬夜' },
                { term: 'night owl', definition: '夜猫子' },
                { term: 'better memory', definition: '记忆力更好' },
                { term: 'efficient/higher efficiency/more productivity/productive', definition: '高效的' },
                { term: 'focus on/concentrate on', definition: '集中注意力' },
                { term: 'energetic', definition: '精力充沛的' },
                { term: 'learn/gain more practical knowledge/skills', definition: '学习/获得有用的知识' },
            ],
            example: `示范回答 1:
I have great learning ability, and I also have a strong willingness to learn. Also, I am a self-disciplined person and a morning bird. You know, as a Chinese saying goes, the morning hour is the best time of the day. I prefer to get up early in the morning to recite words and do some reading.

示范回答 2:
Yes. I love challenges and I am not afraid of them, especially in the area of studies, and I can deal with challenges. I often share my study experiences with my classmates, such as Chinese and English. When doing this, I have a great sense of achievement.`
        },
        {
            title: '五、社团类',
            questions: [
                'What do you usually do during recess?',
                'What activities do you often take part in at school?',
                'What is your favourite activity?',
            ],
            thoughts: [
                '兴趣爱好+社团相关信息的介绍',
            ],
            expressions: [
                'Arts & Music:',
                { term: 'EDM (Electronic Disco Music)', definition: '' },
                { term: 'Voice of Ulink', definition: '' },
                { term: 'ART OPEN STUDIO', definition: '' },
                { term: 'GRADE 10 BAND', definition: '' },
                { term: 'Film Club', definition: '' },
                { term: 'History of Rock\'n Roll', definition: '' },
                { term: 'Dancing Club NVP-The Company', definition: '' },
                'Academic:',
                { term: 'Financial Club', definition: '' },
                { term: 'Model Club', definition: '' },
                { term: 'Quantum Mechanics Club', definition: '' },
                { term: 'Drop Everything And Reading (D.E.A.R.)', definition: '' },
                { term: 'Biological Research', definition: '' },
                { term: 'Lasting effects of the opium wars', definition: '' },
                { term: 'Battle of the Books - Bookworm Society', definition: '' },
                { term: 'Code Club', definition: '' },
                'Sport:',
                { term: 'Swimming', definition: '' },
                { term: 'Volleyball', definition: '' },
                { term: 'Badminton', definition: '' },
                { term: 'Weights', definition: '' },
                { term: 'Basketball', definition: '' },
                { term: 'Free soccer', definition: '' },
                { term: 'Ping-Pong ball', definition: '' },
                { term: 'Cycling (off campus)', definition: '' },
                { term: 'Baseball Club', definition: '' },
                { term: '5K Club', definition: '' },
                { term: 'Jogging', definition: '' },
                'Culture:',
                { term: 'Anime, Comics & Games (ACG) Club', definition: '' },
                { term: 'Cooking Club', definition: '' },
                { term: 'E-Sport Club', definition: '' },
                { term: 'Ideal Land', definition: '' },
                { term: 'Lying Man Club', definition: '' },
                { term: 'Rubik\'s Cube Club', definition: '' },
                { term: 'Television (Tv) Club', definition: '' },
                { term: 'ULC Model United Nations (MUN)', definition: '' },
                { term: 'ULINK FM', definition: '' },
                { term: 'Crochet stitches', definition: '' },
                { term: 'The Greater Bay Area Economy', definition: '' },
            ],
        }
    ]
};