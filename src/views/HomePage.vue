<script setup>
    import DinoLaura from '../components/DinoLaura.vue'
    import DinoControls from '../components/DinoControls.vue'
</script>

<template>
  <div class="home-page">
    <div class="title">
      <h1>Dino Laura</h1>
      <p>Click the buttons below to change Dino's state!</p>
    </div>

    <div class="dino-container">
      <dino-laura />
    </div>

    <div class="controls-container">
      <dino-controls />
    </div>  
  </div>
</template>

<style scoped>
/* Estilos generales de la página */
.home-page {
  /* Ocupa toda la altura de la ventana */
  min-height: 100vh;
  /* Ocupa todo el ancho */
  width: 100vw;
  
  /* Espacio interno para que no pegue al borde */
  padding: 2rem;
  padding-bottom: 10vh;

  /* Fondo claro y agradable */
  background-color: #d8e9ff;

  /* Flex para alinear y espaciar elementos en columna */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* separa título arriba y controles abajo */
  align-items: center;
  box-sizing: border-box;
  margin: 0;
}

/* Encabezado (título) */
.title {
  text-align: center;
  margin-bottom: 1rem;
}

.title h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.title p {
  font-size: 1.1rem;
  color: #555;
}

/* Contenedor para centrar el dino en el centro de la página */
.dino-container {
  flex: 1;                /* ocupa el espacio central */
  display: flex;
  align-items: center;    /* centra verticalmente */
  justify-content: center;/* centra horizontalmente */
}

/* Contenedor de los controles, colocado al final de la columna */
.controls-container {
  margin-top: 1rem;
  text-align: center;
}
</style>