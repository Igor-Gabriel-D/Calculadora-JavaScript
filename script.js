let num = 0;
let display = document.querySelector('#display');

function calc(n) {
	num = num*10 + n;
	display.innerHTML = num;
	console.log(num)
}

function c(n) {
	num = n;
	display.innerHTML = "";
}

