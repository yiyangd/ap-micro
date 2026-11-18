import { entriesForTopic, units } from '../lib/catalog';
import { sitePath, topicPath, unitPath } from '../lib/paths';
import type { Bilingual, Mission } from './game-types';
import { unit1Missions } from './game-unit1';
import { unit2Missions } from './game-unit2';
import { unit3Missions } from './game-unit3';
import { unit4Missions } from './game-unit4';
import { unit5Missions } from './game-unit5';
import { unit6Missions } from './game-unit6';

export const missionsByUnit: Record<number, readonly Mission[]> = {
  1: unit1Missions,
  2: unit2Missions,
  3: unit3Missions,
  4: unit4Missions,
  5: unit5Missions,
  6: unit6Missions,
};

const bi = (en: string, zh: string): Bilingual => ({ en, zh });
const keys = ['A', 'B', 'C'] as const;

// Monster names follow the market theme; the last level of each unit is its boss.
const monsterNames: readonly Bilingual[] = [
  bi('Scarcity Sprite', '稀缺小精灵'), bi('Tradeoff Toad', '取舍蟾蜍'), bi('Curve Crawler', '曲线爬虫'),
  bi('Barter Beetle', '易货甲虫'), bi('Margin Mite', '边际螨'), bi('Utility Imp', '效用小鬼'),
  bi('Demand Drake', '需求幼龙'), bi('Supply Slug', '供给蛞蝓'), bi('Elastic Eel', '弹性鳗'),
];
const looks = [
  { body: '#4ade80', light: '#bbf7d0', dark: '#15803d', belly: '#dcfce7', horn: '#facc15', horns: 'antenna', eyes: 1, size: 0.94 },
  { body: '#818cf8', light: '#c7d2fe', dark: '#3730a3', belly: '#e0e7ff', horn: '#a5b4fc', horns: 'ears', eyes: 2, size: 0.98 },
  { body: '#fb923c', light: '#fed7aa', dark: '#9a3412', belly: '#ffedd5', horn: '#4ade80', horns: 'leaf', eyes: 2, size: 1 },
  { body: '#94a3b8', light: '#e2e8f0', dark: '#334155', belly: '#cbd5e1', horn: '#64748b', horns: 'spike', eyes: 2, size: 1.03 },
  { body: '#c084fc', light: '#e9d5ff', dark: '#6b21a8', belly: '#f3e8ff', horn: '#f0abfc', horns: 'spike', eyes: 3, size: 1.06 },
] as const;
const bossLook = { body: '#f43f5e', light: '#fecdd3', dark: '#881337', belly: '#ffe4e6', horn: '#fde047', horns: 'crown', eyes: 3, size: 1.14 };
const bossNames: Record<number, Bilingual> = {
  1: bi('Opportunity King', '机会成本之王'),
  2: bi('Tariff Titan', '关税巨人'),
  3: bi('Long-Run Leviathan', '长期利维坦'),
  4: bi('Cartel Colossus', '卡特尔巨像'),
  5: bi('Monopsony Mammoth', '买方垄断猛犸'),
  6: bi('Gini Giant', '基尼巨人'),
};

export const shooterData = {
  stepKinds: [bi('Start here', '从这里开始'), bi('Key step', '关键一步'), bi('Finish it', '得出结论')],
  sections: units.map(unit => {
    const missions = missionsByUnit[unit.id];
    if (!missions?.length) throw new Error(`Unit ${unit.id} has no Monster Shooter levels`);
    const topicIds = unit.topics.map(topic => topic.id);
    const levelIds = missions.map(mission => mission.id);
    if (topicIds.join() !== levelIds.join()) {
      throw new Error(`Unit ${unit.id} levels ${levelIds.join()} must match topics ${topicIds.join()}`);
    }

    return {
      id: String(unit.id),
      label: `Unit ${unit.id}`,
      title: bi(unit.en, unit.zh),
      url: unitPath(unit.id),
      encounters: missions.map((mission, index) => {
        const boss = index === missions.length - 1;
        const indexed = entriesForTopic(mission.id).length;
        return {
          id: mission.id,
          label: `Unit ${unit.id} · Topic ${mission.id} · ${mission.topic.en}`,
          historyLabel: `Topic ${mission.id}`,
          reviewNote: bi(
            `Topic ${mission.id} has ${indexed} indexed past-exam questions and parts. Practise them next.`,
            `考点 ${mission.id} 收录了 ${indexed} 道真题／小问，接下来去练习吧。`,
          ),
          url: topicPath(mission.id),
          monster: {
            name: boss ? bossNames[unit.id] : monsterNames[(index + unit.id * 2) % monsterNames.length],
            look: boss ? bossLook : looks[(index + unit.id) % looks.length],
            boss,
          },
          method: { title: mission.title },
          stem: mission.scenario,
          steps: mission.steps.map(step => ({
            prompt: step.prompt,
            options: Object.fromEntries(step.choices.map((choice, i) => [keys[i], choice])),
            correct: keys[step.correct],
            takeaway: step.takeaway ?? step.choices[step.correct].text,
            explanation: step.explanation,
          })),
          ...(mission.figure && { figure: { src: sitePath(`game/figures/${mission.figure.file}`), description: mission.figure.description } }),
          ...(mission.table && { table: mission.table }),
        };
      }),
    };
  }),
};
