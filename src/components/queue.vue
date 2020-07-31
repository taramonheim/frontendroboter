<template>
  <div id="queue">
    <div class="container">
      <div v-for="(w, idx) in $store.state.currentQueue[1]" :key="w.id.toString()"
        v-bind:class="{ isYou: (w.id == $store.state.ownId), isActive: (idx == 0)}">
        <span class="ownname">{{w.name}}</span>
        <span v-if="w.id == $store.state.ownId"> (You)</span>
        <span v-if="idx == 0"> (ACTIVE)</span>
        <br/><small style="color: lightgray;">{{w.id}}</small>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  sockets: {
    update_queue(data) {
      this.$store.state.currentQueue = data;
    },
    queue_ping() {
      this.$socket.emit('queue_pong');
    },
    update_timer(data) {
      this.$store.state.currentTimer = data;
    },
    client_name(data) {
      this.$store.state.clientName = data;
    },
  },
};
</script>

<style>
  #queue .container div {
    display: block;
    width: 100%;
    border: 1px solid black;
    list-style-type: none;
    height: 50px;
    font-weight: bold;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
  }

  #queue .container div.isYou {
    border-left: 20px solid hotpink;
  }

  #queue .container div.isActive {
    background-color: rgb(145, 64, 64);
  }
</style>