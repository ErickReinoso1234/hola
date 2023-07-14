
function suma(x1,x2){
    return x1 + x2
}
function resta(x1,x2){
    return x1 - x2
}
function producto(x1,x2){
    if(x1 == 10) {
        console.log("Este dato no es valido para la operacion");
    } else {
        return x1 * x2
    }
}
function divicion(x1,x2){
    if(x1 == 0) {
        console.log("No es valido");
    } else { 
        return x1 / x2
    }
}
exports.suma = suma;
exports.resta = resta;
exports.producto = producto;
exports.divicion = divicion;

