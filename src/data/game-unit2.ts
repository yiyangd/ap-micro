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
          distractor('Demand decreased', '需求减少', '“Demand decreased” means the whole curve shifted left, which needs a non-price factor such as income or tastes. Here only the noodles’ own price changed, so buyers moved along the same curve.', '“需求减少”指整条曲线左移，需要收入、偏好等非价格因素。这里只有杯面自身价格变了，买家是沿同一条曲线移动。'),
          answer('Quantity demanded decreased', '需求量减少'),
          distractor('Supply decreased', '供给减少', 'Supply describes sellers. Nothing changed for the kiosk’s costs; what changed is how many cups buyers want at the higher price.', '供给描述的是卖家。小卖部的成本没变，变的是买家在更高价格下想买的数量。'),
        ],
        correct: 1,
        explanation: text('A change in the good’s own price causes a movement along the demand curve, which is a change in quantity demanded.', '商品自身价格变化会引起沿需求曲线的移动，即需求量的变化。'),
        concept: text('A change in a good’s own price moves along the demand curve (quantity demanded). Other factors shift the whole curve (demand).', '商品自身价格变化引起沿需求曲线的移动（需求量变化）；其他因素使整条曲线移动（需求变化）。'),
        takeaway: text('Own-price change → movement along demand', '自身价格变化 → 沿需求曲线移动'),
      },
      {
        prompt: text('Back at $2, frozen dumplings (a substitute) double in price. What happens to demand for noodles?', '价格回到 2 美元。替代品速冻饺子的价格翻倍。杯面的需求如何变化？'),
        choices: [
          answer('Demand increases (shifts right)', '需求增加（右移）'),
          distractor('Demand decreases (shifts left)', '需求减少（左移）', 'That would happen with complements. With substitutes, pricier dumplings push buyers toward noodles, so noodle demand rises.', '那是互补品的情况。对于替代品，饺子变贵会把买家推向杯面，杯面需求上升。'),
          distractor('Only quantity demanded changes', '只有需求量变化', 'Quantity demanded changes only when the noodles’ own price changes. The dumplings’ price belongs to a different good, so it shifts the noodle demand curve.', '只有杯面自身价格变化才改变需求量。饺子的价格是另一种商品的价格，所以它使杯面的需求曲线移动。'),
        ],
        correct: 0,
        explanation: text('A higher price of a substitute raises demand for the other good at every price.', '替代品价格上升，会使另一种商品在每个价格下的需求都增加。'),
        concept: text('Substitutes: when one good’s price rises, demand for the other increases.', '替代品：一种商品价格上升，另一种商品的需求增加。'),
        takeaway: text('Substitute’s price ↑ → demand ↑', '替代品价格 ↑ → 需求 ↑'),
      },
      {
        prompt: text('Students’ incomes fall, and the kiosk sells more cups at every price. For these students, noodles are…', '学生收入下降，小卖部在每个价格下都卖出更多杯面。对这些学生来说，杯面是……'),
        choices: [
          distractor('A normal good', '正常品', 'For a normal good, lower income means lower demand. Here demand rose as income fell, which is the pattern of an inferior good.', '对正常品而言，收入下降需求也下降。这里收入下降需求反而上升，这是劣等品的特征。'),
          distractor('A complement', '互补品', 'Complement describes how two goods are used together, such as noodles and drinks. This change is about income, so the question is normal versus inferior.', '互补品描述两种商品在使用上的关系，比如杯面和饮料。这里的变化与收入有关，要判断的是正常品还是劣等品。'),
          answer('An inferior good', '劣等品'),
        ],
        correct: 2,
        explanation: text('Demand moved in the opposite direction from income, which defines an inferior good.', '需求与收入反方向变动，这正是劣等品的定义。'),
        concept: text('Normal goods: demand moves with income. Inferior goods: demand moves opposite to income.', '正常品的需求与收入同向变动；劣等品的需求与收入反向变动。'),
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
          distractor('Supply increased', '供给增加', '“Supply increased” means the whole curve shifted right because of costs, technology or similar factors. A higher price only moves the farm up along its existing curve.', '“供给增加”指整条曲线因成本、技术等因素右移。价格上升只会让农场沿原有曲线向上移动。'),
          distractor('Demand decreased', '需求减少', 'The farm is the seller, and it is offering more, not less. Demand describes buyers, and nothing here says buyers want fewer berries.', '农场是卖方，它提供得更多而不是更少。需求描述的是买方，这里没有说买家想要更少。'),
          answer('Quantity supplied increased', '供给量增加'),
        ],
        correct: 2,
        explanation: text('A higher own price causes a movement up along the supply curve: quantity supplied rises.', '自身价格上升引起沿供给曲线向上移动：供给量增加。'),
        concept: text('A change in the good’s own price moves along the supply curve (quantity supplied). Costs, technology and other factors shift the curve.', '商品自身价格变化引起沿供给曲线的移动（供给量变化）；成本、技术等因素使曲线移动。'),
        takeaway: text('Own-price change → movement along supply', '自身价格变化 → 沿供给曲线移动'),
      },
      {
        prompt: text('The price of fertilizer, a key input, rises sharply. What happens to strawberry supply?', '关键投入品化肥的价格大幅上涨。草莓的供给如何变化？'),
        choices: [
          answer('Supply decreases (shifts left)', '供给减少（左移）'),
          distractor('Supply increases (shifts right)', '供给增加（右移）', 'Costlier fertilizer makes every box more expensive to grow, so the farm offers fewer boxes at each price. That is a decrease in supply, not an increase.', '化肥变贵使每箱草莓的种植成本更高，农场在每个价格下都提供更少。这是供给减少，而不是增加。'),
          distractor('Quantity supplied falls, curve unchanged', '供给量下降，曲线不变', 'Quantity supplied changes only when the strawberries’ own price changes. An input price is a cost factor, so the whole supply curve moves left.', '只有草莓自身价格变化才改变供给量。投入品价格是成本因素，会使整条供给曲线左移。'),
        ],
        correct: 0,
        explanation: text('Higher input prices raise production costs, so sellers offer less at every price.', '投入品价格上升提高了生产成本，所以卖家在每个价格下都提供更少的数量。'),
        concept: text('Higher input prices raise production costs and decrease supply (shift left).', '投入品价格上升提高生产成本，使供给减少（左移）。'),
        takeaway: text('Input cost ↑ → supply ↓', '投入成本 ↑ → 供给 ↓'),
      },
      {
        prompt: text('Blueberry prices soar. The farm can switch land to blueberries. What happens to strawberry supply?', '蓝莓价格飙升，农场可以把土地改种蓝莓。草莓的供给如何变化？'),
        choices: [
          distractor('Supply increases', '供给增加', 'Blueberries became more profitable, so the farm moves land into blueberries. Less land for strawberries means less strawberry supply.', '蓝莓变得更赚钱，农场会把土地改种蓝莓。种草莓的土地少了，草莓供给就减少。'),
          answer('Supply decreases', '供给减少'),
          distractor('No change: blueberries are a different market', '没有变化：蓝莓是另一个市场', 'The two markets are linked through the land. When blueberries pay more, the opportunity cost of growing strawberries rises, so strawberry supply falls.', '两个市场通过土地联系在一起。蓝莓收益更高时，种草莓的机会成本上升，草莓供给减少。'),
        ],
        correct: 1,
        explanation: text('A higher price of an alternative good the farm could produce draws resources away, decreasing strawberry supply.', '农场可生产的另一种商品价格上升，会把资源吸引过去，使草莓的供给减少。'),
        concept: text('Goods that compete for the same resources: a higher price of one draws resources toward it and decreases supply of the other.', '争夺同一资源的商品：一种商品价格上升，生产者会把资源转向它，另一种商品的供给减少。'),
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
          distractor('2', '2', '2 comes from 20% ÷ 10%, which puts the price change on top. Elasticity measures how much quantity responds to price, so quantity goes on top: 10% ÷ 20% = 0.5.', '2 是 20% ÷ 10%，把价格变化放在了分子。弹性衡量数量对价格的反应程度，数量变化应放在分子：10% ÷ 20% = 0.5。'),
          distractor('100', '100', '100 is the change in visitors, a raw count. Elasticity uses percentage changes so units do not matter: 100 of 1,000 is 10%, and $2 of $10 is 20%.', '100 是游客人数的变化量，是原始数字。弹性使用百分比变化，才能不受单位影响：1,000 中的 100 是 10%，10 美元中的 2 美元是 20%。'),
        ],
        correct: 0,
        explanation: text('Quantity falls 10% and price rises 20%, so |−10% ÷ 20%| = 0.5.', '数量下降 10%，价格上升 20%，所以 |−10% ÷ 20%| = 0.5。'),
        concept: text('Price elasticity of demand = % change in quantity demanded ÷ % change in price.', '需求价格弹性 = 需求量变化百分比 ÷ 价格变化百分比。'),
        takeaway: text('|Ed| = 10% ÷ 20% = 0.5', '|Ed| = 10% ÷ 20% = 0.5'),
      },
      {
        prompt: text('In this price range, demand for tickets is…', '在这个价格区间，门票的需求是……'),
        choices: [
          distractor('Elastic', '富有弹性', 'Elastic means quantity changes by a larger percentage than price (|Ed| > 1). Here attendance fell only 10% while price rose 20%, so |Ed| = 0.5 is inelastic.', '富有弹性指数量变化百分比大于价格变化百分比（|Ed| > 1）。这里价格涨 20%，人数只降 10%，|Ed| = 0.5，缺乏弹性。'),
          answer('Inelastic', '缺乏弹性'),
          distractor('Unit elastic', '单位弹性', 'Unit elastic needs equal percentage changes (|Ed| = 1). A 10% drop against a 20% rise is a smaller response, so demand is inelastic.', '单位弹性要求两者变化百分比相等（|Ed| = 1）。价格涨 20%、人数降 10%，反应较小，所以缺乏弹性。'),
        ],
        correct: 1,
        explanation: text('With |Ed| = 0.5 < 1, quantity responds less than proportionally to price: demand is inelastic.', '|Ed| = 0.5 < 1，数量变化幅度小于价格变化幅度：需求缺乏弹性。'),
        concept: text('|Ed| > 1 is elastic, |Ed| < 1 is inelastic, and |Ed| = 1 is unit elastic.', '|Ed| > 1 为富有弹性，|Ed| < 1 为缺乏弹性，|Ed| = 1 为单位弹性。'),
        takeaway: text('|Ed| < 1 → inelastic', '|Ed| < 1 → 缺乏弹性'),
      },
      {
        prompt: text('What happens to the museum’s daily ticket revenue?', '博物馆每日的门票收入如何变化？'),
        choices: [
          distractor('Falls by $1,000', '减少 1,000 美元', '$1,000 counts only the 100 lost visitors at the old price. The 900 who stay each pay $2 more, adding $1,800, so revenue rises by $800 overall.', '1,000 美元只算了按原价流失的 100 人。留下的 900 人每人多付 2 美元，增加 1,800 美元，总收入净增 800 美元。'),
          distractor('Stays the same', '保持不变', 'Revenue stays the same only when demand is unit elastic. Because demand is inelastic, the higher price raises revenue: $10,800 vs $10,000.', '只有单位弹性时收入才不变。需求缺乏弹性，所以提价会增加收入：10,800 美元对 10,000 美元。'),
          answer('Rises by $800', '增加 800 美元'),
        ],
        correct: 2,
        explanation: text('Revenue goes from $10 × 1,000 = $10,000 to $12 × 900 = $10,800. With inelastic demand, a price rise raises total revenue.', '收入从 10 × 1,000 = 10,000 美元变为 12 × 900 = 10,800 美元。需求缺乏弹性时，提价会增加总收入。'),
        concept: text('Total revenue test: with inelastic demand, price and total revenue move in the same direction.', '总收益检验：需求缺乏弹性时，价格与总收益同方向变动。'),
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
          distractor('The florist', '花店', 'The florist cannot grow more roses within a week; supply is stuck at what is already grown, so it is very inelastic. The factory can run its idle machines right away.', '花店一周内种不出更多玫瑰，供给只能是已种好的数量，非常缺乏弹性。工厂可以立即开动闲置机器。'),
          distractor('They are equally elastic', '两者弹性相同', 'Elasticity depends on how easily output can expand. Idle machines and stored materials let the factory respond; the florist cannot, so they differ.', '弹性取决于扩大产量有多容易。闲置机器和库存原料让工厂能快速反应，花店却不能，所以两者不同。'),
        ],
        correct: 0,
        explanation: text('Idle capacity and available inputs let the factory expand output quickly, so its supply is more elastic.', '闲置产能和现成的投入品让工厂能迅速扩大产量，所以其供给更有弹性。'),
        concept: text('Supply is more elastic when producers can raise output quickly: spare capacity, available inputs and more time.', '当生产者能迅速增产时（有闲置产能、投入品充足、时间更长），供给更有弹性。'),
        takeaway: text('Spare capacity → more elastic supply', '有闲置产能 → 供给更有弹性'),
      },
      {
        prompt: text('The bottle price rises 10%, and quantity supplied rises 25%. What is the price elasticity of supply?', '水瓶价格上涨 10%，供给量增加 25%。供给价格弹性是多少？'),
        choices: [
          distractor('0.4', '0.4', '0.4 is 10% ÷ 25%, with price on top. Elasticity measures how strongly quantity responds, so quantity goes on top: 25% ÷ 10% = 2.5.', '0.4 是 10% ÷ 25%，把价格放在了分子。弹性衡量数量的反应程度，数量应在分子：25% ÷ 10% = 2.5。'),
          answer('2.5', '2.5'),
          distractor('15', '15', '15 is 25 − 10. Elasticity is a ratio, how many percent quantity moves for each 1% change in price, so divide: 25 ÷ 10 = 2.5.', '15 是 25 − 10。弹性是比值，即价格每变 1% 数量变多少百分比，所以要相除：25 ÷ 10 = 2.5。'),
        ],
        correct: 1,
        explanation: text('Es = 25% ÷ 10% = 2.5, which is greater than 1: supply is elastic.', 'Es = 25% ÷ 10% = 2.5，大于 1：供给富有弹性。'),
        concept: text('Price elasticity of supply = % change in quantity supplied ÷ % change in price.', '供给价格弹性 = 供给量变化百分比 ÷ 价格变化百分比。'),
        takeaway: text('Es = 25% ÷ 10% = 2.5', 'Es = 25% ÷ 10% = 2.5'),
      },
      {
        prompt: text('Given a full year to respond, the florist’s supply becomes…', '如果有一整年时间调整，花店的供给会变得……'),
        choices: [
          distractor('Less elastic', '更缺乏弹性', 'Time works the other way: with a year, the florist can plant more, rent greenhouses or hire help, so output can respond more to price.', '时间的作用恰好相反：有一年时间，花店可以多种、租温室或雇人，产量对价格的反应会更大。'),
          distractor('Perfectly inelastic', '完全无弹性', 'Perfectly inelastic means output cannot change at all, which is closer to the one-week situation. Over a year, roses can be planted and grown.', '完全无弹性指产量完全不能变，那更接近一周内的情况。一年内玫瑰可以种植生长。'),
          answer('More elastic', '更有弹性'),
        ],
        correct: 2,
        explanation: text('Supply is more elastic over longer periods because producers can adjust more inputs.', '时间越长，生产者能调整的投入越多，所以供给越有弹性。'),
        concept: text('Supply becomes more elastic over longer periods because more inputs can be adjusted.', '时间越长，可调整的投入越多，供给越有弹性。'),
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
          distractor('Substitutes', '替代品', 'With substitutes, a pricier console would push buyers toward games and raise game purchases (a positive sign). Here game purchases fell, so the goods are used together: complements.', '如果是替代品，游戏机变贵会让人多买游戏（符号为正）。这里游戏购买量下降，说明两者一起使用，是互补品。'),
          answer('Complements', '互补品'),
          distractor('Unrelated goods', '无关商品', 'Unrelated goods would show almost no response (near 0). A 15% drop shows a strong link, and the negative sign shows they are complements.', '无关商品几乎没有反应（接近 0）。下降 15% 说明联系很强，负号说明是互补品。'),
        ],
        correct: 1,
        explanation: text('A negative cross-price elasticity (−15% ÷ 10% = −1.5) means the goods are complements.', '交叉价格弹性为负（−15% ÷ 10% = −1.5），说明两者是互补品。'),
        concept: text('Cross-price elasticity: positive means substitutes, negative means complements.', '交叉价格弹性为正是替代品，为负是互补品。'),
        takeaway: text('Cross-price < 0 → complements', '交叉价格弹性 < 0 → 互补品'),
      },
      {
        prompt: text('The income elasticity of bus rides is −2% ÷ 5% = −0.4. Bus rides are…', '公交乘坐的收入弹性为 −2% ÷ 5% = −0.4。公交乘坐是……'),
        choices: [
          answer('An inferior good', '劣等品'),
          distractor('A normal necessity', '正常品中的必需品', 'A necessity still has a positive income elasticity: people buy a little more as income rises. Bus rides fell as income rose (−0.4), which makes them inferior.', '必需品的收入弹性仍然为正：收入上升时人们会多买一点。公交乘坐随收入上升而减少（−0.4），所以是劣等品。'),
          distractor('A luxury', '奢侈品', 'A luxury has income elasticity above 1: purchases rise faster than income. Bus rides fell, so they are inferior, the opposite case.', '奢侈品的收入弹性大于 1：购买增长快于收入。公交乘坐反而下降，是劣等品，情况正好相反。'),
        ],
        correct: 0,
        explanation: text('A negative income elasticity means demand falls as income rises: an inferior good.', '收入弹性为负，意味着收入上升时需求下降：劣等品。'),
        concept: text('Income elasticity: negative means inferior; between 0 and 1 means a normal necessity; above 1 means a luxury.', '收入弹性为负是劣等品；介于 0 和 1 之间是正常品中的必需品；大于 1 是奢侈品。'),
        takeaway: text('Income elasticity < 0 → inferior', '收入弹性 < 0 → 劣等品'),
      },
      {
        prompt: text('The income elasticity of concert tickets is 12% ÷ 5% = 2.4. Concert tickets are…', '演唱会门票的收入弹性为 12% ÷ 5% = 2.4。演唱会门票是……'),
        choices: [
          distractor('Normal and income inelastic', '正常品且收入缺乏弹性', 'Income inelastic means purchases grow more slowly than income (between 0 and 1). Tickets grew 12% on a 5% income rise, so 2.4 > 1 is income elastic.', '收入缺乏弹性指购买增长慢于收入（0 到 1 之间）。收入涨 5%，门票购买涨 12%，2.4 > 1，收入富有弹性。'),
          distractor('Inferior', '劣等品', 'Inferior goods have a negative income elasticity. Ticket purchases rose with income (+2.4), so they are normal, and strongly so.', '劣等品的收入弹性为负。门票购买随收入上升（+2.4），是正常品，而且反应很强。'),
          answer('Normal and income elastic (a luxury)', '正常品且收入富有弹性（奢侈品）'),
        ],
        correct: 2,
        explanation: text('An income elasticity above 1 means spending rises more than proportionally with income.', '收入弹性大于 1，说明需求增长比例高于收入增长比例。'),
        concept: text('An income elasticity above 1 means demand grows faster than income: a luxury.', '收入弹性大于 1 说明需求增长快于收入：奢侈品。'),
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
          distractor('$4 and 60 cups', '4 美元，60 杯', 'At $4 buyers want 60 but sellers offer only 20, a shortage of 40. A shortage pushes the price up, so $4 is not the equilibrium.', '4 美元时买家要 60 杯，卖家只供 20 杯，短缺 40 杯。短缺会推高价格，所以 4 美元不是均衡。'),
          answer('$6 and 40 cups', '6 美元，40 杯'),
          distractor('$8 and 60 cups', '8 美元，60 杯', 'At $8 sellers offer 60 but buyers want only 20, a surplus, and 60 is the amount offered, not the amount sold. A surplus pushes the price down.', '8 美元时卖家供 60 杯，买家只要 20 杯，出现过剩；而且 60 是供给量，不是成交量。过剩会压低价格。'),
        ],
        correct: 1,
        explanation: text('At $6, quantity demanded equals quantity supplied at 40 cups.', '在 6 美元时，需求量与供给量都等于 40 杯。'),
        concept: text('Equilibrium is the price at which quantity demanded equals quantity supplied.', '均衡价格是需求量等于供给量时的价格。'),
        takeaway: text('Equilibrium: $6, 40 cups', '均衡：6 美元，40 杯'),
      },
      {
        prompt: text('What is consumer surplus at equilibrium?', '均衡时的消费者剩余是多少？'),
        choices: [
          answer('$80', '80 美元'),
          distractor('$160', '160 美元', '$160 is the full rectangle 40 × $4. With a straight demand line the area is a triangle, so take half: ½ × 40 × $4 = $80.', '160 美元是长方形 40 × 4。需求是直线，面积是三角形，要取一半：½ × 40 × 4 = 80 美元。'),
          distractor('$240', '240 美元', '$240 = $6 × 40 is what buyers pay. Surplus is the extra value buyers get beyond what they pay: the triangle between demand and the $6 price.', '240 = 6 × 40 是买家的支出。剩余是买家在支付之外多得的价值，即需求曲线与 6 美元价格之间的三角形。'),
        ],
        correct: 0,
        explanation: text('Consumer surplus is the triangle below demand and above price: ½ × 40 × ($10 − $6) = $80.', '消费者剩余是需求曲线以下、价格以上的三角形：½ × 40 × (10 − 6) = 80 美元。'),
        concept: text('Consumer surplus is the area below demand and above the price: what buyers would pay minus what they do pay.', '消费者剩余是需求曲线以下、价格以上的面积：买家愿意支付的减去实际支付的。'),
        takeaway: text('CS = ½ × 40 × $4 = $80', 'CS = ½ × 40 × 4 = 80 美元'),
      },
      {
        prompt: text('What is total surplus (consumer plus producer) at equilibrium?', '均衡时的总剩余（消费者剩余加生产者剩余）是多少？'),
        choices: [
          distractor('$80', '80 美元', '$80 is only consumer surplus. Producers gain too: the triangle above supply and below $6 is ½ × 40 × ($6 − $2) = $80, for a total of $160.', '80 美元只是消费者剩余。生产者也有收益：供给曲线以上、6 美元以下的三角形为 ½ × 40 × (6 − 2) = 80 美元，总共 160 美元。'),
          distractor('$240', '240 美元', '$240 is total spending, a payment from buyers to sellers. Surplus measures net gains: $80 for buyers plus $80 for sellers.', '240 美元是总支出，是买家付给卖家的钱。剩余衡量的是净收益：买家 80 美元加卖家 80 美元。'),
          answer('$160', '160 美元'),
        ],
        correct: 2,
        explanation: text('Producer surplus is ½ × 40 × ($6 − $2) = $80, so total surplus is $80 + $80 = $160.', '生产者剩余为 ½ × 40 × (6 − 2) = 80 美元，总剩余为 80 + 80 = 160 美元。'),
        concept: text('Total surplus = consumer surplus + producer surplus, and it is largest at the competitive equilibrium.', '总剩余 = 消费者剩余 + 生产者剩余，在竞争均衡时最大。'),
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
          distractor('A shortage', '短缺', 'A shortage happens below equilibrium, when buyers want more than sellers offer. At a high price buyers want fewer umbrellas and sellers offer more, so umbrellas pile up: a surplus.', '短缺发生在价格低于均衡时。价格偏高时买家想买的更少、卖家想卖的更多，雨伞积压：这是过剩。'),
          answer('A surplus', '过剩'),
          distractor('No effect on quantity', '对数量没有影响', 'Both sides react to price: a higher price lowers quantity demanded and raises quantity supplied. The gap between them is the surplus.', '双方都会对价格作出反应：价格更高时需求量减少、供给量增加，两者之差就是过剩。'),
        ],
        correct: 1,
        explanation: text('At a price above equilibrium, quantity supplied exceeds quantity demanded: a surplus.', '价格高于均衡时，供给量大于需求量：出现过剩。'),
        concept: text('Above equilibrium, quantity supplied exceeds quantity demanded (a surplus); below it, there is a shortage.', '价格高于均衡时供给量大于需求量（过剩）；低于均衡时出现短缺。'),
        takeaway: text('Price above equilibrium → surplus', '价格高于均衡 → 过剩'),
      },
      {
        prompt: text('Rainy season raises demand, and a new factory raises supply. What must happen?', '雨季使需求增加，新工厂又使供给增加。一定会发生什么？'),
        choices: [
          answer('Quantity rises; price change is uncertain', '数量上升；价格变化不确定'),
          distractor('Price rises; quantity change is uncertain', '价格上升；数量变化不确定', 'That is the result when demand and supply move in opposite directions. Here both increase: both push quantity up, but they push price in opposite directions.', '那是需求和供给反方向移动时的结果。这里两者都增加：都推高数量，但对价格的推动方向相反。'),
          distractor('Both price and quantity rise', '价格和数量都上升', 'Price rises only if the demand increase is bigger than the supply increase, and the sizes are not given. Only the quantity increase is certain.', '只有需求增加大于供给增加时价格才上升，而题目没有给出幅度。只有数量增加是确定的。'),
        ],
        correct: 0,
        explanation: text('Both shifts raise equilibrium quantity. Their effects on price offset, so the price change is indeterminate.', '两次移动都提高均衡数量；对价格的作用相互抵消，因此价格变化不确定。'),
        concept: text('When demand and supply shift in the same direction, the quantity change is certain but the price change is not.', '需求和供给同方向移动时，数量变化确定，价格变化不确定。'),
        takeaway: text('D↑ and S↑ → Q↑, P uncertain', 'D↑ 且 S↑ → Q↑，P 不确定'),
      },
      {
        prompt: text('Instead, demand rises while a fabric shortage cuts supply. What must happen?', '如果需求增加的同时，面料短缺使供给减少，一定会发生什么？'),
        choices: [
          distractor('Quantity rises; price uncertain', '数量上升；价格不确定', 'That is the same-direction case. Here demand rises and supply falls: both push price up, while their effects on quantity cancel, so quantity is the uncertain one.', '那是同方向移动的情况。这里需求增加、供给减少：都推高价格，对数量的作用相互抵消，所以数量不确定。'),
          distractor('Price falls; quantity rises', '价格下降；数量上升', 'More demand pulls the price up, and less supply also pushes it up. Nothing here lowers the price.', '需求增加推高价格，供给减少也推高价格。这里没有任何因素会压低价格。'),
          answer('Price rises; quantity uncertain', '价格上升；数量不确定'),
        ],
        correct: 2,
        explanation: text('Higher demand and lower supply both raise price. Their effects on quantity offset, so quantity is indeterminate.', '需求增加和供给减少都推高价格；对数量的作用相互抵消，因此数量变化不确定。'),
        concept: text('When demand and supply shift in opposite directions, the price change is certain but the quantity change is not.', '需求和供给反方向移动时，价格变化确定，数量变化不确定。'),
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
          distractor('$8 and 40 cups', '8 美元，40 杯', 'If buyers paid $8 they would want only 20 cups, not 40. The tax lowers quantity: the market settles where buyers pay $2 more than sellers keep.', '如果买家付 8 美元，他们只想要 20 杯，而不是 40 杯。税收会降低成交量：市场停在买家支付比卖家实得多 2 美元的位置。'),
          distractor('$6 and 30 cups', '6 美元，30 杯', 'At 30 cups buyers are willing to pay $7, not $6. After the $2 tax sellers keep $5, and at $5 they supply exactly 30. So buyers pay $7.', '30 杯时买家愿付 7 美元，而不是 6 美元。扣除 2 美元税后卖家实得 5 美元，而 5 美元时他们恰好供给 30 杯。所以买家付 7 美元。'),
          answer('$7 and 30 cups', '7 美元，30 杯'),
        ],
        correct: 2,
        explanation: text('At 30 cups buyers pay $7 and sellers keep $5. At $5 sellers supply exactly 30, so the market clears.', '在 30 杯时，买家付 7 美元，卖家实得 5 美元；卖家在 5 美元时恰好供给 30 杯，市场出清。'),
        concept: text('A per-unit tax on sellers shifts supply up by the tax: buyers pay more, sellers keep less, and quantity falls.', '对卖家征收的单位税使供给曲线上移税额：买家付得更多，卖家实得更少，成交量下降。'),
        takeaway: text('Buyers pay $7, sellers keep $5, Q = 30', '买家付 7 美元，卖家得 5 美元，Q = 30'),
      },
      {
        prompt: text('How much tax revenue does the government collect each week?', '政府每周获得多少税收？'),
        choices: [
          answer('$60', '60 美元'),
          distractor('$80', '80 美元', '$2 × 40 uses the quantity before the tax. The tax cut sales to 30 cups, and only cups actually sold are taxed: $2 × 30 = $60.', '2 × 40 用的是征税前的数量。税收让销量降到 30 杯，只有实际售出的杯子才被征税：2 × 30 = 60 美元。'),
          distractor('$210', '210 美元', '$210 = $7 × 30 is everything buyers spend. Most of it goes to sellers ($5 per cup); only the $2 wedge per cup goes to the government.', '210 = 7 × 30 是买家的全部支出。其中大部分（每杯 5 美元）归卖家，只有每杯 2 美元的差额归政府。'),
        ],
        correct: 0,
        explanation: text('Tax revenue = $2 per cup × 30 cups = $60.', '税收 = 每杯 2 美元 × 30 杯 = 60 美元。'),
        concept: text('Tax revenue = tax per unit × quantity sold after the tax.', '税收收入 = 单位税额 × 征税后的成交量。'),
        takeaway: text('Tax revenue = $2 × 30 = $60', '税收 = 2 × 30 = 60 美元'),
      },
      {
        prompt: text('What is the deadweight loss of the tax?', '这项税收造成的无谓损失是多少？'),
        choices: [
          distractor('$60', '60 美元', 'The $60 of revenue moves from buyers and sellers to the government, so society still has it. The loss comes only from the 10 cups no longer sold.', '60 美元税收从买卖双方转移到政府，社会仍然拥有它。损失只来自不再售出的那 10 杯。'),
          answer('$10', '10 美元'),
          distractor('$20', '20 美元', '$20 = $2 × 10 is a rectangle. The lost trades form a triangle: the 31st cup loses nearly $2 of surplus but the 40th loses almost nothing, so take half: $10.', '20 = 2 × 10 是长方形。损失的交易构成三角形：第 31 杯损失接近 2 美元，第 40 杯几乎没有损失，所以取一半：10 美元。'),
        ],
        correct: 1,
        explanation: text('The 10 cups no longer traded each had value above cost. DWL = ½ × $2 × (40 − 30) = $10.', '不再成交的 10 杯本来价值高于成本。无谓损失 = ½ × 2 × (40 − 30) = 10 美元。'),
        concept: text('Deadweight loss is the surplus lost on trades that no longer happen; tax revenue is a transfer, not a loss.', '无谓损失是因交易不再发生而损失的剩余；税收收入是转移，不是损失。'),
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
          distractor('60 cups', '60 杯', '60 is everything domestic buyers want at $4. Domestic producers still supply 20 of those cups, so only the gap, 60 − 20 = 40, is imported.', '60 是国内买家在 4 美元时的全部需求。其中 20 杯仍由国内生产，只有缺口 60 − 20 = 40 需要进口。'),
          distractor('20 cups', '20 杯', '20 is what domestic sellers produce at $4. Imports fill the rest of what buyers want: 60 − 20 = 40.', '20 是国内卖家在 4 美元时的产量。进口要补足买家剩下的需求：60 − 20 = 40。'),
          answer('40 cups', '40 杯'),
        ],
        correct: 2,
        explanation: text('Imports = quantity demanded − domestic quantity supplied = 60 − 20 = 40.', '进口量 = 需求量 − 国内供给量 = 60 − 20 = 40。'),
        concept: text('With free trade at a world price below the domestic price, imports = domestic quantity demanded − domestic quantity supplied.', '自由贸易下，若世界价格低于国内价格，进口量 = 国内需求量 − 国内供给量。'),
        takeaway: text('Imports = 60 − 20 = 40', '进口 = 60 − 20 = 40'),
      },
      {
        prompt: text('A $2 tariff raises the domestic price to $6. How many cups are imported now?', '2 美元的关税把国内价格提高到 6 美元。现在进口多少杯？'),
        choices: [
          answer('0 cups', '0 杯'),
          distractor('40 cups', '40 杯', 'Imports would stay at 40 only if the price stayed at $4. The tariff raises the price to $6, where buyers want 40 and domestic sellers supply all 40 themselves.', '只有价格仍是 4 美元时进口才保持 40 杯。关税把价格提高到 6 美元，此时买家要 40 杯，国内卖家自己就能供给 40 杯。'),
          distractor('20 cups', '20 杯', 'At $6 buyers want 40 cups and domestic sellers supply 40. With no gap left, imports fall all the way to zero.', '6 美元时买家要 40 杯，国内卖家供给 40 杯。缺口为零，进口降为零。'),
        ],
        correct: 0,
        explanation: text('At $6, domestic quantity supplied equals quantity demanded at 40, so imports fall to zero. The tariff is prohibitive.', '在 6 美元时，国内供给量与需求量都为 40，进口降为零。这是禁止性关税。'),
        concept: text('A tariff raises the domestic price, which raises domestic production, lowers consumption and shrinks imports.', '关税提高国内价格，使国内产量增加、消费减少、进口缩小。'),
        takeaway: text('$2 tariff → domestic price $6, imports 0', '2 美元关税 → 国内价格 6 美元，进口为 0'),
      },
      {
        prompt: text('Compared with free trade at $4, which group gains from the tariff?', '与 4 美元的自由贸易相比，哪个群体从关税中获益？'),
        choices: [
          distractor('Domestic buyers', '国内买家', 'Buyers now pay $6 instead of $4 and buy 40 cups instead of 60, so consumer surplus falls.', '买家现在付 6 美元而不是 4 美元，购买量从 60 杯降到 40 杯，消费者剩余下降。'),
          answer('Domestic producers', '国内生产者'),
          distractor('Foreign exporters', '外国出口商', 'Foreign sellers lose all 40 cups they used to sell here. The tariff protects domestic producers from that competition.', '外国卖家失去了原来在这里卖出的全部 40 杯。关税保护国内生产者免受这种竞争。'),
        ],
        correct: 1,
        explanation: text('Domestic producers sell more at a higher price, so producer surplus rises. Consumer surplus falls by more, creating deadweight loss.', '国内生产者以更高价格卖出更多，生产者剩余增加；消费者剩余减少得更多，造成无谓损失。'),
        concept: text('A tariff transfers surplus from domestic consumers to domestic producers and creates deadweight loss.', '关税把剩余从国内消费者转移给国内生产者，并造成无谓损失。'),
        takeaway: text('Tariff helps domestic producers, hurts buyers', '关税有利于国内生产者，损害买家'),
      },
    ],
  },
];
