let f_name= "James";
let l_name= "Karomo";
let end_str = "@2024";

function generatePassword(firstName, lastName,) {
    let password =firstName.slice(0,3)+ lastName.slice(0,3) +end_str;
    return password

}
console.log(generatePassword(f_name,l_name));


