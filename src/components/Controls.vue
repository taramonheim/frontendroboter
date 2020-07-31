<template>
<div class="card cardcenter" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title textlinks">SeilroboterXY</h5>
    <h6 class="card-subtitle mb-2 text-muted textlinks">Full Stack Development</h6>
    <p class="card-text textlinks">Ich kann mich auf der X und Y Achse bewegen</p>
    <h6 class="text-left">Steuer den Roboter an die gewünschte Position</h6>
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
.cardcenter{
  display: block;
  margin-left: auto;
  margin-right: auto
}
.textlinks{
  text-align: left; 
}
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
