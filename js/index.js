const a = parseFloat(prompt('Введіть значення а'));
const b = parseFloat(prompt('Введіть значення b'));
const c = parseFloat(prompt('Введіть значення c'));
const allNumbers = a + 'x^2 + ' + b + 'x + ' + c + ' = 0' + '<br>';

print(allNumbers);
const nameDiscr = 'D = b^2 - 4ac';

print(nameDiscr + '<br>');
print('a = ' + a);
print('b = ' + b);
print('c = ' + c + '<br>');

function print(arg) {
    document.write(arg + '<br>');
}

const discr = b ** 2 - (4 * a * c);
print('D = ' + discr + '<br>');

const answerXOne = (-1 * b + Math.sqrt(discr)) / (2 * a);
const answerXTwo = (-1 * b - Math.sqrt(discr)) / (2 * a);
const answerBoth = -b / (2 * a);

function countingX(discr) {
    if (discr < 0) {
        print('Немає вирішення')
    }
    else if (discr > 0) {
        print('x1 = ' + answerXOne + ' x2 = ' + answerXTwo)
    }
    else {
        print('x1,2 = ' + answerBoth);
    }
    return ' ';
}
document.write(countingX(discr));