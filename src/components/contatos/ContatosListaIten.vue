<template>
    <li>
        <span>{{ contato.nome }}</span>
        <router-link 
        class="btn btn-info btn-sm float-right"
        :to="{ path: `/contatos/${contato.id}`}">
            Detalhes
        </router-link>
    </li>
</template>

<script>
export default {
    props: {
        contato: {
            type: Object,
            required: true
        }
    }
}
</script>