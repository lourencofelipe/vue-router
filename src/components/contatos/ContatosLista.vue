<template>
     <div>
        <h3 class="font-weight-light">Contatos</h3>

        <ul class="list-group" v-if="contatos.lenght > 0">
            <ContatosListaIten 
            class="list=group-item"
            v-for="contato in contatos" 
            :key="contato.id"
            :contato="contato"/>
        </ul>
        <p v-else>Nenhum contato cadastrado.</p>
        <button class="btn btn-secondary mt-4 mb-4" @click="voltar">Voltar</button>
    </div>
    
</template>

<script>

import ContatosListaIten from './ContatosListaIten.vue'

export default {
    components: {
        ContatosListaIten
    },
    data() {
        return {
            contatos: [
                { id: 1, nome: 'Wolfgang  Mozart', email: 'wolfgang@email.com' },
                { id: 2, nome: 'Johann Bach', email: 'johann@email.com' },
                { id: 3, nome: 'Antonio Vivaldi', email: 'antonio@email.com' }
            ]
        }
    },
    methods: {
        voltar(){
            // Indica para a instância do router para qual rota deseja ir.
           // this.$router.push('/')
            //.$router.replace('/')
            this.$router.back()
        }
    }
}
</script>