let suma = 0;
for(let item of process.argv) {
    if(Number.isInteger(+item)) {
        suma += +item;
    }
}

console.log(suma);