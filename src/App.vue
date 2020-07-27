<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Layout>
    <template v-slot:videocomponent> Video</template>
    <template v-slot:controlcomponent> <controls msg="Tara Monheim"/></template>
    <template v-slot:queuecomponent> Steuer den Roboter an die gewünschte Position mithilfe des Sliders, um dir die Plakate der Studenten anzuschauen.</template>
    </Layout>
  </div>
</template>

<script>
import controls from './components/Controls.vue'
import Layout from './submodules/base_layout/src/components/interface'

export default {
  name: 'App',
  components: {
    controls,
    Layout,
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
