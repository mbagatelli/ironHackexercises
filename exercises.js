const str1 = "Web Dev is amazing!";

console.log(str1.includes("development"))
console.log(str1.includes("Development"))
console.log(str1.includes("web"))
console.log(str1.includes("ing"))
console.log(str1.includes("Web"))
//

const str2 = "Hey! "
const str3 = "How are you?"

console.log(str2 + str3)
//

const str4 = 10
const str5 = 99
console.log(str4**3 + str5)
//

let sentence = "This is one meaningless sentence which needs to be cut in half.";
sentenceLength = sentence.length
let newSentence = sentenceLength/2
console.log(sentence.slice(0,newSentence+1))

//a
let city = "lisbon"
console.log(city.toUpperCase())

//b
let upperCaseFirstLetter = city.slice(0,1).toUpperCase();
let finalCity = upperCaseFirstLetter + city.slice(1)
console.log(finalCity)

//c
