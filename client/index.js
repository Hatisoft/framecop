var Vue = require('vue');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');
var App = require('./views/app.vue');

Vue.use(VueRouter);
Vue.use(VueResource);

var router = new VueRouter();

Vue.use(require('vue-jwt-auth'), {}, router);

Vue.http.headers.common.Authorization = localStorage.getItem('jwt-auth-token');

router.map({
    '/': {
        component: function (resolve) {
            require(['./views/main.vue'], resolve);
        },
        name: 'main',
        auth: false
    },
    '/search': {
        component: function (resolve) {
            require(['./views/search.vue'], resolve);
        },
        name: 'search',
        auth: false
    },
    '/request': {
        component: function (resolve) {
            require(['./views/request.vue'], resolve);
        },
        name: 'request',
        auth: false
    },
    '/framework/:name': {
        component: function (resolve) {
            require(['./views/framework.vue'], resolve);
        },
        name: 'framework',
        auth: false
    }
});

router.redirect({
  '*': '/'
});

router.start(App, '#app');
