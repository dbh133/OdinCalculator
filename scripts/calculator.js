const btns = document.querySelectorAll('button');
const display = document.querySelector('.calcDisplay');
let num1 = null;
let num2 = null;
let operator = null;
let prevOp = null;
let equalsActive = false;

function resetDisplay() {
	display.textContent = '0';
	num1 = null;
	num2 = null;
	operator = null;
	prevOp = null;
	equalsActive = false;
}

function storeOperator(op) {
	if (operator === null && prevOp === null) {
		operator = op;
	} else {
		if (num2 === null) {
			storeNums(parseInt(display.textContent));
		}
		if (op !== 'equals' && equalsActive !== true) {
			prevOp = operator;
			operator = op;
		}
		if (prevOp !== operator) {
			display.textContent = operation(num1, num2, operator);
			num1 = parseInt(display.textContent);
		} else {
			display.textContent = operation(num1, num2, prevOp);
			num1 = parseInt(display.textContent);
		}
	}
}

function storeNums(x) {
	if (num1 === null) {
		num1 = x;
	} else {
		num2 = x;
	}
	if (num1 !== null && num2 !== null && prevOp !== null) {
		display.textContent = operation(num1, num2, prevOp);
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

			if (btn.className === 'operator' && btn.id !== 'delete') {
				if (btn.id !== 'equals') {
					storeOperator(btn.id);
					if (num2 === null) {
						storeNums(parseInt(display.textContent));
					}
				} else {
					if ((num1 !== null) & (num2 === null)) {
						storeNums(parseInt(display.textContent));
						display.textContent = operation(num1, num2, operator);
					} else {
						num1 = parseInt(display.textContent);
						display.textContent = operation(num1, num2, operator);
					}
				}
			}
		});
	});
}

inputNumbers();
