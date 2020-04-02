import VueRouter from './router'
import Vue from 'vue'
import Contatos from './views/contatos/Contatos.vue'
import Home from './views/Home.vue'


Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    //Ao acessar a rota contatos, o componente que será utilizado será o contatos
    {path: '/contatos', component: Contatos},
    {path: '/', component: Home}
  ]
})
