Stop gninnipS My sdroW!

Requisites:
Write a function that spins words that have five or more letters.

How should we go about it:
Turn the string into an array perhaps?

- Convert each word into own entry in array
- check the length of word
- if .length is <, then print word as is
- if .length is =>, print in reverse order

How do we check length?
We use the .length method

How do we separate the words in the string?
We use .split(“ “) method

How do we print in reverse order?
For loop to iterate in reverse starting with the last index of the string and ending in string[0]?

How do we add space after each word?
Use an if statement to check if it’s the last entry in the array, if not add a space.
