function sumar (acumulado,valor, callback){ //el callback es una funcion
//la funcion suma de ejecuta despues del tiempo que se le ponga    
let suma 
setTimeout(function(){
    suma = acumulado + valor;
    callback(suma);
}, 300); //300 milisegundos va demorar

return suma;
}

console.log('Al inicio del programa: ');
let acumulado = 0;
acumulado = sumar(acumulado, 4);
acumulado = sumar(acumulado, 4);

console.log(acumulado);
console.log('Al final del programa: ');