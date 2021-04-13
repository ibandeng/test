import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  ssr:{},
  dynamicImport: {
    loading: '@/Loading',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/link', component: '@/pages/link' },
  ]
});
