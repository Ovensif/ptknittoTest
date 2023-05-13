function isPalindrome(str: string) {
  const cleanedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const reversedStr = cleanedStr.split("").reverse().join("");

    if(cleanedStr == reversedStr) {
        console.log(`${str} is Palindrome string`);
    }else{
        console.log(`${str} is not Palindrome string`);
    }
}

// Insert your string inside the function
isPalindrome('level')
