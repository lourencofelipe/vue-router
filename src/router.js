import VueRouter from 'vue-router'
import Vue from 'vue'
import Contatos from './views/contatos/Contatos.vue'
import ContatoDetalhes from './views/contatos/ContatoDetalhes.vue'
import Home from './views/Home.vue'


Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    //Ao acessar a rota contatos, o componente que será utilizado será o contatos
    {
      path: '/contatos', 
      component: Contatos, 
      children: [
        {path: ':id', component: ContatoDetalhes},  //segmento Dinâmico; meus-contatos.com/contatos/2
      ]},
    {path: '/', component: Home}
  ]
})
