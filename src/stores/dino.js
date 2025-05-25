import { defineStore } from "pinia";

const states = [
  {
    name: "Idle",
    max: 10,
    min: 1,
  },
  {
    name: "Jump",
    max: 12,
    min: 1,
  },
  {
    name: "Run",
    max: 8,
    min: 1,
  },
  {
    name: "Walk",
    max: 10,
    min: 1,
  },
  {
    name: "Dead",
    max: 8,
    min: 1,
  },
];

export const useDinoStatesStore = defineStore("dinoStates", {
  state: () => {
    return {
      state: "Idle",
      changingState: false,
    };
  },
  getters: {
    getStates: (state) => {
      return states;
    },
    getCurrentState: (state) => {
      return states.find((s) => s.name === state.state);
    },
  },
  actions: {
    changeState(newState) {
      if (states.some((s) => s.name === newState)) {
        this.state = newState;
        this.changingState = true;
        this.image = states.find((s) => s.name === newState).min;
      } else {
        console.warn(`State "${newState}" does not exist.`);
      }
    },
    resetChangingState() {
      this.changingState = false;
    },
  },
});
