let expressaoNum = ""
let display = document.querySelector('#display');

function inputNum(n) {
	expressaoNum += n.toString();
	display.innerHTML = expressaoNum;
	
}

function inputOpe(o) {
	expressaoNum += o;
	display.innerHTML = expressaoNum;

}

function resultado() {
	expressaoNum = eval(expressaoNum);
	display.innerHTML = expressaoNum;
	expressaoNum = ""

}



function c(n) {
	expressaoNum = "";
	display.innerHTML = "";
}

