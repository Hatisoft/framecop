var Vue = require('vue');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');

Vue.use(VueRouter);
Vue.use(VueResource);

var App = Vue.extend({});

var router = new VueRouter();

router.map({
    '/': {
        component: function (resolve) {
            require(['./views/main.vue'], resolve);
        },
        auth: false
    },
    '/search': {
        component: function (resolve) {
            require(['./views/search.vue'], resolve);
        },
        auth: false
    },
    '/request': {
        component: function (resolve) {
            require(['./views/request.vue'], resolve);
        },
        auth: true
    }
});

router.beforeEach(function (transition) {
    if (transition.to.auth)
        console.log('need to check auth');
    else
        console.log('no need to check auth');
    transition.next();
});

router.redirect({
  '*': '/'
});

router.start(App, '#app');
