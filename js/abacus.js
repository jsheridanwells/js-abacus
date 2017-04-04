//create a variable to hold output value
var number = 0;

//select output span
var output = document.getElementById('output');

//select reset button
var reset = document.getElementById('button');

//create an array with all addends
var add = document.getElementById('plus').children;

//create an array with all subtrahends
var sub = document.getElementById('minus').children;

//create an array with positive values
var pos = [1000, 100, 10, 1];

//create an array with negative values
var neg = [-1000, -100, -10, -1];

//create a function to output values
function increment(x) {
	number += x;
	output.innerHTML = number;
}

//create a function to reset the number
function zero() {
	output.innerHTML = 0;
	console.log('working');
}
//attach click event to all elements
  //onclick get the index of the element clicked on
  //put that index from value array as argument for output function

for (var i = 0; i < add.length; i++) {
	(function(index){
        add[i].onclick = function(){
              increment(pos[index])  ;
        }    
    })(i);
}

for (var i = 0; i < sub.length; i++) {
	(function(index){
        sub[i].onclick = function(){
              increment(neg[index])  ;
        }    
    })(i);
}

reset.addEventListener('click', zero);

