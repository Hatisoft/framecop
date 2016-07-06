<template>
    <p>All the info for a framework {{framework.name}} that is in language {{framework.language}}</p>
</template>

<script>
module.exports = {
    ready: function() {
        var framework = this.$route.params.name;
        this.$http.get("/api/framework/"+framework).then(function(response) {
            console.log(response.data);
            this.framework = response.data;
        }, function(response) {
            console.error(response.status);
        });
    },
    data: function () {
        return {framework: {}};
    }
}
</script>
