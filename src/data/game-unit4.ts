import { answer, distractor, text, type Mission } from './game-types';

export const unit4Missions: readonly Mission[] = [
  {
    id: '4.1',
    title: text('Name That Market', '辨认市场结构'),
    topic: text('Introduction to Imperfectly Competitive Markets', '不完全竞争市场导论'),
    scenario: text(
      'A town review board studies three industries. Classify each one by its number of firms, product type and barriers to entry.',
      '镇审查委员会研究三个行业。请根据企业数量、产品类型和进入壁垒为每个行业分类。',
    ),
    steps: [
      {
        prompt: text('One company supplies all the town’s tap water through a single pipe network. This is…', '一家公司通过唯一的管网为全镇供应自来水。这是……'),
        choices: [
          distractor('Oligopoly', '寡头垄断', 'Oligopoly has a few interdependent firms. Here there is only one.', '寡头垄断有少数相互依存的企业，这里只有一家。'),
          answer('Monopoly', '垄断'),
          distractor('Monopolistic competition', '垄断竞争', 'That needs many firms and easy entry.', '垄断竞争需要众多企业和容易进入。'),
        ],
        correct: 1,
        explanation: text('A single seller with no close substitutes and high barriers to entry is a monopoly. Here it is a natural monopoly.', '只有一家卖家、没有相近替代品、进入壁垒高，这是垄断；本例是自然垄断。'),
        takeaway: text('One seller, high barriers → monopoly', '单一卖家、高壁垒 → 垄断'),
      },
      {
        prompt: text('Dozens of restaurants offer different menus, and new ones open easily. This is…', '几十家餐厅提供不同菜单，新餐厅很容易开张。这是……'),
        choices: [
          answer('Monopolistic competition', '垄断竞争'),
          distractor('Perfect competition', '完全竞争', 'Perfect competition requires identical products. These menus differ.', '完全竞争要求产品相同，而这些菜单不同。'),
          distractor('Oligopoly', '寡头垄断', 'With dozens of firms and easy entry, no firm needs to watch rivals closely.', '有几十家企业且容易进入，企业之间不必紧盯对手。'),
        ],
        correct: 0,
        explanation: text('Many firms selling differentiated products with low barriers to entry is monopolistic competition.', '众多企业销售差异化产品、进入壁垒低，这是垄断竞争。'),
        takeaway: text('Many firms, differentiated → monopolistic competition', '企业众多、产品差异化 → 垄断竞争'),
      },
      {
        prompt: text('Three airlines serve the town’s only route, and each watches the others’ fares before changing its own. This is…', '三家航空公司经营该镇唯一的航线，每家调价前都会先看对手的票价。这是……'),
        choices: [
          distractor('Monopoly', '垄断', 'There are three sellers, not one.', '这里有三家卖家，而不是一家。'),
          distractor('Perfect competition', '完全竞争', 'Price takers do not need to react to rivals’ prices.', '价格接受者不需要对对手的价格作出反应。'),
          answer('Oligopoly', '寡头垄断'),
        ],
        correct: 2,
        explanation: text('A few large firms whose decisions depend on each other is an oligopoly. Interdependence is its defining feature.', '少数大企业的决策相互影响，这是寡头垄断，相互依存是其核心特征。'),
        takeaway: text('Few interdependent firms → oligopoly', '少数相互依存的企业 → 寡头垄断'),
      },
    ],
  },
  {
    id: '4.2',
    title: text('The Island Ferry', '海岛渡轮'),
    topic: text('Monopoly', '垄断'),
    scenario: text(
      'The only ferry to an island faces the demand schedule below. Its marginal cost is constant at $4 per trip, and it charges one price to everyone.',
      '去往海岛的唯一一家渡轮公司面临下表的需求。它的边际成本恒为每趟 4 美元，对所有人收取同一价格。',
    ),
    table: {
      caption: text('Daily demand for ferry trips', '每日渡轮需求'),
      columns: [text('Trips', '趟数'), text('Price', '价格'), text('Total revenue', '总收益')],
      rows: [[text('1'), text('$10'), text('$10')], [text('2'), text('$9'), text('$18')], [text('3'), text('$8'), text('$24')], [text('4'), text('$7'), text('$28')], [text('5'), text('$6'), text('$30')], [text('6'), text('$5'), text('$30')]],
    },
    steps: [
      {
        prompt: text('What is the marginal revenue of the third trip?', '第三趟的边际收益是多少？'),
        choices: [
          distractor('$8', '8 美元', 'To sell a third trip the ferry lowers the price on all trips. Use the change in total revenue.', '为卖出第三趟，渡轮要降低所有票价。应使用总收益的变化量。'),
          answer('$6', '6 美元'),
          distractor('$24', '24 美元', '$24 is total revenue. Subtract the total for 2 trips.', '24 美元是总收益，还要减去 2 趟时的总收益。'),
        ],
        correct: 1,
        explanation: text('MR = $24 − $18 = $6, which is below the $8 price because the firm must cut price on every unit.', 'MR = 24 − 18 = 6 美元，低于 8 美元的价格，因为企业要对每单位都降价。'),
        takeaway: text('MR₃ = $24 − $18 = $6 < P', 'MR₃ = 24 − 18 = 6 美元 < P'),
      },
      {
        prompt: text('What output and price maximize the ferry’s profit?', '使渡轮利润最大的产量和价格是多少？'),
        choices: [
          distractor('4 trips at $4', '4 趟，4 美元', 'Output is right, but the monopolist charges what buyers will pay for 4 trips.', '产量对了，但垄断者会收取买家愿意为 4 趟支付的价格。'),
          distractor('7 trips at $4', '7 趟，4 美元', 'P = MC is the efficient output, not the profit-maximizing one.', 'P = MC 是有效率的产量，不是利润最大化产量。'),
          answer('4 trips at $7', '4 趟，7 美元'),
        ],
        correct: 2,
        explanation: text('MR of the 4th trip is $28 − $24 = $4 = MC. The demand schedule shows buyers pay $7 for 4 trips.', '第 4 趟的 MR 为 28 − 24 = 4 美元 = MC。需求表显示 4 趟时买家愿付 7 美元。'),
        takeaway: text('MR = MC at 4 trips; price from demand = $7', '4 趟时 MR = MC；按需求定价 7 美元'),
      },
      {
        prompt: text('Compared with the efficient outcome where P = MC, the monopoly…', '与 P = MC 的有效率结果相比，垄断……'),
        choices: [
          answer('Produces less and creates deadweight loss', '产量更少，造成无谓损失'),
          distractor('Produces more at a lower price', '以更低价格生产更多', 'The monopoly restricts output to keep the price high.', '垄断者限制产量以维持高价。'),
          distractor('Is efficient because P = MR', '因为 P = MR 所以有效率', 'For a monopoly, P > MR = MC, so the last unit is worth more than it costs.', '对垄断者而言 P > MR = MC，最后一单位的价值高于其成本。'),
        ],
        correct: 0,
        explanation: text('Because P ($7) > MC ($4), trips worth more than their cost go unsold. That is the monopoly’s deadweight loss.', '因为 P（7 美元）> MC（4 美元），一些价值高于成本的航次没有成交，这就是垄断的无谓损失。'),
        takeaway: text('P > MC → too little output, DWL', 'P > MC → 产量过少，存在无谓损失'),
      },
    ],
  },
  {
    id: '4.3',
    title: text('Five Students, One Tutor', '五个学生，一位家教'),
    topic: text('Price Discrimination', '价格歧视'),
    scenario: text(
      'A tutor knows each student’s maximum willingness to pay for one session: $50, $40, $30, $20 and $10. Each session costs the tutor $25.',
      '一位家教知道每个学生为一节课愿意支付的最高价格：50、40、30、20 和 10 美元。每节课的成本为 25 美元。',
    ),
    steps: [
      {
        prompt: text('Which condition lets the tutor charge each student a different price?', '哪个条件让家教能对每个学生收取不同的价格？'),
        choices: [
          distractor('All students value tutoring equally', '所有学生对辅导的估值相同', 'Price discrimination needs buyers who value the good differently.', '价格歧视需要买家对商品的估值不同。'),
          answer('Students cannot resell sessions', '学生不能转售课程'),
          distractor('Many tutors offer the same service', '许多家教提供相同服务', 'Price discrimination requires some market power.', '价格歧视需要一定的市场势力。'),
        ],
        correct: 1,
        explanation: text('Price discrimination needs market power, the ability to identify buyers’ values, and no resale between buyers.', '价格歧视需要市场势力、识别买家估值的能力，以及买家之间无法转售。'),
        takeaway: text('Market power + sorting buyers + no resale', '市场势力 + 区分买家 + 不能转售'),
      },
      {
        prompt: text('With perfect price discrimination, how many sessions does the tutor sell?', '在完全价格歧视下，家教卖出几节课？'),
        choices: [
          distractor('2 sessions', '2 节', 'The tutor no longer has to cut the price for everyone to sell one more.', '家教多卖一节时，不必再对所有人降价。'),
          distractor('5 sessions', '5 节', 'Students valuing a session at $20 or $10 pay less than its $25 cost.', '估值为 20 或 10 美元的学生付的钱低于 25 美元成本。'),
          answer('3 sessions', '3 节'),
        ],
        correct: 2,
        explanation: text('The tutor sells to every student whose value is at least $25: the $50, $40 and $30 students.', '家教会卖给所有估值不低于 25 美元的学生：估值 50、40、30 美元的三位。'),
        takeaway: text('Sell where value ≥ MC → 3 sessions', '估值 ≥ MC 时出售 → 3 节'),
      },
      {
        prompt: text('Under perfect price discrimination, what is consumer surplus?', '在完全价格歧视下，消费者剩余是多少？'),
        choices: [
          answer('$0', '0 美元'),
          distractor('$45', '45 美元', '$45 is the tutor’s profit: $25 + $15 + $5.', '45 美元是家教的利润：25 + 15 + 5。'),
          distractor('$30', '30 美元', 'Each student pays exactly their maximum willingness to pay.', '每个学生都恰好支付自己的最高意愿价格。'),
        ],
        correct: 0,
        explanation: text('Each student pays their full willingness to pay, so the tutor captures all surplus. Output matches the efficient level.', '每个学生都支付全部意愿价格，家教获得全部剩余；产量与有效率水平一致。'),
        takeaway: text('Perfect price discrimination → CS = $0', '完全价格歧视 → 消费者剩余 = 0'),
      },
    ],
  },
  {
    id: '4.4',
    title: text('A New Tea Brand', '新茶饮品牌'),
    topic: text('Monopolistic Competition', '垄断竞争'),
    scenario: text(
      'A new tea shop with a unique flavor earns economic profit in a monopolistically competitive market. Entry is easy.',
      '一家口味独特的新茶饮店在垄断竞争市场中获得经济利润。进入这个市场很容易。',
    ),
    steps: [
      {
        prompt: text('As rivals enter with similar drinks, what happens to the shop’s demand curve?', '对手推出相似饮品进入后，这家店的需求曲线如何变化？'),
        choices: [
          distractor('It shifts right', '右移', 'New rivals take some of the shop’s customers.', '新对手会抢走部分顾客。'),
          answer('It shifts left', '左移'),
          distractor('It becomes perfectly horizontal', '变成完全水平', 'Products remain differentiated, so demand stays downward sloping.', '产品仍有差异，需求曲线依然向下倾斜。'),
        ],
        correct: 1,
        explanation: text('Entry divides the market among more sellers, decreasing demand for each existing firm.', '进入使市场被更多卖家瓜分，每家现有企业的需求都下降。'),
        takeaway: text('Entry → each firm’s demand shifts left', '进入 → 每家企业需求左移'),
      },
      {
        prompt: text('In long-run equilibrium, the shop’s price equals…', '长期均衡时，这家店的价格等于……'),
        choices: [
          answer('Its average total cost', '平均总成本'),
          distractor('Its marginal cost', '边际成本', 'With downward-sloping demand, P > MR = MC.', '需求向下倾斜时，P > MR = MC。'),
          distractor('Its minimum average total cost', '最低平均总成本', 'Demand is tangent to ATC on the falling part of ATC.', '需求曲线与 ATC 相切于 ATC 下降的部分。'),
        ],
        correct: 0,
        explanation: text('Entry continues until demand is tangent to ATC, so P = ATC and economic profit is zero.', '进入持续到需求与 ATC 相切为止，此时 P = ATC，经济利润为零。'),
        takeaway: text('Long run: P = ATC, zero economic profit', '长期：P = ATC，经济利润为零'),
      },
      {
        prompt: text('Compared with perfect competition in the long run, the shop has…', '与长期完全竞争相比，这家店存在……'),
        choices: [
          distractor('Positive long-run economic profit', '长期正的经济利润', 'Easy entry removes profit in the long run.', '容易进入会使长期利润消失。'),
          distractor('Allocative efficiency, P = MC', '配置效率，P = MC', 'Its price stays above marginal cost.', '它的价格高于边际成本。'),
          answer('Excess capacity', '过剩产能'),
        ],
        correct: 2,
        explanation: text('It produces less than the output at minimum ATC, so it has excess capacity and P > MC.', '它的产量低于最低 ATC 对应的产量，因此存在过剩产能，且 P > MC。'),
        takeaway: text('Excess capacity and P > MC', '过剩产能，且 P > MC'),
      },
    ],
  },
  {
    id: '4.5',
    title: text('Two Cafés, Two Prices', '两家咖啡馆，两种定价'),
    topic: text('Oligopoly and Game Theory', '寡头垄断与博弈论'),
    scenario: text(
      'Ana’s Café and Ben’s Café each choose a High or Low price at the same time. The table shows daily profits as (Ana, Ben). Each knows the table.',
      'Ana 咖啡馆和 Ben 咖啡馆同时选择高价或低价。表格给出每日利润（Ana，Ben），双方都知道这张表。',
    ),
    table: {
      caption: text('Payoffs in dollars: (Ana, Ben)', '收益（美元）：（Ana，Ben）'),
      columns: [text(''), text('Ben: High', 'Ben：高价'), text('Ben: Low', 'Ben：低价')],
      rows: [
        [text('Ana: High', 'Ana：高价'), text('60, 60'), text('20, 80')],
        [text('Ana: Low', 'Ana：低价'), text('80, 20'), text('40, 40')],
      ],
      rowHeaders: true,
    },
    steps: [
      {
        prompt: text('Does Ana have a dominant strategy?', 'Ana 有占优策略吗？'),
        choices: [
          answer('Yes: Low', '有：低价'),
          distractor('Yes: High', '有：高价', 'Compare Ana’s payoffs: if Ben picks High, 80 > 60; if Ben picks Low, 40 > 20.', '比较 Ana 的收益：Ben 选高价时 80 > 60；Ben 选低价时 40 > 20。'),
          distractor('No dominant strategy', '没有占优策略', 'Check whether one choice is better for Ana no matter what Ben does.', '检查是否有一个选择无论 Ben 怎么选都对 Ana 更好。'),
        ],
        correct: 0,
        explanation: text('Low gives Ana more whatever Ben does (80 > 60 and 40 > 20), so Low is her dominant strategy.', '无论 Ben 怎么选，低价都让 Ana 赚得更多（80 > 60，40 > 20），所以低价是她的占优策略。'),
        takeaway: text('Ana’s dominant strategy: Low', 'Ana 的占优策略：低价'),
      },
      {
        prompt: text('What is the Nash equilibrium?', '纳什均衡是什么？'),
        choices: [
          distractor('Both choose High', '双方都选高价', 'At (High, High), each could gain by switching to Low.', '在（高，高）时，任何一方改选低价都能获益。'),
          answer('Both choose Low', '双方都选低价'),
          distractor('Ana Low, Ben High', 'Ana 低价，Ben 高价', 'Ben would switch to Low to earn 40 instead of 20.', 'Ben 会改选低价，以赚 40 而不是 20。'),
        ],
        correct: 1,
        explanation: text('At (Low, Low), neither café can gain by changing its choice alone. Both earn 40.', '在（低，低）时，任何一方单独改变选择都不能获益，双方各赚 40。'),
        takeaway: text('Nash equilibrium: (Low, Low) = (40, 40)', '纳什均衡：（低，低）=（40，40）'),
      },
      {
        prompt: text('If the cafés could make a binding agreement, which outcome maximizes their combined profit?', '如果两家能达成有约束力的协议，哪个结果使它们的利润总和最大？'),
        choices: [
          distractor('Both choose Low', '双方都选低价', 'That totals only 80.', '这样总和只有 80。'),
          distractor('One High, one Low', '一家高价，一家低价', 'That totals 100.', '这样总和为 100。'),
          answer('Both choose High', '双方都选高价'),
        ],
        correct: 2,
        explanation: text('(High, High) totals 120. Without enforcement each has an incentive to cheat, a prisoner’s dilemma.', '（高，高）总和为 120。若无约束，双方都有背叛的动机，这就是囚徒困境。'),
        takeaway: text('Collusion (High, High) = 120, but each wants to cheat', '合谋（高，高）= 120，但各自都想背叛'),
      },
    ],
  },
];
