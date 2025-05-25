<script setup>
import { ref } from 'vue'
import {onMounted} from 'vue'
import { useMarioStatesStore } from '../stores/mario'

const dinoStatesStore = useMarioStatesStore()
const states = dinoStatesStore.getStates
const mario = ref({
    image: 1,
    reverse: false
})


onMounted(() => {
    setInterval(() => {
        if (dinoStatesStore.changingState) {
            mario.value.image = 1
            mario.value.reverse = false
            dinoStatesStore.resetChangingState()
        }
        const currentState = states.find(state => state.name === dinoStatesStore.state)
        if (currentState) {
            const max = currentState.max
            const min = currentState.min
            if (mario.value.image < max) {
                if (mario.value.reverse) {
                    if( mario.value.image === 1) {
                        mario.value.reverse = false
                        dinoStatesStore.changeState('Idle')
                    } else {
                        mario.value.image--
                    }
                } else {
                    mario.value.image++
                }
            } else {
                if (dinoStatesStore.state === 'Jump') {
                    mario.value.image = 3
                    mario.value.reverse = true
                } else {
                    if( dinoStatesStore.state !== 'Dead') {
                        mario.value.image = min
                    } 
                }
            }
        }
    }, 100)
})


</script>

<template>
    <img class="dino-image" :src="`src/assets/mario/${dinoStatesStore.state} (${mario.image}).png`" alt="Dino Laura" />
</template>


<style scoped>
.dino-image {
  max-width: 300px; /* Ajusta el tamaño máximo para que no se haga enorme */
  width: 100%;
  height: auto;
}
</style>