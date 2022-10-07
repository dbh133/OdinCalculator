const btns = document.querySelectorAll('button');
const display = document.querySelector('.calcDisplay');
let num1 = null;
let num2 = null;
let operator = null;
let prevOp = null;
let equalsActive = false;
let decimalActive = false;

function resetDisplay() {
	display.textContent = '0';
	num1 = null;
	num2 = null;
	operator = null;
	prevOp = null;
	equalsActive = false;
	decimalActive = false;
}

function storeOperator(op) {
	if (operator === null && prevOp === null) {
		operator = op;
	} else {
		prevOp = operator;
		operator = op;
	}
	storeNums(parseInt(display.textContent));
	if (num1 !== parseInt(display.textContent)) {
		if (num1 !== null && num2 !== null && prevOp === null) {
			display.textContent = operation(num1, num2, operator);
		} else if (num1 !== null && num2 !== null && prevOp !== null) {
			display.textContent = operation(num1, num2, prevOp);
		}
	}
	if (operator !== null && num2 !== null) {
		num1 = parseInt(display.textContent);
		num2 = null;
	}
	decimalActive = false;
}

function storeNums(x) {
	if (num1 === null) {
		num1 = x;
	} else {
		if (num2 === null) {
			num2 = x;
		}
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
			return "You can't break me!!!";
		} else {
			return (x / y).toFixed(2);
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
			if (btn.className === 'num') {
				updateDisplay(btn.textContent);
			}

			if (btn.id === 'delete') {
				resetDisplay();
			}

			if (btn.className === 'decimal' && decimalActive === false) {
				updateDisplay(btn.textContent);
				decimalActive = true;
			}

			if (btn.className === 'operator' && btn.id !== 'delete') {
				if (btn.id !== 'equals') {
					if (equalsActive === true) {
						equalsActive = false;
						storeOperator(btn.id);
					} else {
						storeOperator(btn.id);
					}
				} else {
					if (num1 !== null) {
						if (num2 === null) {
							storeNums(parseInt(display.textContent));
						}
						if (equalsActive === false) {
							display.textContent = operation(num1, num2, operator);
							num1 = parseInt(display.textContent);
							equalsActive = true;
						} else {
							num1 = parseInt(display.textContent);
							display.textContent = operation(num1, num2, operator);
						}
					}
				}
			}
		});
	});
}

inputNumbers();
