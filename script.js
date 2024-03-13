function spinWords(string) {
  // Split the string into an array of strings
  let stringArray = string.split(" ");

  // Create a new variable to store the new string
  let newString = "";

  // Iterate through the array of strings
  for (let i = 0; i < stringArray.length; i++) {
    // If the length of the string is greater than or equal to 5
    if (stringArray[i].length >= 5) {
      // Iterate through the string in reverse
      for (let j = stringArray[i].length - 1; j >= 0; j--) {
        // Add the character to the new string
        newString += stringArray[i][j];

        // If the character is the first character and the string is not the last string add a space after the word
        if (j === 0 && i !== stringArray.length - 1) {
          newString += " ";
        }
      }
    } else {
      // If the string is less than 5 characters add the string to the new string
      newString += stringArray[i];

      // If the string is not the last string add a space after the word
      if (i !== stringArray.length - 1) {
        newString += " ";
      }
    }
  }
  // Return the new string
  return newString;
}
