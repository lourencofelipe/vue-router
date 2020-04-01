import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Contatos from './views/contatos/Contatos.vue'
import Home from './views/Home.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
    //Ao acessar a rota contatos, o componente que será utilizado será o contatos
    {path: '/contatos', component: Contatos},
    {path: '/', component: Home}
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
