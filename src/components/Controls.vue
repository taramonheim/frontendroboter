<template>
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Plakat von X</h5>
    <h6 class="card-subtitle mb-2 text-muted">Programmiertes Entwerfen</h6>
    <p class="card-text">Plakat zum Thema XY</p>
    <h6 class="text-left">Steuer den Roboter an die Position des Plakats</h6>
  </div>
  <div><xy></xy></div>
</div>
</template>

<script>
import xy from './ixypsilon.vue'

export default {
  name: 'controls',
  components: {
    xy,
  },
  props: {
    test:{
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
  //hier folgen ggf. noch methods, mounted() usw.
}
</script>

<style scoped>
/*#xy {
}*/
h3 {
  margin: 40px 0 0;
}
h6 {
  color: #42b983;
  padding:  left; 
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
