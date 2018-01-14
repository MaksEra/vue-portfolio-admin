const routes = [
    { path: '/', component: require('../components/about') },
    { path: '/admin', component: require('../components/about') },
    { path: '/about', component: require('../components/about') },
    { path: '/works', component: require('../components/works') },
    { path: '/blog', component: require('../components/blog') },
    { path: '*', component: require('../components/404') },
];

export default routes;
