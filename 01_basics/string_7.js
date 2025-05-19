const address ="Kolkata, India"
console.log(address.toLowerCase());
console.log(address.toUpperCase());

const firstName = new String("Pikuu")
console.log(firstName);//[String:'Pikuu]
console.log(firstName.toString());//Pikuu
console.log(firstName.valueOf());

// trim
const sentence = "  Long Live Palestine  ";
console.log(sentence.trimEnd());
console.log(sentence);

// slice
const str = "Welcome pretty kitty"
console.log(str.slice(3));
console.log(str.slice(-5));
console.log(str.slice(3,14));
console.log(str.slice(-12,-5));

// split
const str2 = "The quick brown fox jumps over the lazy dog."
const chars = str2.split(" ")
console.log(chars[4]);

// substring
const str3 = "Lishi Sah"
console.log(str3.substring(6,9));
console.log(str3.substring(3));
