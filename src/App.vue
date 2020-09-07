<template lang='html'>
  <div id='app'>
    <tv-header></tv-header>
    <main>
      <b-container>
        <b-row class='d-flex align-items-center py-5'>
          <b-col cols='2' class='p-0'>
            <tv-sidebar></tv-sidebar>
          </b-col>
          <b-col cols='10' class='pr-0'>
            <tv-categories></tv-categories>
            <!-- <router-view></router-view> -->
          </b-col>
      </b-row>
      </b-container>
    </main>
    <tv-footer></tv-footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

/* main {
  height: 100%;
  align-self: stretch;
  display: flex;
  align-items: center;
  text-align: center;
  padding-bottom: 56px;;
} */

/* header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495e;
  color: #ffffff;
} */

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
