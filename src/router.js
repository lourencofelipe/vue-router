import VueRouter from 'vue-router'
import Vue from 'vue'
import Contatos from './views/contatos/Contatos.vue'
import ContatoDetalhes from './views/contatos/ContatoDetalhes.vue'
import ContatosHome from './views/contatos/ContatosHome.vue'
import ContatoEditar from './views/contatos/ContatosEditar.vue'
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
      alias: ['/meus-contatos', '/lista-de-contatos'],
      children: [
        // meus-contatos.com/contatos/teste
        {
          path: ':id', 
          component: ContatoDetalhes, 
          name: 'contato'
        },  //segmento Dinâmico; meus-contatos.com/contatos/2
        {
          path: ':id/editar',
          alias: ':id/alterar',
          component: {
            default: ContatoEditar,
            'contato-detalhes': ContatoDetalhes
          }
        },
        {
          path: '', 
          component: ContatosHome ,
          name: 'contatos'
        } 
      ]
    },
    {
      path: '/home', 
      component: Home
    },
    {
      path: '/',
      redirect: '/meus-contatos'
    }
  ]
})
