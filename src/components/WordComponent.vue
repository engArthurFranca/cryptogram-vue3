<template>
  <div>
    <div class="dsc">
      {{ dsc }}
    </div>
    <div class="input-container" v-for="(letter, index) in input_word" :key="index">
      <span class="input-group-addon"><i :class="cryptoDict[ [...word][index] ]"></i></span>
      <input 
        v-model="input_word[index]"
        :placeholder="letter"
        @keydown="changeLetter($event.key.toUpperCase(), index)"
        type="text" 
        maxlength="1" 
        class="square-input form-control" 
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'WordComponent',
  props: {
    dsc: String,
    word: String,
    cryptoDict: {String},
    inputDict: {type: Object}
  },
  data() {
    return {
      input_word: Array(this.word.length).fill("")
    }
  },
  methods: {
    changeLetter(key, index) {
      if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(key)) {
        this.input_word[index] = key;
        this.$emit('keyPressed', this.word[index], key);
        this.updateInputs();
      } else {
        this.input_word[index] = '';
      }
    },
    updateInputs() {
      //Check for inputs changes
      for (let i=0; i< this.input_word.length; i++) {
        this.input_word[i] = this.inputDict[ [...this.word][i] ];
      }
    }
  },
  watch: {
    inputDict: {
      handler() {
        this.updateInputs();
      },
      deep: true,
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dsc {
  width: 400px;
  height: 50px;
}

div {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.bi {
  display: inline-block;
  stroke-width: 1;
  stroke: currentColor;
  fill: currentColor;
}

input {
  text-align: center;
  width: 50px;
  height: 50px;
  margin: 0.5px;
  text-transform:uppercase;
}
.input-container {
  position: relative;
}

.input-container i {
  position: absolute;
  top: 23%;
  left: 28%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  color: #999;
  background-color: transparent;
}
</style>
