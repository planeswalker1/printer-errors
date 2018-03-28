// back-end logic:
function printErrors(string) {
  // your code
  // split string at every character
  let stringArray = string.split("");

  // var to show what characters are allowed
  let correctLetters = 'abcdefghijklm';

  // error counter var
  let errorCounter = 0;

  // loop through stringArray and check if its a valid character
  stringArray.forEach(function(letter) {
    if (correctLetters.indexOf(letter) == -1) {
      errorCounter++;
    }
  });
  // return error count and length of string
  return errorCounter + '/' + stringArray.length;
}

// front-end logic:
let string1 = "aaabbbbhaijjjm";
let string2 = "aaaxbbbbyyhwawiwjjjwwm";

let paragraph1 = document.querySelector('.solution1');
let paragraph2 = document.querySelector('.solution2')
let button = document.querySelector('.button');

// event listener for the button to log print Errors and show solution
button.addEventListener('click', function() {
  console.log(printErrors(string1));
  console.log(printErrors(string2));

  paragraph1.textContent = printErrors(string1);
  paragraph2.textContent = printErrors(string2);
});
