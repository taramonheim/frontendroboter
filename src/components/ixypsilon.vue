<template>
<div id="border">
  <div id="xy" v-on:click="click">
    <div id="point" :style="{ top: `${point[1] * 100}%`, left: `${point[0] * 100}%` }" />
  </div>
</div>
</template>

<script>
export default {
  name: "xy",
  props: {
    test: {
      type: String
    }
  },
  data: () => ({
    point: [0.5, 0.5]
  }),
  methods: {
    click(e) {
      const { clientX, clientY } = e;
      const [left, top] = this.offset(e.target);
      const { offsetHeight, offsetWidth } = e.target;
      const x = (clientX - left) / offsetWidth;
      const y = (clientY - top) / offsetHeight;
      this.point = [x, y]
    },
    offset(el) {
      const isBody = el.tagName === 'BODY'
      const scrollX = el.scrollLeft || (isBody ? document.documentElement.scrollLeft : 0);
      const scrollY = el.scrollTop || (isBody ? document.documentElement.scrollTop : 0);
      const { offsetLeft, offsetTop, clientLeft, clientTop } = el;
      const x = offsetLeft - scrollX + clientLeft;
      const y = offsetTop - scrollY + clientTop;
      const point = [x, y];
      if(el.offsetParent) return this.offset(el.offsetParent).map((x, i) => x + point[i]);
      return point;
    }
  },
  sockets: {
    connect: function() {
      console.log("socket connected");
    },
    nachrichtenname: function(data) {
      console.log(
        'this method was fired by the socket server. eg: io.emit("nachrichtenname"',
        data
      );
    }
  }
  //hier folgen ggf. noch methods, mounted() usw.
};
</script>

<style scoped>
#border {
  border: 1.5px solid rgb(139, 139, 139);
  border-radius: 8px;
  padding: 5%;
  height: 200px;
}

#xy {
  position: relative;
  height: 100%;
  width: 60%;
  background-color: lightgrey;
  border-radius: 6px;
}

#point {
  position: absolute;
  border-radius: 2px;
  width: 5%;
  height: 7.5%;
  background-color: rgb(75, 75, 75);
  transform: translate(-50%, -50%);
  transition: left 0.2s ease-out, top 0.2s ease-out;
  pointer-events: none;
}
</style>