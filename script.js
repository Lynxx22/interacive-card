// inputs

var nameInput = document.getElementById('name-input');
var numberInput = document.getElementById('number-input');
var monthInput = document.getElementById('month-input');
var yearInput = document.getElementById('year-input');
var cvcInput = document.getElementById('cvc-input');



// outputs

 var nameOutput = document.getElementById('name');
 var numberOutput = document.getElementById('card-number');
 var monthOutput = document.getElementById('MM');
 var yearOutput = document.getElementById('YY');
 var cvcOutput = document.getElementById('card-cvc');

 function input(inp){
    
 }


 numberInput.addEventListener('input', function(){
    numberOutput.innerHTML = numberInput.value

 })