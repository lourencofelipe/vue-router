import VueRouter from 'vue-router'
import Vue from 'vue'
import Contatos from './views/contatos/Contatos.vue'
import ContatoDetalhes from './views/contatos/ContatoDetalhes.vue'
import ContatosHome from './views/contatos/ContatosHome.vue'
import ContatoEditar from './views/contatos/ContatosEditar.vue'
import Erro404 from './views/Erro404.vue'
import Erro404Contatos from './views/contatos/Erro404Contatos.vue'
import Home from './views/Home.vue'
import Login from './views/login/login.vue'
import EventBus from './event-bus.js'


Vue.use(VueRouter)
const router =  new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    setTimeout(() => {
      return new Promise((resolve) => {
        if(savedPosition) {
          return resolve(savedPosition)
        }
        if(to.hash){
          return resolve({
            selector: to.hash
          })
        }
        resolve({ x: 0, y: 250 })
      })
    }, 2000)
  },
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
          meta: { requerAutenticacao: true },
          beforeEnter(to, from, next) {
           console.log('beforeEnter')
           next() // continuar
            // next(true) // continuar
            // next(false) // bloquear
            // next('/contatos') // redirecionar
            // next({ name: 'contatos' }) // redirecionar
            //next(new Error(`Permissões insuficientes para a acessar o recurso ${to.fullPath}`))  
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
    // {
    //   path: '/',
    //   redirect: '/meus-contatos'
    // },
    {
      path: '/login',
      component: Login
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
  console.log('Requer autenticação?', to.meta.requerAutenticacao)
  const estaAutenticado = EventBus.autenticado
  if(to.matched.some(rota => rota.meta.requerAutenticacao)) {
    if(!estaAutenticado){
      next({
        path: '/login',
        query: { redirecionar: to.fullPath }
      })
      return
    }
  }
  next()
})

router.beforeResolve((to, from, next) => {
  console.log('beforeResolve')
  next()
}) 

// Guarda de rota executada após a navegação ser confirmada, por isso não existe a execução do next().
router.afterEach(() => {
  console.log('afterEach')
})

router.onError((erro) => {
  console.log(erro)
})

export default router
