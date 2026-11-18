import { answer, distractor, text, type Mission } from './game-types';

export const unit6Missions: readonly Mission[] = [
  {
    id: '6.1',
    title: text('How Many Fireworks Nights?', '办几场烟花表演？'),
    topic: text('Socially Efficient and Inefficient Market Outcomes', '社会有效与无效的市场结果'),
    scenario: text(
      'A city plans weekend festivals. The table shows the marginal social benefit and marginal social cost of each festival.',
      '某城市计划举办周末节庆活动。表格给出每场活动的边际社会收益与边际社会成本。',
    ),
    table: {
      caption: text('Marginal social benefit and cost', '边际社会收益与成本'),
      columns: [text('Festival', '第几场'), text('MSB', 'MSB'), text('MSC', 'MSC')],
      rows: [[text('1st', '第 1'), text('$50'), text('$10')], [text('2nd', '第 2'), text('$40'), text('$20')], [text('3rd', '第 3'), text('$30'), text('$30')], [text('4th', '第 4'), text('$20'), text('$40')], [text('5th', '第 5'), text('$10'), text('$50')]],
    },
    steps: [
      {
        prompt: text('What is the socially efficient number of festivals?', '社会有效的活动场数是多少？'),
        choices: [
          distractor('5 festivals', '5 场', 'The 4th and 5th festivals cost society more than they are worth.', '第 4、5 场的社会成本高于其价值。'),
          answer('3 festivals', '3 场'),
          distractor('1 festival', '1 场', 'The 2nd festival still adds $40 of benefit for $20 of cost.', '第 2 场仍以 20 美元成本带来 40 美元收益。'),
        ],
        correct: 1,
        explanation: text('Efficiency is where MSB = MSC: the 3rd festival, at $30 each.', '社会有效在 MSB = MSC 处：第 3 场，两者都为 30 美元。'),
        takeaway: text('MSB = MSC at 3 festivals', '3 场时 MSB = MSC'),
      },
      {
        prompt: text('If the city holds 5 festivals, what is the deadweight loss?', '如果城市举办 5 场，无谓损失是多少？'),
        choices: [
          distractor('$40', '40 美元', 'That counts only the 5th festival. The 4th also costs more than it is worth.', '这只算了第 5 场，第 4 场的成本也高于价值。'),
          distractor('$20', '20 美元', 'That counts only the 4th festival.', '这只算了第 4 场。'),
          answer('$60', '60 美元'),
        ],
        correct: 2,
        explanation: text('The 4th loses $40 − $20 = $20 and the 5th loses $50 − $10 = $40, for a total of $60.', '第 4 场损失 40 − 20 = 20 美元，第 5 场损失 50 − 10 = 40 美元，共 60 美元。'),
        takeaway: text('Overproduction DWL = $20 + $40 = $60', '过度生产的无谓损失 = 20 + 40 = 60 美元'),
      },
      {
        prompt: text('Which condition defines allocative efficiency for society?', '哪个条件定义了社会的配置效率？'),
        choices: [
          answer('MSB = MSC', 'MSB = MSC'),
          distractor('MPB = MPC', 'MPB = MPC', 'Private benefit and cost leave out effects on third parties.', '私人收益和成本忽略了对第三方的影响。'),
          distractor('P = minimum ATC', 'P = 最低 ATC', 'That is productive efficiency, which concerns cost, not the right quantity.', '这是生产效率，关注成本，而不是数量是否恰当。'),
        ],
        correct: 0,
        explanation: text('Society’s welfare is maximized where marginal social benefit equals marginal social cost.', '当边际社会收益等于边际社会成本时，社会福利最大。'),
        takeaway: text('Allocative efficiency: MSB = MSC', '配置效率：MSB = MSC'),
      },
    ],
  },
  {
    id: '6.2',
    title: text('Smoke over the River', '河上的烟雾'),
    topic: text('Externalities', '外部性'),
    scenario: text(
      'A paint factory releases fumes. Each can of paint creates a constant $4 of harm to neighbors that the factory does not pay. The graph shows demand (MPB = MSB), MPC and MSC.',
      '一家油漆厂排放废气。每罐油漆给邻居带来 4 美元的损害，工厂并不承担。图中有需求（MPB = MSB）、MPC 和 MSC。',
    ),
    figure: {
      file: 'externality-paint.svg',
      description: text(
        'Quantity of paint from 0 to 12 on the horizontal axis and price from $0 to $20 on the vertical axis. Demand (MPB = MSB) falls from $20. MPC rises from $4 and MSC runs $4 above it. Demand meets MPC at 8 cans and $12, and meets MSC at 6 cans and $14.',
        '横轴为油漆数量 0 到 12，纵轴为价格 0 到 20 美元。需求（MPB = MSB）从 20 美元向下倾斜；MPC 从 4 美元向上，MSC 比它高 4 美元。需求与 MPC 交于（8 罐，12 美元），与 MSC 交于（6 罐，14 美元）。',
      ),
    },
    steps: [
      {
        prompt: text('Compared with the socially optimal quantity, the market produces…', '与社会最优数量相比，市场的产量……'),
        choices: [
          distractor('Too little: 6 instead of 8', '太少：6 而不是 8', 'The market follows MPC and ignores the harm. Read where demand meets MPC.', '市场依据 MPC 而忽略损害。看需求与 MPC 的交点。'),
          answer('Too much: 8 instead of 6', '太多：8 而不是 6'),
          distractor('Exactly the optimal amount', '恰好是最优数量', 'The external cost is left out of the market’s decision.', '市场决策没有计入外部成本。'),
        ],
        correct: 1,
        explanation: text('The market produces where MPB = MPC (8 cans). The social optimum is where MSB = MSC (6 cans).', '市场在 MPB = MPC 处生产（8 罐），社会最优在 MSB = MSC 处（6 罐）。'),
        takeaway: text('Negative externality → overproduction (8 > 6)', '负外部性 → 过度生产（8 > 6）'),
      },
      {
        prompt: text('Which per-unit tax would move the market to the social optimum?', '多少的单位税能让市场达到社会最优？'),
        choices: [
          distractor('$2 per can', '每罐 2 美元', 'The tax should equal the full marginal external cost.', '税额应等于全部的边际外部成本。'),
          distractor('$14 per can', '每罐 14 美元', '$14 is the socially optimal price, not the size of the tax.', '14 美元是社会最优价格，不是税额。'),
          answer('$4 per can', '每罐 4 美元'),
        ],
        correct: 2,
        explanation: text('A Pigouvian tax equal to the $4 marginal external cost shifts MPC up to MSC.', '等于 4 美元边际外部成本的庇古税会把 MPC 上移到 MSC。'),
        takeaway: text('Pigouvian tax = marginal external cost = $4', '庇古税 = 边际外部成本 = 4 美元'),
      },
      {
        prompt: text('What is the deadweight loss at the market outcome?', '市场结果下的无谓损失是多少？'),
        choices: [
          answer('$4', '4 美元'),
          distractor('$8', '8 美元', 'Deadweight loss is a triangle. Multiply by ½.', '无谓损失是三角形面积，要乘以 ½。'),
          distractor('$32', '32 美元', '$4 × 8 is the total external cost, not the deadweight loss.', '4 × 8 是总外部成本，不是无谓损失。'),
        ],
        correct: 0,
        explanation: text('The triangle between MSC and MSB from 6 to 8 cans: ½ × (8 − 6) × $4 = $4.', 'MSC 与 MSB 之间、6 到 8 罐的三角形：½ × (8 − 6) × 4 = 4 美元。'),
        takeaway: text('DWL = ½ × 2 × $4 = $4', '无谓损失 = ½ × 2 × 4 = 4 美元'),
      },
    ],
  },
  {
    id: '6.3',
    title: text('Three Goods by the Harbor', '港口边的三种物品'),
    topic: text('Public and Private Goods', '公共产品与私人产品'),
    scenario: text(
      'A harbor town reviews three goods: a fireworks show over the bay, fish in unregulated open waters, and ice cream sold at the pier.',
      '一个港口小镇研究三种物品：海湾上空的烟花表演、无监管公海中的鱼，以及码头出售的冰淇淋。',
    ),
    steps: [
      {
        prompt: text('The fireworks show is nonrival and nonexcludable. It is…', '烟花表演具有非竞争性和非排他性。它是……'),
        choices: [
          distractor('A private good', '私人产品', 'Private goods are rival and excludable, like ice cream.', '私人产品具有竞争性和排他性，比如冰淇淋。'),
          answer('A public good', '公共产品'),
          distractor('A common resource', '公共资源', 'Common resources are rival. One viewer does not reduce another’s view.', '公共资源具有竞争性，而一个人观看并不影响他人观看。'),
        ],
        correct: 1,
        explanation: text('Anyone around the bay can watch, and one person watching does not reduce another’s enjoyment.', '海湾周围的人都能观看，一个人观看也不会减少别人的享受。'),
        takeaway: text('Nonrival + nonexcludable → public good', '非竞争 + 非排他 → 公共产品'),
      },
      {
        prompt: text('Why would a private firm likely provide too few fireworks shows?', '为什么私人企业很可能提供过少的烟花表演？'),
        choices: [
          distractor('Fireworks have no benefit', '烟花没有收益', 'People value the show; the problem is collecting payment.', '人们看重表演，问题在于收不到钱。'),
          distractor('Shows are rival', '表演具有竞争性', 'The show is nonrival, which is not what discourages a firm.', '表演是非竞争性的，这不是阻碍企业的原因。'),
          answer('People can watch without paying', '人们不付钱也能观看'),
        ],
        correct: 2,
        explanation: text('Nonexcludability creates the free-rider problem, so private firms cannot collect enough revenue.', '非排他性带来搭便车问题，私人企业无法获得足够收入。'),
        takeaway: text('Free riders → public goods underprovided', '搭便车 → 公共产品供给不足'),
      },
      {
        prompt: text('Fish in the unregulated open waters are…', '无监管公海中的鱼是……'),
        choices: [
          answer('Rival but nonexcludable', '有竞争性但非排他'),
          distractor('Nonrival and excludable', '非竞争且排他', 'A fish caught by one boat cannot be caught by another.', '一条鱼被一条船捕到，就不能再被别的船捕到。'),
          distractor('A pure public good', '纯公共产品', 'Fish are used up when caught, so they are rival.', '鱼被捕后就被消耗了，因此具有竞争性。'),
        ],
        correct: 0,
        explanation: text('A common resource is rival but nonexcludable, which leads to overuse: the tragedy of the commons.', '公共资源有竞争性但非排他，容易被过度使用，即公地悲剧。'),
        takeaway: text('Rival + nonexcludable → common resource, overused', '竞争 + 非排他 → 公共资源，被过度使用'),
      },
    ],
  },
  {
    id: '6.4',
    title: text('Regulating the Power Company', '监管电力公司'),
    topic: text('The Effects of Government Intervention in Different Market Structures', '政府干预不同市场结构的影响'),
    scenario: text(
      'A natural-monopoly power company would charge $12 if unregulated. At the output where P = MC, the price would be $6 but ATC would be $9. At the output where P = ATC, the price would be $8.',
      '一家自然垄断电力公司若不受监管会定价 12 美元。在 P = MC 的产量处，价格为 6 美元，但 ATC 为 9 美元；在 P = ATC 的产量处，价格为 8 美元。',
    ),
    steps: [
      {
        prompt: text('Which regulated price gives the allocatively efficient output?', '哪个监管价格能带来配置有效的产量？'),
        choices: [
          distractor('$8', '8 美元', '$8 is the fair-return price, where P = ATC.', '8 美元是公平回报价格，即 P = ATC。'),
          answer('$6', '6 美元'),
          distractor('$12', '12 美元', 'That is the unregulated monopoly price, where P > MC.', '这是不受监管的垄断价格，P > MC。'),
        ],
        correct: 1,
        explanation: text('Allocative efficiency requires P = MC, which occurs at a price of $6.', '配置效率要求 P = MC，即价格为 6 美元。'),
        takeaway: text('Socially optimal price: P = MC = $6', '社会最优价格：P = MC = 6 美元'),
      },
      {
        prompt: text('At the $6 price, what happens to the company?', '在 6 美元的价格下，公司会怎样？'),
        choices: [
          distractor('It earns economic profit', '获得经济利润', 'Compare the $6 price with ATC of $9.', '比较 6 美元价格与 9 美元的 ATC。'),
          distractor('It earns zero economic profit', '经济利润为零', 'Zero profit happens at P = ATC, the $8 fair-return price.', '利润为零发生在 P = ATC，即 8 美元的公平回报价格。'),
          answer('It suffers losses and needs a subsidy', '亏损，需要补贴'),
        ],
        correct: 2,
        explanation: text('With P ($6) below ATC ($9), the firm loses $3 per unit. It would need a subsidy to stay open long term.', 'P（6 美元）低于 ATC（9 美元），每单位亏 3 美元，长期需要补贴才能维持经营。'),
        takeaway: text('P = MC < ATC → losses for a natural monopoly', 'P = MC < ATC → 自然垄断亏损'),
      },
      {
        prompt: text('Instead, the government leaves the price alone and charges the firm a lump-sum tax. What happens to output?', '如果政府不管制价格，而是征收一次性总额税，产量会怎样？'),
        choices: [
          answer('Output does not change', '产量不变'),
          distractor('Output decreases', '产量减少', 'A per-unit tax raises MC. A lump-sum tax is a fixed cost.', '单位税会提高 MC，而一次性总额税是固定成本。'),
          distractor('Output increases', '产量增加', 'A tax does not raise marginal revenue.', '税收不会提高边际收益。'),
        ],
        correct: 0,
        explanation: text('A lump-sum tax does not change MR or MC, so the profit-maximizing output and price stay the same; only profit falls.', '一次性总额税不改变 MR 和 MC，所以利润最大化的产量和价格不变，只是利润减少。'),
        takeaway: text('Lump-sum tax → same output and price, lower profit', '一次性总额税 → 产量价格不变，利润减少'),
      },
    ],
  },
  {
    id: '6.5',
    title: text('Who Pays What Share?', '谁承担多大比例？'),
    topic: text('Inequality', '经济不平等'),
    scenario: text(
      'A country reviews its taxes and income data. Under its sales tax, a family earning $20,000 pays $2,000, and a family earning $100,000 pays $5,000.',
      '某国审视其税收与收入数据。在消费税下，年收入 20,000 美元的家庭缴税 2,000 美元，年收入 100,000 美元的家庭缴税 5,000 美元。',
    ),
    steps: [
      {
        prompt: text('As a share of income, this sales tax is…', '按占收入的比例计算，这项消费税是……'),
        choices: [
          distractor('Progressive', '累进税', 'The higher-income family pays more dollars but a smaller share: 5% vs 10%.', '高收入家庭缴的钱更多，但占比更小：5% 对 10%。'),
          answer('Regressive', '累退税'),
          distractor('Proportional', '比例税', 'A proportional tax takes the same share from every income.', '比例税对所有收入征收相同比例。'),
        ],
        correct: 1,
        explanation: text('The lower-income family pays 10% and the higher-income family 5%. A falling share means regressive.', '低收入家庭缴 10%，高收入家庭缴 5%。占比随收入下降，属于累退税。'),
        takeaway: text('Share falls as income rises → regressive', '税负占比随收入上升而下降 → 累退'),
      },
      {
        prompt: text('The country’s Gini coefficient rises from 0.35 to 0.42. Income has become…', '该国基尼系数从 0.35 升到 0.42。收入分配变得……'),
        choices: [
          answer('Less equal', '更不平均'),
          distractor('More equal', '更平均', 'A Gini of 0 is perfect equality. Moving away from 0 means less equal.', '基尼系数为 0 代表完全平等，离 0 越远越不平等。'),
          distractor('Higher on average', '平均水平更高', 'The Gini measures distribution, not the level of income.', '基尼系数衡量分配，而不是收入水平。'),
        ],
        correct: 0,
        explanation: text('A higher Gini coefficient means a less equal income distribution, and the Lorenz curve bows further from the line of equality.', '基尼系数升高表示收入分配更不平等，洛伦兹曲线离平等线更远。'),
        takeaway: text('Gini ↑ → more inequality', '基尼系数 ↑ → 更不平等'),
      },
      {
        prompt: text('Which policy would most directly reduce income inequality?', '哪项政策最直接地减少收入不平等？'),
        choices: [
          distractor('Raise the regressive sales tax', '提高累退的消费税', 'That takes a larger share from lower-income families.', '这会从低收入家庭拿走更大比例。'),
          distractor('Cut income tax rates on the top bracket', '降低最高档的所得税率', 'That raises after-tax income most for the highest earners.', '这会使最高收入者的税后收入增加最多。'),
          answer('Expand transfers to low-income families', '扩大对低收入家庭的转移支付'),
        ],
        correct: 2,
        explanation: text('Transfers to lower-income households and progressive taxes reduce the gap in after-tax income.', '对低收入家庭的转移支付和累进税会缩小税后收入差距。'),
        takeaway: text('Transfers and progressive taxes reduce inequality', '转移支付和累进税减少不平等'),
      },
    ],
  },
];
