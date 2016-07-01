<template>
    <p>Please search a new framework using the next form</p>
</template>

<script>
module.exports = {
    ready: function() {
        this.$http.get("/api/framework/javascript/0").then(function(response) {
            console.log(response.data);
        }, function(response) {
            console.error(response.status);
        });
    }
}
</script>

<style>
</style>
