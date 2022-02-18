function passwordValidator(pass) {
 
    function isLength(stringPass) {
        return stringPass.length >= 6 && stringPass.length <= 10;
    }
    function isOnlyLettersAndDigits(stringPass) {
        for (let currCharIndex of stringPass) {
            let currChar = currCharIndex.charCodeAt(0);
            if (
                !(currChar >= 65 && currChar <= 90) &&
                !(currChar >= 97 && currChar <= 122) &&
                !(currChar >= 48 && currChar <= 57)) {
                return false;
            }     
        }
        return true;
    }
    function isHaveTwoDigits(stringPass){
        let count = 0;
        for (let charIndex of stringPass){
            let currChar = charIndex.charCodeAt(0);
            if(currChar >=48 && currChar <= 57){
                count ++
            }
        }
        return count >= 2? true : false;
    }
    let isLengthValid = isLength(pass)
    let isOnlyLettersAndDigits1 = isOnlyLettersAndDigits(pass)
    let isHaveTwoDigits1 = isHaveTwoDigits(pass)
    if(isLengthValid && isOnlyLettersAndDigits1 && isHaveTwoDigits1){
        console.log('Password is valid');
    } 
    if(!isLengthValid){
        console.log('Password must be between 6 and 10 characters')
    } 
    if (!isOnlyLettersAndDigits1){
        console.log('Password must consist only of letters and digits')
    } 
    if (!isHaveTwoDigits1){
        console.log('Password must have at least 2 digits')
    }
}
