<template>
  <div class="container">
    <h1>Listado de Comunas</h1>

    <table class="table">
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Municipio</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="comuna in comunas" :key="comuna.comu_codi">
          <td>{{ comuna.comu_codi }}</td>
          <td>{{ comuna.comu_nomb }}</td>
          <td>{{ comuna.muni_nomb }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Comunas',
  data() {
    return {
      comunas: []
    };
  },
  mounted() {
    axios.get('http://localhost:8000/comunas') 
      .then(response => {
        this.comunas = response.data;
      })
      .catch(error => {
        console.error('Error al cargar comunas:', error);
      });

      
  }
};
</script>

<style scoped>
.table {
  margin-top: 20px;
}
</style>