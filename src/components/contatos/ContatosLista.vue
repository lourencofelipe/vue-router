<template>
     <div>
        <h3 class="font-weight-light">Contatos</h3>

        <div class="form-group">
            <input
                type="search"
                class="form-control"
                placeholder="Buscar Contatos"
                @keyup.enter="buscar"
                :value="busca"
            >
        </div>

        <hr>

        <ul class="list-group" v-if="contatosFiltrados">
            <ContatosListaIten 
            class="list-group-item"
            v-for="contato in contatosFiltrados" 
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
    props: ['busca'],
    data() {
        return {
            contatos: [
                { id: 1, nome: 'Wolfgang  Mozart', email: 'wolfgang@email.com' },
                { id: 2, nome: 'Johann Bach', email: 'johann@email.com' },
                { id: 3, nome: 'Antonio Vivaldi', email: 'antonio@email.com' }
            ]
        }
    },
    computed: {
        contatosFiltrados() {
            const busca = this.busca
            return !busca
                   ? this.contatos  
                   : this.contatos.filter(c => c.nome.toLowerCase().includes(busca.toLowerCase()))
        }
    },
    methods: {
        buscar(event) {
            this.$router.push({
                path: '/contatos',
                query: { busca: event.target.value }
            })
        },
        voltar() {
            // Indica para a instância do router para qual rota deseja ir.
           // this.$router.push('/')
            //.$router.replace('/')
            this.$router.back()
        }
    }
}
</script>