<template>
        <div>
            <h3 class="font-weight-light">Editar Contato com id: {{ id }}</h3>
            <button
              class="btn btn-secondary mt-4 mb-4"
              @click="$router.back()">
                Voltar
            </button>
        </div>
</template>

<script>
export default {
    props: ['id'],
    beforeRouteEnter(to, from, next) {
        console.log('beforeRouteEnter')
        // if(to.query.autenticado === 'true'){
        //     next()
        //     return
        // }
        // next('/contatos')
    },
    beforeRouteLeave(to, from, next) {
        console.log('beforeRouteLeave')
        const confirmar = window.confirm('Deseja realmente sair?')
        next(confirmar)
    }
}
</script>