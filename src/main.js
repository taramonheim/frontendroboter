import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import Vuex from 'vuex';
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

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    currentQueue: [],
    ownId: 'none',
    ownName: 'noname',
    clientName: 'undefined',
    currentTimer: 0,
  },
  getters: {
    amIActive: () => {
      if (store.state.currentQueue.length === 0) return false;
      return store.state.currentQueue[1][0].id === store.state.ownId;
    },
  },
});

Vue.config.productionTip = false
new Vue({
  store, 
  render: h => h(App),
}).$mount('#app')

