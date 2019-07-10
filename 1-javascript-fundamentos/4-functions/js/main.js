/*
  soma
  subtrai
  multiplica
  divide
  full-name // receba firstName, lastName
*/

function minhaFuncao(name) {
    /* return `Olá, ${name}` */
    return 'Olá ' + name
}

// const minhaFuncao = function (name) {
//   return `Olá, ${name}`
// }

// const minhaFuncao = name => `Olá, ${name}`

console.log(minhaFuncao('Rivael'))

function soma(a, b) {
    c = a + b
    return c
}

const subtrai = function(x, y) {
    return x - y
}

const multiplica = (a, b) => a * b

const divide = (a, b) => a / b

function fullName(lastName, firstName) {
    return `${firstName} ${lastName}` //crase ao invés de aspas simples
}

console.log(soma(5, 8))
console.log(subtrai(20, 15))
console.log(multiplica(8, 3))
console.log(divide(5, 0))

console.log(fullName('Rodrigues', 'Rivael'))