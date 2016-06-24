var Vue = require('vue');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');

Vue.use(VueRouter);
Vue.use(VueResource);

var Foo = Vue.extend({
    template: '<p>This is foo!</p>',
    ready: function() {
        this.$http.get("/api/framework").then(function(response) {
            console.log(response.data);
        }, function(response) {
            console.error(response.status);
        });
    }
});

var Bar = Vue.extend({
    template: '<p>This is bar!</p>'
});

var App = Vue.extend({});
var router = new VueRouter();

router.map({
    '/foo': {
        component: Foo
    },
    '/bar': {
        component: Bar
    }
});

router.start(App, '#app');
