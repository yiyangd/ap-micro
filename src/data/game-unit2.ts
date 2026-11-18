import { answer, distractor, text, type DataTable, type Mission } from './game-types';

// One market schedule reused by 2.6, 2.8 and 2.9 so students can compare outcomes.
// Straight lines: Qd = 100 − 10P, Qs = 10P − 20. Equilibrium P = $6, Q = 40.
const lemonadeSchedule: DataTable = {
  caption: text('Weekly lemonade market (both curves are straight lines)', '柠檬水周市场（两条曲线均为直线）'),
  columns: [text('Price', '价格'), text('Quantity demanded', '需求量'), text('Quantity supplied', '供给量')],
  rows: [
    [text('$2'), text('80'), text('0')],
    [text('$4'), text('60'), text('20')],
    [text('$6'), text('40'), text('40')],
    [text('$8'), text('20'), text('60')],
    [text('$10'), text('0'), text('80')],
  ],
};

export const unit2Missions: readonly Mission[] = [
  {
    id: '2.1',
    title: text('The Noodle Kiosk', '泡面小卖部'),
    topic: text('Demand', '需求'),
    scenario: text(
      'A campus kiosk sells cups of instant noodles for $2. Consider three separate changes, one at a time, and decide how buyers respond.',
      '校园小卖部以每杯 2 美元出售杯面。下面三个变化分别独立发生，请判断买家的反应。',
    ),
    steps: [
      {
        prompt: text('The kiosk raises its price to $3, and students buy fewer cups. What changed?', '小卖部把价格提高到 3 美元，学生买的杯面变少了。发生了什么变化？'),
        choices: [
          distractor('Demand decreased', '需求减少', 'Only the good’s own price changed. That moves buyers along the same demand curve.', '只有商品自身价格变了，这会让买家沿着同一条需求曲线移动。'),
          answer('Quantity demanded decreased', '需求量减少'),
          distractor('Supply decreased', '供给减少', 'The change describes buyers’ response to price, not sellers’ costs.', '这里描述的是买家对价格的反应，与卖家的成本无关。'),
        ],
        correct: 1,
        explanation: text('A change in the good’s own price causes a movement along the demand curve, which is a change in quantity demanded.', '商品自身价格变化会引起沿需求曲线的移动，即需求量的变化。'),
        takeaway: text('Own-price change → movement along demand', '自身价格变化 → 沿需求曲线移动'),
      },
      {
        prompt: text('Back at $2, frozen dumplings (a substitute) double in price. What happens to demand for noodles?', '价格回到 2 美元。替代品速冻饺子的价格翻倍。杯面的需求如何变化？'),
        choices: [
          answer('Demand increases (shifts right)', '需求增加（右移）'),
          distractor('Demand decreases (shifts left)', '需求减少（左移）', 'When a substitute becomes more expensive, buyers switch toward noodles.', '替代品变贵时，买家会转向购买杯面。'),
          distractor('Only quantity demanded changes', '只有需求量变化', 'The price of a related good is a demand shifter, not the noodles’ own price.', '相关商品的价格是需求的移动因素，而不是杯面自身的价格。'),
        ],
        correct: 0,
        explanation: text('A higher price of a substitute raises demand for the other good at every price.', '替代品价格上升，会使另一种商品在每个价格下的需求都增加。'),
        takeaway: text('Substitute’s price ↑ → demand ↑', '替代品价格 ↑ → 需求 ↑'),
      },
      {
        prompt: text('Students’ incomes fall, and the kiosk sells more cups at every price. For these students, noodles are…', '学生收入下降，小卖部在每个价格下都卖出更多杯面。对这些学生来说，杯面是……'),
        choices: [
          distractor('A normal good', '正常品', 'For a normal good, demand falls when income falls.', '对正常品而言，收入下降时需求会减少。'),
          distractor('A complement', '互补品', 'Complements describe a pair of goods used together. This change is about income.', '互补品描述的是一起使用的两种商品，这里的变化与收入有关。'),
          answer('An inferior good', '劣等品'),
        ],
        correct: 2,
        explanation: text('Demand moved in the opposite direction from income, which defines an inferior good.', '需求与收入反方向变动，这正是劣等品的定义。'),
        takeaway: text('Income ↓, demand ↑ → inferior good', '收入 ↓、需求 ↑ → 劣等品'),
      },
    ],
  },
  {
    id: '2.2',
    title: text('Berry Fields', '浆果农场'),
    topic: text('Supply', '供给'),
    scenario: text(
      'A farm can plant its land with strawberries or blueberries. Consider three separate changes to the strawberry market, one at a time.',
      '一家农场可以在同一块土地上种草莓或蓝莓。下面三个变化分别独立发生，请判断草莓市场的变化。',
    ),
    steps: [
      {
        prompt: text('The market price of strawberries rises, and the farm offers more boxes for sale. What changed?', '草莓的市场价格上升，农场愿意出售更多箱草莓。发生了什么变化？'),
        choices: [
          distractor('Supply increased', '供给增加', 'Only the good’s own price changed. The farm moved along its existing supply curve.', '只有商品自身价格变了，农场沿原有供给曲线移动。'),
          distractor('Demand decreased', '需求减少', 'The farm is a seller. Its response to price is about supply.', '农场是卖方，它对价格的反应属于供给方面。'),
          answer('Quantity supplied increased', '供给量增加'),
        ],
        correct: 2,
        explanation: text('A higher own price causes a movement up along the supply curve: quantity supplied rises.', '自身价格上升引起沿供给曲线向上移动：供给量增加。'),
        takeaway: text('Own-price change → movement along supply', '自身价格变化 → 沿供给曲线移动'),
      },
      {
        prompt: text('The price of fertilizer, a key input, rises sharply. What happens to strawberry supply?', '关键投入品化肥的价格大幅上涨。草莓的供给如何变化？'),
        choices: [
          answer('Supply decreases (shifts left)', '供给减少（左移）'),
          distractor('Supply increases (shifts right)', '供给增加（右移）', 'Higher input costs make each box more costly to produce.', '投入成本上升，使每箱草莓的生产成本更高。'),
          distractor('Quantity supplied falls, curve unchanged', '供给量下降，曲线不变', 'An input price is a supply shifter, not the strawberries’ own price.', '投入品价格是供给的移动因素，而不是草莓自身的价格。'),
        ],
        correct: 0,
        explanation: text('Higher input prices raise production costs, so sellers offer less at every price.', '投入品价格上升提高了生产成本，所以卖家在每个价格下都提供更少的数量。'),
        takeaway: text('Input cost ↑ → supply ↓', '投入成本 ↑ → 供给 ↓'),
      },
      {
        prompt: text('Blueberry prices soar. The farm can switch land to blueberries. What happens to strawberry supply?', '蓝莓价格飙升，农场可以把土地改种蓝莓。草莓的供给如何变化？'),
        choices: [
          distractor('Supply increases', '供给增加', 'Land used for blueberries cannot grow strawberries at the same time.', '用来种蓝莓的土地不能同时种草莓。'),
          answer('Supply decreases', '供给减少'),
          distractor('No change: blueberries are a different market', '没有变化：蓝莓是另一个市场', 'Goods that compete for the same resources are related in production.', '争夺同一资源的商品在生产上是相关的。'),
        ],
        correct: 1,
        explanation: text('A higher price of an alternative good the farm could produce draws resources away, decreasing strawberry supply.', '农场可生产的另一种商品价格上升，会把资源吸引过去，使草莓的供给减少。'),
        takeaway: text('Alternative output’s price ↑ → supply ↓', '替代产出品价格 ↑ → 供给 ↓'),
      },
    ],
  },
  {
    id: '2.3',
    title: text('Museum Ticket Test', '博物馆票价测试'),
    topic: text('Price Elasticity of Demand', '需求价格弹性'),
    scenario: text(
      'A museum raises its ticket price from $10 to $12. Daily attendance falls from 1,000 to 900. Use percentage changes from the original values.',
      '一家博物馆把门票从 10 美元提高到 12 美元，日参观人数从 1,000 降到 900。请用相对于原值的百分比变化来计算。',
    ),
    steps: [
      {
        prompt: text('What is the absolute value of the price elasticity of demand?', '需求价格弹性的绝对值是多少？'),
        choices: [
          answer('0.5', '0.5'),
          distractor('2', '2', 'That divides the price change by the quantity change. Put the quantity change on top.', '这是用价格变化除以数量变化。应把数量的百分比变化放在分子。'),
          distractor('100', '100', 'That is the change in attendance, not a percentage. Compute −10% ÷ 20%.', '这是参观人数的变化量，不是百分比。计算 −10% ÷ 20%。'),
        ],
        correct: 0,
        explanation: text('Quantity falls 10% and price rises 20%, so |−10% ÷ 20%| = 0.5.', '数量下降 10%，价格上升 20%，所以 |−10% ÷ 20%| = 0.5。'),
        takeaway: text('|Ed| = 10% ÷ 20% = 0.5', '|Ed| = 10% ÷ 20% = 0.5'),
      },
      {
        prompt: text('In this price range, demand for tickets is…', '在这个价格区间，门票的需求是……'),
        choices: [
          distractor('Elastic', '富有弹性', 'Elastic demand means |Ed| > 1. Compare 0.5 with 1.', '富有弹性指 |Ed| > 1。比较 0.5 与 1。'),
          answer('Inelastic', '缺乏弹性'),
          distractor('Unit elastic', '单位弹性', 'Unit elastic means |Ed| equals exactly 1.', '单位弹性指 |Ed| 恰好等于 1。'),
        ],
        correct: 1,
        explanation: text('With |Ed| = 0.5 < 1, quantity responds less than proportionally to price: demand is inelastic.', '|Ed| = 0.5 < 1，数量变化幅度小于价格变化幅度：需求缺乏弹性。'),
        takeaway: text('|Ed| < 1 → inelastic', '|Ed| < 1 → 缺乏弹性'),
      },
      {
        prompt: text('What happens to the museum’s daily ticket revenue?', '博物馆每日的门票收入如何变化？'),
        choices: [
          distractor('Falls by $1,000', '减少 1,000 美元', 'That counts only the 100 lost visitors at the old price. The remaining visitors now pay more.', '这只算了按原价流失的 100 名游客，留下的游客现在付得更多。'),
          distractor('Stays the same', '保持不变', 'Revenue is unchanged only when demand is unit elastic.', '只有单位弹性时，总收入才保持不变。'),
          answer('Rises by $800', '增加 800 美元'),
        ],
        correct: 2,
        explanation: text('Revenue goes from $10 × 1,000 = $10,000 to $12 × 900 = $10,800. With inelastic demand, a price rise raises total revenue.', '收入从 10 × 1,000 = 10,000 美元变为 12 × 900 = 10,800 美元。需求缺乏弹性时，提价会增加总收入。'),
        takeaway: text('Inelastic: price ↑ → total revenue ↑', '缺乏弹性：价格 ↑ → 总收入 ↑'),
      },
    ],
  },
  {
    id: '2.4',
    title: text('Flowers and Bottles', '鲜花与水瓶'),
    topic: text('Price Elasticity of Supply', '供给价格弹性'),
    scenario: text(
      'Two sellers face a sudden price increase. A florist has only the roses already grown this season. A bottle factory has idle machines and a warehouse of materials.',
      '两家卖家都遇到价格突然上涨。花店只有本季已经种好的玫瑰；水瓶工厂有闲置机器和满仓的原材料。',
    ),
    steps: [
      {
        prompt: text('Over the next week, whose supply is more price elastic?', '在接下来一周内，谁的供给价格弹性更大？'),
        choices: [
          answer('The bottle factory', '水瓶工厂'),
          distractor('The florist', '花店', 'Roses take a season to grow. How quickly can the florist add more?', '玫瑰需要一整季才能长成。花店能多快增加产量？'),
          distractor('They are equally elastic', '两者弹性相同', 'Spare capacity and stored inputs make it easier to raise output quickly.', '闲置产能和库存投入品让快速增产更容易。'),
        ],
        correct: 0,
        explanation: text('Idle capacity and available inputs let the factory expand output quickly, so its supply is more elastic.', '闲置产能和现成的投入品让工厂能迅速扩大产量，所以其供给更有弹性。'),
        takeaway: text('Spare capacity → more elastic supply', '有闲置产能 → 供给更有弹性'),
      },
      {
        prompt: text('The bottle price rises 10%, and quantity supplied rises 25%. What is the price elasticity of supply?', '水瓶价格上涨 10%，供给量增加 25%。供给价格弹性是多少？'),
        choices: [
          distractor('0.4', '0.4', 'That is 10% ÷ 25%. Put the quantity change on top.', '这是 10% ÷ 25%。应把数量变化放在分子。'),
          answer('2.5', '2.5'),
          distractor('15', '15', 'Subtracting percentages does not give an elasticity. Divide them.', '百分比相减得不到弹性，应相除。'),
        ],
        correct: 1,
        explanation: text('Es = 25% ÷ 10% = 2.5, which is greater than 1: supply is elastic.', 'Es = 25% ÷ 10% = 2.5，大于 1：供给富有弹性。'),
        takeaway: text('Es = 25% ÷ 10% = 2.5', 'Es = 25% ÷ 10% = 2.5'),
      },
      {
        prompt: text('Given a full year to respond, the florist’s supply becomes…', '如果有一整年时间调整，花店的供给会变得……'),
        choices: [
          distractor('Less elastic', '更缺乏弹性', 'More time lets producers plant more and add resources.', '更多时间让生产者能种更多、投入更多资源。'),
          distractor('Perfectly inelastic', '完全无弹性', 'Perfectly inelastic supply means output cannot change at all.', '完全无弹性意味着产量根本无法改变。'),
          answer('More elastic', '更有弹性'),
        ],
        correct: 2,
        explanation: text('Supply is more elastic over longer periods because producers can adjust more inputs.', '时间越长，生产者能调整的投入越多，所以供给越有弹性。'),
        takeaway: text('Longer time → more elastic supply', '时间越长 → 供给越有弹性'),
      },
    ],
  },
  {
    id: '2.5',
    title: text('Three Signals', '三个信号'),
    topic: text('Other Elasticities', '其他弹性'),
    scenario: text(
      'An analyst records three facts. When game consoles cost 10% more, purchases of video games fall 15%. When income rises 5%, bus rides fall 2% and concert ticket purchases rise 12%.',
      '一位分析师记录了三个事实：游戏机价格上涨 10% 时，游戏购买量下降 15%；收入上升 5% 时，公交乘坐次数下降 2%，演唱会门票购买量上升 12%。',
    ),
    steps: [
      {
        prompt: text('The cross-price elasticity of games with respect to console prices is −1.5. The two goods are…', '游戏对游戏机价格的交叉价格弹性为 −1.5。这两种商品是……'),
        choices: [
          distractor('Substitutes', '替代品', 'For substitutes, a higher price of one raises purchases of the other, so the sign is positive.', '对替代品而言，一种变贵会让另一种买得更多，所以符号为正。'),
          answer('Complements', '互补品'),
          distractor('Unrelated goods', '无关商品', 'Unrelated goods have a cross-price elasticity near zero.', '无关商品的交叉价格弹性接近零。'),
        ],
        correct: 1,
        explanation: text('A negative cross-price elasticity (−15% ÷ 10% = −1.5) means the goods are complements.', '交叉价格弹性为负（−15% ÷ 10% = −1.5），说明两者是互补品。'),
        takeaway: text('Cross-price < 0 → complements', '交叉价格弹性 < 0 → 互补品'),
      },
      {
        prompt: text('The income elasticity of bus rides is −2% ÷ 5% = −0.4. Bus rides are…', '公交乘坐的收入弹性为 −2% ÷ 5% = −0.4。公交乘坐是……'),
        choices: [
          answer('An inferior good', '劣等品'),
          distractor('A normal necessity', '正常品中的必需品', 'Necessities have a positive income elasticity below 1. This one is negative.', '必需品的收入弹性为正且小于 1，这里为负。'),
          distractor('A luxury', '奢侈品', 'A luxury has an income elasticity above 1.', '奢侈品的收入弹性大于 1。'),
        ],
        correct: 0,
        explanation: text('A negative income elasticity means demand falls as income rises: an inferior good.', '收入弹性为负，意味着收入上升时需求下降：劣等品。'),
        takeaway: text('Income elasticity < 0 → inferior', '收入弹性 < 0 → 劣等品'),
      },
      {
        prompt: text('The income elasticity of concert tickets is 12% ÷ 5% = 2.4. Concert tickets are…', '演唱会门票的收入弹性为 12% ÷ 5% = 2.4。演唱会门票是……'),
        choices: [
          distractor('Normal and income inelastic', '正常品且收入缺乏弹性', 'Income inelastic means between 0 and 1. Compare 2.4 with 1.', '收入缺乏弹性指介于 0 和 1 之间。比较 2.4 与 1。'),
          distractor('Inferior', '劣等品', 'The elasticity is positive, so demand rises with income.', '弹性为正，需求随收入上升。'),
          answer('Normal and income elastic (a luxury)', '正常品且收入富有弹性（奢侈品）'),
        ],
        correct: 2,
        explanation: text('An income elasticity above 1 means spending rises more than proportionally with income.', '收入弹性大于 1，说明需求增长比例高于收入增长比例。'),
        takeaway: text('Income elasticity > 1 → luxury', '收入弹性 > 1 → 奢侈品'),
      },
    ],
  },
  {
    id: '2.6',
    title: text('The Lemonade Market', '柠檬水市场'),
    topic: text('Market Equilibrium and Consumer and Producer Surplus', '市场均衡与消费者、生产者剩余'),
    scenario: text(
      'The table gives the weekly lemonade market. Demand reaches zero at $10, and supply starts at $2. Both curves are straight lines.',
      '表格给出柠檬水的周市场。需求在 10 美元处降为零，供给从 2 美元开始。两条曲线都是直线。',
    ),
    table: lemonadeSchedule,
    steps: [
      {
        prompt: text('What are the equilibrium price and quantity?', '均衡价格和均衡数量是多少？'),
        choices: [
          distractor('$4 and 60 cups', '4 美元，60 杯', 'At $4, buyers want 60 but sellers offer only 20. That is a shortage.', '在 4 美元时，买家想买 60 杯，卖家只提供 20 杯，存在短缺。'),
          answer('$6 and 40 cups', '6 美元，40 杯'),
          distractor('$8 and 60 cups', '8 美元，60 杯', 'At $8, sellers offer 60 but buyers want only 20. That is a surplus.', '在 8 美元时，卖家提供 60 杯，买家只想买 20 杯，存在过剩。'),
        ],
        correct: 1,
        explanation: text('At $6, quantity demanded equals quantity supplied at 40 cups.', '在 6 美元时，需求量与供给量都等于 40 杯。'),
        takeaway: text('Equilibrium: $6, 40 cups', '均衡：6 美元，40 杯'),
      },
      {
        prompt: text('What is consumer surplus at equilibrium?', '均衡时的消费者剩余是多少？'),
        choices: [
          answer('$80', '80 美元'),
          distractor('$160', '160 美元', 'Consumer surplus is a triangle. Multiply by ½.', '消费者剩余是三角形面积，要乘以 ½。'),
          distractor('$240', '240 美元', '$6 × 40 is what buyers spend, not the surplus they gain.', '6 × 40 是买家的支出，不是他们获得的剩余。'),
        ],
        correct: 0,
        explanation: text('Consumer surplus is the triangle below demand and above price: ½ × 40 × ($10 − $6) = $80.', '消费者剩余是需求曲线以下、价格以上的三角形：½ × 40 × (10 − 6) = 80 美元。'),
        takeaway: text('CS = ½ × 40 × $4 = $80', 'CS = ½ × 40 × 4 = 80 美元'),
      },
      {
        prompt: text('What is total surplus (consumer plus producer) at equilibrium?', '均衡时的总剩余（消费者剩余加生产者剩余）是多少？'),
        choices: [
          distractor('$80', '80 美元', 'That is only consumer surplus. Add producer surplus: ½ × 40 × ($6 − $2).', '这只是消费者剩余。还要加上生产者剩余：½ × 40 × (6 − 2)。'),
          distractor('$240', '240 美元', 'That is total spending. Surplus is measured between the curves and the price.', '这是总支出。剩余是曲线与价格之间的面积。'),
          answer('$160', '160 美元'),
        ],
        correct: 2,
        explanation: text('Producer surplus is ½ × 40 × ($6 − $2) = $80, so total surplus is $80 + $80 = $160.', '生产者剩余为 ½ × 40 × (6 − 2) = 80 美元，总剩余为 80 + 80 = 160 美元。'),
        takeaway: text('Total surplus = $80 + $80 = $160', '总剩余 = 80 + 80 = 160 美元'),
      },
    ],
  },
  {
    id: '2.7',
    title: text('Umbrella Season', '雨伞季'),
    topic: text('Market Disequilibrium and Changes in Equilibrium', '市场非均衡与均衡变化'),
    scenario: text(
      'A city’s umbrella market starts in equilibrium. Consider each event separately, starting from that equilibrium.',
      '某城市的雨伞市场起初处于均衡。请从这一均衡出发，分别分析每个事件。',
    ),
    steps: [
      {
        prompt: text('A store keeps its price above the equilibrium price. What results?', '一家商店把价格定在均衡价格之上。结果会怎样？'),
        choices: [
          distractor('A shortage', '短缺', 'Above equilibrium, buyers want fewer than sellers offer.', '高于均衡价格时，买家想买的少于卖家提供的。'),
          answer('A surplus', '过剩'),
          distractor('No effect on quantity', '对数量没有影响', 'Quantity demanded and supplied both respond to the price.', '需求量和供给量都会对价格做出反应。'),
        ],
        correct: 1,
        explanation: text('At a price above equilibrium, quantity supplied exceeds quantity demanded: a surplus.', '价格高于均衡时，供给量大于需求量：出现过剩。'),
        takeaway: text('Price above equilibrium → surplus', '价格高于均衡 → 过剩'),
      },
      {
        prompt: text('Rainy season raises demand, and a new factory raises supply. What must happen?', '雨季使需求增加，新工厂又使供给增加。一定会发生什么？'),
        choices: [
          answer('Quantity rises; price change is uncertain', '数量上升；价格变化不确定'),
          distractor('Price rises; quantity change is uncertain', '价格上升；数量变化不确定', 'Both shifts push quantity up. They push price in opposite directions.', '两次移动都推高数量，但对价格的推动方向相反。'),
          distractor('Both price and quantity rise', '价格和数量都上升', 'More supply pushes price down while more demand pushes it up. Without sizes, price is uncertain.', '供给增加压低价格，需求增加推高价格。不知道幅度时，价格不确定。'),
        ],
        correct: 0,
        explanation: text('Both shifts raise equilibrium quantity. Their effects on price offset, so the price change is indeterminate.', '两次移动都提高均衡数量；对价格的作用相互抵消，因此价格变化不确定。'),
        takeaway: text('D↑ and S↑ → Q↑, P uncertain', 'D↑ 且 S↑ → Q↑，P 不确定'),
      },
      {
        prompt: text('Instead, demand rises while a fabric shortage cuts supply. What must happen?', '如果需求增加的同时，面料短缺使供给减少，一定会发生什么？'),
        choices: [
          distractor('Quantity rises; price uncertain', '数量上升；价格不确定', 'Here both shifts push price up but push quantity in opposite directions.', '这时两次移动都推高价格，但对数量的推动方向相反。'),
          distractor('Price falls; quantity rises', '价格下降；数量上升', 'Higher demand and lower supply both raise the price.', '需求增加和供给减少都会推高价格。'),
          answer('Price rises; quantity uncertain', '价格上升；数量不确定'),
        ],
        correct: 2,
        explanation: text('Higher demand and lower supply both raise price. Their effects on quantity offset, so quantity is indeterminate.', '需求增加和供给减少都推高价格；对数量的作用相互抵消，因此数量变化不确定。'),
        takeaway: text('D↑ and S↓ → P↑, Q uncertain', 'D↑ 且 S↓ → P↑，Q 不确定'),
      },
    ],
  },
  {
    id: '2.8',
    title: text('A Tax on Lemonade', '柠檬水税'),
    topic: text('The Effects of Government Intervention in Markets', '政府干预市场的影响'),
    scenario: text(
      'The government places a $2 per-cup tax on lemonade sellers. Use the same market as before. With the tax, sellers need $2 more at every quantity.',
      '政府对柠檬水卖家征收每杯 2 美元的税。使用与之前相同的市场数据。征税后，卖家在每个数量上都需要多得 2 美元。',
    ),
    table: lemonadeSchedule,
    steps: [
      {
        prompt: text('After the tax, what price do buyers pay, and how many cups are sold?', '征税后，买家支付的价格是多少？售出多少杯？'),
        choices: [
          distractor('$8 and 40 cups', '8 美元，40 杯', 'At $8, buyers want only 20 cups. Quantity must fall.', '在 8 美元时，买家只想买 20 杯，数量必然减少。'),
          distractor('$6 and 30 cups', '6 美元，30 杯', 'At 30 cups, buyers are willing to pay $7. Sellers then keep $7 − $2 = $5.', '在 30 杯时，买家愿意付 7 美元，卖家实得 7 − 2 = 5 美元。'),
          answer('$7 and 30 cups', '7 美元，30 杯'),
        ],
        correct: 2,
        explanation: text('At 30 cups buyers pay $7 and sellers keep $5. At $5 sellers supply exactly 30, so the market clears.', '在 30 杯时，买家付 7 美元，卖家实得 5 美元；卖家在 5 美元时恰好供给 30 杯，市场出清。'),
        takeaway: text('Buyers pay $7, sellers keep $5, Q = 30', '买家付 7 美元，卖家得 5 美元，Q = 30'),
      },
      {
        prompt: text('How much tax revenue does the government collect each week?', '政府每周获得多少税收？'),
        choices: [
          answer('$60', '60 美元'),
          distractor('$80', '80 美元', '$2 × 40 uses the old quantity. Only 30 cups are sold after the tax.', '2 × 40 用的是原来的数量。征税后只卖出 30 杯。'),
          distractor('$210', '210 美元', '$7 × 30 is buyers’ total spending, not the tax collected.', '7 × 30 是买家的总支出，不是税收。'),
        ],
        correct: 0,
        explanation: text('Tax revenue = $2 per cup × 30 cups = $60.', '税收 = 每杯 2 美元 × 30 杯 = 60 美元。'),
        takeaway: text('Tax revenue = $2 × 30 = $60', '税收 = 2 × 30 = 60 美元'),
      },
      {
        prompt: text('What is the deadweight loss of the tax?', '这项税收造成的无谓损失是多少？'),
        choices: [
          distractor('$60', '60 美元', 'Tax revenue is a transfer to the government, not a loss to society.', '税收是转移给政府的，不是社会损失。'),
          answer('$10', '10 美元'),
          distractor('$20', '20 美元', 'Deadweight loss is a triangle. Multiply by ½.', '无谓损失是三角形面积，要乘以 ½。'),
        ],
        correct: 1,
        explanation: text('The 10 cups no longer traded each had value above cost. DWL = ½ × $2 × (40 − 30) = $10.', '不再成交的 10 杯本来价值高于成本。无谓损失 = ½ × 2 × (40 − 30) = 10 美元。'),
        takeaway: text('DWL = ½ × $2 × 10 = $10', '无谓损失 = ½ × 2 × 10 = 10 美元'),
      },
    ],
  },
  {
    id: '2.9',
    title: text('Opening the Border', '开放边境'),
    topic: text('International Trade and Public Policy', '国际贸易与公共政策'),
    scenario: text(
      'The lemonade country opens to trade. It is small, so it can buy any amount at the world price of $4. Use the same domestic schedule.',
      '柠檬水国开放贸易。它是小国，可以按 4 美元的世界价格买入任意数量。使用同样的国内供求表。',
    ),
    table: lemonadeSchedule,
    steps: [
      {
        prompt: text('At the world price of $4, how many cups are imported?', '在 4 美元的世界价格下，进口多少杯？'),
        choices: [
          distractor('60 cups', '60 杯', '60 is what domestic buyers want. Some of it is produced at home.', '60 是国内买家的需求量，其中一部分由本国生产。'),
          distractor('20 cups', '20 杯', '20 is domestic production. Imports fill the gap up to quantity demanded.', '20 是国内产量。进口填补它与需求量之间的缺口。'),
          answer('40 cups', '40 杯'),
        ],
        correct: 2,
        explanation: text('Imports = quantity demanded − domestic quantity supplied = 60 − 20 = 40.', '进口量 = 需求量 − 国内供给量 = 60 − 20 = 40。'),
        takeaway: text('Imports = 60 − 20 = 40', '进口 = 60 − 20 = 40'),
      },
      {
        prompt: text('A $2 tariff raises the domestic price to $6. How many cups are imported now?', '2 美元的关税把国内价格提高到 6 美元。现在进口多少杯？'),
        choices: [
          answer('0 cups', '0 杯'),
          distractor('40 cups', '40 杯', 'The tariff raises the domestic price, which changes both domestic quantities.', '关税提高了国内价格，国内需求量和供给量都会改变。'),
          distractor('20 cups', '20 杯', 'At $6, compare quantity demanded with domestic quantity supplied.', '在 6 美元时，比较需求量与国内供给量。'),
        ],
        correct: 0,
        explanation: text('At $6, domestic quantity supplied equals quantity demanded at 40, so imports fall to zero. The tariff is prohibitive.', '在 6 美元时，国内供给量与需求量都为 40，进口降为零。这是禁止性关税。'),
        takeaway: text('$2 tariff → domestic price $6, imports 0', '2 美元关税 → 国内价格 6 美元，进口为 0'),
      },
      {
        prompt: text('Compared with free trade at $4, which group gains from the tariff?', '与 4 美元的自由贸易相比，哪个群体从关税中获益？'),
        choices: [
          distractor('Domestic buyers', '国内买家', 'Buyers now pay $6 instead of $4 and buy less.', '买家现在要付 6 美元而不是 4 美元，买得也更少。'),
          answer('Domestic producers', '国内生产者'),
          distractor('Foreign exporters', '外国出口商', 'Foreign sellers lose all 40 cups of sales.', '外国卖家失去了全部 40 杯的销量。'),
        ],
        correct: 1,
        explanation: text('Domestic producers sell more at a higher price, so producer surplus rises. Consumer surplus falls by more, creating deadweight loss.', '国内生产者以更高价格卖出更多，生产者剩余增加；消费者剩余减少得更多，造成无谓损失。'),
        takeaway: text('Tariff helps domestic producers, hurts buyers', '关税有利于国内生产者，损害买家'),
      },
    ],
  },
];
