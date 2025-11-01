/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { Quiz } from '../types';

export const quizSet1: Quiz[] = [
    {
        id: 'quiz1',
        title: 'Passage 1: Horses',
        passage: "Horses can run. They can run fast. Some horses are big. ({1}) horses are not so big. A pony is not a big horse. It is a small horse. Sometimes we see brown horses. Sometimes we see black horses. And sometimes we see a white horse or a gray horse. A horse has two ears, two ({2}) a nose and a ({3}). A horse has a back. A horse has a tail. A horse has four legs. Horses eat ({4}). Some horses like apples too. Horses ({5}) water. They drink buckets and buckets of water.",
        questions: [
            { id: 1, options: ['Another', 'A', 'Some'], answer: 'Some', explanation: '该句与“有些马很大”形成对比，因此使用“Some”来指代另一群马。' },
            { id: 2, options: ['eye', 'eyes', 'feet'], answer: 'eyes', explanation: '因为马有“两只”，所以需要使用复数形式“eyes”。' },
            { id: 3, options: ['month', 'mouth', 'mouths'], answer: 'mouth', explanation: '句子列出的是单数身体部位（“a nose”），所以单数形式“a mouth”是正确的。' },
            { id: 4, options: ['grass', 'grasses', 'meat'], answer: 'grass', explanation: '在此上下文中，“Grass”通常用作不可数名词。马吃草。' },
            { id: 5, options: ['drink', 'eat', 'drinks'], answer: 'drink', explanation: '主语是“Horses”（复数），所以需要动词原形“drink”，而不是单数形式“drinks”。' }
        ]
    },
    {
        id: 'quiz2',
        title: 'Passage 2: Thanksgiving',
        passage: "In America, Thanksgiving Day is ({1}) the fourth Thursday in November. On that day, people always ({2}) a special meal. It's a big family ({3}). People say \"thank you\" ({4}) their food, family and friends. After Thanksgiving dinner, people ({5}) a big football game on TV. It's a very important festival in America. And it's my favorite festival.",
        questions: [
            { id: 1, options: ['in', 'on', 'at'], answer: 'on', explanation: '介词“on”用于特定的星期几或日期。' },
            { id: 2, options: ['talk', 'drink', 'have'], answer: 'have', explanation: '短语“have a meal”是常见且正确的搭配。' },
            { id: 3, options: ['breakfast', 'lunch', 'dinner'], answer: 'dinner', explanation: '感恩节大餐传统上是在晚上举行的盛宴，称为“dinner”。' },
            { id: 4, options: ['of', 'for', 'at'], answer: 'for', explanation: '正确的表达是“to say thank you for something”（为某事感谢）。' },
            { id: 5, options: ['look', 'see', 'watch'], answer: 'watch', explanation: '动词“watch”用于谈论观看某物一段时间，比如看电视上的比赛。' }
        ]
    },
    {
        id: 'quiz3',
        title: 'Passage 3: Letter to Li Ming',
        passage: "Dear Li Ming, How are you? I miss you very much. Let me ({1}) you something about us. My brother and I are in ({2}) school. We have classes ({3}) Monday to Friday. ({4}) weekends, we don't have ({5}) classes. We ({6}) many American friends now. We often play games together ({7}) school. They help us with our English. How many lessons do you ({8}) every ({9}) week? Do you know it? Please ({10}) to me soon. Jean",
        questions: [
            { id: 1, options: ['say', 'speak', 'tell'], answer: 'tell', explanation: '正确的结构是“tell someone something”。“Say”和“speak”没有这种用法。' },
            { id: 2, options: ['different', 'same', 'the same'], answer: 'the same', explanation: '“The same”是正确的短语。在这种情况下，“same”需要定冠词“the”。' },
            { id: 3, options: ['from', 'on', 'between'], answer: 'from', explanation: '“From Monday to Friday”是表示持续数天的时间段的标准方式。' },
            { id: 4, options: ['At', 'Of', 'Between'], answer: 'At', explanation: '“At weekends”是一个常见的介词短语，用来表示某事发生的时间。' },
            { id: 5, options: ['some', 'many', 'any'], answer: 'any', explanation: '“Any”用于否定句（“we don\'t have”）和疑问句中。' },
            { id: 6, options: ['having', 'have', 'has'], answer: 'have', explanation: '主语是“We”（复数），所以正确的现在时动词是“have”。' },
            { id: 7, options: ['behind', 'after', 'from'], answer: 'after', explanation: '“After school”的意思是放学后。' },
            { id: 8, options: ['teach', 'play', 'have'], answer: 'have', explanation: '“Have lessons”是正确且常见的搭配。' },
            { id: 9, options: ['every', 'the', 'an'], answer: 'every', explanation: '“Every week”的意思是“每周”。冠词“the”和“an”在语法上不合适。' },
            { id: 10, options: ['speak', 'tell', 'write'], answer: 'write', explanation: '上下文是一封信，所以合适的动作是“write to me”（给我写信）。' }
        ]
    },
    {
        id: 'quiz4',
        title: 'Passage 4: Birdy',
        passage: "There is a big old tree ({1}) my house. A blue bird ({2}) in the tree. Its name is Birdy. How old is it? I don't know. Every day I go and ({3}) food to Birdy. The bird sees me and comes ({4}). I put some food in a small box. Birdy comes to the ({5}) and begins to ({6}) the food. How happy it is! After ({7}) it goes back to the ({8}). I give ({9}) food to Birdy every day. Birdy is very friendly, too. And it likes me. We are very good ({10}).",
        questions: [
            { id: 1, options: ['in', 'near', 'on'], answer: 'near', explanation: '“Near”表示树离房子很近。' },
            { id: 2, options: ['speaks', 'reads', 'lives'], answer: 'lives', explanation: '“Lives”是描述动物居住地的正确动词。' },
            { id: 3, options: ['give', 'eat', 'count'], answer: 'give', explanation: '上下文暗示为鸟提供食物。' },
            { id: 4, options: ['on', 'from', 'down'], answer: 'down', explanation: '鸟在树上，所以它会“down”（下来）取食。' },
            { id: 5, options: ['box', 'body', 'tree'], answer: 'box', explanation: '文章中说，“我把一些食物放在一个小盒子里”，所以鸟会来到“box”（盒子）。' },
            { id: 6, options: ['see', 'eat', 'count'], answer: 'eat', explanation: '对于有食物的鸟来说，合乎逻辑的动作是“eat”（吃）它。' },
            { id: 7, options: ['that', 'those', 'time'], answer: 'that', explanation: '“After that”是一个短语，意思是“在之前提到的事件（吃东西）之后”。' },
            { id: 8, options: ['house', 'tree', 'box'], answer: 'tree', explanation: '鸟住在“tree”（树）里，所以它会回到那里。' },
            { id: 9, options: ['little', 'some', 'any'], answer: 'some', explanation: '“Some”用于肯定句中，表示不确定的数量。' },
            { id: 10, options: ['boys', 'birds', 'friends'], answer: 'friends', explanation: '所描述的积极互动表明他们已经成为“friends”（朋友）。' }
        ]
    },
    {
        id: 'quiz5',
        title: 'Passage 5: Weekend',
        passage: "Today is ({1}). Weekend is ({2}). The weather forecast says the weather will ({3}) nice at the weekend. ({4}) my family are going to go on an outing tomorrow. We like ({5}) hills very much. It's good ({6}) our health. On Sunday, we will ({7}) a puppet show at nine in the morning. Then we are going to the KFC for our ({8}) at eleven o'clock. I like chips ({9}) hamburgers. ({10}) a happy weekend!",
        questions: [
            { id: 1, options: ['Monday', 'Friday', 'Saturday'], answer: 'Friday', explanation: '文章说“周末快到了”，他们“明天”要去郊游，这意味着今天是星期五。' },
            { id: 2, options: ['come', 'comes', 'coming'], answer: 'coming', explanation: '“Is coming”是现在进行时，这里用来谈论不久的将来。' },
            { id: 3, options: ['be', 'is', 'are'], answer: 'be', explanation: '在情态动词“will”之后，必须使用动词原形“be”。' },
            { id: 4, options: ['And', 'But', 'So'], answer: 'So', explanation: '“So”用于表示结果或后果：天气会很好，所以我们要出去。' },
            { id: 5, options: ['climb', 'climbing', 'climbs'], answer: 'climbing', explanation: '在动词“like”之后，通常使用动词的动名词形式（-ing）。' },
            { id: 6, options: ['for', 'to', 'at'], answer: 'for', explanation: '短语“good for”的意思是“对……有益”。' },
            { id: 7, options: ['look', 'have a look', 'see'], answer: 'see', explanation: '动词“see”常用于观看表演，如演出、戏剧和电影。' },
            { id: 8, options: ['supper', 'lunch', 'breakfast'], answer: 'lunch', explanation: '上午十一点是典型的“lunch”（午餐）时间。' },
            { id: 9, options: ['and', 'with', 'or'], answer: 'and', explanation: '“And”是一个连词，用于连接列表中的两个相似项目。' },
            { id: 10, options: ['How', 'What', 'Why'], answer: 'What', explanation: '这类感叹句的正确结构是“What a/an + 形容词 + 名词!”。' }
        ]
    },
];