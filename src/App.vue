<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Layout streamUrl = 'http://172.21.13.218:8080/stream.mjpg'> <!--hier kommt die Ip Pi rein-->
      <template v-slot:videocomponent></template>
      <template v-slot:controlcomponent>
        <controls msg="Tara Monheim" /></template>
      <template v-slot:queuecomponent > <queue></queue></template>
    </Layout>
  </div>
</template>

<script>
  import controls from './components/Controls.vue'
  import Layout from './submodules/base_layout/src/components/interface'
  import queue from './components/queue.vue'

  export default {
    name: 'App',
    components: {
      controls,
      Layout,
      queue, 
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
.textlinks{
  text-align: left; 
}
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>