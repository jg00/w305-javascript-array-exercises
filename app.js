
// 1 Create a Palindrome app in Javascript which will print whether a string is a palindrome or not

function isPalindrome (word) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] != word[(word.length-1)-i])
            return false
    }
    return true
}
console.log("Is a palindrome? " + isPalindrome("bananab"))


// 2 Create an app which removes duplicates from an array 
// Example: ["John","Mary", "Alex", "Steve", "Mary", "John"] 
// Result should be: ["John","Mary","Alex","Steve"] 

words = ["John","Mary", "Alex", "Steve", "Mary", "John"] 

function removeArrayDuplicates(array) {
    uniqueWords = []

    for (let i = 0; i<words.length; i++) {
        if (uniqueWords.indexOf(words[i]) == -1) {
            uniqueWords.push(words[i])
            continue
        }
    }
    return uniqueWords
}
console.log("Unique List: " + removeArrayDuplicates(words))


// 3 Create an app whichs returns true/false depending on if the item is in the array 

arrayValues = ["John","Mary", "Alex", "Steve", "Mary", "John"] 

function checkValueInArray(array,value) {
    uniqueWords = []

    for (let i = 0; i<array.length; i++) {
        if (array.indexOf(value) != -1) {
            return true
        }
    }
    return false
}
console.log("Item exists in array? " + checkValueInArray(arrayValues,"max"))


// 4 Create an app which finds the largest number in an array 

function largestNumber(array) {
    currentMax = array[0]
    for (let i = 0; i < array.length; i++) {
        if (currentMax < array[i+1]) {
            currentMax = array[i+1]
        }
    }
    return currentMax
}

numbers = [2,1,5,8,9,22,1,-5,29,0,-3]
console.log("Largest number in array? " + largestNumber(numbers))


// 5 Create an app which finds the smallest number in an array

function smallestNumber(array) {
    currentMin = array[0]
    for (let i = 0; i < array.length; i++) {
        if (currentMin > array[i+1]) {
            currentMin = array[i+1]
        }
    }
    return currentMin
}

numbers2 = [2,1,5,8,9,22,1,-5,29,0,-3]
console.log("Smallest number in array? " + smallestNumber(numbers2))


// 6 Create FizzBuzz app 
function fizzBuzz(numberValue) {
    result = ""
    if (numberValue % 3 == 0 && numberValue % 5 == 0)
        result = "FizzBuzz"
    else if (numberValue % 3 == 0)
        result = "Fizz"
    else if (numberValue % 5 == 0)
        result = "Buzz"
    else
        result = "none"

    return result
}

numberValue = 15
console.log(`FizzBuzz of ${numberValue} is ${fizzBuzz(15)}`)


