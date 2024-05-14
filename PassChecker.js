
let enteredPassword = "1a2s3ed4rf5t6y";
let commonPasswords = ["123456", "password", "qwerty"];
let isSameCharacters = false;
let isaCommonPassword = false;



//passwords can not be blank
if (enteredPassword.trim() === "") {
    console.log("Error: Password cannnot be blank");
} else {
    //passwords cannot be less than 8 characters long
    if (enteredPassword.length < 8) {
        console.log("Error: Password must be at least 8 characters long");
    } else {

        //passwords cannot contain the same character twice in a row
        for (let i = 0; i < enteredPassword.length; i++) {
            if (enteredPassword[i] === enteredPassword.charAt(i + 1)) {
                isSameCharacters = true;
                break;

            }
        }

        //password cannot be a common password
        for (let i = 0; i < commonPasswords.length; i++) {

            if (enteredPassword === commonPasswords[i]) {
                isaCommonPassword = true;

                break;
            }
        }

        // results

        if (isaCommonPassword) {
            console.log("Error: Password cannot be a common password");
        } else if (isSameCharacters) {
            console.log("Error: Password cannot contain the same character twice in a row");
        } else {
            console.log("Password is valid");
        }
    }





}





