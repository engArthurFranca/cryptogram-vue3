# cryptogram-vue3
This code is a Cryptogram game built with Vue.js 3. It generates a random word from a list of words and creates a cryptogram from it by replacing each letter with a symbol from a dictionary. The player's objective is to decode the cryptogram by typing in the correct letters in the corresponding input fields.

When a letter is typed into an input field, the corresponding symbol is replaced with the letter in the cryptogram. If the player has filled in all the input fields with the correct letters, they can check their answer by clicking the "Check" button. If all letters are correct, you will know.

The code uses Vue.js 3's reactive properties to keep track of the game state, including the word, the input fields, and the success/failure status. It also makes use of Vue.js 3's component architecture to separate concerns and make the code more modular.

The code is also optimized for performance by using key-based iteration in the input fields, memoization to avoid unnecessary re-renders, and computed properties to avoid repeating calculations.

Overall, this code demonstrates how to build a fun and interactive game using Vue.js 3's powerful features and best practices.

