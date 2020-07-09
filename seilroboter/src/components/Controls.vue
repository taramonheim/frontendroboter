<template>
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Plakat von X</h5>
    <h6 class="card-subtitle mb-2 text-muted">Programmiertes Entwerfen</h6>
    <p class="card-text">Plakat zum Thema XY</p>
    <a href="#" class="card-link">Steuer den Roboter an die Position des Plakats</a>
  </div>
</div>
</template>

<script>
export default {
  name: 'Controls',
  props: {
   Controls: String
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
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
