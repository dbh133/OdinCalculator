const btns = document.querySelectorAll('button');
const display = document.querySelector('.calcDisplay');
let num1 = null;
let num2 = null;
let total = 0;
let operator = null;
let prevOp = null;
let equalsPressed = false;

function resetDisplay() {
	display.textContent = '0';
	num1 = null;
	num2 = null;
	operator = null;
}

function storeOperator(op) {
	if (operator === null && prevOp === null) {
		operator = op;
	} else if(operator !== null && ) {
		num2 = parseInt(display.textContent);
		display.textContent = operation(num1, num2, operator);
		operator = op;
		num1 = parseInt(display.textContent);
		num2 = null;
	}
}
function storeNums(x) {
	if (num1 === null) {
		num1 = x;
	} else if (num1 !== null) {
		num2 = x;
	} else if (num1 !== null && num2 !== null) {
		display.textContent = operation(num1, num2, operator);
	}
}

function operation(x, y, op) {
	if (op === 'add') {
		return x + y;
	} else if (op === 'sub') {
		return x - y;
	} else if (op === 'mult') {
		return x * y;
	} else if (op === 'divide') {
		if (y === 0) {
			return "Can't Divide By Zero!";
		} else {
			return Math.fround(x / y);
		}
	}
}

function updateDisplay(displayValue) {
	if (num1 === null) {
		if (display.textContent === '0') {
			display.textContent = displayValue;
		} else {
			display.textContent += displayValue;
		}
	} else {
		if (parseInt(display.textContent) === num1) {
			display.textContent = displayValue;
		} else {
			display.textContent += displayValue;
		}
	}
}

function inputNumbers() {
	btns.forEach((btn) => {
		btn.addEventListener('click', () => {
			if (btn.className !== 'operator') {
				updateDisplay(btn.textContent);
			}
			if (btn.id === 'delete') {
				resetDisplay();
			}

			if (
				btn.className === 'operator' &&
				btn.id !== 'equals' &&
				btn.id !== 'delete'
			) {
				storeOperator(btn.id);
				storeNums(parseInt(display.textContent));
			}


		});
	});
}

inputNumbers();
