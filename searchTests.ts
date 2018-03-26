import {linearSearch, getRandomWord, binarySearch, getWords} from "./search";
import * as mocha from 'mocha'
import {assert} from 'chai'

describe.skip('linear search', function() {
    it('does a linear search', function () {
        const words = getWords();
        const randomWord = getRandomWord(words);
        const searchedWord = linearSearch(randomWord, words);
        assert(searchedWord === randomWord);
    });
    it('does a thousand searches', function(){
        for(let i=0; i< 1000; i++){
            let words = getWords();
            let randomWord = getRandomWord(words);
            let searchedWord = linearSearch(randomWord, words);
            assert(searchedWord === randomWord);
        }
    })
});

describe('binary search', function() {
    it('does a binary search', function () {
        const words = getWords();
        const randomWord = getRandomWord(words);
        const searchedWord = binarySearch(randomWord, words);
        assert(searchedWord === randomWord, 'word didnt match!');
    });
    it('does a thousand searches', function(){
        for(let i=0; i< 1000; i++){
            let words = getWords();
            let randomWord = getRandomWord(words);
            let searchedWord = binarySearch(randomWord, words);
            assert(searchedWord === randomWord, 'word didnt match');
        }
    })
});