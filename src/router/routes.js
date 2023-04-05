const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    redirect:'/home',
    children: [
      { path: '/home', component: () => import('pages/HomePage.vue') },
      { path: '/destination', component: () => import('pages/DestinationPage.vue') },
      { path: '/crew', component: () => import('pages/CrewPage.vue') },
      { path: '/technology', component: () => import('pages/TechnologyPage.vue') },
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
