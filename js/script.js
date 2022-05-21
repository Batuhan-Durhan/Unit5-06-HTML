/* Created by: Batuhan Durhan
   Created on: April 2022
   This file contains the JS functions for index.html*/

'use strict'

/**
 * Check service worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-UNIT-5-06-HTML/sw.js", {
    scope: "/ICS2O-UNIT-5-06-HTML/",
  })
}

/**
 * Input.
 */

/**JSDoc File
*/
function buttonClicked() {

  var number1 = parseInt(document.getElementById('number1').value)
  var number2 = parseInt(document.getElementById('number2').value)
  var counter = 0
  var answer = 0

  if (number1 > 0 && number2 > 0) {
    while (counter < number2) {
      answer = answer + number1
      counter = counter + 1
    }

  } else if (number1 > 0 && number2 < 0) {
    while (counter > number2) {
      answer = answer - integer1
      counter = counter - 1
    } 
  } else if (number1 < 0 && number2 > 0) {
      while (counter > number1) {
        answer = answer - number2
        counter = counter - 1
    }

  } else if (number2 < 0 && number1 < 0) {
      while (counter > number2) {
        answer = answer - number1
        counter = counter - 1
    }
  }
  document.getElementById("integer").innerHTML = "Integer is: " + answer
}