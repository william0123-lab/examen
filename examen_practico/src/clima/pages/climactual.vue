<template>
    <div>
      <h2>Información del clima</h2>
      <h1>{{ pais }}</h1>
      <h1>{{ location }}</h1>
      <p>Temperatura actual: {{ temperatura }}</p>
      
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        temperatura: null,
        location: null,
        pais: null,
      };
    },
    mounted() {
      this.obtenerClima();
    },
    methods: {
      obtenerClima() {
        const apiKey = 'c9955c2e307b4b84851151957232906';
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=trujillo`;
  
        axios.get(apiUrl)
          .then(response => {
            this.temperatura = response.data.current.temp_c,
            this.location = response.data.location.name,
            this.pais = response.data.location.country;
           
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  };
  </script>
  
