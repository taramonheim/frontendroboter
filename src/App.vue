<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Layout></Layout>
    <ixypsilon></ixypsilon>
    <zett></zett>
    <controls msg="Tara Monheim"/>
  </div>
</template>

<script>
import controls from './components/controls.vue'
import Layout from './submodules/base_layout/src/components/interface'
import ixypsilon from './components/ixypsilon.vue'
import zett from './components/zett.vue'

export default {
  name: 'App',
  components: {
    controls,
    Layout,
    ixypsilon,
    zett,
   // Queue
  },
   props: {
    test: {
      type: String,
    }
  },
  sockets: {
        connect: function () {
            console.log('socket connected')
        },
        nachrichtenname: function (data) {
            console.log('this method was fired by the socket server. eg: io.emit("nachrichtenname"', data)
        }
  } 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
