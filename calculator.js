const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('button');
let screenValue = '';
let clearScreen = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            screenValue = '0';
            clearScreen = false;
        } else if (value === '=') {
            try {
                screenValue = eval(screenValue).toString();
                clearScreen = true;
            } catch {
                screenValue = 'Error';
                clearScreen = true;
            }
        } else if (value === '.') {
            if (!screenValue.includes('.')) {
                screenValue += '.';
            }
        } else {
            if (clearScreen) {
                screenValue = value === '.' ? '0.' : value;
                clearScreen = false;
            } else {
                if (screenValue === '0') {
                    screenValue = value;
                } else {
                    screenValue += value;
                }
            }
        }

        screen.textContent = screenValue;
    });
});
