const fs = require('fs');

let readFile = (path) => {
    return new Promise((resolve, reject) => {
      fs.readFile(path, 'utf-8', (error, data) => {
        if(error) return reject(error)
        return resolve(data)
      })
    })
  }
  
Promise.all([readFile("./archivo1.txt"), readFile("./archivo2.txt"), readFile("./archivo3.txt")])
    .then(data => console.log(data))
    .catch(error => console.log(error))