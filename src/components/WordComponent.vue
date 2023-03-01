<template>
  <div>
    <div class="dsc">
      {{ dsc }}
    </div>
    <div class="input-container" v-for="(letter, index) in input_word" :key="index">
      <span class="input-group-addon"><i :class="cryptoDict[ [...word][index] ]"></i></span>
      <input 
        v-model="input_word[index]"
        :tabIndex="index + 1"
        @keydown="changeLetter($event.key.toUpperCase(), index); $event.preventDefault()"
        ref="inputField"
        type="text" 
        maxlength="1" 
        :class="inputClass" 
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
    cryptoDict: Object,
    inputDict: Object
  },
  data() {
    return {
      input_word: Array(this.word.length).fill(""),
      isChecked: false
    }
  },
  methods: {
    changeLetter(key, index) {
      //validate pressed key to be a letter
      let new_key = /[A-Z]/.test(key) ? key : '';

      this.input_word[index] = new_key;
      //Emit event to change inputDict in parent app
      this.$emit('keyPressed', this.word[index], new_key);
      //update in case there is same letters in the word
      this.updateInputs();

      // Find the index of the next empty input field
      let nextIndex = this.input_word.findIndex((input) => input === ''),
      // Find the next empty input field element
      nextField = this.$refs.inputField[nextIndex];
      if (nextField) {
        nextField.focus();
        nextField.value = '';
      }
    },
    updateInputs() {
      //Check for inputs changes
      this.input_word = this.word
        .split('')
        .map(letter => this.inputDict[letter]);
    },
    //Event to check if the word is right or not
    checkInputWord() {
      this.isChecked = true;
    }
  },
  computed: {
    inputClass() {
      if (this.isChecked) {
        if (this.input_word.join('') == this.word) {
          return 'square-input form-control bg-success';
        } else {
          return 'square-input form-control bg-danger';
        }
      } else {
        return 'square-input form-control';
      }
    }
  },
  watch: {
    inputDict: {
      handler: 'updateInputs',
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
  text-transform: uppercase;
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
