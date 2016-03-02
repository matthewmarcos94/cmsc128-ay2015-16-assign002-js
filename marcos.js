'use strict'
/*
    Created by: Joseph Matthew R. Marcos
    CMSC 128 Homework 2
    Class: AB-5L
*/

// We use ES6 because we are cool
/*
    function getHammingDistance(string, string):
    Given two strings string1 and string2 of same length (length must never be 0 or
    negative!), the Hamming Distance of those two strings are the number of inversions per
    character need to transform string1 to string2 or vise-versa. Simply put, the Hamming Distance
    of two strings is the number of characters that differ in ith position from position 1 to
    strlen(string1).
*/
const getHammingDistance = (string1, string2) => {

    let hammingDistance = 0;

    if(string1.length !== string2.length) {
        // Check if length of strings are equal
        return new Error('Error! Strings are not equal length!');
    }

    if(typeof string1 !== 'string' && typeof string2 !== 'string') {
        // Check if both parameters are strings
        return new Error('Parameters are not strings!');
    }

    if(string1.length === 0 || string2.length === 0) {
        // Check if one of the parameters have length 0
        return new Error('No empty strings allowed');
    }

    for(let i = 0 ; i < string1.length ; i++) {
        // Iterate through entire string length
        if(string1[i].toLowerCase() !== string2[i].toLowerCase()) {
            hammingDistance++;
        }
    }

    return Number(hammingDistance);

};


/*
    function countSubstrPattern(string, string):
    Given a string original and pattern, we will count the number of occurrence
    of pattern in original.
*/
const countSubstrPattern = (original, pattern) => {

    let substrCount = 0;

    if(typeof original != 'string' && typeof pattern != 'string') {
        return new Error('Error! A parameter is not a string');
    }

    if(original.length === 0) {
        return new Error('Error! Empty string as first parameter!');
    }

    if(pattern.length > original.length) {
        return 0;
    }

    for(let i = 0 ; i <= original.length - pattern.length ; i++) {

        // console.log("Substr: " + original.substring(i, i + pattern.length));
        if(original.substring(i, i + pattern.length) === pattern) {
            substrCount++;
        }
    }

    return Number(substrCount);
};
