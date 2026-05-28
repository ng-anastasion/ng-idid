export type SkillCategory = 'frontend' | 'backend' | 'devops' | 'general';

export interface MarketSkill {
  id: string;
  name: string;
  frequency: number; // Относительная частота в %
  category: SkillCategory;
}

// ГОТОВЫЙ СПРАВОЧНИК (для быстрого поиска O(1) по ID)
export const MARKET_SKILLS_REGISTRY: Record<string, MarketSkill> = {
  typescript: { id: 'typescript', name: 'TypeScript', frequency: 100, category: 'frontend' },
  javascript: { id: 'javascript', name: 'JavaScript', frequency: 94, category: 'frontend' },
  react: { id: 'react', name: 'React', frequency: 83, category: 'frontend' },
  git: { id: 'git', name: 'Git', frequency: 46, category: 'general' },
  html: { id: 'html', name: 'HTML', frequency: 36, category: 'frontend' },
  css: { id: 'css', name: 'CSS', frequency: 27, category: 'frontend' },
  restApi: { id: 'restApi', name: 'REST API', frequency: 25, category: 'backend' },
  redux: { id: 'redux', name: 'Redux', frequency: 22, category: 'frontend' },
  angular: { id: 'angular', name: 'Angular', frequency: 17, category: 'frontend' },
  vuejs: { id: 'vuejs', name: 'Vue.js', frequency: 13, category: 'frontend' },
  nodejs: { id: 'nodejs', name: 'Node.js', frequency: 13, category: 'backend' },
  webpack: { id: 'webpack', name: 'Webpack', frequency: 10, category: 'frontend' },
  docker: { id: 'docker', name: 'Docker', frequency: 8, category: 'devops' },
  nextjs: { id: 'nextjs', name: 'Next.js', frequency: 7, category: 'frontend' },
  cicd: { id: 'cicd', name: 'CI/CD', frequency: 7, category: 'devops' },
  figma: { id: 'figma', name: 'Figma', frequency: 6, category: 'general' },
  scss: { id: 'scss', name: 'SCSS', frequency: 5, category: 'frontend' },
  github: { id: 'github', name: 'GitHub', frequency: 4, category: 'general' },
  ajax: { id: 'ajax', name: 'Ajax', frequency: 4, category: 'frontend' },
  zustand: { id: 'zustand', name: 'Zustand', frequency: 4, category: 'frontend' },
  graphql: { id: 'graphql', name: 'GraphQL', frequency: 3, category: 'backend' },
  vite: { id: 'vite', name: 'Vite', frequency: 3, category: 'frontend' },
  http: { id: 'http', name: 'HTTP', frequency: 3, category: 'general' },
  tailwind: { id: 'tailwind', name: 'Tailwind CSS', frequency: 3, category: 'frontend' },
  jest: { id: 'jest', name: 'Jest', frequency: 3, category: 'frontend' },
  json: { id: 'json', name: 'JSON', frequency: 3, category: 'general' },
  spa: { id: 'spa', name: 'SPA', frequency: 2, category: 'frontend' },
  rxjs: { id: 'rxjs', name: 'RxJS', frequency: 2, category: 'frontend' },
  websocket: { id: 'websocket', name: 'WebSocket', frequency: 2, category: 'general' },
  unitTesting: { id: 'unitTesting', name: 'Unit Testing', frequency: 2, category: 'general' },
  gitlab: { id: 'gitlab', name: 'GitLab', frequency: 2, category: 'general' },
  mobx: { id: 'mobx', name: 'MobX', frequency: 2, category: 'frontend' },
  bootstrap: { id: 'bootstrap', name: 'Bootstrap', frequency: 2, category: 'frontend' },
  reactQuery: { id: 'reactQuery', name: 'React Query', frequency: 1, category: 'frontend' },
  less: { id: 'less', name: 'Less', frequency: 1, category: 'frontend' },
  solid: { id: 'solid', name: 'SOLID', frequency: 1, category: 'general' },
  e2e: { id: 'e2e', name: 'E2E Testing', frequency: 1, category: 'general' },
  ssr: { id: 'ssr', name: 'SSR', frequency: 1, category: 'frontend' },
  sass: { id: 'sass', name: 'Sass', frequency: 1, category: 'frontend' },
  adaptiveDesign: { id: 'adaptiveDesign', name: 'Адаптивная верстка', frequency: 1, category: 'frontend' }
};

// ОТСОРТИРОВАННЫЙ МАССИВ (для вывода в цикле @for)
export const MARKET_SKILLS_LIST: MarketSkill[] = Object.values(MARKET_SKILLS_REGISTRY)
  .sort((a, b) => b.frequency - a.frequency);
