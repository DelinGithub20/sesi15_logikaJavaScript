// function reverse string

function reverseString(text) {
  let splitString = text.split(" ");
  let reverseString = splitString.reverse();
  let joinString = reverseString.join(" ");

  return joinString;
}

console.log(reverseString("hello word and coders"));
console.log(reverseString("John Doe"));
console.log(reverseString("i am a bookworm"));
console.log(reverseString("coding is my hobby"));
