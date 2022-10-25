const path = require('path')
const fs = require('fs')

let data = fs.readFileSync(path.join(__dirname, '/input.txt'));
let lines = 0, spaces = 0, caracter = 0;

data.forEach(c => {
  if(c === 10){
    lines++
  } else if(c === 32){
    spaces++
  } else {
    caracter++
  }
})

console.log("Caracteres: ", data.length)
console.log("Caracteres: ", caracter)
console.log("Lineas: ", lines)
console.log("Espacios: ", spaces)