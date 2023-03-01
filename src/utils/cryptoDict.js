//Create a Dictionary with the alphabet as keys and random icons from the icons as values

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const icons = [
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
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const randomIcons = shuffleArray(icons);

const createCryptoDict = () => {
    const cryptoDict = {};
    alphabet.forEach((letter, i) => {
        cryptoDict[letter] = randomIcons[i];
    });
    return cryptoDict;
};

export default createCryptoDict;