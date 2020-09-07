<template>
  <header>
    <b-container class='py-2 px-0'>
      <b-row class='d-flex align-items-center m-0'>
        <b-col cols='3' class='p-0'>
          <b-form-input v-model='text' placeholder='Buscar producto...'></b-form-input>
        </b-col>
        <b-col cols='6' class='p-0 text-center'>
          <h1 class='mb-0'>Taller Vue</h1>
        </b-col>
        <b-col cols='3' class='p-0 text-right'>
          <div>
            <b-button variant='success'>Entrar</b-button>
            <b-button variant='light'>Carro compra</b-button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script>
export default {
  name: 'tv-header'
}
</script>

<style>
header {
  background-color: #35495e;
  color: #ffffff;
}
</style>