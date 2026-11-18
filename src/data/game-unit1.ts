import { answer, distractor, text, type Mission } from './game-types';

export const unit1Missions: readonly Mission[] = [
  {
    id: '1.1',
    title: text('One Studio, Three Plans', '一间录音室，三个计划'),
    topic: text('Scarcity', '稀缺性'),
    scenario: text(
      'Your school has one recording studio free on Friday. You rank its possible uses from highest to lowest value: record a podcast, rehearse for a concert, then run a workshop. Each plan needs the entire slot.',
      '学校的录音室周五只有一个空档。你按价值从高到低排列三个方案：录制播客、为演出排练、举办工作坊。每个方案都需要占用整个空档。',
    ),
    steps: [
      {
        prompt: text('Which resource creates the immediate trade-off?', '哪个资源直接造成了取舍？'),
        choices: [
          distractor('List of ideas', '创意清单', 'There are three ideas. What prevents carrying out all three?', '你有三个想法。是什么阻止你把它们都付诸实践？'),
          answer('Studio time', '录音室使用时间'),
          distractor('Podcast audience', '播客听众', 'The scenario places a limit on access to the room, regardless of the audience.', '情境限制的是房间的使用时间，与听众人数无关。'),
        ],
        correct: 1,
        explanation: text('Only one slot is available, so allocating it to one project rules out the others.', '只有一个空档。把它分配给一个项目，就无法同时用于另外两个项目。'),
      },
      {
        prompt: text('If you record the podcast, what is its opportunity cost?', '如果选择录制播客，它的机会成本是什么？'),
        choices: [
          distractor('Both other plans combined', '另外两个方案价值之和', 'You could use one slot for only one alternative. Identify the highest-ranked one you give up.', '同一个空档只能用于一个备选方案。找出你放弃的、价值最高的那个。'),
          distractor('The workshop', '举办工作坊', 'Check which of the two forgone plans you value more.', '比较两个被放弃的方案，找出你更重视的那个。'),
          answer('The concert rehearsal', '为演出排练'),
        ],
        correct: 2,
        explanation: text('The rehearsal is the next-best alternative. Its forgone value is the opportunity cost.', '排练是次优方案。你因选择录制播客而放弃的排练价值，就是机会成本。'),
      },
      {
        prompt: text('A second slot opens. You record the podcast and rehearse. What is the opportunity cost of using the second slot to rehearse?', '现在新增一个空档。你录制播客并安排排练。使用第二个空档进行排练的机会成本是什么？'),
        choices: [
          answer('Holding the workshop', '举办工作坊'),
          distractor('Recording the podcast', '录制播客', 'The podcast still happens in the first slot. Only the alternative use of the second slot is forgone.', '播客仍然会在第一个空档录制。你只放弃了第二个空档的备选用途。'),
          distractor('Nothing because time increased', '没有，因为时间增加了', 'There are still more plans than slots. Which one is left out?', '方案数量仍然比空档多。还有哪个方案无法安排？'),
        ],
        correct: 0,
        explanation: text('The remaining alternative for the second slot is the workshop. More capacity can change the relevant alternative.', '第二个空档的另一项用途是举办工作坊。可用资源增加时，需要放弃的最佳备选方案可能随之改变。'),
      },
    ],
  },
  {
    id: '1.2',
    title: text('Who Sets the Harvest?', '谁来决定生产量？'),
    topic: text('Resource Allocation and Economic Systems', '资源配置与经济制度'),
    scenario: text(
      'Three islands organize fishing differently. On Cove, families follow inherited catch-sharing customs. In Port, households and firms trade fish at prices. On Reef, a public agency assigns boats and catch targets.',
      '三个岛屿采用不同的渔业组织方式。湾岛家庭遵循世代传承的渔获分配惯例；港岛家庭和企业按市场价格交易；礁岛公共机构分配船只并设定捕捞目标。',
    ),
    steps: [
      {
        prompt: text('Which island illustrates a traditional allocation system?', '哪个岛屿体现了传统经济的资源配置方式？'),
        choices: [
          answer('Cove', '湾岛'),
          distractor('Port', '港岛', 'Port coordinates exchange through prices. Look for a decision rule inherited through custom.', '港岛用价格协调交易。找出依据世代相传的惯例进行分配的岛屿。'),
          distractor('Reef', '礁岛', 'A public agency makes Reef’s decisions. Look for a mechanism grounded in custom.', '礁岛由公共机构制定计划。找出由传统惯例决定分配的岛屿。'),
        ],
        correct: 0,
        explanation: text('Traditional allocation relies on established social customs to decide who produces and receives goods.', '传统经济依靠长期形成的社会习惯决定由谁生产、由谁获得产品。'),
      },
      {
        prompt: text('In Port, the upward-sloping supply curve stays the same. What signals that buyers now value fish more highly?', '港岛向上倾斜的鱼类供给曲线保持不变。什么信号表明买家现在更重视鱼？'),
        choices: [
          distractor('The inherited sharing rule', '世代相传的分配规则', 'A custom does not directly communicate a shift in the willingness to pay in Port’s market.', '惯例不会直接传递港岛市场上支付意愿的变动。'),
          distractor('A production order from Reef', '礁岛发布的生产指令', 'Port’s buyers and sellers respond to their own market signals.', '港岛的买卖双方根据本地市场的信号行动。'),
          answer('A higher market price for fish', '更高的鱼类市场价格'),
        ],
        correct: 2,
        explanation: text('With an upward-sloping supply curve, greater demand raises the equilibrium price. The higher price signals increased demand and encourages a larger quantity supplied.', '供给曲线向上倾斜时，需求增加会推高均衡价格。更高的价格传递了需求上升的信号，并鼓励生产者增加供给量。'),
      },
      {
        prompt: text('Port keeps its fish market, but the government starts enforcing a catch limit. Which description now fits best?', '港岛保留鱼类市场，但政府开始执行捕捞上限。哪种描述最符合此时的制度？'),
        choices: [
          distractor('Pure command economy', '纯计划经济', 'Households and firms still exchange fish using prices.', '家庭和企业仍然按价格交易。'),
          answer('Mixed economy', '混合经济'),
          distractor('Pure market economy', '纯市场经济', 'A government catch limit actively affects production decisions.', '政府规定的捕捞上限直接影响生产决定。'),
        ],
        correct: 1,
        explanation: text('Markets still coordinate exchange while public limits shape production. The allocation mechanism is mixed.', '市场继续协调交易，政府规制同时影响生产。这是一种混合资源配置机制。'),
      },
    ],
  },
  {
    id: '1.3',
    title: text('Outpost at Capacity', '满负荷的前哨站'),
    topic: text('Production Possibilities Curve', '生产可能性曲线'),
    scenario: text('An emergency workshop can make radios and water filters. The curve shows its daily production frontier with current resources and technology.', '一家应急工坊可以生产收音机和净水器。曲线表示在现有资源和技术下的日产量边界。'),
    figure: {
      file: 'ppc-radios-filters.svg',
      description: text('Radios on the horizontal axis, filters on the vertical axis. The frontier connects (0, 12), (2, 10), (4, 6) and (6, 0). The target point (4, 8) lies outside it.', '横轴为收音机，纵轴为净水器。生产可能性边界连接 (0, 12)、(2, 10)、(4, 6) 和 (6, 0)。目标点 (4, 8) 位于边界之外。'),
    },
    table: {
      caption: text('Daily production on the frontier', '边界上的日产量组合'),
      columns: [text('Radios', '收音机'), text('Filters', '净水器')],
      rows: [[text('0'), text('12')], [text('2'), text('10')], [text('4'), text('6')], [text('6'), text('0')]],
    },
    steps: [
      {
        prompt: text('How would you classify a target of 4 radios and 8 filters?', '应如何判断“4 台收音机、8 个净水器”这一生产目标？'),
        choices: [
          distractor('Attainable and efficient', '可达到且有效率', 'Read the point on the frontier at 4 radios. Is 8 filters on that point?', '查看横坐标为 4 的边界点，对应的净水器数量是 8 吗？'),
          answer('Currently unattainable', '当前不可达到'),
          distractor('Attainable with unused capacity', '可达到，但资源未充分使用', 'Unused capacity corresponds to a point inside the frontier. Compare 8 with the maximum at 4 radios.', '未充分使用资源的点位于边界内。比较 8 与生产 4 台收音机时的净水器产量上限。'),
        ],
        correct: 1,
        explanation: text('With 4 radios the frontier allows 6 filters. A target of 8 is outside the frontier.', '生产 4 台收音机时，最多可生产 6 个净水器。8 个净水器位于边界外。'),
      },
      {
        prompt: text('Between 2 and 4 radios, how many filters does one additional radio cost on average?', '从 2 台收音机增加到 4 台时，平均每多生产 1 台要放弃多少个净水器？'),
        choices: [
          distractor('4 filters', '4 个净水器', 'Four is the total change in filters. Divide it by the total increase in radios.', '4 是减少的净水器总数。还要除以增加的收音机数量。'),
          distractor('Half a filter', '0.5 个净水器', 'That ratio expresses radios per filter. The question asks for filters per radio.', '这个比值是每个净水器对应的收音机数量。题目问的是每台收音机对应多少净水器。'),
          answer('2 filters', '2 个净水器'),
        ],
        correct: 2,
        explanation: text('The trade-off is 4 filters for 2 extra radios. The cost is 4 ÷ 2 = 2 filters per radio.', '多生产 2 台收音机需放弃 4 个净水器，所以每台的机会成本为 4 ÷ 2 = 2 个净水器。'),
      },
      {
        prompt: text('What happens to the opportunity cost of radios as production moves to the right?', '沿曲线向右移动时，收音机的机会成本如何变化？'),
        choices: [
          answer('It rises from 1 to 2 to 3 filters per radio.', '依次上升为每台 1、2、3 个净水器。'),
          distractor('It stays at 2 filters per radio.', '保持每台 2 个净水器。', 'Two is the rate on the middle segment. Calculate the trade-off on the first and last segments as well.', '2 是中段的比率。再计算首段和末段的机会成本。'),
          distractor('It falls as fewer filters remain.', '随着剩余净水器减少而降低。', 'Use the filters given up per extra radio on each segment, instead of the number of filters remaining.', '比较每一段每多产一台收音机所放弃的净水器数量。'),
        ],
        correct: 0,
        explanation: text('Each extra pair of radios costs 2, then 4, then 6 filters. The curve gets steeper, illustrating increasing opportunity cost.', '每多生产两台收音机，依次放弃 2、4、6 个净水器。曲线变得更陡，体现了机会成本递增。'),
      },
    ],
  },
  {
    id: '1.4',
    title: text('The Night Market Trade', '夜市交易'),
    topic: text('Comparative Advantage and Trade', '比较优势与贸易'),
    scenario: text('Mina and Theo can make tea or tote bags using one shift of their time. Each has a linear production frontier, and both can trade at the night market.', '米娜和西奥可以用一个班次的时间制作茶饮或手提袋。两人的生产可能性边界均为直线，也可以在夜市交换产品。'),
    table: {
      caption: text('Maximum output per shift if specialized', '一个班次只生产一种物品时的最大产量'),
      columns: [text('Producer', '生产者'), text('Tea cups', '茶饮（杯）'), text('Tote bags', '手提袋（个）')],
      rows: [[text('Mina', '米娜'), text('12'), text('6')], [text('Theo', '西奥'), text('8'), text('8')]],
    },
    steps: [
      {
        prompt: text('What is Mina’s opportunity cost of one cup of tea?', '米娜制作一杯茶饮的机会成本是多少？'),
        choices: [
          distractor('2 tote bags', '2 个手提袋', 'That is her opportunity cost of a bag in tea cups. Reverse the ratio for one cup of tea.', '这是生产一个手提袋所需放弃的茶饮量。求一杯茶饮的机会成本时要反过来计算。'),
          answer('Half a tote bag', '0.5 个手提袋'),
          distractor('1 tote bag', '1 个手提袋', 'Equal numbers of bags and tea cups appear on Theo’s row. Use Mina’s output.', '西奥两种产品的最大产量相同。请使用米娜的数据。'),
        ],
        correct: 1,
        explanation: text('Mina trades off 6 bags for 12 cups, or 6 ÷ 12 = 0.5 bag per cup.', '米娜最多可制作 6 个手提袋或 12 杯茶饮，所以一杯茶饮的机会成本是 6 ÷ 12 = 0.5 个手提袋。'),
      },
      {
        prompt: text('Who has the comparative advantage in making tea?', '谁在制作茶饮上具有比较优势？'),
        choices: [
          distractor('Theo, because he produces more bags', '西奥，因为他能生产更多手提袋', 'Bag output by itself does not determine the comparative advantage in tea. Compare bags given up per cup.', '仅看手提袋产量无法判断茶饮的比较优势。要比较每杯茶饮放弃的手提袋数量。'),
          distractor('Neither, because both can make tea', '两人都没有，因为都能制作茶饮', 'Both can produce it, but their costs in bags are different.', '两人都会制作茶饮，但每杯茶饮折算成手提袋的机会成本不同。'),
          answer('Mina, because 0.5 bag is less than 1 bag per cup', '米娜，因为每杯放弃 0.5 个袋子，低于西奥的 1 个'),
        ],
        correct: 2,
        explanation: text('Mina has the lower opportunity cost of tea. Theo has the lower opportunity cost of bags.', '米娜制作茶饮的机会成本较低，西奥制作手提袋的机会成本较低。'),
      },
      {
        prompt: text('Which trade gives both a strict gain compared with making the other good themselves?', '哪种交换价格能让双方都比自己生产另一种商品更划算？'),
        choices: [
          answer('Mina trades 4 cups for 3 bags.', '米娜用 4 杯茶饮换 3 个手提袋。'),
          distractor('Mina trades 4 cups for 2 bags.', '米娜用 4 杯茶饮换 2 个手提袋。', 'At 0.5 bag per cup Mina only recovers her opportunity cost. Look for a rate strictly between the two costs.', '每杯换 0.5 个袋子时，米娜仅收回机会成本。寻找严格介于两人机会成本之间的比率。'),
          distractor('Mina trades 4 cups for 5 bags.', '米娜用 4 杯茶饮换 5 个手提袋。', 'Theo would pay more than 1 bag per cup. Compare that with Theo’s cost of brewing tea himself.', '西奥每杯需要支付超过 1 个袋子。比较这个价格与他自己制作茶饮的成本。'),
        ],
        correct: 0,
        explanation: text('At 0.75 bag per cup, Mina receives more than her cost of 0.5, and Theo pays less than his cost of 1.', '每杯换 0.75 个袋子时，米娜得到的超过其 0.5 个的成本，西奥支付的低于其 1 个的成本。'),
      },
    ],
  },
  {
    id: '1.5',
    title: text('The River Sensor Budget', '河流传感器预算'),
    topic: text('Cost-Benefit Analysis', '成本收益分析'),
    scenario: text('A team may add up to three water sensors this month. Each sensor costs $8 and produces the additional benefit shown. Compare net benefits against installing zero sensors.', '一个小组本月最多能增设三个水质传感器。每个传感器成本为 8 美元，新增收益如下。以不安装传感器作为比较基准。'),
    table: {
      caption: text('Additional benefit from each sensor', '增设各个传感器带来的边际收益'),
      columns: [text('Sensor', '传感器'), text('Marginal benefit', '边际收益')],
      rows: [[text('First', '第一个'), text('$18')], [text('Second', '第二个'), text('$13')], [text('Third', '第三个'), text('$6')]],
    },
    steps: [
      {
        prompt: text('What is the net benefit of the first sensor?', '第一个传感器的净收益是多少？'),
        choices: [
          distractor('$18', '18 美元', 'That is the benefit before paying the price of the sensor.', '这是扣除传感器成本之前的收益。'),
          answer('$10', '10 美元'),
          distractor('$26', '26 美元', 'Installation is a cost. Deduct it from the additional benefit.', '安装需要花钱。用新增收益减去成本。'),
        ],
        correct: 1,
        explanation: text('The first sensor gives $18 of benefit at an $8 cost. Its net benefit is $10.', '第一个传感器收益为 18 美元，成本为 8 美元，净收益为 10 美元。'),
      },
      {
        prompt: text('After two sensors are installed, should the team add the third?', '安装两个之后，小组是否应该增设第三个？'),
        choices: [
          answer('No. Its extra benefit of $6 is below its extra cost of $8.', '不应该。它带来的新增收益为 6 美元，低于新增成本 8 美元。'),
          distractor('Yes. Three sensors generate $37 of total benefit.', '应该。三个传感器的总收益为 37 美元。', 'The first two benefits are available either way. Compare only what adding the third changes.', '无论是否加装第三个，前两个的收益都已经存在。只比较第三个所改变的收益和成本。'),
          distractor('Yes. Its extra benefit is positive.', '应该。它能带来正的新增收益。', 'A positive benefit can still be smaller than its cost.', '新增收益为正，也可能低于新增成本。'),
        ],
        correct: 0,
        explanation: text('Adding the third lowers total net benefit by $2. The first two each add positive net benefit.', '增加第三个会使总净收益减少 2 美元。前两个分别带来正的净收益。'),
      },
      {
        prompt: text('At the best sensor count, what is the total net benefit?', '采用最优安装数量时，总净收益是多少？'),
        choices: [
          distractor('$5', '5 美元', 'That counts only what the second sensor adds. Include the first sensor too.', '这只计算了第二个增加的净收益。还要计算第一个。'),
          distractor('$31', '31 美元', 'That counts the first two benefits before deducting their costs.', '这是前两个传感器的毛收益，尚未扣除成本。'),
          answer('$15', '15 美元'),
        ],
        correct: 2,
        explanation: text('Two sensors maximize net benefit: $18 + $13 − 2 × $8 = $15.', '安装两个传感器时净收益最大：18 + 13 − 2 × 8 = 15 美元。'),
      },
    ],
  },
  {
    id: '1.6',
    title: text('Eight Dollars at the Café', '咖啡馆的八美元'),
    topic: text('Marginal Analysis and Consumer Choice', '边际分析与消费者选择'),
    scenario: text('A customer can spend up to $8 on whole servings of fruit ($2 each) and yogurt ($4 each). Each additional serving gives the marginal utility below. Utilities are additive, with no benefit from saving the money in this exercise.', '顾客最多可以花 8 美元购买整份水果（每份 2 美元）和酸奶（每份 4 美元）。每增加一份的边际效用如下。不同商品的效用可加总，本题假设余钱不带来效用。'),
    table: {
      caption: text('Marginal utility by serving', '每一份带来的边际效用'),
      columns: [text('Serving', '份数'), text('Fruit', '水果'), text('Yogurt', '酸奶')],
      rows: [[text('1'), text('12'), text('24')], [text('2'), text('10'), text('12')], [text('3'), text('8'), text('—')], [text('4'), text('6'), text('—')]],
    },
    steps: [
      {
        prompt: text('Which gives more marginal utility per dollar, the first fruit or the first yogurt?', '第一份水果与第一份酸奶相比，哪个每美元带来的边际效用更高？'),
        choices: [
          distractor('First yogurt', '第一份酸奶', 'Its utility is higher, but so is its price. Divide utility by price for each serving.', '它的效用更高，但价格也更高。分别用效用除以价格。'),
          distractor('First fruit', '第一份水果', 'A lower price by itself is insufficient. Compare both utility-price ratios.', '仅看价格更低并不够。请比较边际效用与价格两者的比值。'),
          answer('They tie at 6 utils per dollar.', '两者相同，均为每美元 6 效用单位。'),
        ],
        correct: 2,
        explanation: text('First fruit gives 12 ÷ 2 = 6 per dollar. First yogurt gives 24 ÷ 4 = 6.', '第一份水果每美元带来 12 ÷ 2 = 6 效用单位。第一份酸奶也为 24 ÷ 4 = 6。'),
      },
      {
        prompt: text('If the customer has one of each, which additional serving is affordable and how much utility does it add?', '如果顾客已经各买了一份，还能买什么？多出的那一份增加多少效用？'),
        choices: [
          answer('A second fruit, adding 10 utils.', '第二份水果，增加 10 效用单位。'),
          distractor('A second yogurt, adding 12 utils.', '第二份酸奶，增加 12 效用单位。', 'There is only $2 left after the first two purchases. Compare that with the price of yogurt.', '买完各一份后只剩 2 美元。比较余额与酸奶的价格。'),
          distractor('A second fruit, adding 12 utils.', '第二份水果，增加 12 效用单位。', 'Look up the marginal utility of the second fruit. The extra serving has its own value.', '查找第二份水果的边际效用。新增的一份有它自己的效用。'),
        ],
        correct: 0,
        explanation: text('One fruit and one yogurt cost $6. The remaining $2 buys the second fruit, which adds 10 utils.', '一份水果和一份酸奶共花 6 美元。剩余的 2 美元可买第二份水果，新增 10 效用单位。'),
      },
      {
        prompt: text('Which $8 bundle maximizes total utility?', '哪个恰好花费 8 美元的组合能使总效用最大？'),
        choices: [
          distractor('Four fruit servings', '四份水果', 'Add all four marginal utilities. Compare the result with including the first yogurt.', '将四份的边际效用相加，再与包含第一份酸奶的组合比较。'),
          answer('Two fruit servings and one yogurt', '两份水果和一份酸奶'),
          distractor('Two yogurt servings', '两份酸奶', 'The second yogurt adds less utility than two fruit servings costing the same amount.', '第二份酸奶增加的效用，低于同样花费下两份水果所增加的效用。'),
        ],
        correct: 1,
        explanation: text('Two fruit and one yogurt give 12 + 10 + 24 = 46 utils. Four fruit give 36, and two yogurt also give 36.', '两份水果加一份酸奶带来 12 + 10 + 24 = 46 效用单位。四份水果为 36，两份酸奶也为 36。'),
      },
    ],
  },
];
