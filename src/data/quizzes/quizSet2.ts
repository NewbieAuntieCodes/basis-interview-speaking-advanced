/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { Quiz } from '../types';

export const quizSet2: Quiz[] = [
    {
        id: 'quiz6',
        title: 'Passage 6: Mr. White\'s Plants',
        passage: "Mr. White loved his plants. His ({1}) were in pots. There were ten pots behind the house and eight pots in front of the house. There was a ({2}) plant in every pot. No plants were the same. It was Friday. It was time to water the plants. Mr. White ({3}) the plants once a week. He went outside and ({4}) the water. Water came out of the end of the hose. He watered each plant behind the ({5}). He watered each plant until the soil was dark, ({6}) and soft. Then he went to the front to water the plants. All the flowers and trees looked clean and ({7}) again. Then butterflies and birds ({8}) the wet plants, ({9}) around them happily. Mr. White sat in quietly for a while and then went back inside. The next ({10}) he would water the plants again.",
        questions: [
            { id: 1, options: ['books', 'coins', 'plants'], answer: 'plants', explanation: '第一句提到“怀特先生热爱他的植物”，因此，这些在花盆里的东西应该是他的“植物”。' },
            { id: 2, options: ['different', 'same', 'dangerous'], answer: 'different', explanation: '后半句“没有两株植物是相同的”直接说明了每个花盆里的植物都是“不同的”。' },
            { id: 3, options: ['picked', 'watered', 'planted'], answer: 'watered', explanation: '根据上下文“该给植物浇水了”和句子后面的“每周一次”，最合适的动词是“浇水”。' },
            { id: 4, options: ['turned on', 'turned off', 'turned down'], answer: 'turned on', explanation: '为了让水从水管里出来浇水，需要“打开”水龙头。' },
            { id: 5, options: ['garden', 'house', 'zoo'], answer: 'house', explanation: '前文提到“房子后面有十个花盆”，所以他正在给“房子”后面的植物浇水。' },
            { id: 6, options: ['dry', 'hard', 'wet'], answer: 'wet', explanation: '浇水后，土壤会变黑、变“湿”和变软。' },
            { id: 7, options: ['ugly', 'terrible', 'beautiful'], answer: 'beautiful', explanation: '浇水后，花草树木看起来干净了，自然也就“漂亮”了。' },
            { id: 8, options: ['ate', 'visited', 'left'], answer: 'visited', explanation: '蝴蝶和鸟儿被湿润的植物吸引，它们“拜访”了这些植物，符合后面愉快的气氛。' },
            { id: 9, options: ['walked', 'danced', 'ran'], answer: 'danced', explanation: '“愉快地”和蝴蝶鸟儿的飞舞，用“跳舞”来形容它们的活动非常生动形象。' },
            { id: 10, options: ['day', 'week', 'month'], answer: 'week', explanation: '文章前面提到他“每周给植物浇一次水”，所以下一次浇水应该是在下一“周”。' }
        ]
    },
    {
        id: 'quiz7',
        title: 'Passage 7: A Day at the Beach',
        passage: "Yesterday was Saturday. It was hot. Mr. Kings got up early and ({1}) breakfast quickly. Then Mr. King ({2}) his family to the people's park ({3}) his car. Then after that they ({4}) to the beach. It was nine o'clock when they got there. There ({5}) many people on the beach. Their children enjoyed themselves. Lily ({6}) a sandcastle. Lucy flew a kite ({7}) some other children. Mr. King and his wife were tired after five days' ({8}). They sat under a tree and had a rest.",
        questions: [
            { id: 1, options: ['having', 'have', 'had'], answer: 'had', explanation: '文章开头就说明了是“昨天”，所以整个故事都应该用过去时。“have breakfast”的过去式是“had breakfast”。' },
            { id: 2, options: ['told', 'took', 'called'], answer: 'took', explanation: '“take someone to a place”意为“带某人去某地”，这里需要使用过去式“took”。' },
            { id: 3, options: ['in', 'on', 'by'], answer: 'by', explanation: '介词“by”用来表示交通方式，例如“by car”（乘车）。' },
            { id: 4, options: ['go', 'going', 'went'], answer: 'went', explanation: '整个故事是过去时态，所以“go”的过去式是“went”。' },
            { id: 5, options: ['are', 'were', 'was'], answer: 'were', explanation: '“There be”句型，主语是“many people”（复数），且是过去时态，所以用“were”。' },
            { id: 6, options: ['play', 'made', 'makes'], answer: 'made', explanation: '“make a sandcastle”意为“堆沙堡”，这里需要使用过去式“made”。' },
            { id: 7, options: ['behind', 'after', 'with'], answer: 'with', explanation: '介词“with”表示“和……一起”，露西和别的孩子一起放风筝。' },
            { id: 8, options: ['busy', 'home', 'work'], answer: 'work', explanation: '“五天的工作”之后会感到疲惫，这里需要一个名词，“work”符合语境。' }
        ]
    },
    {
        id: 'quiz8',
        title: 'Passage 8: My Little Brother',
        passage: "Hi, my good friend. My name is Sally. I come from Germany. Let me ({1}) you an interesting story about my little brother. I have a little brother. His ({2}) is John. He is now four years old. He goes to the kindergarten. My father often ({3}) him to school in his car. John is young but he is kind of ({4}) because he likes to eat meat very much. My parents often ({5}) him from eating too much meat. Today is Sunday. At noon, we are having ({6}) at home. \"Please eat some ({7}), Mum,\" my father says to my grandmother. \"I'd like to, but ({8}) teeth cannot work for the meat,\" my grandmother says. \"Don't worry, Dad. Let me ({9}) my grandmother to eat all the chicken. I have good ({10}).\" John says happily. Everyone laughs.",
        questions: [
            { id: 1, options: ['say', 'tell', 'speak'], answer: 'tell', explanation: '正确的短语是“Let me tell you a story”（让我给你讲个故事）。' },
            { id: 2, options: ['age', 'class', 'name'], answer: 'name', explanation: '这句话在介绍弟弟，所以“His name is John”（他叫约翰）是符合逻辑的选择。' },
            { id: 3, options: ['asks', 'shows', 'takes'], answer: 'takes', explanation: '“Takes him to school”的意思是送他去学校，这与使用汽车的语境相符。' },
            { id: 4, options: ['fat', 'thin', 'short'], answer: 'fat', explanation: '给出的原因是“因为他非常喜欢吃肉”，这在逻辑上会导致“胖”。' },
            { id: 5, options: ['hope', 'make', 'stop'], answer: 'stop', explanation: '“Stop him from eating”的意思是阻止他吃，这是句子的本意。' },
            { id: 6, options: ['breakfast', 'lunch', 'dinner'], answer: 'lunch', explanation: '文章中说“At noon”（中午），这是典型的“午餐”时间。' },
            { id: 7, options: ['fish', 'carrots', 'chicken'], answer: 'chicken', explanation: '在文章后面，约翰提出要帮助他的祖母“吃掉所有的鸡肉”。' },
            { id: 8, options: ['my', 'her', 'your'], answer: 'my', explanation: '祖母在谈论她自己的牙齿，所以她会说“my teeth”（我的牙齿）。' },
            { id: 9, options: ['help', 'tell', 'wish'], answer: 'help', explanation: '“Let me help my grandmother”（让我帮助我的祖母）是提供帮助时常用且正确的表达方式。' },
            { id: 10, options: ['hands', 'eyes', 'teeth'], answer: 'teeth', explanation: '要吃像鸡肉这样比较硬的肉，需要好的“牙齿”。这也与祖母的问题有关。' }
        ]
    },
    {
        id: 'quiz9',
        title: 'Passage 9: My Grandmother\'s Cat',
        passage: "My grandmother lives alone in the countryside. She has a cat called Tommy. Tommy is a cute cat. Its ({1}) is brown. It likes eating ({2}) best. So every day, my grandmother goes to the market to ({3}) fresh fish for Tommy. Tommy is very ({4}). It doesn't like running or playing with other cats. It is so lazy that it ({5}) goes out for a walk with my grandmother. It likes ({6}) on the ground and enjoying the warm sunshine. Every day, Tommy ({7}) for long hours. That's why it is very ({8}) now. Tommy is not a friendly cat. When we ({9}) our grandmother, it always lies on the floor without even looking at us. We really do not ({10}) this lazy and heavy cat. But my grandmother loves it so much.",
        questions: [
            { id: 1, options: ['school', 'food', 'color'], answer: 'color', explanation: '句子“Its ... is brown”描述的是一个物理特征。“颜色”是唯一符合的选项。' },
            { id: 2, options: ['fish', 'vegetables', 'eggs'], answer: 'fish', explanation: '下一句指出祖母为猫买“新鲜的鱼”，表明这是它最喜欢吃的东西。' },
            { id: 3, options: ['sell', 'sing', 'buy'], answer: 'buy', explanation: '人们去市场是为了“买”东西。' },
            { id: 4, options: ['terrible', 'sad', 'lazy'], answer: 'lazy', explanation: '“它不喜欢跑步或玩耍”的描述支持了猫很“懒”的观点。' },
            { id: 5, options: ['always', 'even', 'never'], answer: 'never', explanation: '鉴于猫“如此懒惰”，它“从不”出去散步。' },
            { id: 6, options: ['jumping', 'running', 'lying'], answer: 'lying', explanation: '一只喜欢阳光的懒猫会“躺”在地上，而不是活动。' },
            { id: 7, options: ['sleeps', 'plays', 'talks'], answer: 'sleeps', explanation: '一只懒猫会花很长时间“睡觉”。' },
            { id: 8, options: ['thin', 'ugly', 'fat'], answer: 'fat', explanation: '一只吃很多鱼的懒猫会变“胖”。文中后面也将其描述为“重的”。' },
            { id: 9, options: ['look', 'visit', 'find'], answer: 'visit', explanation: '短语“When we visit our grandmother”（当我们拜访我们的祖母时）在去她家的语境中最为合理。' },
            { id: 10, options: ['ring', 'like', 'relax'], answer: 'like', explanation: '这句话表达了对猫的负面情绪，所以“do not like”（不喜欢）是正确的短语。' }
        ]
    },
];