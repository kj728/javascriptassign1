let myString = "coding is exciting";

let myStringArray  =myString.split(" ");
let output =" "
for (let i=0; i<myStringArray.length; i++){

    let firstLetter =   myStringArray[i].charAt(0);
    let restOfString = myStringArray[i].slice(1);
    let newString = firstLetter.toUpperCase() + restOfString;
    output += newString+ " ";
}

console.log(output);