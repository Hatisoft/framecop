<template>
    <p>Please search a new framework using the next form</p>
    <ul>
        <template v-for="framework in frameworks">
            <li><a v-link="{ name: 'framework', params:{ name: framework.name } }">{{framework.name}} - {{framework.language}}</a></li>
        </template>
    </ul>
</template>

<script>
module.exports = {
    ready: function() {
        this.$http.get("/api/language/javascript/0").then(function(response) {
            console.log(response.data);
            this.frameworks = response.data;
        }, function(response) {
            console.error(response.status);
        });
    },
    data: function () {
        return {frameworks: []};
    }
}
</script>
