import managementUserComponents from './modules/user'

export default [
  {
    path: '/',
    redirect: '/management/user/request',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/management/user/request',
        name: 'userPerson',
        component: () => import('@/views/user/UserHomeView.vue'),
        children: [...managementUserComponents]
      },
    ],
  },
]