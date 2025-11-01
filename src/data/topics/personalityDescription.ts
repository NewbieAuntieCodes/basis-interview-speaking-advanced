/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { Topic } from '../types';

export const personalityDescriptionTopic: Topic = {
    title: '第三类 Personality Description 性格描述',
    description: '讨论性格、优缺点、模范人物等。',
    sections: [
        {
            title: '一、性格',
            questions: [
                'How might your best friend describe you?',
                'Are you talkative or shy?',
                'What three adjectives best describe your personality (性格)?',
                'Can we tell someone\'s personality from his or her handwriting?',
            ],
            thoughts: [
                'personality (性格) + example (例子)',
            ],
            expressions: [
                { term: 'imaginative', definition: '富有想象力的' },
                { term: 'energetic, warm, and passionate', definition: '精力充沛的、友好的、充满热情的' },
                { term: 'curious and clever', definition: '好奇又聪明的' },
                { term: 'caring', definition: '体贴的' },
                { term: 'responsible', definition: '负责的' },
                { term: 'sociable', definition: '好交际的' },
                { term: 'efficient', definition: '有能力的，能胜任的' },
                { term: 'humorous', definition: '幽默的' },
                { term: 'punctual', definition: '守时的' },
                { term: 'steady', definition: '稳重的，可靠的' },
                { term: 'cooperative', definition: '有合作精神的' },
                { term: 'gentle', definition: '温柔的' },
                { term: 'generous', definition: '慷慨的，大方的' },
                { term: 'Handwriting-related:', definition: ''},
                { term: 'neat and clean, unorganized and illegible', definition: '整洁干净，杂乱无章，难以辨认' },
                { term: 'introverted, shy and well-disciplined, sense of beauty', definition: '内向，害羞，自律，美感' },
                { term: 'extroverted, imaginative and creative', definition: '外向，富有想象力和创造力' },
            ],
            example: `Well, different people have different handwriting. Some is neat and clean, and some is unorganized. I think people's handwriting can reflect their personalities and educational background.`
        },
        {
            title: '二、优缺点',
            questions: [
                'What makes you unique?',
                'What is your greatest strength?',
                'Please describe your greatest strength.',
                'Do you have any strengths and weakness?',
                'What is your weakness?',
            ],
            expressions: [
                 { term: 'hardworking', definition: '勤劳的' },
                 { term: 'creative', definition: '有创造力的' },
                 { term: 'communicate with', definition: '与……交流' },
                 { term: 'solve problems', definition: '解决问题' },
                 { term: 'organize an event', definition: '组织活动' },
                 { term: 'do well in ...', definition: '擅长...' },
                 { term: 'be capable of', definition: '能够做...' },
                 { term: 'have the ability to do', definition: '有做……的能力' },
                 { term: 'lack a sense of humor', definition: '缺乏幽默感' },
                 { term: 'over-thinking', definition: '想太多' },
                 { term: 'not a good listener', definition: '不是一个好的倾听者' },
                 { term: 'being too honest', definition: '过于诚实' },
            ],
            example: `My Character Traits list:
Adventurous, Agreeable, Anxious, Appreciative, Open-minded, Immature, Responsible, Courageous, Annoying, Hateful, Charming, Clever, Considerate, Compassionate, Cheerful, Chatty, Caring, Empathetic, Cold, Sensitive, Understanding, Angry, Fake, Intelligent, Loyal, Loving, Gullible, Polite, Independent, Easy-going, Weird, Encouraging, Athletic, Quiet, Depressing, Irresponsible, Humble, Grumpy, Patient, Talkative, Impolite, Cheerful, Funny, Resentful, Peaceful, Energetic, Eager, Honest, Brave, Selfish, Dedicated, Pessimistic, Disorganized, Boring, Petty, Attentive, Jealous, Fearful, Appreciative, Protective, Witty, Enthusiastic, Neat, Demanding, Curious, Friendly, Irritable, Disrespectful, Imaginative, Mature, Confident.

示范回答:
I am a very good communicator and find it's easy for me to relate to other people.
I really enjoy learning new things and am constantly seeking out new learning opportunities.
I am a good organizer, and I am the monitor in my class.
I am a hard-worker, and I am goal-oriented. "Work hard, play hard" is my motto. I don't like wasting my time.`
        },
        {
            title: '三、模范',
            questions: [
                'Name a role model or a public figure who you admire.',
                'Why does this person inspire you?',
                'What person has influenced you most in your life?',
            ],
            example: `Dad
He is the one who brings home the bacon, providing me with a good life and education.
He is a friendly, warm-hearted, gentle, and generous person.
He is a dedicated individual in the society through volunteering in the local homeless shelters.
No matter what the activities I am in or decisions I make, my dad is always there for me to give me advice and encouragement. He is at my side. (supportive)
Thanks to my dad, I have grown to be a kind-hearted and deeply-caring person.`
        },
        {
            title: '四、其他',
            questions: [
                'What\'s the influence of good luck and bad luck?',
            ],
            expressions: [
                { term: 'good luck', definition: 'good mood, improve the relationship/boost the ties' },
                { term: 'bad luck', definition: 'better understand ourselves, motivate us to work harder' },
            ]
        }
    ]
};
