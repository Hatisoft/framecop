var Vue = require('vue');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');

Vue.use(VueRouter);
Vue.use(VueResource);

var Foo = Vue.extend({
    template: '<p>This is foo!</p>'
});

var Bar = Vue.extend({
    template: '<p>This is bar!</p>'
});

var Main = Vue.extend({
    template: '<h1>Welcome</h1>',
    ready: function() {
        this.$http.get("/api/framework").then(function(response) {
            console.log(response.data);
        }, function(response) {
            console.error(response.status);
        });
    }
});

var App = Vue.extend({});

var router = new VueRouter();

router.map({
    '/': {
        component: Main
    },
    '/foo': {
        component: Foo
    },
    '/bar': {
        component: Bar
    }
});

router.redirect({
  '*': '/'
})

router.start(App, '#app');
