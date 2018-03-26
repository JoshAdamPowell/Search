"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var search_1 = require("./search");
var chai_1 = require("chai");
describe.skip('linear search', function () {
    it('does a linear search', function () {
        var words = search_1.getWords();
        var randomWord = search_1.getRandomWord(words);
        var searchedWord = search_1.linearSearch(randomWord, words);
        chai_1.assert(searchedWord === randomWord);
    });
    it('does a thousand searches', function () {
        for (var i = 0; i < 1000; i++) {
            var words = search_1.getWords();
            var randomWord = search_1.getRandomWord(words);
            var searchedWord = search_1.linearSearch(randomWord, words);
            chai_1.assert(searchedWord === randomWord);
        }
    });
});
describe('binary search', function () {
    it('does a binary search', function () {
        var words = search_1.getWords();
        var randomWord = search_1.getRandomWord(words);
        var searchedWord = search_1.binarySearch(randomWord, words);
        chai_1.assert(searchedWord === randomWord, 'word didnt match!');
    });
    it('does a thousand searches', function () {
        for (var i = 0; i < 1000; i++) {
            var words = search_1.getWords();
            var randomWord = search_1.getRandomWord(words);
            var searchedWord = search_1.binarySearch(randomWord, words);
            chai_1.assert(searchedWord === randomWord, 'word didnt match');
        }
    });
});
