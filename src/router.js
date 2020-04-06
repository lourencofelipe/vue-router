import VueRouter from 'vue-router'
import Vue from 'vue'
import Contatos from './views/contatos/Contatos.vue'
import ContatoDetalhes from './views/contatos/ContatoDetalhes.vue'
import ContatosHome from './views/contatos/ContatosHome.vue'
import ContatoEditar from './views/contatos/ContatosEditar.vue'
import Erro404 from './views/Erro404.vue'
import Erro404Contatos from './views/contatos/Erro404Contatos.vue'
import Home from './views/Home.vue'


Vue.use(VueRouter)
const router =  new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    //Ao acessar a rota contatos, o componente que será utilizado será o contatos
    {
      path: '/contatos', 
      component: Contatos, 
      alias: ['/meus-contatos', '/lista-de-contatos'],
      props: (route) => {
        const busca = route.query.busca
        return busca ? { busca } :  {}
      },
      children: [
      
        {
          path: ':id(\\d+)', 
          component: ContatoDetalhes, 
          name: 'contato',
          props: (route) => {
            return {
              // Convertando a string para number
              id: +route.params.id
            }
          }
        },  //segmento Dinâmico; meus-contatos.com/contatos/id
        {
          path: ':id(\\d+)/editar',
          alias: ':id(\\d+)/alterar',
          beforeEnter(to, from, next) {
            console.log('beforeEnter')
            next()  
          },
          component: {
            default: ContatoEditar,
            'contato-detalhes': ContatoDetalhes
          },
          props: {
            default: true,
            'contato-detalhes': true
          }
        },
        {
          path: '', 
          component: ContatosHome ,
          name: 'contatos',
          props: true
        },
        {
          path: '*',
          component: Erro404Contatos
        }, 
      ]
    },
    {
      path: '/home', 
      component: Home
    },
    {
      path: '/',
      redirect: '/meus-contatos'
    },
    {
      path: '*',
      component: Erro404
    } // Rota coringa, mais genérica dentra outros tipos de rota.
  ]
})

// Guarda de navegação global.
router.beforeEach((to, from, next) => {
  console.log('beforeEach')
  next()
})

// Guarda de rota executada após a navegação ser confirmada.
router.afterEach((to, from) => {
  console.log('afterEach')
})

export default router
