<script setup>
import { useMarioStatesStore } from '../stores/mario'

const marioStatesStore = useMarioStatesStore()
const states = marioStatesStore.getStates
</script>

<template>
  <div class="controls">
    <div v-for="state in states" :key="state.name">
      <button
        :class="{ active: marioStatesStore.state === state.name }"
        @click="marioStatesStore.changeState(state.name)"
      >
        {{ state.name }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem; 
  flex-wrap: wrap;
  max-width: 80vw;
}

/* Estilos para los botones */
button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #115141;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  outline: none;
}

button:hover {
  background-color: #005fa3;
}

button.active {
  background-color: #ff9800; /* color distinto cuando está activo */
}

/* Opcional: un pequeño efecto al hacer clic */
button:active {
  transform: scale(0.97);
}
</style>