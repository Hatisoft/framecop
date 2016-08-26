<template>
    <p>Please request a new framework using the next form</p>
</template>

<script>
module.exports = {
    ready: function() {
        this.$http.post("/api/request",{url: 'angular'}).then(function(response) {
            console.log(response.data);
        }, function(response) {
            console.error(response.status);
        });
    }
}
</script>
