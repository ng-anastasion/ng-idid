export type KeywordCategory = 'tech' | 'methodology' | 'process' | 'tool';

export interface ExperienceKeyword {
  id: string;
  name: string;
  frequency: number; // Относительная частота в %
  category: KeywordCategory;
}

// ГОТОВЫЙ СПРАВОЧНИК (для быстрого поиска O(1) по ID/ключу)
export const EXPERIENCE_KEYWORDS_REGISTRY: Record<string, ExperienceKeyword> = {
  react: { id: 'react', name: 'React', frequency: 100, category: 'tech' },
  javascript: { id: 'javascript', name: 'JavaScript', frequency: 100, category: 'tech' },
  typescript: { id: 'typescript', name: 'TypeScript', frequency: 99, category: 'tech' },
  html5: { id: 'html5', name: 'HTML5', frequency: 98, category: 'tech' },
  css3: { id: 'css3', name: 'CSS3', frequency: 98, category: 'tech' },
  git: { id: 'git', name: 'Git', frequency: 96, category: 'tool' },
  reduxToolkit: { id: 'reduxToolkit', name: 'Redux Toolkit', frequency: 88, category: 'tech' },
  restApi: { id: 'restApi', name: 'REST API', frequency: 88, category: 'tech' },
  nextjs: { id: 'nextjs', name: 'Next.js', frequency: 86, category: 'tech' },
  adaptiveLayout: { id: 'adaptiveLayout', name: 'Адаптивная верстка', frequency: 82, category: 'tech' },
  scrum: { id: 'scrum', name: 'Scrum', frequency: 80, category: 'methodology' },
  webpack: { id: 'webpack', name: 'Webpack', frequency: 76, category: 'tool' },
  gitlab: { id: 'gitlab', name: 'GitLab', frequency: 75, category: 'tool' },
  figma: { id: 'figma', name: 'Figma', frequency: 71, category: 'tool' },
  crossBrowserLayout: { id: 'crossBrowserLayout', name: 'Кроссбраузерная верстка', frequency: 70, category: 'tech' },
  componentApproach: { id: 'componentApproach', name: 'Компонентный подход', frequency: 68, category: 'methodology' },
  jest: { id: 'jest', name: 'Jest', frequency: 68, category: 'tool' },
  oop: { id: 'oop', name: 'ООП', frequency: 68, category: 'methodology' },
  cssInJs: { id: 'cssInJs', name: 'CSS-in-JS', frequency: 62, category: 'tech' },
  docker: { id: 'docker', name: 'Docker', frequency: 61, category: 'tool' },
  reactTestingLibrary: { id: 'reactTestingLibrary', name: 'React Testing Library', frequency: 60, category: 'tool' },
  ssr: { id: 'ssr', name: 'SSR', frequency: 59, category: 'tech' },
  vite: { id: 'vite', name: 'Vite', frequency: 56, category: 'tool' },
  solid: { id: 'solid', name: 'SOLID', frequency: 55, category: 'methodology' },
  reactHookForm: { id: 'reactHookForm', name: 'React Hook Form', frequency: 55, category: 'tech' },
  reactQuery: { id: 'reactQuery', name: 'React Query', frequency: 54, category: 'tech' },
  cicd: { id: 'cicd', name: 'CI/CD', frequency: 53, category: 'process' },
  graphql: { id: 'graphql', name: 'GraphQL', frequency: 53, category: 'tech' },
  scss: { id: 'scss', name: 'SCSS', frequency: 52, category: 'tech' },
  axios: { id: 'axios', name: 'Axios', frequency: 52, category: 'tech' },
  spa: { id: 'spa', name: 'SPA', frequency: 52, category: 'tech' },
  nodejs: { id: 'nodejs', name: 'Node.js', frequency: 52, category: 'tech' },
  tailwindCss: { id: 'tailwindCss', name: 'Tailwind CSS', frequency: 52, category: 'tech' },
  zustand: { id: 'zustand', name: 'Zustand', frequency: 51, category: 'tech' },
  storybook: { id: 'storybook', name: 'Storybook', frequency: 49, category: 'tool' },
  codeReview: { id: 'codeReview', name: 'Code Review', frequency: 49, category: 'process' },
  mobx: { id: 'mobx', name: 'MobX', frequency: 48, category: 'tech' },
  styledComponents: { id: 'styledComponents', name: 'Styled Components', frequency: 48, category: 'tech' },
  english: { id: 'english', name: 'Английский язык', frequency: 48, category: 'process' },
  eslint: { id: 'eslint', name: 'ESLint', frequency: 47, category: 'tool' },
  cssModules: { id: 'cssModules', name: 'CSS Modules', frequency: 45, category: 'tech' },
  zod: { id: 'zod', name: 'Zod', frequency: 45, category: 'tech' },
  bem: { id: 'bem', name: 'BEM', frequency: 45, category: 'methodology' },
  reactRouter: { id: 'reactRouter', name: 'React Router', frequency: 44, category: 'tech' },
  jira: { id: 'jira', name: 'Jira', frequency: 42, category: 'tool' },
  swaggerOpenApi: { id: 'swaggerOpenApi', name: 'Swagger / OpenAPI', frequency: 42, category: 'tool' },
  confluence: { id: 'confluence', name: 'Confluence', frequency: 42, category: 'tool' },
  mentoring: { id: 'mentoring', name: 'Менторинг', frequency: 42, category: 'process' },
  fsd: { id: 'fsd', name: 'Feature-Sliced Design', frequency: 40, category: 'methodology' },
  playwright: { id: 'playwright', name: 'Playwright', frequency: 40, category: 'tool' },
  rtkQuery: { id: 'rtkQuery', name: 'RTK Query', frequency: 38, category: 'tech' },
  vitest: { id: 'vitest', name: 'Vitest', frequency: 34, category: 'tool' },
  websocket: { id: 'websocket', name: 'WebSocket', frequency: 32, category: 'tech' },
  npm: { id: 'npm', name: 'npm', frequency: 32, category: 'tool' },
  jwt: { id: 'jwt', name: 'JWT', frequency: 28, category: 'tech' },
  rbac: { id: 'rbac', name: 'RBAC', frequency: 28, category: 'tech' },
  agile: { id: 'agile', name: 'Agile', frequency: 24, category: 'methodology' },
  babel: { id: 'babel', name: 'Babel', frequency: 24, category: 'tool' },
  cypress: { id: 'cypress', name: 'Cypress', frequency: 24, category: 'tool' },
  pwa: { id: 'pwa', name: 'PWA', frequency: 24, category: 'tech' },
  prettier: { id: 'prettier', name: 'Prettier', frequency: 24, category: 'tool' },
  microfrontends: { id: 'microfrontends', name: 'Microfrontends', frequency: 20, category: 'tech' },
  monorepo: { id: 'monorepo', name: 'Monorepo', frequency: 20, category: 'tech' },
  kubernetes: { id: 'kubernetes', name: 'Kubernetes', frequency: 18, category: 'tool' },
  vuejs: { id: 'vuejs', name: 'Vue.js', frequency: 16, category: 'tech' },
  accessibility: { id: 'accessibility', name: 'Accessibility (a11y)', frequency: 14, category: 'tech' },
  angular: { id: 'angular', name: 'Angular', frequency: 14, category: 'tech' },
  canvas: { id: 'canvas', name: 'Canvas', frequency: 14, category: 'tech' },
  seo: { id: 'seo', name: 'SEO', frequency: 12, category: 'tech' }
};

// ОТСОРТИРОВАННЫЙ МАССИВ (для вывода списком)
export const EXPERIENCE_KEYWORDS_LIST: ExperienceKeyword[] = Object.values(EXPERIENCE_KEYWORDS_REGISTRY)
  .sort((a, b) => b.frequency - a.frequency);
