let nombre = prompt("¿Cuál es tu nombre?");
let numero = Number( prompt("¿Cuál es tu edad?"));


let edadJubilacion = 65;
let resta = edadJubilacion - numero;
let texto = "Hola " + nombre + ", te faltan " + resta + " años para jubilarte";


if ((nombre != "") && (numero != "")) {
    alert (texto);
} else {
    alert ("No has introducido datos");
    alert ("Por favor, vuelve a intentarlo, recargando la pagina");
}