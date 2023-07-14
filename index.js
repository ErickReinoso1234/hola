// const os = require ('os');


// console.log(os.platform());
// console.log(os.release());
// console.log('fre men: ', os.freemem(), 'bytes');
// console.log('total men: ', os.totalmem(), 'bytes');

// metodo de archivos 
const fs =require('fs')
// fs.writeFile('./Texto.xt', 'linea uno', function(err){
//     if (err) {
//         console.log(err);
//     }else {
//         console.log('Archivo creado con exito');
//     }
// });
// console.log('Archivo creado');

// metodo para poder leer esos archivos creados desde el ordenador 
// fs.readFile('./texto.xt', function(err, data){
//     if (err) {
//         console.log(err);
//     }
//     if (data){
//         console.log(data.toString());
//     }
// })
const http = require('http');

http.createServer(function(req, res){
    
})

