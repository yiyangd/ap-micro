import { answer, distractor, text, type Mission } from './game-types';

export const unit5Missions: readonly Mission[] = [
  {
    id: '5.1',
    title: text('Hiring at the Phone Plant', '手机工厂招工'),
    topic: text('Introduction to Factor Markets', '要素市场导论'),
    scenario: text(
      'A phone-case factory sells in a perfectly competitive market at $5 per case. The table shows the marginal product of each worker.',
      '一家手机壳工厂在完全竞争市场中以每个 5 美元出售手机壳。表格给出每名工人的边际产量。',
    ),
    table: {
      caption: text('Marginal product of labor', '劳动的边际产量'),
      columns: [text('Worker', '第几名工人'), text('Marginal product (cases)', '边际产量（个）')],
      rows: [[text('1st', '第 1'), text('10')], [text('2nd', '第 2'), text('8')], [text('3rd', '第 3'), text('6')], [text('4th', '第 4'), text('4')]],
    },
    steps: [
      {
        prompt: text('Phone sales collapse nationwide. What happens to demand for case-factory workers?', '全国手机销量暴跌。手机壳工厂对工人的需求如何变化？'),
        choices: [
          distractor('It increases', '增加', 'Workers are hired to make products people buy.', '雇用工人是为了生产人们购买的产品。'),
          distractor('It stays the same', '保持不变', 'Labor demand depends on demand for what labor produces.', '劳动需求取决于劳动所生产产品的需求。'),
          answer('It decreases', '减少'),
        ],
        correct: 2,
        explanation: text('Demand for labor is a derived demand: it comes from demand for the product workers make.', '劳动需求是派生需求：它来源于工人所生产产品的需求。'),
        takeaway: text('Factor demand is derived demand', '要素需求是派生需求'),
      },
      {
        prompt: text('Back at $5 per case, what is the marginal revenue product of the third worker?', '回到每个 5 美元，第三名工人的边际收益产品是多少？'),
        choices: [
          answer('$30', '30 美元'),
          distractor('6 cases', '6 个', 'That is marginal product. Convert it into revenue.', '这是边际产量，还要换算成收益。'),
          distractor('$120', '120 美元', 'That multiplies total product so far (24) by $5. Use only the third worker’s output.', '这是用目前总产量 24 乘以 5。只用第三名工人的产量。'),
        ],
        correct: 0,
        explanation: text('MRP = MP × P = 6 × $5 = $30.', 'MRP = MP × P = 6 × 5 = 30 美元。'),
        takeaway: text('MRP₃ = 6 × $5 = $30', 'MRP₃ = 6 × 5 = 30 美元'),
      },
      {
        prompt: text('Why does MRP fall as the factory hires more workers?', '为什么工厂雇用更多工人时 MRP 会下降？'),
        choices: [
          distractor('The product price falls', '产品价格下降', 'In a perfectly competitive output market, the price stays at $5.', '在完全竞争的产品市场中，价格保持 5 美元。'),
          answer('Diminishing marginal product', '边际产量递减'),
          distractor('Wages rise with each hire', '每多雇一人工资就上升', 'MRP measures revenue from a worker, not the wage paid.', 'MRP 衡量工人带来的收益，而不是支付的工资。'),
        ],
        correct: 1,
        explanation: text('With price fixed, MRP falls only because each extra worker adds less output.', '价格不变时，MRP 下降只因为每多一名工人带来的产量更少。'),
        takeaway: text('MRP falls because MP falls', 'MP 下降导致 MRP 下降'),
      },
    ],
  },
  {
    id: '5.2',
    title: text('The Welding Market', '焊工市场'),
    topic: text('Changes in Factor Demand and Factor Supply', '要素需求与供给的变化'),
    scenario: text(
      'The market for welders starts in equilibrium. Consider each event separately, starting from that equilibrium.',
      '焊工市场起初处于均衡。请从这一均衡出发，分别分析每个事件。',
    ),
    steps: [
      {
        prompt: text('The price of the steel frames that welders build rises. What happens to demand for welders?', '焊工所制造的钢架价格上涨。对焊工的需求如何变化？'),
        choices: [
          answer('It increases', '增加'),
          distractor('It decreases', '减少', 'A higher output price raises the revenue each welder brings in.', '产品价格上升会提高每名焊工带来的收益。'),
          distractor('Only the wage changes', '只有工资变化', 'A change in product price shifts the MRP curve, which is labor demand.', '产品价格变化会使 MRP 曲线移动，而 MRP 就是劳动需求。'),
        ],
        correct: 0,
        explanation: text('MRP = MP × P. A higher product price raises MRP at every quantity of labor, shifting demand right.', 'MRP = MP × P。产品价格上升使每个劳动量下的 MRP 都提高，需求右移。'),
        takeaway: text('Product price ↑ → labor demand ↑', '产品价格 ↑ → 劳动需求 ↑'),
      },
      {
        prompt: text('A free training program certifies many new welders. What happens to the wage and employment?', '一个免费培训项目认证了大量新焊工。工资和就业如何变化？'),
        choices: [
          distractor('Wage rises, employment falls', '工资上升，就业下降', 'More qualified workers is an increase in labor supply.', '合格工人增加意味着劳动供给增加。'),
          answer('Wage falls, employment rises', '工资下降，就业上升'),
          distractor('Both rise', '两者都上升', 'That pattern comes from higher demand, not higher supply.', '这种情况来自需求增加，而不是供给增加。'),
        ],
        correct: 1,
        explanation: text('Labor supply shifts right, lowering the equilibrium wage and raising employment.', '劳动供给右移，均衡工资下降，就业增加。'),
        takeaway: text('Labor supply ↑ → wage ↓, employment ↑', '劳动供给 ↑ → 工资 ↓、就业 ↑'),
      },
      {
        prompt: text('Welding robots, a substitute for welders, become much cheaper. What happens to demand for welders?', '焊接机器人（焊工的替代品）变得便宜很多。对焊工的需求如何变化？'),
        choices: [
          distractor('It increases', '增加', 'Firms switch toward the input that became cheaper.', '企业会转向变得更便宜的投入品。'),
          distractor('It does not change', '不变', 'Prices of other inputs shift factor demand.', '其他投入品的价格会使要素需求移动。'),
          answer('It decreases', '减少'),
        ],
        correct: 2,
        explanation: text('When a substitute input gets cheaper, firms use more of it and less labor, so demand for welders decreases.', '替代投入品变便宜时，企业多用它、少用劳动，所以对焊工的需求减少。'),
        takeaway: text('Substitute input cheaper → labor demand ↓', '替代投入品变便宜 → 劳动需求 ↓'),
      },
    ],
  },
  {
    id: '5.3',
    title: text('Workers or Machines?', '雇人还是买机器？'),
    topic: text('Profit-Maximizing Behavior in Perfectly Competitive Factor Markets', '完全竞争要素市场中的利润最大化'),
    scenario: text(
      'A bakery hires workers at $20 an hour and rents mixers at $40 an hour in competitive factor markets. Its bread sells for $2 a loaf.',
      '一家面包店在竞争性要素市场中以每小时 20 美元雇用工人，以每小时 40 美元租用搅拌机。面包售价为每个 2 美元。',
    ),
    steps: [
      {
        prompt: text('The next worker would add 12 loaves an hour. Should the bakery hire this worker?', '下一名工人每小时能多做 12 个面包。面包店是否应雇用这名工人？'),
        choices: [
          answer('Yes: MRP of $24 exceeds the $20 wage', '应该：MRP 为 24 美元，高于 20 美元工资'),
          distractor('No: 12 loaves is less than the $20 wage', '不应该：12 个面包少于 20 美元工资', 'Convert loaves into dollars before comparing with the wage.', '先把面包数量换算成美元，再与工资比较。'),
          distractor('Only if MRP equals $40', '只有 MRP 等于 40 美元时', '$40 is the mixer rental. Compare a worker’s MRP with the wage.', '40 美元是搅拌机租金。应把工人的 MRP 与工资比较。'),
        ],
        correct: 0,
        explanation: text('MRP = 12 × $2 = $24 > $20 = MRC, so hiring adds $4 to profit.', 'MRP = 12 × 2 = 24 美元 > 20 美元 = MRC，雇用可增加 4 美元利润。'),
        takeaway: text('Hire while MRP ≥ wage', '只要 MRP ≥ 工资就雇用'),
      },
      {
        prompt: text('At its current mix, labor’s MP is 10 loaves and a mixer’s MP is 30 loaves. How should the bakery adjust to cut costs?', '在当前组合下，劳动的 MP 为 10 个，搅拌机的 MP 为 30 个。为降低成本，面包店应如何调整？'),
        choices: [
          distractor('Use more labor and fewer mixers', '多用劳动，少用搅拌机', 'Compare output per dollar: 10 ÷ $20 = 0.5 and 30 ÷ $40 = 0.75.', '比较每美元产量：10 ÷ 20 = 0.5，30 ÷ 40 = 0.75。'),
          answer('Use more mixers and less labor', '多用搅拌机，少用劳动'),
          distractor('Keep the mix: mixers cost more', '保持不变：搅拌机更贵', 'A higher price can still buy more output per dollar.', '价格更高的投入也可能每美元带来更多产量。'),
        ],
        correct: 1,
        explanation: text('Mixers give 0.75 loaves per dollar and labor 0.5. Shift spending toward mixers until MP per dollar is equal.', '搅拌机每美元产出 0.75 个，劳动为 0.5 个。应把支出转向搅拌机，直到每美元边际产量相等。'),
        takeaway: text('Equalize MP per dollar: MPL/w = MPK/r', '使每美元边际产量相等：MPL/w = MPK/r'),
      },
      {
        prompt: text('Once MP per dollar is equal for both inputs, is the bakery sure to maximize profit?', '当两种投入的每美元边际产量相等时，面包店一定实现利润最大化了吗？'),
        choices: [
          distractor('Yes, that is the profit rule', '是的，这就是利润最大化规则', 'Equal MP per dollar is the least-cost rule for any output level.', '每美元边际产量相等，是任意产量下的成本最小化规则。'),
          distractor('Yes, if total output is high', '是的，只要总产量够高', 'Profit depends on output being chosen correctly too.', '利润还取决于产量是否选对。'),
          answer('No: it also needs MRP = price of each input', '不一定：还需要每种投入的 MRP 等于其价格'),
        ],
        correct: 2,
        explanation: text('Least cost means MPL/w = MPK/r. Profit maximization also requires MRPL = w and MRPK = r.', '成本最小化要求 MPL/w = MPK/r；利润最大化还要求 MRPL = w 且 MRPK = r。'),
        takeaway: text('Profit max: MRP = price for every input', '利润最大化：每种投入的 MRP = 其价格'),
      },
    ],
  },
  {
    id: '5.4',
    title: text('The Only Employer in Town', '镇上唯一的雇主'),
    topic: text('Monopsonistic Markets', '买方垄断市场'),
    scenario: text(
      'A mill is the only employer in a small town. To hire more workers it must raise the wage for everyone. The table shows the wage needed and each worker’s MRP.',
      '一家工厂是小镇上唯一的雇主。要多雇工人，就必须给所有人涨工资。表格给出所需工资和每名工人的 MRP。',
    ),
    table: {
      caption: text('Labor supply and marginal revenue product', '劳动供给与边际收益产品'),
      columns: [text('Workers', '工人数'), text('Wage', '工资'), text('MRP', 'MRP')],
      rows: [[text('1'), text('$8'), text('$30')], [text('2'), text('$10'), text('$26')], [text('3'), text('$12'), text('$20')], [text('4'), text('$14'), text('$16')], [text('5'), text('$16'), text('$10')]],
    },
    steps: [
      {
        prompt: text('What is the marginal factor cost of the third worker?', '第三名工人的边际要素成本是多少？'),
        choices: [
          distractor('$12', '12 美元', '$12 is the wage. Hiring the third worker also raises the wage of the first two.', '12 美元是工资。雇第三人还会提高前两人的工资。'),
          answer('$16', '16 美元'),
          distractor('$36', '36 美元', '$36 is total labor cost for 3 workers. Subtract the cost for 2.', '36 美元是 3 名工人的总劳动成本，要减去 2 人时的成本。'),
        ],
        correct: 1,
        explanation: text('Total labor cost rises from 2 × $10 = $20 to 3 × $12 = $36, so MFC = $16.', '总劳动成本从 2 × 10 = 20 美元升到 3 × 12 = 36 美元，所以 MFC = 16 美元。'),
        takeaway: text('MFC₃ = $36 − $20 = $16', 'MFC₃ = 36 − 20 = 16 美元'),
      },
      {
        prompt: text('How many workers does the mill hire, and at what wage?', '工厂雇用多少名工人？工资是多少？'),
        choices: [
          distractor('3 workers at $16', '3 人，16 美元', 'The mill hires where MRP = MFC but pays the wage on the supply schedule.', '工厂在 MRP = MFC 处决定雇用量，但按供给表支付工资。'),
          distractor('4 workers at $14', '4 人，14 美元', 'The 4th worker’s MFC is $56 − $36 = $20, above the MRP of $16.', '第 4 人的 MFC 为 56 − 36 = 20 美元，高于其 MRP 16 美元。'),
          answer('3 workers at $12', '3 人，12 美元'),
        ],
        correct: 2,
        explanation: text('The 3rd worker’s MRP ($20) exceeds MFC ($16); the 4th’s MRP ($16) is below MFC ($20). The mill hires 3 and pays $12.', '第 3 人的 MRP（20 美元）高于 MFC（16 美元）；第 4 人的 MRP（16 美元）低于 MFC（20 美元）。工厂雇 3 人，付 12 美元。'),
        takeaway: text('MRP = MFC at 3 workers; wage from supply = $12', '3 人时 MRP = MFC；按供给定工资 12 美元'),
      },
      {
        prompt: text('Compared with a competitive labor market, the monopsony…', '与竞争性劳动市场相比，买方垄断……'),
        choices: [
          answer('Hires fewer workers at a lower wage', '雇用更少工人，工资更低'),
          distractor('Hires more workers at a lower wage', '雇用更多工人，工资更低', 'A competitive market would hire 4 workers here, where MRP ≥ wage.', '竞争性市场在此会雇 4 人，即 MRP ≥ 工资处。'),
          distractor('Pays a higher wage to attract workers', '支付更高工资以吸引工人', 'The monopsony restricts hiring to keep the wage down.', '买方垄断限制雇用以压低工资。'),
        ],
        correct: 0,
        explanation: text('A competitive market would employ 4 workers at $14. The monopsony hires 3 at $12, creating deadweight loss.', '竞争性市场会以 14 美元雇 4 人；买方垄断以 12 美元雇 3 人，造成无谓损失。'),
        takeaway: text('Monopsony: fewer workers, lower wage', '买方垄断：工人更少，工资更低'),
      },
    ],
  },
];
