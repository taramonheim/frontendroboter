import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io'
//import SocketIO from "socket.io-client"

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://3.121.41.235:3000',
  options: { path: "/my-app/" } //Optional options
}))
// https://hal.hfg.design:10000/tarsbot_control

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')

