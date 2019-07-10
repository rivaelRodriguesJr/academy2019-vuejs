const a = 10
const b = 5
const c = '5'

/*
  Operadores de comparação
  - igual a
  - identico a 
  - diferente
  - maior que
  - maior ou igual a
  - menor que
  - menor ou igual a
*/

console.log('igual a', a == b)
console.log('identico a', a === c)
console.log('diferente', a != b)
console.log('realmente é diferente?', b !== c)
console.log('maior', a > b)
console.log('maior ou igual', a >= b)
console.log('menor', a < b)
console.log('menor ou igual', a <= b)

if (4 > 2) {
    console.log('é')
} else {
    console.log('não é')
}

const maior = (4 > 2) ? 'é' : 'não é'

console.log(maior)

/*
 Operadores Lógicos
 - e       => &&
 - ou      => ||
 - negação => !
*/

console.log('maior ->', a > b && b == c) // e
console.log('maior ->', a > b || b == c) // ou 
console.log('maior ->', !(a > b) && b == c) // negação

/*
 - If
 - ternário
*/