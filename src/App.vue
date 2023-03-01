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
      ref="WordComponent"
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
import wordJson from './assets/words.json';

import createCryptoDict from './utils/cryptoDict.js';


//choose 10 random elements from the wordJson
const words = wordJson.words_en.sort(() => Math.random() - Math.random()).slice(0, 10);

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
      //verify which answer is right or wrong in components
      this.$refs.WordComponent.forEach((component) => {
        component.checkInputWord();
      });
    },
    buttonReset() {
      //reset
      this.words = wordJson.words_en.sort(() => Math.random() - Math.random()).slice(0, 10);
      this.$nextTick(() => {
        this.$refs.WordComponent.forEach(component => {
          component.$forceUpdate();
          component.isChecked = false;
        });
      });
    },
    //event to update inputDict when changed inside WordComponent
    updateInputDict(key, new_letter) {
      this.inputDict[key] = new_letter;
    }
  },
  setup() {
    //create a Dictionary with the alphabet as keys and empty string as values
    //making it reactive to be listened by child sibilings when changed
    const inputDict = reactive(Object.fromEntries([..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((letter) => [letter, ''])));
    const cryptoDict = createCryptoDict();

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
