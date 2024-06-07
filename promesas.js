function sumar(acumulado, valor) {
    //la funcion suma de ejecuta despues del tiempo que se le ponga    
    let suma
    return new Promise(function (resolve, reject) {//retornar promesas
        setTimeout(function () {
            if(valor == 2) return reject({msg: "no me gusta el numero 2"})
            suma = acumulado + valor;
            resolve(suma);
        }, 300); //300 milisegundos es el tiempo puesto
    });
}


console.log('Al inicio del programa: ');
let acumulado = 0;
sumar(acumulado, 4,).then(function (suma) {
    return sumar(suma, 4);
})
    .then(function (suma) {
        return sumar(suma, 4);
    })
    .then(function (suma) {
        return sumar(suma, 4);
    })
    .then(function (suma) {
        return sumar(suma, 2);
    })
    .catch(function(err){
        console.log(err.msg)
    })

    
// acumulado = sumar(acumulado, 4);
// acumulado = sumar(acumulado, 4);

// console.log(acumulado);
console.log('Al final del programa: ');