let precio = 1000;
let cobro;

do {cobro = prompt("Seleccione pago en efectivo(10% de descuento) o tarjeta").toLowerCase();    
} while (cobro !== "efectivo" && cobro!== "tarjeta" );
if(cobro == "efectivo"){
    precio = precio * 0.9;
    console.log(precio + "$ por cada producto");
} else if(cobro == "tarjeta"){
    console.log(precio + "$ por cada producto");
} 

function precioSubtotal(){
    let cantidad = prompt("Ingresa la cantidad");
    let subtotal = precio * cantidad;
    console.log("Precio subtotal = " + subtotal);
}
precioSubtotal();

let nombre;
let apellido;
do{
    nombre = prompt("Ingrese su nombre");
    apellido = prompt("Ingrese su apellido");
} while(nombre == "" || apellido == "");

console.log("Nombre: " + nombre);
console.log("Apellido: "+ apellido);
