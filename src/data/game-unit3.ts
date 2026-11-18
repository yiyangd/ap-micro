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
          distractor('34 pizzas', '34 个披萨', '34 is total product with three workers. Marginal product is the change.', '34 是三名工人时的总产量，边际产量是增加的部分。'),
          answer('10 pizzas', '10 个披萨'),
          distractor('About 11.3 pizzas', '约 11.3 个披萨', 'That is average product, 34 ÷ 3. Use the change from 2 to 3 workers.', '这是平均产量 34 ÷ 3。应计算从 2 人到 3 人的变化。'),
        ],
        correct: 1,
        explanation: text('MP of the third worker = 34 − 24 = 10 pizzas.', '第三名工人的边际产量 = 34 − 24 = 10 个披萨。'),
        takeaway: text('MP₃ = 34 − 24 = 10', 'MP₃ = 34 − 24 = 10'),
      },
      {
        prompt: text('Diminishing marginal returns begin with which worker?', '边际收益递减从第几名工人开始？'),
        choices: [
          answer('The 3rd worker', '第 3 名工人'),
          distractor('The 5th worker', '第 5 名工人', 'Total product still rises, but marginal product starts falling earlier.', '总产量仍在增加，但边际产量更早就开始下降。'),
          distractor('The 2nd worker', '第 2 名工人', 'MP rises from 10 to 14 with the second worker. That is increasing returns.', '第二名工人使 MP 从 10 升到 14，这是边际收益递增。'),
        ],
        correct: 0,
        explanation: text('Marginal products are 10, 14, 10, 6, 2. MP first falls with the third worker as the fixed oven gets crowded.', '边际产量依次为 10、14、10、6、2。由于烤箱固定，MP 从第三名工人开始下降。'),
        takeaway: text('MP: 10, 14, 10, 6, 2 → diminishing from worker 3', 'MP：10、14、10、6、2 → 从第 3 人开始递减'),
      },
      {
        prompt: text('What is the average product of labor with four workers?', '四名工人时的劳动平均产量是多少？'),
        choices: [
          distractor('6 pizzas', '6 个披萨', '6 is the fourth worker’s marginal product. Divide total product by workers.', '6 是第四名工人的边际产量。应该用总产量除以工人数。'),
          distractor('40 pizzas', '40 个披萨', '40 is total product. Divide it by the number of workers.', '40 是总产量，还要除以工人数。'),
          answer('10 pizzas', '10 个披萨'),
        ],
        correct: 2,
        explanation: text('AP = total product ÷ workers = 40 ÷ 4 = 10 pizzas per worker.', '平均产量 = 总产量 ÷ 工人数 = 40 ÷ 4 = 每人 10 个披萨。'),
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
          distractor('$17', '17 美元', '$17 is average total cost at 4 boxes. Marginal cost is the change in total cost.', '17 美元是 4 箱时的平均总成本。边际成本是总成本的变化量。'),
          answer('$18', '18 美元'),
          distractor('$68', '68 美元', '$68 is total cost. Subtract total cost at 3 boxes.', '68 美元是总成本，还要减去 3 箱时的总成本。'),
        ],
        correct: 1,
        explanation: text('MC of the 4th box = $68 − $50 = $18.', '第 4 箱的边际成本 = 68 − 50 = 18 美元。'),
        takeaway: text('MC₄ = $68 − $50 = $18', 'MC₄ = 68 − 50 = 18 美元'),
      },
      {
        prompt: text('What is average variable cost at 4 boxes?', '4 箱时的平均可变成本是多少？'),
        choices: [
          answer('$12', '12 美元'),
          distractor('$17', '17 美元', 'That includes rent. Variable cost excludes the $20 fixed cost.', '这包含了租金。可变成本不含 20 美元的固定成本。'),
          distractor('$5', '5 美元', '$5 is average fixed cost, $20 ÷ 4.', '5 美元是平均固定成本 20 ÷ 4。'),
        ],
        correct: 0,
        explanation: text('Variable cost = $68 − $20 = $48, so AVC = $48 ÷ 4 = $12.', '可变成本 = 68 − 20 = 48 美元，AVC = 48 ÷ 4 = 12 美元。'),
        takeaway: text('AVC = ($68 − $20) ÷ 4 = $12', 'AVC = (68 − 20) ÷ 4 = 12 美元'),
      },
      {
        prompt: text('Rent rises to $30 a day. Which cost does NOT change?', '租金涨到每天 30 美元。哪项成本不会变化？'),
        choices: [
          distractor('Average total cost', '平均总成本', 'Higher fixed cost raises average fixed cost, so ATC rises.', '固定成本上升会提高平均固定成本，ATC 随之上升。'),
          distractor('Total cost', '总成本', 'Total cost includes the higher rent at every output.', '每个产量下的总成本都包含了更高的租金。'),
          answer('Marginal cost', '边际成本'),
        ],
        correct: 2,
        explanation: text('Fixed costs do not vary with output, so they do not affect marginal cost or average variable cost.', '固定成本不随产量变化，所以不影响边际成本和平均可变成本。'),
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
          distractor('300 to 400 loaves', '300 到 400 个', 'LRATC stays at $2.50 there. That is constant returns to scale.', '这一段 LRATC 保持在 2.50 美元，是规模报酬不变。'),
          distractor('400 to 500 loaves', '400 到 500 个', 'LRATC rises there. That is diseconomies of scale.', '这一段 LRATC 上升，是规模不经济。'),
        ],
        correct: 0,
        explanation: text('Economies of scale mean LRATC falls as output grows, from $4.00 to $2.50 between 100 and 300 loaves.', '规模经济指 LRATC 随产量增加而下降：在 100 到 300 个之间从 4.00 美元降到 2.50 美元。'),
        takeaway: text('LRATC falling → economies of scale', 'LRATC 下降 → 规模经济'),
      },
      {
        prompt: text('What is the minimum efficient scale?', '最小有效规模是多少？'),
        choices: [
          distractor('400 loaves', '400 个', 'LRATC is also lowest at 400, but MES is the smallest output where it reaches its minimum.', 'LRATC 在 400 时也最低，但最小有效规模是首次达到最低点的最小产量。'),
          answer('300 loaves', '300 个'),
          distractor('500 loaves', '500 个', 'At 500 LRATC has already started rising.', '在 500 时 LRATC 已经开始上升。'),
        ],
        correct: 1,
        explanation: text('Minimum efficient scale is the lowest output at which LRATC reaches its minimum: 300 loaves.', '最小有效规模是 LRATC 首次达到最低值的最小产量：300 个。'),
        takeaway: text('MES = 300 loaves', '最小有效规模 = 300 个'),
      },
      {
        prompt: text('Moving from 400 to 500 loaves, the bakery experiences…', '从 400 个增加到 500 个，面包店经历的是……'),
        choices: [
          distractor('Economies of scale', '规模经济', 'Average cost rises from $2.50 to $2.80.', '平均成本从 2.50 美元升到 2.80 美元。'),
          distractor('Constant returns to scale', '规模报酬不变', 'Constant returns would keep LRATC flat.', '规模报酬不变时 LRATC 保持不变。'),
          answer('Diseconomies of scale', '规模不经济'),
        ],
        correct: 2,
        explanation: text('Rising LRATC means diseconomies of scale, often from coordination problems in a larger plant.', 'LRATC 上升代表规模不经济，常因大规模工厂的协调困难造成。'),
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
          distractor('−$5,000', '−5,000 美元', 'That subtracts the forgone salary too. Accounting profit uses explicit costs only.', '这也减去了放弃的薪水。会计利润只扣除显性成本。'),
          distractor('$90,000', '90,000 美元', 'That is revenue before any costs.', '这是扣除成本前的收入。'),
        ],
        correct: 0,
        explanation: text('Accounting profit = revenue − explicit costs = $90,000 − $60,000 = $30,000.', '会计利润 = 收入 − 显性成本 = 90,000 − 60,000 = 30,000 美元。'),
        takeaway: text('Accounting profit = $30,000', '会计利润 = 30,000 美元'),
      },
      {
        prompt: text('What is Lina’s economic profit?', '莉娜的经济利润是多少？'),
        choices: [
          distractor('$30,000', '30,000 美元', 'Economic profit also subtracts implicit costs, like the salary she gave up.', '经济利润还要减去隐性成本，例如她放弃的薪水。'),
          answer('−$5,000', '−5,000 美元'),
          distractor('$65,000', '65,000 美元', 'The forgone salary is a cost to subtract, not income to add.', '放弃的薪水是要减去的成本，而不是要加上的收入。'),
        ],
        correct: 1,
        explanation: text('Economic profit = $90,000 − $60,000 − $35,000 = −$5,000.', '经济利润 = 90,000 − 60,000 − 35,000 = −5,000 美元。'),
        takeaway: text('Economic profit = −$5,000', '经济利润 = −5,000 美元'),
      },
      {
        prompt: text('If these numbers persist, what should Lina do in the long run?', '如果这些数字长期不变，莉娜在长期应该怎么做？'),
        choices: [
          distractor('Stay: accounting profit is positive', '继续：会计利润为正', 'Accounting profit ignores what she could earn elsewhere.', '会计利润忽略了她在别处能赚到的收入。'),
          distractor('Stay: she earns a normal profit', '继续：她获得正常利润', 'Normal profit means economic profit equals zero. Hers is negative.', '正常利润指经济利润为零，而她的为负。'),
          answer('Leave: her next-best option pays more', '退出：次优选择收入更高'),
        ],
        correct: 2,
        explanation: text('Negative economic profit means her resources earn less than in their best alternative use, so she should exit.', '经济利润为负，说明她的资源收益低于最佳替代用途，因此应该退出。'),
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
          distractor('It falls as the farm sells more', '随销量增加而下降', 'A price taker can sell any amount at the market price.', '价格接受者可以按市场价格卖出任意数量。'),
          answer('$12, the market price', '12 美元，即市场价格'),
          distractor('Equal to marginal cost', '等于边际成本', 'MR comes from the market price, not from costs.', '边际收益来自市场价格，而不是成本。'),
        ],
        correct: 1,
        explanation: text('For a perfectly competitive firm, MR = P = $12 for every unit.', '对完全竞争企业而言，每单位的 MR = P = 12 美元。'),
        takeaway: text('Price taker: MR = P = $12', '价格接受者：MR = P = 12 美元'),
      },
      {
        prompt: text('How many bushels maximize profit?', '生产多少蒲式耳能使利润最大？'),
        choices: [
          answer('4 bushels', '4 蒲式耳'),
          distractor('3 bushels', '3 蒲式耳', 'The 4th bushel adds $12 of revenue and $12 of cost. Producing where MR = MC is the rule.', '第 4 蒲式耳带来 12 美元收益和 12 美元成本。规则是生产到 MR = MC。'),
          distractor('5 bushels', '5 蒲式耳', 'The 5th bushel costs $16 but brings only $12.', '第 5 蒲式耳成本 16 美元，却只带来 12 美元收益。'),
        ],
        correct: 0,
        explanation: text('Produce where MR = MC: at the 4th bushel, $12 = $12. Any further bushel has MC above MR.', '在 MR = MC 处生产：第 4 蒲式耳时 12 = 12。再多生产，MC 就高于 MR。'),
        takeaway: text('MR = MC at 4 bushels', '4 蒲式耳时 MR = MC'),
      },
      {
        prompt: text('The market price falls to $9. What is the new profit-maximizing output?', '市场价格降到 9 美元。新的利润最大化产量是多少？'),
        choices: [
          distractor('4 bushels', '4 蒲式耳', 'At $9, the 4th bushel’s MC of $12 exceeds its MR.', '价格为 9 美元时，第 4 蒲式耳的 MC 为 12 美元，高于 MR。'),
          distractor('2 bushels', '2 蒲式耳', 'The 3rd bushel still adds $9 of revenue for $9 of cost.', '第 3 蒲式耳仍然以 9 美元成本带来 9 美元收益。'),
          answer('3 bushels', '3 蒲式耳'),
        ],
        correct: 2,
        explanation: text('With MR = $9, MR = MC at the 3rd bushel.', 'MR = 9 美元时，第 3 蒲式耳处 MR = MC。'),
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
          distractor('Shut down at once', '立即停产', 'The price covers AVC, so each repair helps pay part of the fixed cost.', '价格覆盖了 AVC，每单维修都能分担一部分固定成本。'),
          distractor('Produce and earn a profit', '营业并获得利润', 'The price is below minimum ATC, so the shop cannot earn a profit.', '价格低于最低 ATC，维修店无法盈利。'),
        ],
        correct: 0,
        explanation: text('With AVC < P < ATC, producing loses less than shutting down, since shutting down still leaves the fixed cost.', '当 AVC < P < ATC 时，营业的亏损小于停产的亏损，因为停产仍要承担固定成本。'),
        takeaway: text('AVC < P < ATC → produce at a loss', 'AVC < P < ATC → 亏损营业'),
      },
      {
        prompt: text('The price drops to $4. What should the shop do in the short run?', '价格跌到 4 美元。维修店在短期内应该怎么做？'),
        choices: [
          distractor('Keep producing to cover fixed cost', '继续营业以弥补固定成本', 'At $4 each repair does not even cover its variable cost.', '在 4 美元时，每单维修连可变成本都覆盖不了。'),
          answer('Shut down', '停产'),
          distractor('Raise its price to $8', '把价格提高到 8 美元', 'A price taker cannot set its own price.', '价格接受者不能自行定价。'),
        ],
        correct: 1,
        explanation: text('When P < minimum AVC, shutting down limits the loss to fixed cost.', '当 P < 最低 AVC 时，停产可把亏损限制在固定成本以内。'),
        takeaway: text('P < min AVC → shut down', 'P < 最低 AVC → 停产'),
      },
      {
        prompt: text('If the price stays at $6, what happens in the long run?', '如果价格长期保持在 6 美元，长期会发生什么？'),
        choices: [
          distractor('Firms enter and price falls', '企业进入，价格下降', 'Firms are losing money, so they leave rather than enter.', '企业在亏损，所以会退出而不是进入。'),
          distractor('Nothing changes', '没有变化', 'Losses give firms a reason to leave the industry.', '亏损会促使企业退出行业。'),
          answer('Firms exit and price rises to $8', '企业退出，价格升至 8 美元'),
        ],
        correct: 2,
        explanation: text('Exit decreases market supply, raising the price until it equals minimum ATC of $8 and economic profit is zero.', '企业退出使市场供给减少，价格上升到最低 ATC 8 美元，经济利润归零。'),
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
          distractor('Firms exit the market', '企业退出市场', 'Exit follows losses. Here firms earn profit.', '退出发生在亏损时，这里企业在盈利。'),
          answer('Firms enter, and market supply increases', '企业进入，市场供给增加'),
          distractor('Market demand increases', '市场需求增加', 'Profit attracts new sellers, which affects supply.', '利润吸引新卖家进入，影响的是供给。'),
        ],
        correct: 1,
        explanation: text('With no barriers to entry, economic profit attracts new firms, shifting market supply to the right.', '没有进入壁垒时，经济利润会吸引新企业进入，使市场供给右移。'),
        takeaway: text('Profit → entry → market supply ↑', '利润 → 进入 → 市场供给 ↑'),
      },
      {
        prompt: text('What is the long-run equilibrium price?', '长期均衡价格是多少？'),
        choices: [
          distractor('$10', '10 美元', 'Entry continues while price is above minimum ATC.', '只要价格高于最低 ATC，企业就会继续进入。'),
          distractor('Below $7', '低于 7 美元', 'Below minimum ATC firms would lose money and exit.', '低于最低 ATC 时企业会亏损并退出。'),
          answer('$7', '7 美元'),
        ],
        correct: 2,
        explanation: text('Entry stops when price falls to minimum ATC, $7, where economic profit is zero.', '当价格降到最低 ATC 7 美元、经济利润为零时，进入停止。'),
        takeaway: text('Long run: P = min ATC = $7', '长期：P = 最低 ATC = 7 美元'),
      },
      {
        prompt: text('In long-run equilibrium, the honey market is…', '在长期均衡时，蜂蜜市场是……'),
        choices: [
          answer('Both allocatively and productively efficient', '既有配置效率，也有生产效率'),
          distractor('Only allocatively efficient', '只有配置效率', 'P = minimum ATC also means firms produce at the lowest possible average cost.', 'P = 最低 ATC 也意味着企业以最低平均成本生产。'),
          distractor('Neither kind of efficient', '两种效率都没有', 'Check P = MC and P = minimum ATC.', '检查 P = MC 与 P = 最低 ATC 是否成立。'),
        ],
        correct: 0,
        explanation: text('P = MC gives allocative efficiency, and P = minimum ATC gives productive efficiency.', 'P = MC 带来配置效率，P = 最低 ATC 带来生产效率。'),
        takeaway: text('P = MC = min ATC → both efficiencies', 'P = MC = 最低 ATC → 两种效率'),
      },
    ],
  },
];
