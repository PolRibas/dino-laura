<script setup>
import DinoLaura from '../components/DinoLaura.vue'
import Mario from '../components/Mario.vue'
import { onMounted } from 'vue'
import { useDinoStatesStore } from '../stores/dino'
import { useMarioStatesStore } from '../stores/mario'

const marioStatesStore = useMarioStatesStore()
const dinoStatesStore = useDinoStatesStore()

onMounted(() => {
  dinoStatesStore.changeState('Idle')
  marioStatesStore.changeState('Idle')
  console.log("Seleccion de personajes en estado 'Idle'")
})
</script>

<template>
  <div class="character-select-page">
    <h2 class="title">Select Your Player</h2>
    
    <div class="character-container">
      <!-- Tarjeta de Dino -->
      <router-link to="/dino" class="character-card">
        <!-- Contenedor que fuerza un área cuadrada para el sprite -->
        <div class="image-container">
          <dino-laura customClass="homePage" />
        </div>
        <p>Dino Laura</p>
      </router-link>

      <!-- Tarjeta de Mario -->
      <router-link to="/mario" class="character-card">
        <div class="image-container">
          <mario customClass="homePage" />
        </div>
        <p>Mario</p>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
/* 
  --- CONTENEDOR PRINCIPAL ---
  Pantalla completa, con un degradado cálido y una animación de entrada
*/
.character-select-page {
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* wrap */
  overflow-x: auto;
  padding: 2rem;
  padding-left: 4rem;
  padding-right: 4rem;
  box-sizing: border-box;
  margin: 0;
  /* Animación de fundido */
  animation: fadeIn 0.8s ease forwards;
}

@keyframes fadeIn {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}

/* 
  --- TÍTULO ---
  Tamaño grande, color blanco y una ligera sombra para destacar en el fondo
*/
.title {
  font-size: 3rem;
  color: #fff;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  font-family: 'Poppins', sans-serif; /* O la fuente que prefieras */
}

/* 
  --- CONTENEDOR DE PERSONAJES ---
  Flex con espacio entre las tarjetas
*/
.character-container {
  display: flex;
  gap: 2rem;
  justify-content: center;
}

/* 
  --- TARJETA DE PERSONAJE ---
  Añadimos un tamaño fijo de tarjeta para que ambas se vean idénticas
  Efecto "glassmorphism", con un fondo semitransparente y desenfoque
*/
.character-card {
  width: 220px;               /* Ancho fijo */
  height: 240px;              /* Alto fijo */
  
  text-decoration: none;      /* Quitar subrayado del link */
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;

  background: rgba(255, 255, 255, 0.2); 
  border-radius: 1rem;
  backdrop-filter: blur(10px);       
  box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);

  transition: transform 0.3s ease, background 0.3s ease;
}

/* Efecto 'zoom' al pasar el cursor */
.character-card:hover {
  transform: scale(1.05);
  background: rgba(255, 255, 255, 0.3);
}

/* Contenedor de la imagen: cuadrado de 150px */
.image-container {
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-bottom para separar imagen y texto */
  margin-bottom: 1rem; 
}

/* Si tus componentes Mario y DinoLaura renderizan <img>, podemos
   forzar que la imagen nunca supere el contenedor */
.image-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* Nombre del personaje */
.character-card p {
  margin: 0;
  font-size: 1.2rem;
  font-family: 'Poppins', sans-serif;
  color: #333;
}
</style>