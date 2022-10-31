// function exerciseCallback() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Hola Mundo')
//         }, 4000);
//     })
// }

// exerciseCallback().then(response => {
//     console.log(response);
//     console.log('Fin!');
// });

// let funcion = (num1, num2, callback) => {
//     callback('Hola');
//     let response = num1 + num2;
//     callback(response);
// }

// funcion(2, 5, (response) => console.log(response));
// funcion(2, 5, function(response){console.log(response)});


let fn1 = () => {
    setTimeout(() => {
        console.log(1);
    }, 2000)
}
let fn2 = () => console.log(2);
let fn3 = () => console.log(3);

fn1();
fn2();
fn3();