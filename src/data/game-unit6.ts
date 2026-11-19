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
          distractor('5 festivals', '5 场', 'The 4th and 5th festivals cost society more than they are worth (MSC $40 and $50 versus MSB $20 and $10). Holding them lowers total welfare.', '第 4、5 场的社会成本高于价值（MSC 40 和 50 美元对 MSB 20 和 10 美元）。举办它们会降低总福利。'),
          answer('3 festivals', '3 场'),
          distractor('1 festival', '1 场', 'Stopping at 1 leaves out the 2nd festival, worth $40 to society but costing only $20. Every unit with MSB ≥ MSC should be produced.', '只办 1 场会漏掉第 2 场：它对社会价值 40 美元，成本只有 20 美元。所有 MSB ≥ MSC 的单位都应生产。'),
        ],
        correct: 1,
        explanation: text('Efficiency is where MSB = MSC: the 3rd festival, at $30 each.', '社会有效在 MSB = MSC 处：第 3 场，两者都为 30 美元。'),
        concept: text('The socially efficient quantity is where marginal social benefit equals marginal social cost.', '社会有效数量是边际社会收益等于边际社会成本时的数量。'),
        takeaway: text('MSB = MSC at 3 festivals', '3 场时 MSB = MSC'),
      },
      {
        prompt: text('If the city holds 5 festivals, what is the deadweight loss?', '如果城市举办 5 场，无谓损失是多少？'),
        choices: [
          distractor('$40', '40 美元', '$40 is the loss on the 5th festival only. The 4th also loses $40 − $20 = $20, so the total loss is $60.', '40 美元只是第 5 场的损失。第 4 场也损失 40 − 20 = 20 美元，总损失 60 美元。'),
          distractor('$20', '20 美元', '$20 is the loss on the 4th festival only. The 5th loses even more, $50 − $10 = $40, for a total of $60.', '20 美元只是第 4 场的损失。第 5 场损失更多：50 − 10 = 40 美元，总共 60 美元。'),
          answer('$60', '60 美元'),
        ],
        correct: 2,
        explanation: text('The 4th loses $40 − $20 = $20 and the 5th loses $50 − $10 = $40, for a total of $60.', '第 4 场损失 40 − 20 = 20 美元，第 5 场损失 50 − 10 = 40 美元，共 60 美元。'),
        concept: text('Deadweight loss from overproduction adds up (MSC − MSB) on each unit beyond the efficient quantity.', '过度生产的无谓损失是超出有效数量的每一单位 (MSC − MSB) 之和。'),
        takeaway: text('Overproduction DWL = $20 + $40 = $60', '过度生产的无谓损失 = 20 + 40 = 60 美元'),
      },
      {
        prompt: text('Which condition defines allocative efficiency for society?', '哪个条件定义了社会的配置效率？'),
        choices: [
          answer('MSB = MSC', 'MSB = MSC'),
          distractor('MPB = MPC', 'MPB = MPC', 'MPB = MPC is where a free market ends up, counting only buyers’ and sellers’ own benefits and costs. With effects on others, society’s optimum needs MSB = MSC.', 'MPB = MPC 是自由市场的结果，只计入买卖双方自身的收益和成本。存在对他人的影响时，社会最优需要 MSB = MSC。'),
          distractor('P = minimum ATC', 'P = 最低 ATC', 'P = minimum ATC is productive efficiency: producing at the lowest cost per unit. Allocative efficiency is about producing the right amount: MSB = MSC.', 'P = 最低 ATC 是生产效率：以最低单位成本生产。配置效率关心的是生产恰当的数量：MSB = MSC。'),
        ],
        correct: 0,
        explanation: text('Society’s welfare is maximized where marginal social benefit equals marginal social cost.', '当边际社会收益等于边际社会成本时，社会福利最大。'),
        concept: text('Allocative efficiency for society means MSB = MSC, counting effects on everyone, not just buyers and sellers.', '社会的配置效率是 MSB = MSC，要计入对所有人的影响，而不仅是买卖双方。'),
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
          distractor('Too little: 6 instead of 8', '太少：6 而不是 8', 'The market ignores the $4 harm, so it produces where demand meets MPC: 8 cans. Counting the harm (MSC) gives 6, so the market makes too much, not too little.', '市场忽略了 4 美元的损害，在需求与 MPC 的交点生产：8 罐。计入损害（MSC）则为 6 罐，所以市场生产过多，而不是过少。'),
          answer('Too much: 8 instead of 6', '太多：8 而不是 6'),
          distractor('Exactly the optimal amount', '恰好是最优数量', 'The factory does not pay for the fumes, so its cost (MPC) is $4 too low. With costs understated, it produces more than is good for society.', '工厂不为废气付费，其成本（MPC）低估了 4 美元。成本被低估，产量就会超过对社会有利的水平。'),
        ],
        correct: 1,
        explanation: text('The market produces where MPB = MPC (8 cans). The social optimum is where MSB = MSC (6 cans).', '市场在 MPB = MPC 处生产（8 罐），社会最优在 MSB = MSC 处（6 罐）。'),
        concept: text('With a negative externality MSC > MPC, so the market overproduces.', '存在负外部性时 MSC > MPC，市场会过度生产。'),
        takeaway: text('Negative externality → overproduction (8 > 6)', '负外部性 → 过度生产（8 > 6）'),
      },
      {
        prompt: text('Which per-unit tax would move the market to the social optimum?', '多少的单位税能让市场达到社会最优？'),
        choices: [
          distractor('$2 per can', '每罐 2 美元', 'A $2 tax covers only half the $4 harm per can, so MPC rises only halfway to MSC and the market still overproduces.', '2 美元税只覆盖每罐 4 美元损害的一半，MPC 只上升到 MSC 的一半位置，市场仍然过度生产。'),
          distractor('$14 per can', '每罐 14 美元', '$14 is the socially optimal price buyers pay. The tax only needs to close the $4 gap between MPC and MSC.', '14 美元是社会最优时买家支付的价格。税收只需填补 MPC 与 MSC 之间 4 美元的差距。'),
          answer('$4 per can', '每罐 4 美元'),
        ],
        correct: 2,
        explanation: text('A Pigouvian tax equal to the $4 marginal external cost shifts MPC up to MSC.', '等于 4 美元边际外部成本的庇古税会把 MPC 上移到 MSC。'),
        concept: text('A Pigouvian tax equal to the marginal external cost makes the firm pay for the harm and moves output to the social optimum.', '等于边际外部成本的庇古税让企业为损害付费，使产量达到社会最优。'),
        takeaway: text('Pigouvian tax = marginal external cost = $4', '庇古税 = 边际外部成本 = 4 美元'),
      },
      {
        prompt: text('What is the deadweight loss at the market outcome?', '市场结果下的无谓损失是多少？'),
        choices: [
          answer('$4', '4 美元'),
          distractor('$8', '8 美元', '$8 = 2 × $4 is a rectangle. The loss is largest on the 8th can and shrinks to zero at the 6th, so it is a triangle: ½ × 2 × $4 = $4.', '8 = 2 × 4 是长方形。损失在第 8 罐最大，到第 6 罐降为零，所以是三角形：½ × 2 × 4 = 4 美元。'),
          distractor('$32', '32 美元', '$32 = $4 × 8 is the total harm from all 8 cans. Most of those cans are worth making even after the harm; only the 2 extra cans are a net loss to society.', '32 = 4 × 8 是 8 罐的全部损害。其中大部分即使计入损害也值得生产；只有多出的 2 罐对社会是净损失。'),
        ],
        correct: 0,
        explanation: text('The triangle between MSC and MSB from 6 to 8 cans: ½ × (8 − 6) × $4 = $4.', 'MSC 与 MSB 之间、6 到 8 罐的三角形：½ × (8 − 6) × 4 = 4 美元。'),
        concept: text('Deadweight loss from a negative externality is the triangle between MSC and MSB over the extra units produced.', '负外部性造成的无谓损失是多生产的那些单位上 MSC 与 MSB 之间的三角形。'),
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
          distractor('A private good', '私人产品', 'A private good is rival and excludable, like an ice cream that only its buyer eats. Anyone can watch fireworks, and watching does not use them up.', '私人产品具有竞争性和排他性，比如只有买的人能吃的冰淇淋。烟花谁都能看，而且看了也不会用掉。'),
          answer('A public good', '公共产品'),
          distractor('A common resource', '公共资源', 'A common resource is rival: one person’s use leaves less for others. One person watching fireworks does not reduce anyone else’s view.', '公共资源具有竞争性：一人使用会让别人可用的更少。一个人看烟花并不会减少别人看到的。'),
        ],
        correct: 1,
        explanation: text('Anyone around the bay can watch, and one person watching does not reduce another’s enjoyment.', '海湾周围的人都能观看，一个人观看也不会减少别人的享受。'),
        concept: text('Public goods are nonrival (one person’s use does not reduce another’s) and nonexcludable (non-payers cannot be kept out).', '公共产品具有非竞争性（一人使用不减少他人使用）和非排他性（无法阻止不付费者使用）。'),
        takeaway: text('Nonrival + nonexcludable → public good', '非竞争 + 非排他 → 公共产品'),
      },
      {
        prompt: text('Why would a private firm likely provide too few fireworks shows?', '为什么私人企业很可能提供过少的烟花表演？'),
        choices: [
          distractor('Fireworks have no benefit', '烟花没有收益', 'People do enjoy the show, so the benefit is real. The problem is that the firm cannot charge the people who enjoy it.', '人们确实喜欢表演，收益是真实的。问题在于企业无法向享受表演的人收费。'),
          distractor('Shows are rival', '表演具有竞争性', 'Fireworks are nonrival, and nonrivalry is not what stops a firm. What stops it is nonexcludability: viewers can watch without paying.', '烟花是非竞争性的，而非竞争性并不是阻碍企业的原因。真正的原因是非排他性：观众不付钱也能看。'),
          answer('People can watch without paying', '人们不付钱也能观看'),
        ],
        correct: 2,
        explanation: text('Nonexcludability creates the free-rider problem, so private firms cannot collect enough revenue.', '非排他性带来搭便车问题，私人企业无法获得足够收入。'),
        concept: text('Free-rider problem: when people can benefit without paying, private markets underprovide public goods.', '搭便车问题：当人们不付费也能受益时，私人市场对公共产品供给不足。'),
        takeaway: text('Free riders → public goods underprovided', '搭便车 → 公共产品供给不足'),
      },
      {
        prompt: text('Fish in the unregulated open waters are…', '无监管公海中的鱼是……'),
        choices: [
          answer('Rival but nonexcludable', '有竞争性但非排他'),
          distractor('Nonrival and excludable', '非竞争且排他', 'Fish are rival: a fish one boat catches is gone for the others. In unregulated waters no one can be kept out, so they are nonexcludable.', '鱼有竞争性：一条船捕到的鱼别人就没有了。在无监管水域谁都不能被排除，所以是非排他的。'),
          distractor('A pure public good', '纯公共产品', 'A public good is nonrival, but fish are used up when caught. Rival plus nonexcludable makes them a common resource.', '公共产品是非竞争性的，但鱼被捕就没了。竞争性加非排他性使它成为公共资源。'),
        ],
        correct: 0,
        explanation: text('A common resource is rival but nonexcludable, which leads to overuse: the tragedy of the commons.', '公共资源有竞争性但非排他，容易被过度使用，即公地悲剧。'),
        concept: text('Common resources are rival but nonexcludable, so they tend to be overused (the tragedy of the commons).', '公共资源有竞争性但非排他，往往被过度使用（公地悲剧）。'),
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
          distractor('$8', '8 美元', '$8 is the fair-return price (P = ATC), which gives zero economic profit. Allocative efficiency needs P = MC, which is $6.', '8 美元是公平回报价格（P = ATC），经济利润为零。配置效率需要 P = MC，即 6 美元。'),
          answer('$6', '6 美元'),
          distractor('$12', '12 美元', '$12 is the unregulated monopoly price, where P is well above MC and output is too low. That is the problem regulation is meant to fix.', '12 美元是不受监管的垄断价格，P 远高于 MC，产量过低。这正是监管要解决的问题。'),
        ],
        correct: 1,
        explanation: text('Allocative efficiency requires P = MC, which occurs at a price of $6.', '配置效率要求 P = MC，即价格为 6 美元。'),
        concept: text('Allocative efficiency needs P = MC; regulating a natural monopoly at P = MC achieves it.', '配置效率要求 P = MC；按 P = MC 管制自然垄断即可实现。'),
        takeaway: text('Socially optimal price: P = MC = $6', '社会最优价格：P = MC = 6 美元'),
      },
      {
        prompt: text('At the $6 price, what happens to the company?', '在 6 美元的价格下，公司会怎样？'),
        choices: [
          distractor('It earns economic profit', '获得经济利润', 'Profit needs P > ATC. At $6 each unit costs $9 on average, so the firm loses $3 per unit.', '盈利需要 P > ATC。6 美元时每单位平均成本 9 美元，企业每单位亏 3 美元。'),
          distractor('It earns zero economic profit', '经济利润为零', 'Zero economic profit happens where P = ATC, at the $8 fair-return price. At $6 the price is below ATC, so the firm makes losses.', '经济利润为零发生在 P = ATC，即 8 美元的公平回报价格。6 美元低于 ATC，企业亏损。'),
          answer('It suffers losses and needs a subsidy', '亏损，需要补贴'),
        ],
        correct: 2,
        explanation: text('With P ($6) below ATC ($9), the firm loses $3 per unit. It would need a subsidy to stay open long term.', 'P（6 美元）低于 ATC（9 美元），每单位亏 3 美元，长期需要补贴才能维持经营。'),
        concept: text('For a natural monopoly, ATC is still falling where P = MC, so MC < ATC and a P = MC price causes losses.', '对自然垄断而言，在 P = MC 处 ATC 仍在下降，MC < ATC，所以按 P = MC 定价会亏损。'),
        takeaway: text('P = MC < ATC → losses for a natural monopoly', 'P = MC < ATC → 自然垄断亏损'),
      },
      {
        prompt: text('Instead, the government leaves the price alone and charges the firm a lump-sum tax. What happens to output?', '如果政府不管制价格，而是征收一次性总额税，产量会怎样？'),
        choices: [
          answer('Output does not change', '产量不变'),
          distractor('Output decreases', '产量减少', 'That is what a per-unit tax does, because it raises MC. A lump-sum tax is paid however much the firm sells, so MR = MC at the same output as before.', '那是单位税的效果，因为单位税会提高 MC。一次性总额税无论卖多少都要交，MR = MC 仍在原来的产量。'),
          distractor('Output increases', '产量增加', 'A tax gives the firm no reason to sell more: it neither raises MR nor lowers MC. The profit-maximizing output is unchanged.', '税收不会让企业有理由多卖：它既不提高 MR，也不降低 MC。利润最大化产量不变。'),
        ],
        correct: 0,
        explanation: text('A lump-sum tax does not change MR or MC, so the profit-maximizing output and price stay the same; only profit falls.', '一次性总额税不改变 MR 和 MC，所以利润最大化的产量和价格不变，只是利润减少。'),
        concept: text('A lump-sum tax is a fixed cost: it lowers profit but changes neither MR nor MC, so output and price stay the same.', '一次性总额税是固定成本：它减少利润，但不改变 MR 和 MC，所以产量和价格不变。'),
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
          distractor('Progressive', '累进税', 'Judge a tax by its share of income, not the dollars paid. The higher-income family pays more dollars ($5,000) but a smaller share (5% versus 10%), so the tax is regressive.', '判断税种要看占收入的比例，而不是缴纳的金额。高收入家庭缴的钱更多（5,000 美元），但比例更小（5% 对 10%），所以是累退税。'),
          answer('Regressive', '累退税'),
          distractor('Proportional', '比例税', 'A proportional tax takes the same share from everyone. Here the shares are 10% and 5%, so the share falls as income rises: regressive.', '比例税对每个人征收相同比例。这里分别是 10% 和 5%，比例随收入上升而下降：累退税。'),
        ],
        correct: 1,
        explanation: text('The lower-income family pays 10% and the higher-income family 5%. A falling share means regressive.', '低收入家庭缴 10%，高收入家庭缴 5%。占比随收入下降，属于累退税。'),
        concept: text('Taxes are judged by their share of income: progressive takes a larger share from higher incomes, regressive a smaller share, proportional the same share.', '税种按占收入的比例判断：累进税对高收入者征收更大比例，累退税更小比例，比例税相同比例。'),
        takeaway: text('Share falls as income rises → regressive', '税负占比随收入上升而下降 → 累退'),
      },
      {
        prompt: text('The country’s Gini coefficient rises from 0.35 to 0.42. Income has become…', '该国基尼系数从 0.35 升到 0.42。收入分配变得……'),
        choices: [
          answer('Less equal', '更不平均'),
          distractor('More equal', '更平均', 'A Gini of 0 is perfect equality, so rising from 0.35 to 0.42 moves away from equality. Income became less equal.', '基尼系数 0 代表完全平等，从 0.35 升到 0.42 是远离平等，收入变得更不平等。'),
          distractor('Higher on average', '平均水平更高', 'The Gini says nothing about how much income people have on average. It only measures how evenly income is shared.', '基尼系数不反映人们的平均收入水平，只衡量收入分配是否均匀。'),
        ],
        correct: 0,
        explanation: text('A higher Gini coefficient means a less equal income distribution, and the Lorenz curve bows further from the line of equality.', '基尼系数升高表示收入分配更不平等，洛伦兹曲线离平等线更远。'),
        concept: text('The Gini coefficient measures income inequality from 0 (perfect equality) toward 1; a higher Gini means more inequality.', '基尼系数衡量收入不平等，从 0（完全平等）到 1；基尼系数越高越不平等。'),
        takeaway: text('Gini ↑ → more inequality', '基尼系数 ↑ → 更不平等'),
      },
      {
        prompt: text('Which policy would most directly reduce income inequality?', '哪项政策最直接地减少收入不平等？'),
        choices: [
          distractor('Raise the regressive sales tax', '提高累退的消费税', 'A regressive tax takes a bigger share from lower-income families, which widens the gap in after-tax income.', '累退税从低收入家庭拿走更大比例，会扩大税后收入差距。'),
          distractor('Cut income tax rates on the top bracket', '降低最高档的所得税率', 'Cutting the top bracket raises after-tax income mainly for the highest earners, which increases inequality.', '降低最高档税率主要增加最高收入者的税后收入，会加剧不平等。'),
          answer('Expand transfers to low-income families', '扩大对低收入家庭的转移支付'),
        ],
        correct: 2,
        explanation: text('Transfers to lower-income households and progressive taxes reduce the gap in after-tax income.', '对低收入家庭的转移支付和累进税会缩小税后收入差距。'),
        concept: text('Progressive taxes and transfers to lower-income households reduce income inequality.', '累进税和对低收入家庭的转移支付可以减少收入不平等。'),
        takeaway: text('Transfers and progressive taxes reduce inequality', '转移支付和累进税减少不平等'),
      },
    ],
  },
];
