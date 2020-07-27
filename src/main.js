import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io'
//import SocketIO from "socket.io-client"

Vue.use(new VueSocketIO({
  debug: true,
  // eslint-disable-next-line no-template-curly-in-string
  connection: 'https://hal.hfg.design:10000/tarsbot_control',
  options: {
    useConnectionNamespace: true,
  },
}));

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')

