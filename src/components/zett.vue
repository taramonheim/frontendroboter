<template>
  <div>
    
  </div>
</template>

<script>
export default {
  name: 'z',
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
  //hier folgen ggf. noch methods, mounted() usw.
}
</script>

<style scoped>


</style>