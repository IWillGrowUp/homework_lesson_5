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

const totalResult = result(a, b, c);
print('D = ' + discriminant(a, b, c));
print(totalResult);

function discriminant(a, b, c) {
    return (b ** 2 - 4 * a * c);
}

function result (a, b, c) {
    const discr = discriminant(a, b, c);
    
    if (discr < 0) {
        return ('Немає вирішення') ;
    } else if (discr > 0) {
        return ('x1 = ' + (-b + Math.sqrt(discr)) / (2 * a) + ' x2 = ' + (-b - Math.sqrt(discr)) / (2 * a) );
        } else {
        return ('x1,2 = ' + (-b / (2 * a)));
        }
}

