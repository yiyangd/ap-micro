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
          distractor('It increases', '增加', 'Fewer phone sales mean fewer cases are needed. Firms hire workers to make products that sell, so labor demand falls.', '手机销量减少意味着需要的手机壳更少。企业雇工人是为了生产能卖出去的产品，所以劳动需求下降。'),
          distractor('It stays the same', '保持不变', 'Labor demand depends on what workers’ output is worth. When demand for phones and cases falls, each worker’s output earns less, so firms want fewer workers.', '劳动需求取决于工人产出的价值。手机和手机壳的需求下降，每个工人的产出能卖的钱更少，企业想雇的人就更少。'),
          answer('It decreases', '减少'),
        ],
        correct: 2,
        explanation: text('Demand for labor is a derived demand: it comes from demand for the product workers make.', '劳动需求是派生需求：它来源于工人所生产产品的需求。'),
        concept: text('Derived demand: firms want workers because people want the goods those workers produce.', '派生需求：企业需要工人，是因为人们需要工人所生产的商品。'),
        takeaway: text('Factor demand is derived demand', '要素需求是派生需求'),
      },
      {
        prompt: text('Back at $5 per case, what is the marginal revenue product of the third worker?', '回到每个 5 美元，第三名工人的边际收益产品是多少？'),
        choices: [
          answer('$30', '30 美元'),
          distractor('6 cases', '6 个', '6 cases is the marginal product, measured in output. MRP turns it into dollars, 6 × $5 = $30, so it can be compared with the wage.', '6 个是边际产量，用产量衡量。MRP 要换算成美元：6 × 5 = 30 美元，才能与工资比较。'),
          distractor('$120', '120 美元', '$120 = 24 × $5 is the revenue from all three workers’ output. MRP is only what the third worker adds: 6 × $5 = $30.', '120 = 24 × 5 是三名工人全部产出的收入。MRP 只是第三名工人增加的部分：6 × 5 = 30 美元。'),
        ],
        correct: 0,
        explanation: text('MRP = MP × P = 6 × $5 = $30.', 'MRP = MP × P = 6 × 5 = 30 美元。'),
        concept: text('Marginal revenue product = marginal product × marginal revenue (the price, in a competitive output market).', '边际收益产品 = 边际产量 × 边际收益（在竞争性产品市场中即价格）。'),
        takeaway: text('MRP₃ = 6 × $5 = $30', 'MRP₃ = 6 × 5 = 30 美元'),
      },
      {
        prompt: text('Why does MRP fall as the factory hires more workers?', '为什么工厂雇用更多工人时 MRP 会下降？'),
        choices: [
          distractor('The product price falls', '产品价格下降', 'The factory is a price taker in its output market, so each case sells for $5 however many it makes. The price is not what falls.', '工厂在产品市场上是价格接受者，无论生产多少，每个手机壳都卖 5 美元。下降的不是价格。'),
          answer('Diminishing marginal product', '边际产量递减'),
          distractor('Wages rise with each hire', '每多雇一人工资就上升', 'MRP measures the revenue a worker brings in, not the cost of hiring. The wage is set in the labor market and does not change MRP.', 'MRP 衡量工人带来的收入，而不是雇用成本。工资由劳动市场决定，不会改变 MRP。'),
        ],
        correct: 1,
        explanation: text('With price fixed, MRP falls only because each extra worker adds less output.', '价格不变时，MRP 下降只因为每多一名工人带来的产量更少。'),
        concept: text('In a competitive output market, MRP falls only because of diminishing marginal product.', '在竞争性产品市场中，MRP 下降只是因为边际产量递减。'),
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
          distractor('It decreases', '减少', 'A higher price for steel frames makes each welder’s output worth more (MRP = MP × P), so firms want more welders, not fewer.', '钢架价格上涨使每名焊工产出的价值更高（MRP = MP × P），企业想雇更多而不是更少的焊工。'),
          distractor('Only the wage changes', '只有工资变化', 'The product price changes MRP at every level of employment, so the whole labor demand curve shifts right. The wage rises as a result of that shift.', '产品价格会改变每个就业水平下的 MRP，整条劳动需求曲线右移。工资上升是这一移动的结果。'),
        ],
        correct: 0,
        explanation: text('MRP = MP × P. A higher product price raises MRP at every quantity of labor, shifting demand right.', 'MRP = MP × P。产品价格上升使每个劳动量下的 MRP 都提高，需求右移。'),
        concept: text('Labor demand shifts with the product price, worker productivity and the prices of other inputs.', '劳动需求随产品价格、工人生产率和其他投入品价格而移动。'),
        takeaway: text('Product price ↑ → labor demand ↑', '产品价格 ↑ → 劳动需求 ↑'),
      },
      {
        prompt: text('A free training program certifies many new welders. What happens to the wage and employment?', '一个免费培训项目认证了大量新焊工。工资和就业如何变化？'),
        choices: [
          distractor('Wage rises, employment falls', '工资上升，就业下降', 'That follows a decrease in labor supply. More certified welders is an increase in supply, which lowers the wage and raises employment.', '那是劳动供给减少的结果。认证焊工增多是供给增加，会降低工资、提高就业。'),
          answer('Wage falls, employment rises', '工资下降，就业上升'),
          distractor('Both rise', '两者都上升', 'Wage and employment rise together when labor demand increases. Here supply increased, so the wage falls while employment rises.', '劳动需求增加时工资和就业才会同时上升。这里是供给增加，工资下降，就业上升。'),
        ],
        correct: 1,
        explanation: text('Labor supply shifts right, lowering the equilibrium wage and raising employment.', '劳动供给右移，均衡工资下降，就业增加。'),
        concept: text('An increase in labor supply lowers the equilibrium wage and raises employment.', '劳动供给增加会降低均衡工资，提高就业。'),
        takeaway: text('Labor supply ↑ → wage ↓, employment ↑', '劳动供给 ↑ → 工资 ↓、就业 ↑'),
      },
      {
        prompt: text('Welding robots, a substitute for welders, become much cheaper. What happens to demand for welders?', '焊接机器人（焊工的替代品）变得便宜很多。对焊工的需求如何变化？'),
        choices: [
          distractor('It increases', '增加', 'Robots and welders do the same job. When robots get cheaper, firms use more robots and fewer welders.', '机器人和焊工做同样的工作。机器人变便宜时，企业多用机器人、少雇焊工。'),
          distractor('It does not change', '不变', 'The price of another input shifts labor demand. Cheaper robots make welders relatively more expensive, so demand for welders falls.', '其他投入品的价格会使劳动需求移动。机器人变便宜，焊工相对变贵，对焊工的需求下降。'),
          answer('It decreases', '减少'),
        ],
        correct: 2,
        explanation: text('When a substitute input gets cheaper, firms use more of it and less labor, so demand for welders decreases.', '替代投入品变便宜时，企业多用它、少用劳动，所以对焊工的需求减少。'),
        concept: text('When a substitute input becomes cheaper, firms switch toward it and demand less of the other input.', '替代投入品变便宜时，企业会转向它，减少对另一种投入的需求。'),
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
          distractor('No: 12 loaves is less than the $20 wage', '不应该：12 个面包少于 20 美元工资', '12 loaves and $20 are in different units. Turn the loaves into revenue first: 12 × $2 = $24, which is more than the $20 wage.', '12 个面包和 20 美元单位不同。先把面包换算成收入：12 × 2 = 24 美元，高于 20 美元工资。'),
          distractor('Only if MRP equals $40', '只有 MRP 等于 40 美元时', '$40 is the price of renting a mixer, which matters for mixers. For a worker, compare the worker’s MRP with the worker’s $20 wage.', '40 美元是搅拌机的租金，只与搅拌机有关。对工人而言，应比较工人的 MRP 与 20 美元工资。'),
        ],
        correct: 0,
        explanation: text('MRP = 12 × $2 = $24 > $20 = MRC, so hiring adds $4 to profit.', 'MRP = 12 × 2 = 24 美元 > 20 美元 = MRC，雇用可增加 4 美元利润。'),
        concept: text('In a competitive labor market, hire a worker if MRP ≥ the wage (the marginal resource cost).', '在竞争性劳动市场中，只要 MRP ≥ 工资（边际资源成本）就雇用。'),
        takeaway: text('Hire while MRP ≥ wage', '只要 MRP ≥ 工资就雇用'),
      },
      {
        prompt: text('At its current mix, labor’s MP is 10 loaves and a mixer’s MP is 30 loaves. How should the bakery adjust to cut costs?', '在当前组合下，劳动的 MP 为 10 个，搅拌机的 MP 为 30 个。为降低成本，面包店应如何调整？'),
        choices: [
          distractor('Use more labor and fewer mixers', '多用劳动，少用搅拌机', 'Compare output per dollar: labor gives 10 ÷ $20 = 0.5 loaf per dollar, mixers 30 ÷ $40 = 0.75. Mixers are the better deal, so shift toward mixers.', '比较每美元产量：劳动为 10 ÷ 20 = 0.5 个，搅拌机为 30 ÷ 40 = 0.75 个。搅拌机更划算，应转向搅拌机。'),
          answer('Use more mixers and less labor', '多用搅拌机，少用劳动'),
          distractor('Keep the mix: mixers cost more', '保持不变：搅拌机更贵', 'Price alone does not decide. Mixers cost twice as much but produce three times as much, so each dollar spent on mixers buys more bread.', '只看价格不能决定。搅拌机贵一倍，但产量是三倍，所以花在搅拌机上的每一美元能换来更多面包。'),
        ],
        correct: 1,
        explanation: text('Mixers give 0.75 loaves per dollar and labor 0.5. Shift spending toward mixers until MP per dollar is equal.', '搅拌机每美元产出 0.75 个，劳动为 0.5 个。应把支出转向搅拌机，直到每美元边际产量相等。'),
        concept: text('Least-cost rule: use inputs so that MP per dollar is equal: MPL ÷ w = MPK ÷ r.', '成本最小化规则：使每美元边际产量相等：MPL ÷ w = MPK ÷ r。'),
        takeaway: text('Equalize MP per dollar: MPL/w = MPK/r', '使每美元边际产量相等：MPL/w = MPK/r'),
      },
      {
        prompt: text('Once MP per dollar is equal for both inputs, is the bakery sure to maximize profit?', '当两种投入的每美元边际产量相等时，面包店一定实现利润最大化了吗？'),
        choices: [
          distractor('Yes, that is the profit rule', '是的，这就是利润最大化规则', 'Equal MP per dollar means the bakery makes its current output as cheaply as possible, but it could still be making too much or too little bread. Profit also needs MRPL = w and MRPK = r.', '每美元边际产量相等，说明面包店以最低成本生产当前产量，但它可能仍生产得太多或太少。利润最大化还需要 MRPL = w 且 MRPK = r。'),
          distractor('Yes, if total output is high', '是的，只要总产量够高', 'High output is not the goal; the right output is. Profit is maximized when each input’s MRP equals its price.', '目标不是高产量，而是正确的产量。当每种投入的 MRP 等于其价格时，利润最大。'),
          answer('No: it also needs MRP = price of each input', '不一定：还需要每种投入的 MRP 等于其价格'),
        ],
        correct: 2,
        explanation: text('Least cost means MPL/w = MPK/r. Profit maximization also requires MRPL = w and MRPK = r.', '成本最小化要求 MPL/w = MPK/r；利润最大化还要求 MRPL = w 且 MRPK = r。'),
        concept: text('Profit maximization needs MRP = price for every input; least cost alone does not pick the right output level.', '利润最大化要求每种投入的 MRP 等于其价格；仅仅成本最小化并不能确定正确的产量。'),
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
          distractor('$12', '12 美元', '$12 is the wage the third worker gets. To hire them the mill also raises the first two workers’ wage from $10 to $12, so the extra cost is $36 − $20 = $16.', '12 美元是第三名工人拿到的工资。为了雇他，工厂还要把前两人的工资从 10 美元提到 12 美元，额外成本是 36 − 20 = 16 美元。'),
          answer('$16', '16 美元'),
          distractor('$36', '36 美元', '$36 = 3 × $12 is the total wage bill for 3 workers. MFC is the increase from hiring the third: $36 − $20 = $16.', '36 = 3 × 12 是 3 名工人的工资总额。MFC 是雇第三人带来的增加：36 − 20 = 16 美元。'),
        ],
        correct: 1,
        explanation: text('Total labor cost rises from 2 × $10 = $20 to 3 × $12 = $36, so MFC = $16.', '总劳动成本从 2 × 10 = 20 美元升到 3 × 12 = 36 美元，所以 MFC = 16 美元。'),
        concept: text('In a monopsony, hiring one more worker raises the wage for everyone, so marginal factor cost (MFC) is above the wage.', '在买方垄断中，多雇一人会提高所有人的工资，所以边际要素成本（MFC）高于工资。'),
        takeaway: text('MFC₃ = $36 − $20 = $16', 'MFC₃ = 36 − 20 = 16 美元'),
      },
      {
        prompt: text('How many workers does the mill hire, and at what wage?', '工厂雇用多少名工人？工资是多少？'),
        choices: [
          distractor('3 workers at $16', '3 人，16 美元', '3 workers is right, but $16 is the MFC, not the wage. Three workers will come for $12, so the mill pays only $12.', '3 人是对的，但 16 美元是 MFC，不是工资。12 美元就能吸引 3 名工人，工厂只付 12 美元。'),
          distractor('4 workers at $14', '4 人，14 美元', 'The 4th worker’s MRP is $16, but hiring them raises the wage bill from $36 to $56, an MFC of $20. Since $16 < $20, the mill stops at 3.', '第 4 人的 MRP 是 16 美元，但雇他会使工资总额从 36 增到 56 美元，MFC 为 20 美元。16 < 20，工厂停在 3 人。'),
          answer('3 workers at $12', '3 人，12 美元'),
        ],
        correct: 2,
        explanation: text('The 3rd worker’s MRP ($20) exceeds MFC ($16); the 4th’s MRP ($16) is below MFC ($20). The mill hires 3 and pays $12.', '第 3 人的 MRP（20 美元）高于 MFC（16 美元）；第 4 人的 MRP（16 美元）低于 MFC（20 美元）。工厂雇 3 人，付 12 美元。'),
        concept: text('A monopsonist hires where MRP = MFC, then pays the lowest wage on the supply curve that attracts that many workers.', '买方垄断者在 MRP = MFC 处决定雇用量，再按供给曲线支付吸引这么多工人所需的最低工资。'),
        takeaway: text('MRP = MFC at 3 workers; wage from supply = $12', '3 人时 MRP = MFC；按供给定工资 12 美元'),
      },
      {
        prompt: text('Compared with a competitive labor market, the monopsony…', '与竞争性劳动市场相比，买方垄断……'),
        choices: [
          answer('Hires fewer workers at a lower wage', '雇用更少工人，工资更低'),
          distractor('Hires more workers at a lower wage', '雇用更多工人，工资更低', 'A competitive market hires until MRP = wage: the 4th worker’s MRP ($16) beats the $14 wage, so 4 workers. The monopsony hires only 3.', '竞争性市场雇到 MRP = 工资：第 4 人 MRP 16 美元高于工资 14 美元，雇 4 人。买方垄断只雇 3 人。'),
          distractor('Pays a higher wage to attract workers', '支付更高工资以吸引工人', 'The monopsony holds hiring down because each extra worker raises everyone’s wage. That keeps the wage at $12, below the competitive $14.', '买方垄断压低雇用量，因为每多雇一人都会提高所有人的工资。这使工资停在 12 美元，低于竞争时的 14 美元。'),
        ],
        correct: 0,
        explanation: text('A competitive market would employ 4 workers at $14. The monopsony hires 3 at $12, creating deadweight loss.', '竞争性市场会以 14 美元雇 4 人；买方垄断以 12 美元雇 3 人，造成无谓损失。'),
        concept: text('Compared with a competitive labor market, a monopsony hires fewer workers at a lower wage.', '与竞争性劳动市场相比，买方垄断雇用更少工人、支付更低工资。'),
        takeaway: text('Monopsony: fewer workers, lower wage', '买方垄断：工人更少，工资更低'),
      },
    ],
  },
];
