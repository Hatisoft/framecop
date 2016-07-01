var Vue = require('vue');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');

var mainView = require('./views/main.vue');
var requestView = require('./views/request.vue');
var searchView = require('./views/search.vue');

Vue.use(VueRouter);
Vue.use(VueResource);

var App = Vue.extend({});

var router = new VueRouter();

router.map({
    '/': {
        component: mainView
    },
    '/search': {
        component: searchView
    },
    '/request': {
        component: requestView
    }
});

router.redirect({
  '*': '/'
})

router.start(App, '#app');
