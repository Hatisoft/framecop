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
        }
    },
    '/search': {
        component: function (resolve) {
            require(['./views/search.vue'], resolve);
        }
    },
    '/request': {
        component: function (resolve) {
            require(['./views/request.vue'], resolve);
        }
    }
});

router.redirect({
  '*': '/'
})

router.start(App, '#app');
