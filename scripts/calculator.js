const btns = document.querySelectorAll('button');
const display = document.querySelector('.calcDisplay');
let num1 = 0;
let num2 = 0;

function resetDisplay() {
	display.textContent = '0';
}

function add(x, y) {
	return x + y;
}

function sub(x, y) {
	return x - y;
}

function mult(x, y) {
	return x * y;
}

function divide(x, y) {
	return x / y;
}

function inputNumbers() {
	let operator = '';
	let previousOperator = '';

	btns.forEach((btn) => {
		btn.addEventListener('click', () => {
			if (btn.className !== 'operator') {
				if (display.textContent === '0') {
					display.textContent = btn.textContent;
				} else {
					display.textContent += btn.textContent;
				}
			}

			if (btn.id === 'delete') {
				resetDisplay();
				num1 = 0;
				num2 = 0;
			}

			if (btn.id === 'add') {
				operator = btn.id;
				num1 += parseInt(display.textContent);
				resetDisplay();
			}

			if (btn.id === 'sub') {
				operator = btn.id;
				num1 += parseInt(display.textContent);
				resetDisplay();
			}

			if (btn.id === 'mult') {
				operator = btn.id;
				num1 += parseInt(display.textContent);
				resetDisplay();
			}

			if (btn.id === 'divide') {
				operator = btn.id;
				num1 += parseInt(display.textContent);
				resetDisplay();
			}

			if (btn.id === 'equals') {
				num2 = parseInt(display.textContent);

				if (operator === 'add') {
					display.textContent = add(num1, num2);
					num1 = 0;
					num2 = 0;
				} else if (operator === 'sub') {
					display.textContent = sub(num1, num2);
					num1 = 0;
					num2 = 0;
				} else if (operator === 'mult') {
					display.textContent = mult(num1, num2);
					num1 = 0;
					num2 = 0;
				} else {
					display.textContent = divide(num1, num2);
					num1 = 0;
					num2 = 0;
				}
			}
		});
	});
}

inputNumbers();
