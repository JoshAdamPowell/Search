"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function getWords() {
    var dictionary = fs.readFileSync('./words.txt', 'latin1').toLowerCase();
    return dictionary.split('\n');
}
exports.getWords = getWords;
function linearSearch(wordToFind, words) {
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word_1 = words_1[_i];
        if (wordToFind === word_1) {
            return wordToFind;
        }
    }
}
exports.linearSearch = linearSearch;
function getRandomWord(words) {
    var total = words.length;
    var randomNumber = Math.floor(Math.random() * total);
    return words[randomNumber];
}
exports.getRandomWord = getRandomWord;
function binarySearch(wordToFind, words) {
    var found = false;
    while (!found) {
        var index = Math.floor(words.length / 2);
        var word_2 = words[index];
        if (word_2 === wordToFind) {
            return word_2;
        }
        else if (word_2 > wordToFind) {
            words.splice(index);
        }
        else {
            words.splice(0, index);
        }
        if (words.length === 1) {
            return words;
        }
    }
}
exports.binarySearch = binarySearch;
var words = getWords();
var word = getRandomWord(words);
console.log(word);
var res = binarySearch(word, words);
console.log(res);
