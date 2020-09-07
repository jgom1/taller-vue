<template>
  <b-row class='m-0'>
    <b-col cols='4' class="p-2">
      <div class='category d-flex align-items-center justify-content-center'>
        <h2>Category 1</h2>
      </div>
    </b-col>
    <b-col cols='4' class="p-2">
      <div class='category d-flex align-items-center justify-content-center'>
        <h2>Category 1</h2>
      </div>
    </b-col>
    <b-col cols='4' class="p-2">
      <div class='category d-flex align-items-center justify-content-center'>
        <h2>Category 1</h2>
      </div>
    </b-col>
    <b-col cols='4' class="p-2">
      <div class='category d-flex align-items-center justify-content-center'>
        <h2>Category 1</h2>
      </div>
    </b-col>
    <b-col cols='4' class="p-2">
      <div class='category d-flex align-items-center justify-content-center'>
        <h2>Category 1</h2>
      </div>
    </b-col>
    <b-col cols='4' class="p-2">
      <div class='category d-flex align-items-center justify-content-center'>
        <h2>Category 1</h2>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'tv-categories',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style>
 .category{
  height: 250px;
  border: 2px #35495e solid;
}

.category:hover{
  background-color: #35495e;
  color: #ffffff;
  cursor: pointer;
} 

h1,
h2 {
  font-weight: normal;
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
  color: #35495e;
}
</style>
