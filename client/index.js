var Vue = require('vue');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');

Vue.use(VueRouter);
Vue.use(VueResource);

var Search = Vue.extend({
    template: '<p>Please search a new framework using the next form</p>',
    ready: function() {
        this.$http.get("/api/framework/javascript/0").then(function(response) {
            console.log(response.data);
        }, function(response) {
            console.error(response.status);
        });
    }
});

var Request = Vue.extend({
    template: '<p>Please request a new framework using the next form</p>',
    ready: function() {
        this.$http.post("/api/framework",{name: 'angular'}).then(function(response) {
            console.log(response.data);
        }, function(response) {
            console.error(response.status);
        });
    }
});

var Main = Vue.extend({
    template: '<h1>Welcome</h1>'
});

var App = Vue.extend({});

var router = new VueRouter();

router.map({
    '/': {
        component: Main
    },
    '/search': {
        component: Search
    },
    '/request': {
        component: Request
    }
});

router.redirect({
  '*': '/'
})

router.start(App, '#app');
