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
          distractor('Oligopoly', '寡头垄断', 'Oligopoly needs a few firms that watch each other. With only one supplier and no rivals, the market is a monopoly.', '寡头垄断需要几家相互关注的企业。只有一家供应商、没有对手，这是垄断。'),
          answer('Monopoly', '垄断'),
          distractor('Monopolistic competition', '垄断竞争', 'Monopolistic competition has many firms and easy entry. A single pipe network makes entry nearly impossible, so this is a (natural) monopoly.', '垄断竞争有许多企业且容易进入。唯一的管网让进入几乎不可能，所以这是（自然）垄断。'),
        ],
        correct: 1,
        explanation: text('A single seller with no close substitutes and high barriers to entry is a monopoly. Here it is a natural monopoly.', '只有一家卖家、没有相近替代品、进入壁垒高，这是垄断；本例是自然垄断。'),
        concept: text('Market structures are classified by the number of firms, the type of product and the barriers to entry.', '市场结构按企业数量、产品类型和进入壁垒分类。'),
        takeaway: text('One seller, high barriers → monopoly', '单一卖家、高壁垒 → 垄断'),
      },
      {
        prompt: text('Dozens of restaurants offer different menus, and new ones open easily. This is…', '几十家餐厅提供不同菜单，新餐厅很容易开张。这是……'),
        choices: [
          answer('Monopolistic competition', '垄断竞争'),
          distractor('Perfect competition', '完全竞争', 'Perfect competition needs identical products, so no firm can charge more than the others. Different menus give each restaurant some pricing power: monopolistic competition.', '完全竞争要求产品相同，谁也不能比别人收更高价格。不同的菜单让每家餐厅有一定定价权：这是垄断竞争。'),
          distractor('Oligopoly', '寡头垄断', 'Oligopoly has a few large firms that must react to each other. With dozens of restaurants and easy entry, no single rival’s move matters much.', '寡头垄断是几家大企业必须相互回应。有几十家餐厅且进入容易，单个对手的行动影响不大。'),
        ],
        correct: 0,
        explanation: text('Many firms selling differentiated products with low barriers to entry is monopolistic competition.', '众多企业销售差异化产品、进入壁垒低，这是垄断竞争。'),
        concept: text('Monopolistic competition: many firms, differentiated products, low barriers to entry.', '垄断竞争：企业众多、产品有差异、进入壁垒低。'),
        takeaway: text('Many firms, differentiated → monopolistic competition', '企业众多、产品差异化 → 垄断竞争'),
      },
      {
        prompt: text('Three airlines serve the town’s only route, and each watches the others’ fares before changing its own. This is…', '三家航空公司经营该镇唯一的航线，每家调价前都会先看对手的票价。这是……'),
        choices: [
          distractor('Monopoly', '垄断', 'A monopoly has one seller. Three airlines on the route means rivals exist, and each reacts to the others.', '垄断只有一家卖家。这条航线有三家航空公司，存在对手，并且相互回应。'),
          distractor('Perfect competition', '完全竞争', 'In perfect competition firms are price takers and never need to watch a rival’s price. Watching and reacting to rivals is the mark of oligopoly.', '完全竞争中企业是价格接受者，无需关注对手价格。关注并回应对手是寡头垄断的标志。'),
          answer('Oligopoly', '寡头垄断'),
        ],
        correct: 2,
        explanation: text('A few large firms whose decisions depend on each other is an oligopoly. Interdependence is its defining feature.', '少数大企业的决策相互影响，这是寡头垄断，相互依存是其核心特征。'),
        concept: text('Oligopoly: a few firms whose decisions depend on each other (interdependence).', '寡头垄断：少数企业，决策相互依存。'),
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
          distractor('$8', '8 美元', '$8 is the price of each of the 3 trips, but going from 2 to 3 trips also cuts the price of the first 2 trips by $1 each. Extra revenue = $24 − $18 = $6.', '8 美元是 3 趟中每趟的价格，但从 2 趟增加到 3 趟，前 2 趟也各降价 1 美元。新增收入 = 24 − 18 = 6 美元。'),
          answer('$6', '6 美元'),
          distractor('$24', '24 美元', '$24 is total revenue from all 3 trips. Marginal revenue is the change from adding the third trip: $24 − $18 = $6.', '24 美元是 3 趟的总收益。边际收益是增加第三趟带来的变化：24 − 18 = 6 美元。'),
        ],
        correct: 1,
        explanation: text('MR = $24 − $18 = $6, which is below the $8 price because the firm must cut price on every unit.', 'MR = 24 − 18 = 6 美元，低于 8 美元的价格，因为企业要对每单位都降价。'),
        concept: text('For a single-price monopolist MR < P, because selling one more unit means lowering the price on every unit.', '对单一定价的垄断者而言 MR < P，因为多卖一单位意味着对所有单位降价。'),
        takeaway: text('MR₃ = $24 − $18 = $6 < P', 'MR₃ = 24 − 18 = 6 美元 < P'),
      },
      {
        prompt: text('What output and price maximize the ferry’s profit?', '使渡轮利润最大的产量和价格是多少？'),
        choices: [
          distractor('4 trips at $4', '4 趟，4 美元', '4 trips is right (MR = MC = $4), but $4 is the cost, not the price. Buyers will pay $7 for 4 trips, so the monopolist charges $7.', '4 趟是对的（MR = MC = 4 美元），但 4 美元是成本，不是价格。买家愿为 4 趟支付 7 美元，所以垄断者收 7 美元。'),
          distractor('7 trips at $4', '7 趟，4 美元', '7 trips at $4 is where P = MC, the efficient outcome. The monopolist stops earlier, at MR = MC, because trips beyond 4 add less revenue than they cost.', '7 趟、4 美元是 P = MC 的有效率结果。垄断者在 MR = MC 处更早停止，因为第 4 趟之后的航次带来的收入低于成本。'),
          answer('4 trips at $7', '4 趟，7 美元'),
        ],
        correct: 2,
        explanation: text('MR of the 4th trip is $28 − $24 = $4 = MC. The demand schedule shows buyers pay $7 for 4 trips.', '第 4 趟的 MR 为 28 − 24 = 4 美元 = MC。需求表显示 4 趟时买家愿付 7 美元。'),
        concept: text('A monopolist chooses output where MR = MC, then charges the price on the demand curve at that output.', '垄断者在 MR = MC 处选择产量，再按需求曲线上该产量对应的价格定价。'),
        takeaway: text('MR = MC at 4 trips; price from demand = $7', '4 趟时 MR = MC；按需求定价 7 美元'),
      },
      {
        prompt: text('Compared with the efficient outcome where P = MC, the monopoly…', '与 P = MC 的有效率结果相比，垄断……'),
        choices: [
          answer('Produces less and creates deadweight loss', '产量更少，造成无谓损失'),
          distractor('Produces more at a lower price', '以更低价格生产更多', 'A monopoly restricts output to keep the price high: 4 trips at $7, compared with 7 trips at $4 when P = MC.', '垄断者限制产量以维持高价：4 趟、7 美元，而 P = MC 时为 7 趟、4 美元。'),
          distractor('Is efficient because P = MR', '因为 P = MR 所以有效率', 'For a monopoly P is above MR, and efficiency needs P = MC. At 4 trips riders value a trip at $7 but it costs only $4, so more trips would add value.', '垄断者的 P 高于 MR，而效率要求 P = MC。4 趟时乘客对一趟的估值是 7 美元，成本只有 4 美元，多开航次会增加价值。'),
        ],
        correct: 0,
        explanation: text('Because P ($7) > MC ($4), trips worth more than their cost go unsold. That is the monopoly’s deadweight loss.', '因为 P（7 美元）> MC（4 美元），一些价值高于成本的航次没有成交，这就是垄断的无谓损失。'),
        concept: text('A monopoly sets P > MC, produces less than the efficient quantity and creates deadweight loss.', '垄断定价 P > MC，产量低于有效率水平，造成无谓损失。'),
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
          distractor('All students value tutoring equally', '所有学生对辅导的估值相同', 'If every student valued tutoring the same, there would be nothing to discriminate on. Price discrimination works because buyers value the good differently.', '如果每个学生估值相同，就没有可区别定价的依据。价格歧视之所以可行，是因为买家估值不同。'),
          answer('Students cannot resell sessions', '学生不能转售课程'),
          distractor('Many tutors offer the same service', '许多家教提供相同服务', 'With many identical tutors, a student charged more would simply go elsewhere. Charging different prices needs market power, not competition.', '如果有许多相同的家教，被收高价的学生会去找别人。区别定价需要市场势力，而不是竞争。'),
        ],
        correct: 1,
        explanation: text('Price discrimination needs market power, the ability to identify buyers’ values, and no resale between buyers.', '价格歧视需要市场势力、识别买家估值的能力，以及买家之间无法转售。'),
        concept: text('Price discrimination needs market power, a way to separate buyers by willingness to pay, and no resale between buyers.', '价格歧视需要市场势力、按支付意愿区分买家的方法，以及买家之间不能转售。'),
        takeaway: text('Market power + sorting buyers + no resale', '市场势力 + 区分买家 + 不能转售'),
      },
      {
        prompt: text('With perfect price discrimination, how many sessions does the tutor sell?', '在完全价格歧视下，家教卖出几节课？'),
        choices: [
          distractor('2 sessions', '2 节', 'Selling 2 is what a single-price seller might choose, because cutting the price for a third buyer cuts it for everyone. With perfect discrimination the $30 student pays $30 and no one else’s price falls.', '卖 2 节是单一定价卖家可能的选择，因为给第三人降价就要给所有人降价。完全价格歧视下，估值 30 美元的学生付 30 美元，其他人的价格不变。'),
          distractor('5 sessions', '5 节', 'The $20 and $10 students would pay less than the $25 cost of a session, so teaching them loses money.', '估值 20 和 10 美元的学生付的钱低于每节 25 美元的成本，给他们上课会亏钱。'),
          answer('3 sessions', '3 节'),
        ],
        correct: 2,
        explanation: text('The tutor sells to every student whose value is at least $25: the $50, $40 and $30 students.', '家教会卖给所有估值不低于 25 美元的学生：估值 50、40、30 美元的三位。'),
        concept: text('Under perfect price discrimination MR equals each buyer’s price, so the firm sells every unit whose value is at least MC.', '完全价格歧视下，MR 等于每位买家支付的价格，企业会出售所有估值不低于 MC 的单位。'),
        takeaway: text('Sell where value ≥ MC → 3 sessions', '估值 ≥ MC 时出售 → 3 节'),
      },
      {
        prompt: text('Under perfect price discrimination, what is consumer surplus?', '在完全价格歧视下，消费者剩余是多少？'),
        choices: [
          answer('$0', '0 美元'),
          distractor('$45', '45 美元', '$45 = $25 + $15 + $5 is the tutor’s profit, the surplus the tutor captures. Students keep nothing, because each pays their maximum.', '45 = 25 + 15 + 5 是家教的利润，即家教获取的剩余。学生什么都不剩，因为每人都付了最高价。'),
          distractor('$30', '30 美元', 'Consumer surplus is value minus price. Each student pays exactly their value, so every student’s surplus is $0.', '消费者剩余是估值减价格。每个学生都恰好支付自己的估值，所以每人的剩余都是 0。'),
        ],
        correct: 0,
        explanation: text('Each student pays their full willingness to pay, so the tutor captures all surplus. Output matches the efficient level.', '每个学生都支付全部意愿价格，家教获得全部剩余；产量与有效率水平一致。'),
        concept: text('Perfect price discrimination turns all consumer surplus into producer surplus, while output is at the efficient level.', '完全价格歧视把全部消费者剩余转化为生产者剩余，同时产量处于有效率水平。'),
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
          distractor('It shifts right', '右移', 'Rivals with similar drinks take away some customers, so each existing shop sells less at every price: its demand shifts left.', '推出相似饮品的对手会抢走部分顾客，现有店铺在每个价格下都卖得更少：需求左移。'),
          answer('It shifts left', '左移'),
          distractor('It becomes perfectly horizontal', '变成完全水平', 'A horizontal demand curve belongs to perfect competition with identical products. These drinks still differ, so each shop keeps a downward-sloping demand curve.', '水平需求曲线属于产品相同的完全竞争。这些饮品仍有差异，每家店的需求曲线仍向下倾斜。'),
        ],
        correct: 1,
        explanation: text('Entry divides the market among more sellers, decreasing demand for each existing firm.', '进入使市场被更多卖家瓜分，每家现有企业的需求都下降。'),
        concept: text('In monopolistic competition, entry takes customers from existing firms and shifts each firm’s demand left.', '在垄断竞争中，新企业进入会抢走现有企业的顾客，使每家企业的需求左移。'),
        takeaway: text('Entry → each firm’s demand shifts left', '进入 → 每家企业需求左移'),
      },
      {
        prompt: text('In long-run equilibrium, the shop’s price equals…', '长期均衡时，这家店的价格等于……'),
        choices: [
          answer('Its average total cost', '平均总成本'),
          distractor('Its marginal cost', '边际成本', 'P = MC holds only in perfect competition. This shop faces downward-sloping demand, so it produces where MR = MC and its price stays above MC.', 'P = MC 只在完全竞争中成立。这家店面对向下倾斜的需求，在 MR = MC 处生产，价格高于 MC。'),
          distractor('Its minimum average total cost', '最低平均总成本', 'Price equals ATC, but not at the bottom of ATC. The downward-sloping demand curve touches ATC on its falling part, to the left of the minimum.', '价格等于 ATC，但不在 ATC 最低点。向下倾斜的需求曲线与 ATC 相切于其下降段，在最低点左侧。'),
        ],
        correct: 0,
        explanation: text('Entry continues until demand is tangent to ATC, so P = ATC and economic profit is zero.', '进入持续到需求与 ATC 相切为止，此时 P = ATC，经济利润为零。'),
        concept: text('Long run in monopolistic competition: demand is tangent to ATC, so P = ATC and economic profit is zero.', '垄断竞争的长期：需求曲线与 ATC 相切，P = ATC，经济利润为零。'),
        takeaway: text('Long run: P = ATC, zero economic profit', '长期：P = ATC，经济利润为零'),
      },
      {
        prompt: text('Compared with perfect competition in the long run, the shop has…', '与长期完全竞争相比，这家店存在……'),
        choices: [
          distractor('Positive long-run economic profit', '长期正的经济利润', 'Easy entry continues until economic profit is zero, so profit disappears in the long run.', '容易进入会一直持续到经济利润为零，所以长期利润会消失。'),
          distractor('Allocative efficiency, P = MC', '配置效率，P = MC', 'The shop sets MR = MC with price above MR, so P > MC. Customers value one more drink more than it costs, so output is below the allocatively efficient level.', '店铺在 MR = MC 处生产，价格高于 MR，所以 P > MC。顾客对多一杯的估值高于其成本，产量低于配置效率水平。'),
          answer('Excess capacity', '过剩产能'),
        ],
        correct: 2,
        explanation: text('It produces less than the output at minimum ATC, so it has excess capacity and P > MC.', '它的产量低于最低 ATC 对应的产量，因此存在过剩产能，且 P > MC。'),
        concept: text('Monopolistically competitive firms have excess capacity and P > MC, so they are neither productively nor allocatively efficient.', '垄断竞争企业存在过剩产能且 P > MC，既没有生产效率也没有配置效率。'),
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
          distractor('Yes: High', '有：高价', 'Read Ana’s payoffs (the first number). If Ben picks High, Low earns 80 versus 60. If Ben picks Low, Low earns 40 versus 20. Low is better either way, not High.', '看 Ana 的收益（第一个数）。Ben 选高价时，低价赚 80，高价赚 60；Ben 选低价时，低价赚 40，高价赚 20。无论如何低价更好，而不是高价。'),
          distractor('No dominant strategy', '没有占优策略', 'A dominant strategy exists when one choice wins in every case. For Ana, Low beats High whether Ben picks High (80 > 60) or Low (40 > 20).', '只要一个选择在每种情况下都更好，就存在占优策略。对 Ana 来说，Ben 选高价（80 > 60）或低价（40 > 20）时，低价都更好。'),
        ],
        correct: 0,
        explanation: text('Low gives Ana more whatever Ben does (80 > 60 and 40 > 20), so Low is her dominant strategy.', '无论 Ben 怎么选，低价都让 Ana 赚得更多（80 > 60，40 > 20），所以低价是她的占优策略。'),
        concept: text('A dominant strategy is the best choice no matter what the other player does.', '占优策略是无论对方怎么选都对自己最好的选择。'),
        takeaway: text('Ana’s dominant strategy: Low', 'Ana 的占优策略：低价'),
      },
      {
        prompt: text('What is the Nash equilibrium?', '纳什均衡是什么？'),
        choices: [
          distractor('Both choose High', '双方都选高价', 'At (High, High) each earns 60, but Ana could switch to Low and earn 80, and so could Ben. Since a player gains by switching, it is not an equilibrium.', '在（高，高）时各赚 60，但 Ana 改选低价能赚 80，Ben 也一样。有人改变选择能获益，所以不是均衡。'),
          answer('Both choose Low', '双方都选低价'),
          distractor('Ana Low, Ben High', 'Ana 低价，Ben 高价', 'Here Ben earns 20, but switching to Low would give him 40. Because Ben would switch, this is not an equilibrium.', '这时 Ben 赚 20，改选低价能赚 40。Ben 会改变选择，所以不是均衡。'),
        ],
        correct: 1,
        explanation: text('At (Low, Low), neither café can gain by changing its choice alone. Both earn 40.', '在（低，低）时，任何一方单独改变选择都不能获益，双方各赚 40。'),
        concept: text('A Nash equilibrium is an outcome where no player can gain by changing only their own choice.', '纳什均衡是任何一方单独改变选择都无法获益的结果。'),
        takeaway: text('Nash equilibrium: (Low, Low) = (40, 40)', '纳什均衡：（低，低）=（40，40）'),
      },
      {
        prompt: text('If the cafés could make a binding agreement, which outcome maximizes their combined profit?', '如果两家能达成有约束力的协议，哪个结果使它们的利润总和最大？'),
        choices: [
          distractor('Both choose Low', '双方都选低价', '(Low, Low) is the Nash equilibrium, but it gives only 40 + 40 = 80 in total, the lowest combined profit in the table.', '（低，低）是纳什均衡，但总和只有 40 + 40 = 80，是表中最低的利润总和。'),
          distractor('One High, one Low', '一家高价，一家低价', '(High, Low) gives 20 + 80 = 100. Both choosing High gives 60 + 60 = 120, which is more.', '（高，低）总和为 20 + 80 = 100。双方都选高价总和为 60 + 60 = 120，更多。'),
          answer('Both choose High', '双方都选高价'),
        ],
        correct: 2,
        explanation: text('(High, High) totals 120. Without enforcement each has an incentive to cheat, a prisoner’s dilemma.', '（高，高）总和为 120。若无约束，双方都有背叛的动机，这就是囚徒困境。'),
        concept: text('Prisoner’s dilemma: the jointly best outcome (collusion) is unstable, because each player has an incentive to cheat.', '囚徒困境：共同最优结果（合谋）并不稳定，因为每一方都有背叛的动机。'),
        takeaway: text('Collusion (High, High) = 120, but each wants to cheat', '合谋（高，高）= 120，但各自都想背叛'),
      },
    ],
  },
];
