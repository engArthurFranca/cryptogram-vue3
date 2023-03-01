<template>
  <div class="cryptogram-container">
    <h1>Cryptogram</h1>
    <WordComponent v-for="word in words" 
      :key="word.id"
      :dsc="word.dsc"
      :word="word.word"
      :cryptoDict="cryptoDict"
      :inputDict="inputDict"
      @keyPressed="updateInputDict"
    ></WordComponent>
    <div>
      <button type="button" class="btn btn-light btn-lg border" @click="buttonCheck"> Check </button>
      <button type="button" class="btn btn-danger btn-lg border" @click="buttonReset"> Reset </button>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'

import WordComponent from './components/WordComponent.vue';
import wordJson from './words_en.json';
let words = wordJson.words.sort(() => Math.random() - Math.random()).slice(0, 10);

export default {
  name: 'App',
  components: {
    WordComponent
  },
  data() {
    return {
      words: words
    }
  },
  methods: {
    buttonCheck() {
      //reset
      this.words = wordJson.words.sort(() => Math.random() - Math.random()).slice(0, 10);
    },
    buttonReset() {
      //reset
      this.words = wordJson.words.sort(() => Math.random() - Math.random()).slice(0, 10);
    },
    updateInputDict(key, letter) {
      this.inputDict[key] = letter;
    }
  },
  setup() {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
    icons = [
      "fas fa-laugh",
      "fas fa-heart",
      "fas fa-star",
      "fas fa-bolt",
      "fas fa-flag",
      "fas fa-bell",
      "fas fa-trophy",
      "fas fa-sun",
      "fas fa-bookmark",
      "fas fa-shopping-cart",
      "fas fa-user",
      "fas fa-circle",
      "fas fa-caret-down",
      "fas fa-caret-left",
      "fas fa-caret-right",
      "fas fa-arrow-up",
      "fas fa-arrow-down",
      "fas fa-chevron-up",
      "fas fa-chevron-down",
      "fas fa-chevron-left",
      "fas fa-chevron-right",
      "fas fa-robot",
      "fas fa-skull",
      "fas fa-tshirt",
      "fas fa-umbrella-beach",
      "fas fa-moon"
    ].sort(() => Math.random() -0.5),
    cryptoDict = Object.fromEntries(alphabet.map((letter, i) => [letter, icons[i]])),
    inputDict = Object.fromEntries(alphabet.map((letter) => [letter, '']));

    inputDict = reactive(inputDict);

    return { cryptoDict, inputDict }
  }
}
</script>

<style>
.cryptogram-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
.cryptogram-container > h1, button {
    margin: 25px 05px;
}
</style>
