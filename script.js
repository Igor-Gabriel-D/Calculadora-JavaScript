let expressaoNum = ""
let display = document.querySelector('#display');

function inputNum(n) {
	expressaoNum += n.toString();
	display.innerHTML = expressaoNum;
	
}

function inputOpe(o) {
	switch(o) {
		case 'som':
			expressaoNum += ' + ';
			display.innerHTML = expressaoNum;
			break 

		case 'sub':
			expressaoNum += ' - ';
			display.innerHTML = expressaoNum;
			break 

		case 'mult':
			expressaoNum += ' * ';
			display.innerHTML = expressaoNum;
			break 

		case 'div':
			expressaoNum += ' / ';
			display.innerHTML = expressaoNum;
			break 
	}
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

