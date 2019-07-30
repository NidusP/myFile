const fs = require('fs')
const calc = require('../models/calc.js')

module.exports = function (n) {
    fs.readFile(`./data/${n}.txt`, (err, data)=>{
        if(err){
            calc(2000)
            return [1, 2000]
        }else {
            console.log(data)
            return [1, 2000]
        }
    })
}
