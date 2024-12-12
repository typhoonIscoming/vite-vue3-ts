import Layout from './layout.vue';



export default [
    {
        path: '/',
        component: Layout,
        redirect: '/index',
        name: 'Home',
        meta: {},
        children: [
            {
                path: 'index',
                component: () => import('@/views/Home/index.vue'),
                    name: 'Index',
                    meta: {
                    title: '首页',
                    icon: 'ep:home-filled',
                    noCache: false,
                    affix: true
                }
            }
        ]
    },
]
