import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/u/:username',
        name: 'User',
        component: () => import('../views/User.vue')
    },
    {
        path: '/p/:pid',
        name: 'Post',
        component: () => import('../views/Post.vue')
    },
    {
        path: '/c/:tname',
        name: 'Category',
        component: () => import('../views/Category.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/auth/Login.vue')
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: () => import('../views/auth/SignUp.vue')
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    var token = window.$cookies.get('token');
    console.log(to);
    if (to.name !== 'Login' && to.name !== 'SignUp' && token == null) {
        next({name: 'Login'})
    } else if ((to.name === 'Login' || to.name === 'SignUp') && token != null) {
        next({name: 'Home'})
    } else {
        next()
    }
});


export default router
