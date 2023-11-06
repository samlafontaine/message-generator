const data1 = ["a box of chocolates", "a garden in the spring", "lemonade", "winter in Montreal"];
const data2 = ["have", "smell", "taste", "feel"];
const data3 = ["gone", "new", "fresh", "walked away"];

const randomWord = (arr1, arr2, arr3) => {
    let wordIndex1 = Math.floor(Math.random() * (arr1.length));
    let wordIndex2 = Math.floor(Math.random() * (arr2.length));
    let wordIndex3 = Math.floor(Math.random() * (arr3.length));
    return `Life is like ${arr1[wordIndex1]}, you never know what you ${arr2[wordIndex2]} until it's ${arr3[wordIndex3]}`;
} 

console.log(randomWord(data1, data2, data3));



