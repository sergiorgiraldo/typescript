"use strict";
// Benefits of TypeScript
// challenges:
// - give the screen's innerHTML a string
// - change the two input values to numbers
exports.__esModule = true;
exports.screen = void 0;
var button = document.querySelector('.button');
var firstInput = document.querySelector('#first-input');
var secondInput = document.querySelector('#second-input');
exports.screen = document.querySelector('.screen');
function addNumbers(a, b) {
    exports.screen.innerHTML = (a + b).toString();
}
button.addEventListener('click', function () {
    return addNumbers(parseInt(firstInput.value), parseInt(secondInput.value));
});
