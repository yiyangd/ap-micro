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
          distractor('List of ideas', '创意清单', 'Ideas are not what runs out here. You can think of as many plans as you like; what limits you is the single studio slot that every plan needs. The scarce resource is the one that forces a choice.', '这里用完的不是想法。想法可以有很多，限制你的是每个方案都需要的那唯一一个录音室空档。迫使你做选择的资源才是稀缺资源。'),
          answer('Studio time', '录音室使用时间'),
          distractor('Podcast audience', '播客听众', 'Nothing says the audience is limited, and the audience does not stop any plan from happening. The trade-off comes from one room that can host only one activity at a time.', '情境并没有说听众有限，听众也不会阻止任何方案进行。取舍来自同一时间只能容纳一个活动的房间。'),
        ],
        correct: 1,
        explanation: text('Only one slot is available, so allocating it to one project rules out the others.', '只有一个空档。把它分配给一个项目，就无法同时用于另外两个项目。'),
        concept: text('Scarcity: a resource is scarce when it cannot cover every use people want, so using it one way means giving up other uses.', '稀缺性：当一种资源无法满足所有想要的用途时，它就是稀缺的；把它用在一处，就必须放弃其他用途。'),
      },
      {
        prompt: text('If you record the podcast, what is its opportunity cost?', '如果选择录制播客，它的机会成本是什么？'),
        choices: [
          distractor('Both other plans combined', '另外两个方案价值之和', 'With one slot you could only have done one other plan anyway, so you never give up both. Opportunity cost counts only the single best alternative you give up: the rehearsal.', '只有一个空档，就算不录播客，你也只能做另一个方案，不可能同时放弃两个。机会成本只算你放弃的那个最好的备选：排练。'),
          distractor('The workshop', '举办工作坊', 'The workshop ranks last, so it is not your next-best choice. If you did not record the podcast you would rehearse, so the rehearsal is what you really give up.', '工作坊排在最后，不是你的次优选择。如果不录播客，你会去排练，所以真正放弃的是排练。'),
          answer('The concert rehearsal', '为演出排练'),
        ],
        correct: 2,
        explanation: text('The rehearsal is the next-best alternative. Its forgone value is the opportunity cost.', '排练是次优方案。你因选择录制播客而放弃的排练价值，就是机会成本。'),
        concept: text('Opportunity cost is the value of the next-best alternative you give up, not the sum of everything you did not choose.', '机会成本是你放弃的次优选择的价值，而不是所有未选方案的总和。'),
      },
      {
        prompt: text('A second slot opens. You record the podcast and rehearse. What is the opportunity cost of using the second slot to rehearse?', '现在新增一个空档。你录制播客并安排排练。使用第二个空档进行排练的机会成本是什么？'),
        choices: [
          answer('Holding the workshop', '举办工作坊'),
          distractor('Recording the podcast', '录制播客', 'The podcast already has the first slot, so it is not given up. For the second slot, the only other remaining use is the workshop, so that is what rehearsing costs.', '播客已经占用了第一个空档，并没有被放弃。第二个空档剩下的另一用途只有工作坊，所以排练的代价是工作坊。'),
          distractor('Nothing because time increased', '没有，因为时间增加了', 'More time eases scarcity but does not remove it: there are still three plans and only two slots. Using the second slot to rehearse still means the workshop does not happen.', '时间增加缓解了稀缺，但没有消除稀缺：仍有三个方案、只有两个空档。用第二个空档排练，工作坊依然办不成。'),
        ],
        correct: 0,
        explanation: text('The remaining alternative for the second slot is the workshop. More capacity can change the relevant alternative.', '第二个空档的另一项用途是举办工作坊。可用资源增加时，需要放弃的最佳备选方案可能随之改变。'),
        concept: text('Opportunity cost depends on the alternatives still available for that particular use of a resource.', '机会成本取决于这一份资源在这一用途之外还剩下哪些可选用途。'),
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
          distractor('Port', '港岛', 'Port decides through buying and selling at prices, which is a market system. A traditional system follows inherited customs, as Cove does.', '港岛通过按价格买卖来决定，这是市场经济。传统经济遵循代代相传的习俗，就像湾岛。'),
          distractor('Reef', '礁岛', 'On Reef a public agency assigns boats and targets, which is a command system. In a traditional system custom decides, not a planner.', '礁岛由公共机构分配船只和目标，这是计划经济。传统经济由习俗决定，而不是由计划者决定。'),
        ],
        correct: 0,
        explanation: text('Traditional allocation relies on established social customs to decide who produces and receives goods.', '传统经济依靠长期形成的社会习惯决定由谁生产、由谁获得产品。'),
        concept: text('Economic systems differ in what answers what, how and for whom to produce: custom (traditional), prices (market) or government plans (command).', '经济制度的区别在于由什么来回答生产什么、怎样生产、为谁生产：传统经济靠习俗，市场经济靠价格，计划经济靠政府计划。'),
      },
      {
        prompt: text('In Port, the upward-sloping supply curve stays the same. What signals that buyers now value fish more highly?', '港岛向上倾斜的鱼类供给曲线保持不变。什么信号表明买家现在更重视鱼？'),
        choices: [
          distractor('The inherited sharing rule', '世代相传的分配规则', 'A custom stays the same from year to year, so it cannot report that buyers suddenly value fish more. In Port, that information travels through the price.', '习俗年年不变，无法反映买家突然更看重鱼。在港岛，这一信息通过价格传递。'),
          distractor('A production order from Reef', '礁岛发布的生产指令', 'Reef’s planners do not run Port’s market, and a planner’s order is a command, not a signal of what buyers will pay. Port’s sellers learn about demand from the price.', '礁岛的计划者并不管理港岛市场，而且计划指令是命令，不是反映买家支付意愿的信号。港岛的卖家通过价格了解需求。'),
          answer('A higher market price for fish', '更高的鱼类市场价格'),
        ],
        correct: 2,
        explanation: text('With an upward-sloping supply curve, greater demand raises the equilibrium price. The higher price signals increased demand and encourages a larger quantity supplied.', '供给曲线向上倾斜时，需求增加会推高均衡价格。更高的价格传递了需求上升的信号，并鼓励生产者增加供给量。'),
        concept: text('In a market system prices are signals: a rising price tells producers that buyers value the good more and rewards them for supplying more.', '在市场经济中，价格是信号：价格上涨告诉生产者买家更看重这种商品，并激励他们增加供给。'),
      },
      {
        prompt: text('Port keeps its fish market, but the government starts enforcing a catch limit. Which description now fits best?', '港岛保留鱼类市场，但政府开始执行捕捞上限。哪种描述最符合此时的制度？'),
        choices: [
          distractor('Pure command economy', '纯计划经济', 'Fish are still traded at market prices, so the government is not planning everything. One rule on top of a market does not turn it into a command economy.', '鱼仍然按市场价格交易，政府并没有计划一切。在市场之上加一条规定，并不会让它变成计划经济。'),
          answer('Mixed economy', '混合经济'),
          distractor('Pure market economy', '纯市场经济', 'A pure market has no government limits on production. Once the government enforces a catch limit, markets and government share the decisions: a mixed economy.', '纯市场经济中政府不限制生产。政府一旦执行捕捞上限，决策就由市场和政府共同做出：这是混合经济。'),
        ],
        correct: 1,
        explanation: text('Markets still coordinate exchange while public limits shape production. The allocation mechanism is mixed.', '市场继续协调交易，政府规制同时影响生产。这是一种混合资源配置机制。'),
        concept: text('Most real economies are mixed: markets allocate most goods while the government sets some rules or limits.', '现实中大多数经济都是混合经济：大部分商品由市场配置，同时政府制定一些规则或限制。'),
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
          distractor('Attainable and efficient', '可达到且有效率', 'Only points on the frontier are efficient. At 4 radios the frontier allows at most 6 filters, so 8 filters lies beyond the curve, not on it.', '只有曲线上的点才有效率。生产 4 台收音机时最多生产 6 个净水器，所以 8 个在曲线之外，而不是在曲线上。'),
          answer('Currently unattainable', '当前不可达到'),
          distractor('Attainable with unused capacity', '可达到，但资源未充分使用', 'Unused capacity means a point inside the curve, below the maximum. Here 8 is above the maximum of 6 at 4 radios, so the workshop cannot reach it at all right now.', '资源未充分利用指曲线内、低于最大值的点。这里 8 高于 4 台收音机时的最大值 6，所以工坊现在根本达不到。'),
        ],
        correct: 1,
        explanation: text('With 4 radios the frontier allows 6 filters. A target of 8 is outside the frontier.', '生产 4 台收音机时，最多可生产 6 个净水器。8 个净水器位于边界外。'),
        concept: text('Points on the PPC are efficient, points inside are attainable but inefficient, and points outside are unattainable with current resources and technology.', '生产可能性曲线上的点有效率，曲线内的点可达到但无效率，曲线外的点在现有资源和技术下无法达到。'),
      },
      {
        prompt: text('Between 2 and 4 radios, how many filters does one additional radio cost on average?', '从 2 台收音机增加到 4 台时，平均每多生产 1 台要放弃多少个净水器？'),
        choices: [
          distractor('4 filters', '4 个净水器', '4 filters is the total given up for 2 extra radios. Opportunity cost per radio divides that total by the 2 radios gained: 4 ÷ 2 = 2.', '4 个净水器是多生产 2 台收音机总共放弃的数量。每台的机会成本要除以增加的 2 台：4 ÷ 2 = 2。'),
          distractor('Half a filter', '0.5 个净水器', '0.5 is 2 radios ÷ 4 filters, which is the cost of a filter measured in radios. The cost of a radio is the filters given up per radio: 4 ÷ 2 = 2.', '0.5 是 2 台 ÷ 4 个，表示用收音机衡量一个净水器的成本。一台收音机的成本是每台放弃的净水器：4 ÷ 2 = 2。'),
          answer('2 filters', '2 个净水器'),
        ],
        correct: 2,
        explanation: text('The trade-off is 4 filters for 2 extra radios. The cost is 4 ÷ 2 = 2 filters per radio.', '多生产 2 台收音机需放弃 4 个净水器，所以每台的机会成本为 4 ÷ 2 = 2 个净水器。'),
        concept: text('The opportunity cost of one more unit is how much of the other good is given up per unit gained: the slope of the PPC.', '多生产一单位的机会成本，是每得到一单位所放弃的另一种商品数量，即 PPC 的斜率。'),
      },
      {
        prompt: text('What happens to the opportunity cost of radios as production moves to the right?', '沿曲线向右移动时，收音机的机会成本如何变化？'),
        choices: [
          answer('It rises from 1 to 2 to 3 filters per radio.', '依次上升为每台 1、2、3 个净水器。'),
          distractor('It stays at 2 filters per radio.', '保持每台 2 个净水器。', 'Only the middle segment costs 2 per radio. The first segment gives up 2 filters for 2 radios (1 each) and the last gives up 6 for 2 (3 each), so the cost rises.', '只有中间一段是每台 2 个。第一段 2 台换 2 个（每台 1 个），最后一段 2 台换 6 个（每台 3 个），所以成本在上升。'),
          distractor('It falls as fewer filters remain.', '随着剩余净水器减少而降低。', 'Opportunity cost is what you give up for each extra radio, not how many filters remain. Each extra pair of radios costs more filters (2, then 4, then 6), so the cost rises.', '机会成本是每多生产一台收音机要放弃多少，而不是还剩多少净水器。每多两台依次放弃 2、4、6 个，所以成本上升。'),
        ],
        correct: 0,
        explanation: text('Each extra pair of radios costs 2, then 4, then 6 filters. The curve gets steeper, illustrating increasing opportunity cost.', '每多生产两台收音机，依次放弃 2、4、6 个净水器。曲线变得更陡，体现了机会成本递增。'),
        concept: text('A bowed-out PPC shows increasing opportunity cost, because resources are not equally suited to producing both goods.', '向外凸的 PPC 体现机会成本递增，因为资源并不同样适合生产两种商品。'),
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
          distractor('2 tote bags', '2 个手提袋', '2 is 12 ÷ 6, the tea Mina gives up for one bag. For one cup of tea, put the bags given up on top: 6 bags ÷ 12 cups = 0.5 bag.', '2 是 12 ÷ 6，是米娜做一个袋子要放弃的茶。求一杯茶的代价，要把放弃的袋子放在分子：6 ÷ 12 = 0.5 个。'),
          answer('Half a tote bag', '0.5 个手提袋'),
          distractor('1 tote bag', '1 个手提袋', '1 bag per cup is Theo’s cost, since he can make 8 of each. Mina gives up 6 bags for 12 cups, so each cup costs her only 0.5 bag.', '每杯 1 个袋子是西奥的成本，因为他两样都能做 8 个。米娜用 6 个袋子换 12 杯，每杯只花 0.5 个袋子。'),
        ],
        correct: 1,
        explanation: text('Mina trades off 6 bags for 12 cups, or 6 ÷ 12 = 0.5 bag per cup.', '米娜最多可制作 6 个手提袋或 12 杯茶饮，所以一杯茶饮的机会成本是 6 ÷ 12 = 0.5 个手提袋。'),
        concept: text('Opportunity cost of one unit = amount of the other good given up ÷ amount gained.', '一单位的机会成本 = 放弃的另一种商品数量 ÷ 得到的数量。'),
      },
      {
        prompt: text('Who has the comparative advantage in making tea?', '谁在制作茶饮上具有比较优势？'),
        choices: [
          distractor('Theo, because he produces more bags', '西奥，因为他能生产更多手提袋', 'Producing more is absolute advantage, not comparative advantage. For tea, compare opportunity costs: Theo gives up 1 bag per cup, Mina only 0.5, so Mina’s tea is cheaper.', '产量更多是绝对优势，不是比较优势。比较茶的机会成本：西奥每杯放弃 1 个袋子，米娜只放弃 0.5 个，所以米娜做茶更便宜。'),
          distractor('Neither, because both can make tea', '两人都没有，因为都能制作茶饮', 'Being able to make a good is not the test. When two producers have different opportunity costs, one of them always has the comparative advantage in each good.', '能不能生产不是判断标准。只要两人的机会成本不同，每种商品总有一人具有比较优势。'),
          answer('Mina, because 0.5 bag is less than 1 bag per cup', '米娜，因为每杯放弃 0.5 个袋子，低于西奥的 1 个'),
        ],
        correct: 2,
        explanation: text('Mina has the lower opportunity cost of tea. Theo has the lower opportunity cost of bags.', '米娜制作茶饮的机会成本较低，西奥制作手提袋的机会成本较低。'),
        concept: text('Comparative advantage belongs to the producer with the lower opportunity cost, even if the other producer can make more.', '比较优势属于机会成本更低的生产者，即使另一方产量更大。'),
      },
      {
        prompt: text('Which trade gives both a strict gain compared with making the other good themselves?', '哪种交换价格能让双方都比自己生产另一种商品更划算？'),
        choices: [
          answer('Mina trades 4 cups for 3 bags.', '米娜用 4 杯茶饮换 3 个手提袋。'),
          distractor('Mina trades 4 cups for 2 bags.', '米娜用 4 杯茶饮换 2 个手提袋。', 'That is 0.5 bag per cup, exactly Mina’s own cost, so she is no better off than making bags herself. A price between 0.5 and 1 bag per cup leaves both better off.', '这是每杯 0.5 个袋子，正好等于米娜自己的成本，她并没有比自己做袋子更好。价格在 0.5 到 1 之间，双方才都更好。'),
          distractor('Mina trades 4 cups for 5 bags.', '米娜用 4 杯茶饮换 5 个手提袋。', 'That is 1.25 bags per cup, more than Theo’s own cost of 1 bag per cup. Theo would do better brewing the tea himself, so he would refuse.', '这是每杯 1.25 个袋子，高于西奥自己做茶的成本（每杯 1 个）。西奥自己做更划算，所以他不会接受。'),
        ],
        correct: 0,
        explanation: text('At 0.75 bag per cup, Mina receives more than her cost of 0.5, and Theo pays less than his cost of 1.', '每杯换 0.75 个袋子时，米娜得到的超过其 0.5 个的成本，西奥支付的低于其 1 个的成本。'),
        concept: text('Both sides gain from trade when the price lies strictly between their opportunity costs.', '当交换价格严格介于双方机会成本之间时，双方都能从贸易中获益。'),
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
          distractor('$18', '18 美元', '$18 is the benefit alone. The sensor also costs $8, and net benefit subtracts that cost: $18 − $8 = $10.', '18 美元只是收益。传感器还要花 8 美元，净收益要减去成本：18 − 8 = 10 美元。'),
          answer('$10', '10 美元'),
          distractor('$26', '26 美元', 'Adding the $8 treats the cost as a gain. A cost lowers what you come away with, so it is subtracted: $18 − $8.', '加上 8 美元等于把成本当成收益。成本会减少你的所得，所以要减去：18 − 8。'),
        ],
        correct: 1,
        explanation: text('The first sensor gives $18 of benefit at an $8 cost. Its net benefit is $10.', '第一个传感器收益为 18 美元，成本为 8 美元，净收益为 10 美元。'),
        concept: text('Net benefit = benefit − cost. A choice is worthwhile when its benefit is greater than its cost.', '净收益 = 收益 − 成本。当收益大于成本时，这个选择才值得。'),
      },
      {
        prompt: text('After two sensors are installed, should the team add the third?', '安装两个之后，小组是否应该增设第三个？'),
        choices: [
          answer('No. Its extra benefit of $6 is below its extra cost of $8.', '不应该。它带来的新增收益为 6 美元，低于新增成本 8 美元。'),
          distractor('Yes. Three sensors generate $37 of total benefit.', '应该。三个传感器的总收益为 37 美元。', 'Total benefit does not answer whether to add the third. The first two sensors’ $31 is there either way; the question is whether the third adds more ($6) than it costs ($8). It does not.', '总收益不能回答要不要加第三个。前两个的 31 美元无论如何都在；问题是第三个带来的 6 美元是否超过它的 8 美元成本。并没有。'),
          distractor('Yes. Its extra benefit is positive.', '应该。它能带来正的新增收益。', 'A benefit only helps if it beats the cost. The third sensor brings $6 but costs $8, so installing it lowers net benefit by $2.', '收益要超过成本才有意义。第三个带来 6 美元却花费 8 美元，安装它会使净收益减少 2 美元。'),
        ],
        correct: 0,
        explanation: text('Adding the third lowers total net benefit by $2. The first two each add positive net benefit.', '增加第三个会使总净收益减少 2 美元。前两个分别带来正的净收益。'),
        concept: text('Decide at the margin: add one more unit only if its marginal benefit is at least its marginal cost.', '边际决策：只有当多一单位的边际收益不低于边际成本时，才增加这一单位。'),
      },
      {
        prompt: text('At the best sensor count, what is the total net benefit?', '采用最优安装数量时，总净收益是多少？'),
        choices: [
          distractor('$5', '5 美元', '$5 is only the second sensor’s net benefit ($13 − $8). The first sensor adds $10 too, so the total is $10 + $5 = $15.', '5 美元只是第二个的净收益（13 − 8）。第一个也贡献 10 美元，总共 10 + 5 = 15 美元。'),
          distractor('$31', '31 美元', '$31 is total benefit before costs. Two sensors cost 2 × $8 = $16, so net benefit is $31 − $16 = $15.', '31 美元是扣成本前的总收益。两个传感器成本 2 × 8 = 16 美元，净收益为 31 − 16 = 15 美元。'),
          answer('$15', '15 美元'),
        ],
        correct: 2,
        explanation: text('Two sensors maximize net benefit: $18 + $13 − 2 × $8 = $15.', '安装两个传感器时净收益最大：18 + 13 − 2 × 8 = 15 美元。'),
        concept: text('Total net benefit adds up each unit’s marginal benefit minus marginal cost, up to the optimal quantity.', '总净收益是到最优数量为止，每一单位边际收益减边际成本之和。'),
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
          distractor('First yogurt', '第一份酸奶', 'Yogurt gives more utility (24) but also costs twice as much ($4). Per dollar it gives 24 ÷ 4 = 6, the same as fruit’s 12 ÷ 2 = 6.', '酸奶效用更高（24），但价格也是两倍（4 美元）。每美元为 24 ÷ 4 = 6，与水果的 12 ÷ 2 = 6 相同。'),
          distractor('First fruit', '第一份水果', 'Being cheaper does not make fruit the better buy. Per dollar, fruit gives 12 ÷ 2 = 6 and yogurt gives 24 ÷ 4 = 6, so they tie.', '便宜并不代表更划算。每美元水果为 12 ÷ 2 = 6，酸奶为 24 ÷ 4 = 6，两者相同。'),
          answer('They tie at 6 utils per dollar.', '两者相同，均为每美元 6 效用单位。'),
        ],
        correct: 2,
        explanation: text('First fruit gives 12 ÷ 2 = 6 per dollar. First yogurt gives 24 ÷ 4 = 6.', '第一份水果每美元带来 12 ÷ 2 = 6 效用单位。第一份酸奶也为 24 ÷ 4 = 6。'),
        concept: text('Compare choices by marginal utility per dollar (MU ÷ P), not by utility or price alone.', '比较选择时看每美元边际效用（MU ÷ P），而不是只看效用或只看价格。'),
      },
      {
        prompt: text('If the customer has one of each, which additional serving is affordable and how much utility does it add?', '如果顾客已经各买了一份，还能买什么？多出的那一份增加多少效用？'),
        choices: [
          answer('A second fruit, adding 10 utils.', '第二份水果，增加 10 效用单位。'),
          distractor('A second yogurt, adding 12 utils.', '第二份酸奶，增加 12 效用单位。', 'After spending $6, only $2 is left, and yogurt costs $4. The budget rules it out, whatever its utility.', '花了 6 美元后只剩 2 美元，而酸奶要 4 美元。不管效用多高，预算都不允许。'),
          distractor('A second fruit, adding 12 utils.', '第二份水果，增加 12 效用单位。', '12 is the first fruit’s utility. Marginal utility diminishes, so the second fruit adds only 10.', '12 是第一份水果的效用。边际效用递减，第二份水果只增加 10。'),
        ],
        correct: 0,
        explanation: text('One fruit and one yogurt cost $6. The remaining $2 buys the second fruit, which adds 10 utils.', '一份水果和一份酸奶共花 6 美元。剩余的 2 美元可买第二份水果，新增 10 效用单位。'),
        concept: text('A choice must fit the budget, and each extra unit adds only its own marginal utility, which usually falls.', '选择必须在预算之内，而且每多一单位只增加它自己的边际效用，这个效用通常递减。'),
      },
      {
        prompt: text('Which $8 bundle maximizes total utility?', '哪个恰好花费 8 美元的组合能使总效用最大？'),
        choices: [
          distractor('Four fruit servings', '四份水果', 'Four fruit give 12 + 10 + 8 + 6 = 36. The 3rd and 4th fruit add only 8 and 6, less than the 24 the first yogurt adds for the same $4.', '四份水果共 12 + 10 + 8 + 6 = 36。第 3、4 份只增加 8 和 6，而同样花 4 美元，第一份酸奶能增加 24。'),
          answer('Two fruit servings and one yogurt', '两份水果和一份酸奶'),
          distractor('Two yogurt servings', '两份酸奶', 'Two yogurts give 24 + 12 = 36. The second yogurt adds 12 for $4, while two more fruit add 12 + 10 = 22 for the same $4.', '两份酸奶共 24 + 12 = 36。第二份酸奶花 4 美元只增加 12，而同样 4 美元买两份水果能增加 12 + 10 = 22。'),
        ],
        correct: 1,
        explanation: text('Two fruit and one yogurt give 12 + 10 + 24 = 46 utils. Four fruit give 36, and two yogurt also give 36.', '两份水果加一份酸奶带来 12 + 10 + 24 = 46 效用单位。四份水果为 36，两份酸奶也为 36。'),
        concept: text('Utility is maximized when the budget is spent and the last dollar on each good gives the same marginal utility (equal MU/P).', '当预算花完，且花在每种商品上的最后一美元带来相同的边际效用（MU/P 相等）时，效用最大。'),
      },
    ],
  },
];
