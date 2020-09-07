<template>
  <footer class='position-absolute w-100'>
    <b-container class='py-4'>
      <b-row class='d-flex align-items-center text-center m-0'>
        <b-col cols='3' class='px-0'>
          <p class='mb-0'>2020</p>
        </b-col>
        <b-col cols='6' class='px-0'>
          <p class='mb-0'>Tienda de productos realizada con Vue</p>
        </b-col>
        <b-col cols='3' class='px-0'>
          <p class='mb-0'>España</p>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: 'tv-footer'
}
</script>

<style>
footer {
  background-color: #35495e;
  color: #ffffff;
  bottom: 0;
}
</style>