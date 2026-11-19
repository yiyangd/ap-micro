import { answer, distractor, text, type Mission } from './game-types';

export const unit3Missions: readonly Mission[] = [
  {
    id: '3.1',
    title: text('The Pizza Line', '披萨流水线'),
    topic: text('The Production Function', '生产函数'),
    scenario: text(
      'A pizza shop has one oven. The table shows total pizzas per hour as it adds workers. Everything else stays fixed.',
      '一家披萨店只有一台烤箱。表格显示增加工人时每小时的披萨总产量，其他投入保持不变。',
    ),
    table: {
      caption: text('Workers and total product', '工人数与总产量'),
      columns: [text('Workers', '工人'), text('Total pizzas', '披萨总产量')],
      rows: [[text('0'), text('0')], [text('1'), text('10')], [text('2'), text('24')], [text('3'), text('34')], [text('4'), text('40')], [text('5'), text('42')]],
    },
    steps: [
      {
        prompt: text('What is the marginal product of the third worker?', '第三名工人的边际产量是多少？'),
        choices: [
          distractor('34 pizzas', '34 个披萨', '34 is total output with all three workers. Marginal product asks what the third worker adds: 34 − 24 = 10.', '34 是三名工人的总产量。边际产量问的是第三名工人多带来多少：34 − 24 = 10。'),
          answer('10 pizzas', '10 个披萨'),
          distractor('About 11.3 pizzas', '约 11.3 个披萨', '34 ÷ 3 is average product, output per worker. Marginal product is the extra output from adding the third worker: 34 − 24 = 10.', '34 ÷ 3 是平均产量，即人均产量。边际产量是增加第三名工人带来的额外产量：34 − 24 = 10。'),
        ],
        correct: 1,
        explanation: text('MP of the third worker = 34 − 24 = 10 pizzas.', '第三名工人的边际产量 = 34 − 24 = 10 个披萨。'),
        concept: text('Marginal product = change in total product from one more unit of an input.', '边际产量 = 多投入一单位要素带来的总产量变化。'),
        takeaway: text('MP₃ = 34 − 24 = 10', 'MP₃ = 34 − 24 = 10'),
      },
      {
        prompt: text('Diminishing marginal returns begin with which worker?', '边际收益递减从第几名工人开始？'),
        choices: [
          answer('The 3rd worker', '第 3 名工人'),
          distractor('The 5th worker', '第 5 名工人', 'Total output still rises up to the 5th worker, but diminishing returns is about marginal product falling, and MP already drops from 14 to 10 with the 3rd worker.', '总产量到第 5 人仍在增加，但边际收益递减看的是边际产量下降，而 MP 在第 3 人时就从 14 降到 10。'),
          distractor('The 2nd worker', '第 2 名工人', 'The 2nd worker adds 14, more than the 1st worker’s 10, so returns are still increasing there (workers can specialize). The first drop comes with the 3rd worker.', '第 2 人增加 14，多于第 1 人的 10，此时仍是边际收益递增（工人可以分工）。第一次下降出现在第 3 人。'),
        ],
        correct: 0,
        explanation: text('Marginal products are 10, 14, 10, 6, 2. MP first falls with the third worker as the fixed oven gets crowded.', '边际产量依次为 10、14、10、6、2。由于烤箱固定，MP 从第三名工人开始下降。'),
        concept: text('Diminishing marginal returns: with a fixed input, each extra worker eventually adds less output than the one before.', '边际收益递减：在固定投入下，每多一名工人带来的产量最终会少于前一名。'),
        takeaway: text('MP: 10, 14, 10, 6, 2 → diminishing from worker 3', 'MP：10、14、10、6、2 → 从第 3 人开始递减'),
      },
      {
        prompt: text('What is the average product of labor with four workers?', '四名工人时的劳动平均产量是多少？'),
        choices: [
          distractor('6 pizzas', '6 个披萨', '6 is the 4th worker’s marginal product (40 − 34). Average product spreads total output over all workers: 40 ÷ 4 = 10.', '6 是第 4 名工人的边际产量（40 − 34）。平均产量是把总产量平摊到所有工人：40 ÷ 4 = 10。'),
          distractor('40 pizzas', '40 个披萨', '40 is the whole team’s output. Average product is per worker: 40 ÷ 4 = 10.', '40 是整个团队的总产量。平均产量是每人的产量：40 ÷ 4 = 10。'),
          answer('10 pizzas', '10 个披萨'),
        ],
        correct: 2,
        explanation: text('AP = total product ÷ workers = 40 ÷ 4 = 10 pizzas per worker.', '平均产量 = 总产量 ÷ 工人数 = 40 ÷ 4 = 每人 10 个披萨。'),
        concept: text('Average product = total product ÷ number of workers.', '平均产量 = 总产量 ÷ 工人数。'),
        takeaway: text('AP = 40 ÷ 4 = 10', 'AP = 40 ÷ 4 = 10'),
      },
    ],
  },
  {
    id: '3.2',
    title: text('The Candle Workshop', '蜡烛作坊'),
    topic: text('Short-Run Production Costs', '短期生产成本'),
    scenario: text(
      'A candle workshop pays $20 a day in rent no matter how much it produces. The table shows total cost for each daily output.',
      '一家蜡烛作坊无论产量多少，每天都要付 20 美元租金。表格给出每个日产量对应的总成本。',
    ),
    table: {
      caption: text('Daily output and total cost', '日产量与总成本'),
      columns: [text('Boxes', '箱数'), text('Total cost', '总成本')],
      rows: [[text('0'), text('$20')], [text('1'), text('$30')], [text('2'), text('$38')], [text('3'), text('$50')], [text('4'), text('$68')], [text('5'), text('$90')]],
    },
    steps: [
      {
        prompt: text('What is the marginal cost of the fourth box?', '第四箱的边际成本是多少？'),
        choices: [
          distractor('$17', '17 美元', '$17 is average total cost at 4 boxes ($68 ÷ 4). Marginal cost asks what the 4th box adds: $68 − $50 = $18.', '17 美元是 4 箱时的平均总成本（68 ÷ 4）。边际成本问的是第 4 箱多花多少：68 − 50 = 18 美元。'),
          answer('$18', '18 美元'),
          distractor('$68', '68 美元', '$68 is the cost of all four boxes together. Marginal cost is only the extra cost of the 4th box: $68 − $50 = $18.', '68 美元是四箱的总成本。边际成本只是第 4 箱的额外成本：68 − 50 = 18 美元。'),
        ],
        correct: 1,
        explanation: text('MC of the 4th box = $68 − $50 = $18.', '第 4 箱的边际成本 = 68 − 50 = 18 美元。'),
        concept: text('Marginal cost = change in total cost from producing one more unit.', '边际成本 = 多生产一单位带来的总成本变化。'),
        takeaway: text('MC₄ = $68 − $50 = $18', 'MC₄ = 68 − 50 = 18 美元'),
      },
      {
        prompt: text('What is average variable cost at 4 boxes?', '4 箱时的平均可变成本是多少？'),
        choices: [
          answer('$12', '12 美元'),
          distractor('$17', '17 美元', '$17 = $68 ÷ 4 includes the $20 rent, so it is average total cost. Variable cost leaves out fixed cost: ($68 − $20) ÷ 4 = $12.', '17 = 68 ÷ 4 包含 20 美元租金，是平均总成本。可变成本不含固定成本：(68 − 20) ÷ 4 = 12 美元。'),
          distractor('$5', '5 美元', '$5 = $20 ÷ 4 is average fixed cost, the rent spread over 4 boxes. AVC is the other part of ATC: $17 − $5 = $12.', '5 = 20 ÷ 4 是平均固定成本，即租金平摊到 4 箱。AVC 是 ATC 的另一部分：17 − 5 = 12 美元。'),
        ],
        correct: 0,
        explanation: text('Variable cost = $68 − $20 = $48, so AVC = $48 ÷ 4 = $12.', '可变成本 = 68 − 20 = 48 美元，AVC = 48 ÷ 4 = 12 美元。'),
        concept: text('Average variable cost = (total cost − fixed cost) ÷ quantity.', '平均可变成本 = (总成本 − 固定成本) ÷ 产量。'),
        takeaway: text('AVC = ($68 − $20) ÷ 4 = $12', 'AVC = (68 − 20) ÷ 4 = 12 美元'),
      },
      {
        prompt: text('Rent rises to $30 a day. Which cost does NOT change?', '租金涨到每天 30 美元。哪项成本不会变化？'),
        choices: [
          distractor('Average total cost', '平均总成本', 'ATC = AFC + AVC. Higher rent raises AFC at every output, so ATC rises too. Only costs that depend on output, like MC, stay the same.', 'ATC = AFC + AVC。租金上涨会提高每个产量下的 AFC，ATC 也随之上升。只有与产量相关的成本（如 MC）不变。'),
          distractor('Total cost', '总成本', 'Total cost includes rent, so it is $10 higher at every output. What stays the same is the change in total cost from one more box, which is MC.', '总成本包含租金，每个产量下都高出 10 美元。不变的是多生产一箱带来的总成本变化，即 MC。'),
          answer('Marginal cost', '边际成本'),
        ],
        correct: 2,
        explanation: text('Fixed costs do not vary with output, so they do not affect marginal cost or average variable cost.', '固定成本不随产量变化，所以不影响边际成本和平均可变成本。'),
        concept: text('Fixed costs do not change with output, so they affect ATC and AFC but not MC or AVC.', '固定成本不随产量变化，所以影响 ATC 和 AFC，但不影响 MC 和 AVC。'),
        takeaway: text('Fixed cost ↑ → MC and AVC unchanged', '固定成本 ↑ → MC 与 AVC 不变'),
      },
    ],
  },
  {
    id: '3.3',
    title: text('Growing the Bakery', '扩建面包店'),
    topic: text('Long-Run Production Costs', '长期生产成本'),
    scenario: text(
      'A bakery chooses its plant size in the long run. The table shows its lowest possible average cost at each daily output.',
      '面包店在长期中可以选择工厂规模。表格显示各日产量下可达到的最低平均成本。',
    ),
    table: {
      caption: text('Long-run average total cost', '长期平均总成本'),
      columns: [text('Loaves per day', '每日面包数'), text('LRATC', '长期平均总成本')],
      rows: [[text('100'), text('$4.00')], [text('200'), text('$3.00')], [text('300'), text('$2.50')], [text('400'), text('$2.50')], [text('500'), text('$2.80')]],
    },
    steps: [
      {
        prompt: text('Over which range does the bakery have economies of scale?', '面包店在哪个产量区间存在规模经济？'),
        choices: [
          answer('100 to 300 loaves', '100 到 300 个'),
          distractor('300 to 400 loaves', '300 到 400 个', 'Between 300 and 400 LRATC stays at $2.50, so cost per loaf does not fall. That flat range is constant returns to scale.', '300 到 400 之间 LRATC 保持 2.50 美元，单位成本没有下降。这段平坦区间是规模报酬不变。'),
          distractor('400 to 500 loaves', '400 到 500 个', 'Between 400 and 500 LRATC rises to $2.80. Rising average cost is diseconomies of scale, the opposite.', '400 到 500 之间 LRATC 升到 2.80 美元。平均成本上升是规模不经济，正好相反。'),
        ],
        correct: 0,
        explanation: text('Economies of scale mean LRATC falls as output grows, from $4.00 to $2.50 between 100 and 300 loaves.', '规模经济指 LRATC 随产量增加而下降：在 100 到 300 个之间从 4.00 美元降到 2.50 美元。'),
        concept: text('Economies of scale: long-run average total cost falls as output grows.', '规模经济：长期平均总成本随产量增加而下降。'),
        takeaway: text('LRATC falling → economies of scale', 'LRATC 下降 → 规模经济'),
      },
      {
        prompt: text('What is the minimum efficient scale?', '最小有效规模是多少？'),
        choices: [
          distractor('400 loaves', '400 个', '400 is also at the minimum cost of $2.50, but the bakery already reaches that cost at 300. MES is the smallest such output.', '400 也处在最低成本 2.50 美元，但面包店在 300 时就已达到这一成本。最小有效规模是其中最小的产量。'),
          answer('300 loaves', '300 个'),
          distractor('500 loaves', '500 个', 'At 500 LRATC is $2.80, above the minimum. MES must be at the lowest cost, which is first reached at 300.', '500 时 LRATC 为 2.80 美元，高于最低值。最小有效规模必须处于最低成本，而首次达到是在 300。'),
        ],
        correct: 1,
        explanation: text('Minimum efficient scale is the lowest output at which LRATC reaches its minimum: 300 loaves.', '最小有效规模是 LRATC 首次达到最低值的最小产量：300 个。'),
        concept: text('Minimum efficient scale is the smallest output at which LRATC reaches its minimum.', '最小有效规模是 LRATC 首次达到最低点时的最小产量。'),
        takeaway: text('MES = 300 loaves', '最小有效规模 = 300 个'),
      },
      {
        prompt: text('Moving from 400 to 500 loaves, the bakery experiences…', '从 400 个增加到 500 个，面包店经历的是……'),
        choices: [
          distractor('Economies of scale', '规模经济', 'Economies of scale mean average cost falls. From 400 to 500 it rises from $2.50 to $2.80.', '规模经济指平均成本下降。从 400 到 500，平均成本从 2.50 升到 2.80 美元。'),
          distractor('Constant returns to scale', '规模报酬不变', 'Constant returns mean LRATC stays flat, as between 300 and 400. Here it rises.', '规模报酬不变指 LRATC 保持平坦，就像 300 到 400 之间。这里它在上升。'),
          answer('Diseconomies of scale', '规模不经济'),
        ],
        correct: 2,
        explanation: text('Rising LRATC means diseconomies of scale, often from coordination problems in a larger plant.', 'LRATC 上升代表规模不经济，常因大规模工厂的协调困难造成。'),
        concept: text('Diseconomies of scale: LRATC rises as output grows, often because a large firm is harder to coordinate.', '规模不经济：LRATC 随产量增加而上升，常因大企业难以协调。'),
        takeaway: text('LRATC rising → diseconomies of scale', 'LRATC 上升 → 规模不经济'),
      },
    ],
  },
  {
    id: '3.4',
    title: text('The Food Truck Decision', '餐车的决定'),
    topic: text('Types of Profit', '利润的类型'),
    scenario: text(
      'Lina runs a food truck. This year it earned $90,000 in revenue and paid $60,000 for food, fuel and permits. To run it, she gave up a job paying $35,000.',
      '莉娜经营一辆餐车。今年收入 90,000 美元，支付食材、燃油和许可证共 60,000 美元。为了经营餐车，她放弃了一份年薪 35,000 美元的工作。',
    ),
    steps: [
      {
        prompt: text('What is Lina’s accounting profit?', '莉娜的会计利润是多少？'),
        choices: [
          answer('$30,000', '30,000 美元'),
          distractor('−$5,000', '−5,000 美元', 'That also subtracts the $35,000 salary she gave up, which is an implicit cost: no money was paid. Accountants count only explicit costs: $90,000 − $60,000.', '这还减去了她放弃的 35,000 美元薪水，那是隐性成本，并没有实际付钱。会计只算显性成本：90,000 − 60,000。'),
          distractor('$90,000', '90,000 美元', '$90,000 is revenue. Profit subtracts costs, and she paid $60,000 for food, fuel and permits.', '90,000 美元是收入。利润要减去成本，她为食材、燃油和许可证支付了 60,000 美元。'),
        ],
        correct: 0,
        explanation: text('Accounting profit = revenue − explicit costs = $90,000 − $60,000 = $30,000.', '会计利润 = 收入 − 显性成本 = 90,000 − 60,000 = 30,000 美元。'),
        concept: text('Accounting profit = total revenue − explicit costs (money actually paid out).', '会计利润 = 总收入 − 显性成本（实际支付的钱）。'),
        takeaway: text('Accounting profit = $30,000', '会计利润 = 30,000 美元'),
      },
      {
        prompt: text('What is Lina’s economic profit?', '莉娜的经济利润是多少？'),
        choices: [
          distractor('$30,000', '30,000 美元', '$30,000 is accounting profit. Economic profit also subtracts the opportunity cost of her time: the $35,000 job she gave up.', '30,000 美元是会计利润。经济利润还要减去她时间的机会成本：放弃的 35,000 美元工作。'),
          answer('−$5,000', '−5,000 美元'),
          distractor('$65,000', '65,000 美元', 'The forgone salary is income she does not get because of the truck, so it is a cost of running the truck. Subtract it: $30,000 − $35,000 = −$5,000.', '放弃的薪水是因为经营餐车而没拿到的收入，所以是经营餐车的成本。应减去它：30,000 − 35,000 = −5,000 美元。'),
        ],
        correct: 1,
        explanation: text('Economic profit = $90,000 − $60,000 − $35,000 = −$5,000.', '经济利润 = 90,000 − 60,000 − 35,000 = −5,000 美元。'),
        concept: text('Economic profit = total revenue − explicit costs − implicit costs (opportunity costs).', '经济利润 = 总收入 − 显性成本 − 隐性成本（机会成本）。'),
        takeaway: text('Economic profit = −$5,000', '经济利润 = −5,000 美元'),
      },
      {
        prompt: text('If these numbers persist, what should Lina do in the long run?', '如果这些数字长期不变，莉娜在长期应该怎么做？'),
        choices: [
          distractor('Stay: accounting profit is positive', '继续：会计利润为正', 'Accounting profit ignores what she gives up. Her old job pays $35,000, more than the truck’s $30,000, so staying leaves her $5,000 worse off.', '会计利润忽略了她放弃的东西。原来的工作能付 35,000 美元，高于餐车的 30,000 美元，留下来她少赚 5,000 美元。'),
          distractor('Stay: she earns a normal profit', '继续：她获得正常利润', 'Normal profit means economic profit of exactly zero: earning just what the next-best option pays. Hers is −$5,000, below normal profit.', '正常利润指经济利润恰好为零，即刚好赚到次优选择的收入。她的经济利润为 −5,000 美元，低于正常利润。'),
          answer('Leave: her next-best option pays more', '退出：次优选择收入更高'),
        ],
        correct: 2,
        explanation: text('Negative economic profit means her resources earn less than in their best alternative use, so she should exit.', '经济利润为负，说明她的资源收益低于最佳替代用途，因此应该退出。'),
        concept: text('Resources should stay where economic profit ≥ 0; negative economic profit means a better use exists.', '经济利润 ≥ 0 才值得留下；经济利润为负说明资源有更好的用途。'),
        takeaway: text('Economic profit < 0 → exit in the long run', '经济利润 < 0 → 长期退出'),
      },
    ],
  },
  {
    id: '3.5',
    title: text('Wheat at the Market Price', '按市价卖小麦'),
    topic: text('Profit Maximization', '利润最大化'),
    scenario: text(
      'A wheat farm is a price taker. The market price is $12 per bushel. The table shows its marginal cost for each additional bushel.',
      '一家小麦农场是价格接受者，市场价格为每蒲式耳 12 美元。表格给出每多产一蒲式耳的边际成本。',
    ),
    table: {
      caption: text('Marginal cost by bushel', '每蒲式耳的边际成本'),
      columns: [text('Bushel', '第几蒲式耳'), text('Marginal cost', '边际成本')],
      rows: [[text('1st', '第 1'), text('$4')], [text('2nd', '第 2'), text('$6')], [text('3rd', '第 3'), text('$9')], [text('4th', '第 4'), text('$12')], [text('5th', '第 5'), text('$16')]],
    },
    steps: [
      {
        prompt: text('What is the marginal revenue of each bushel?', '每蒲式耳的边际收益是多少？'),
        choices: [
          distractor('It falls as the farm sells more', '随销量增加而下降', 'MR falls only when a firm must cut its price to sell more, as a monopoly does. This farm is tiny relative to the market and sells every bushel at $12.', '只有当企业必须降价才能多卖（如垄断者）时，MR 才会下降。这家农场相对市场极小，每蒲式耳都以 12 美元售出。'),
          answer('$12, the market price', '12 美元，即市场价格'),
          distractor('Equal to marginal cost', '等于边际成本', 'MR is about revenue: what one more bushel brings in, which is the $12 market price whatever it costs. MR = MC is the rule for choosing output, not the definition of MR.', 'MR 关于收入：多卖一蒲式耳能带来多少，即 12 美元的市场价格，与成本无关。MR = MC 是选择产量的规则，而不是 MR 的定义。'),
        ],
        correct: 1,
        explanation: text('For a perfectly competitive firm, MR = P = $12 for every unit.', '对完全竞争企业而言，每单位的 MR = P = 12 美元。'),
        concept: text('A perfectly competitive firm is a price taker, so MR = P for every unit.', '完全竞争企业是价格接受者，每单位的 MR = P。'),
        takeaway: text('Price taker: MR = P = $12', '价格接受者：MR = P = 12 美元'),
      },
      {
        prompt: text('How many bushels maximize profit?', '生产多少蒲式耳能使利润最大？'),
        choices: [
          answer('4 bushels', '4 蒲式耳'),
          distractor('3 bushels', '3 蒲式耳', 'The 4th bushel brings $12 and costs $12, so producing it does not lower profit, and the AP rule is to produce where MR = MC: 4 bushels.', '第 4 蒲式耳带来 12 美元、成本 12 美元，生产它不会减少利润，AP 的规则是在 MR = MC 处生产：4 蒲式耳。'),
          distractor('5 bushels', '5 蒲式耳', 'The 5th bushel costs $16 but sells for $12, so it lowers profit by $4. Stop where MC reaches MR.', '第 5 蒲式耳成本 16 美元，售价 12 美元，会使利润减少 4 美元。应在 MC 达到 MR 处停止。'),
        ],
        correct: 0,
        explanation: text('Produce where MR = MC: at the 4th bushel, $12 = $12. Any further bushel has MC above MR.', '在 MR = MC 处生产：第 4 蒲式耳时 12 = 12。再多生产，MC 就高于 MR。'),
        concept: text('Profit is maximized at the output where MR = MC: produce every unit whose MR is at least its MC.', '利润在 MR = MC 处最大：生产所有 MR 不低于 MC 的单位。'),
        takeaway: text('MR = MC at 4 bushels', '4 蒲式耳时 MR = MC'),
      },
      {
        prompt: text('The market price falls to $9. What is the new profit-maximizing output?', '市场价格降到 9 美元。新的利润最大化产量是多少？'),
        choices: [
          distractor('4 bushels', '4 蒲式耳', 'At the new price the 4th bushel brings only $9 but costs $12, so it loses $3. With MR = $9, MR = MC at 3 bushels.', '新价格下，第 4 蒲式耳只带来 9 美元却花 12 美元，亏 3 美元。MR = 9 美元时，MR = MC 在 3 蒲式耳处。'),
          distractor('2 bushels', '2 蒲式耳', 'The 3rd bushel still brings $9 and costs $9, so it does not lower profit. Produce up to where MR = MC: 3 bushels.', '第 3 蒲式耳带来 9 美元、成本 9 美元，不会减少利润。生产到 MR = MC：3 蒲式耳。'),
          answer('3 bushels', '3 蒲式耳'),
        ],
        correct: 2,
        explanation: text('With MR = $9, MR = MC at the 3rd bushel.', 'MR = 9 美元时，第 3 蒲式耳处 MR = MC。'),
        concept: text('When the price changes, a competitive firm moves along its MC curve to the new output where MR = MC.', '价格变化时，竞争企业沿 MC 曲线移动到新的 MR = MC 产量。'),
        takeaway: text('P = $9 → produce 3 bushels', 'P = 9 美元 → 生产 3 蒲式耳'),
      },
    ],
  },
  {
    id: '3.6',
    title: text('Stay Open or Shut Down?', '营业还是停产？'),
    topic: text('Firms’ Short-Run Decisions to Produce and Long-Run Decisions to Enter or Exit a Market', '企业的短期生产与长期进入或退出决策'),
    scenario: text(
      'A competitive bike-repair shop has a minimum average variable cost of $5 and a minimum average total cost of $8 per repair.',
      '一家竞争性自行车维修店的最低平均可变成本为每单 5 美元，最低平均总成本为每单 8 美元。',
    ),
    steps: [
      {
        prompt: text('The market price is $6. What should the shop do in the short run?', '市场价格为 6 美元。维修店在短期内应该怎么做？'),
        choices: [
          answer('Keep producing at a loss', '亏损但继续营业'),
          distractor('Shut down at once', '立即停产', 'Shutting down still leaves the fixed cost to pay. At $6 each repair covers its $5 variable cost and puts something toward rent, so producing loses less.', '停产仍要支付固定成本。价格 6 美元时，每单维修覆盖了 5 美元可变成本，还能分担一些租金，所以营业亏得更少。'),
          distractor('Produce and earn a profit', '营业并获得利润', 'Profit needs P above ATC. At $6 the price is below the $8 minimum ATC, so the shop loses money; the only question is whether producing loses less.', '盈利需要 P 高于 ATC。6 美元低于最低 ATC 8 美元，维修店一定亏损，问题只是营业是否亏得更少。'),
        ],
        correct: 0,
        explanation: text('With AVC < P < ATC, producing loses less than shutting down, since shutting down still leaves the fixed cost.', '当 AVC < P < ATC 时，营业的亏损小于停产的亏损，因为停产仍要承担固定成本。'),
        concept: text('In the short run, produce if P ≥ minimum AVC, even at a loss, because fixed costs must be paid either way.', '短期内，只要 P ≥ 最低 AVC 就继续生产，即使亏损，因为固定成本无论如何都要付。'),
        takeaway: text('AVC < P < ATC → produce at a loss', 'AVC < P < ATC → 亏损营业'),
      },
      {
        prompt: text('The price drops to $4. What should the shop do in the short run?', '价格跌到 4 美元。维修店在短期内应该怎么做？'),
        choices: [
          distractor('Keep producing to cover fixed cost', '继续营业以弥补固定成本', 'At $4 each repair costs at least $5 in variable cost, so every repair adds to the loss instead of covering fixed cost. Shutting down limits the loss to the fixed cost.', '4 美元时每单维修至少花 5 美元可变成本，每多修一单都会增加亏损，而不是分担固定成本。停产可把亏损限制在固定成本。'),
          answer('Shut down', '停产'),
          distractor('Raise its price to $8', '把价格提高到 8 美元', 'In perfect competition the shop is a price taker. If it charged $8, customers would go to the many other shops charging the market price.', '在完全竞争中维修店是价格接受者。如果它收 8 美元，顾客会去按市场价收费的其他店。'),
        ],
        correct: 1,
        explanation: text('When P < minimum AVC, shutting down limits the loss to fixed cost.', '当 P < 最低 AVC 时，停产可把亏损限制在固定成本以内。'),
        concept: text('Shut down in the short run when P < minimum AVC: the loss is then limited to fixed cost.', '短期内当 P < 最低 AVC 时停产：亏损限于固定成本。'),
        takeaway: text('P < min AVC → shut down', 'P < 最低 AVC → 停产'),
      },
      {
        prompt: text('If the price stays at $6, what happens in the long run?', '如果价格长期保持在 6 美元，长期会发生什么？'),
        choices: [
          distractor('Firms enter and price falls', '企业进入，价格下降', 'Entry follows profit. At $6, below minimum ATC of $8, firms lose money, so they leave instead.', '进入跟随利润。6 美元低于最低 ATC 8 美元，企业亏损，所以会退出而不是进入。'),
          distractor('Nothing changes', '没有变化', 'Firms will not accept losses forever. In the long run all costs are variable, so firms that lose money leave the industry.', '企业不会永远承受亏损。长期内所有成本都可变，亏损的企业会退出行业。'),
          answer('Firms exit and price rises to $8', '企业退出，价格升至 8 美元'),
        ],
        correct: 2,
        explanation: text('Exit decreases market supply, raising the price until it equals minimum ATC of $8 and economic profit is zero.', '企业退出使市场供给减少，价格上升到最低 ATC 8 美元，经济利润归零。'),
        concept: text('In the long run, losses cause exit, which decreases market supply and raises price to minimum ATC (zero economic profit).', '长期内亏损导致退出，市场供给减少，价格升至最低 ATC（经济利润为零）。'),
        takeaway: text('Losses → exit → P rises to min ATC', '亏损 → 退出 → P 升至最低 ATC'),
      },
    ],
  },
  {
    id: '3.7',
    title: text('The Long Run in Honey', '蜂蜜市场的长期'),
    topic: text('Perfect Competition', '完全竞争'),
    scenario: text(
      'The honey market is perfectly competitive with identical firms and constant costs. The market price is $10 per jar, and each firm’s minimum ATC is $7.',
      '蜂蜜市场是完全竞争市场，企业相同且成本不变。市场价格为每罐 10 美元，每家企业的最低 ATC 为 7 美元。',
    ),
    steps: [
      {
        prompt: text('Firms earn economic profit. What happens in the long run?', '企业获得经济利润。长期会发生什么？'),
        choices: [
          distractor('Firms exit the market', '企业退出市场', 'Firms exit when they lose money. Here the price ($10) is above minimum ATC ($7), so firms earn profit and new firms want in.', '企业亏损时才退出。这里价格（10 美元）高于最低 ATC（7 美元），企业盈利，新企业想进入。'),
          answer('Firms enter, and market supply increases', '企业进入，市场供给增加'),
          distractor('Market demand increases', '市场需求增加', 'Profit draws in new sellers, not new buyers. More sellers increase market supply, and that is what pushes the price down.', '利润吸引的是新卖家，不是新买家。卖家增加使市场供给增加，正是这一点压低价格。'),
        ],
        correct: 1,
        explanation: text('With no barriers to entry, economic profit attracts new firms, shifting market supply to the right.', '没有进入壁垒时，经济利润会吸引新企业进入，使市场供给右移。'),
        concept: text('Economic profit attracts new firms when there are no barriers to entry.', '没有进入壁垒时，经济利润会吸引新企业进入。'),
        takeaway: text('Profit → entry → market supply ↑', '利润 → 进入 → 市场供给 ↑'),
      },
      {
        prompt: text('What is the long-run equilibrium price?', '长期均衡价格是多少？'),
        choices: [
          distractor('$10', '10 美元', 'At $10 firms still earn profit, so entry continues and keeps pushing the price down. The price stops falling only when profit reaches zero.', '10 美元时企业仍有利润，进入会继续并不断压低价格。只有利润降为零时价格才停止下降。'),
          distractor('Below $7', '低于 7 美元', 'Below $7 firms would lose money and exit, which pushes the price back up. Entry and exit settle the price at minimum ATC: $7.', '低于 7 美元时企业会亏损并退出，价格会被推回上升。进入和退出使价格稳定在最低 ATC：7 美元。'),
          answer('$7', '7 美元'),
        ],
        correct: 2,
        explanation: text('Entry stops when price falls to minimum ATC, $7, where economic profit is zero.', '当价格降到最低 ATC 7 美元、经济利润为零时，进入停止。'),
        concept: text('Long-run equilibrium in perfect competition: P = minimum ATC, so economic profit is zero.', '完全竞争的长期均衡：P = 最低 ATC，经济利润为零。'),
        takeaway: text('Long run: P = min ATC = $7', '长期：P = 最低 ATC = 7 美元'),
      },
      {
        prompt: text('In long-run equilibrium, the honey market is…', '在长期均衡时，蜂蜜市场是……'),
        choices: [
          answer('Both allocatively and productively efficient', '既有配置效率，也有生产效率'),
          distractor('Only allocatively efficient', '只有配置效率', 'P = minimum ATC means each firm produces at the lowest possible cost per unit, which is productive efficiency. So both conditions hold.', 'P = 最低 ATC 意味着每家企业以最低单位成本生产，这就是生产效率。所以两个条件都成立。'),
          distractor('Neither kind of efficient', '两种效率都没有', 'In long-run equilibrium price equals MC (firms produce where P = MR = MC) and price equals minimum ATC (zero profit), so both efficiencies hold.', '长期均衡时，价格等于 MC（企业在 P = MR = MC 处生产），价格也等于最低 ATC（利润为零），所以两种效率都成立。'),
        ],
        correct: 0,
        explanation: text('P = MC gives allocative efficiency, and P = minimum ATC gives productive efficiency.', 'P = MC 带来配置效率，P = 最低 ATC 带来生产效率。'),
        concept: text('Allocative efficiency: P = MC. Productive efficiency: P = minimum ATC. Long-run perfect competition achieves both.', '配置效率：P = MC。生产效率：P = 最低 ATC。长期完全竞争两者都能实现。'),
        takeaway: text('P = MC = min ATC → both efficiencies', 'P = MC = 最低 ATC → 两种效率'),
      },
    ],
  },
];
