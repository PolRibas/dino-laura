<script setup>
import { ref } from 'vue'
import {onMounted} from 'vue'
import { useDinoStatesStore } from '../stores/dino'

const props = defineProps({
    customClass: {
        type: String,
        default: ''
    }
})

const dinoStatesStore = useDinoStatesStore()
const states = dinoStatesStore.getStates
const dinoLaura = ref({
    image: 1,
    reverse: false
})


onMounted(() => {
    setInterval(() => {
        if (dinoStatesStore.changingState) {
            dinoLaura.value.image = 1
            dinoLaura.value.reverse = false
            dinoStatesStore.resetChangingState()
        }
        const currentState = states.find(state => state.name === dinoStatesStore.state)
        if (currentState) {
            const max = currentState.max
            const min = currentState.min
            if (dinoLaura.value.image < max) {
                if (dinoLaura.value.reverse) {
                    if( dinoLaura.value.image === 1) {
                        dinoLaura.value.reverse = false
                        dinoStatesStore.changeState('Idle')
                    } else {
                        dinoLaura.value.image--
                    }
                } else {
                    dinoLaura.value.image++
                }
            } else {
                if (dinoStatesStore.state === 'Jump') {
                    dinoLaura.value.image = 3
                    dinoLaura.value.reverse = true
                } else {
                    if( dinoStatesStore.state !== 'Dead') {
                        dinoLaura.value.image = min
                    } 
                }
            }
        }
    }, 100)
})


</script>

<template>
    <img :class="customClass" :src="`src/assets/dino/${dinoStatesStore.state} (${dinoLaura.image}).png`" alt="Dino Laura" />
    
</template>


<style scoped>
img {
  max-width: 300px; /* Ajusta el tamaño máximo para que no se haga enorme */
  width: 100%;
  height: auto;
}
.homePage {
  max-width: 00px; /* Ajusta el tamaño máximo para que no se haga enorme */
  width: 100%;
  height: 100%;
  max-height: 200px; /* Limita la altura máxima */
  object-fit: contain; /* Mantiene la proporción de la imagen */
  margin: 0 auto; /* Centra la imagen horizontalmente */
  display: block; /* Asegura que el margin auto funcione */
  transition: transform 0.3s ease; /* Transición suave al escalar */
}
</style>