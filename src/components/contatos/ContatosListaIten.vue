<template>
    <li>
        <span>{{ contato.nome }}</span>
        <buton class="btn btn-info btn-sm float-right">Detalhes</buton>
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