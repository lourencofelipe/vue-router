<template>
    <h3 class="font-weight-light">Detalhes sobre o contato com o id: {{ $route.params.id }}</h3>
</template>

<script>
export default {
    data(){
        return {
            id: this.$route.params.id
        }
    },
    beforeRouteUpdate(to, from, next){
        this.id = to.params.id
        next()
    }
}
</script>