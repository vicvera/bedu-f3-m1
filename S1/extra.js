// FizzBuzz
// function fizzBuzz() {
//     for(let i = 0; i <= 100; i++) {
//         if(i%3 === 0 && i%5 === 0) {
//             console.log('FizzBuzz');
//         } else if(i%3 === 0) {
//             console.log('Fizz')
//         } else if(i%5 === 0) {
//             console.log('Buzz');
//         }
//     }
// }

// fizzBuzz();



let suma = 0;
for(let item of process.argv) {
    if(Number.isInteger(+item)) {
        suma += +item;
    }
}

console.log(suma);


//Entrada: node S1/extra.js 50 50 50
//Salida: 150