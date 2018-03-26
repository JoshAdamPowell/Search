import * as fs from 'fs';

export function getWords() {
    const dictionary = fs.readFileSync('./words.txt', 'latin1').toLowerCase();
    return dictionary.split('\n');
}

export function linearSearch(wordToFind, words){
    for (let word of words ){
        if(wordToFind === word){
            return wordToFind;
        }
    }
}

export function getRandomWord(words){
    let total = words.length;
    let randomNumber = Math.floor(Math.random()*total);
    return words[randomNumber];
}

export function binarySearch(wordToFind, words){
    let found = false;

    while (!found){
    let index = Math.floor(words.length/2);
    let word = words[index];
    if (word === wordToFind){
        return word;
    } else if (word > wordToFind){
        words.splice(index);
    } else {
        words.splice(0, index);


    }
    if (words.length === 1){
        return words;
    }

    }
}

let words = getWords();
let word = getRandomWord(words);
console.log(word);
let res = binarySearch(word, words);
console.log(res);