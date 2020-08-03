import Portal from './components/Portal.vue';
import Main from './components/Main.vue';
import Glossary from './components/Glossary.vue';


export default [
  // Redirects to /route-one as the default route.
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    component: Main,
  },
  {
    path: '/glossary',
    component: Glossary,
  },
  {
    path: '/portal',
    component: Portal,
    // Children is just another route definition of sub-routes.
    children: [
      {
        // Note: No leading slash. This can trip people up sometimes.
        path: 'route-one-child',
        component: Portal
      }
    ]
  },
];