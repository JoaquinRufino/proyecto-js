let nombre = prompt("¿Cuál es tu nombre?");
let talle =  prompt("¿Cuál es tu talle (S , M, L , XL)?");

let texto = "Hola " + nombre + " ingresaste correctamente tus datos!! \n" + "\n" + "Continue con el proceso!!";

if ((nombre != "") && (talle != "")) {
    alert(texto);
} else {
    alert("Por favor, ingrese su nombre y talle");
}



function stock () {
    if (talle == "S" || talle == "s") {
        alert ("Tenemos stock de talle S, averigüe el precio!!");
    } else if (talle == "M" || talle == "m") {
        alert ("Tenemos stock de talle M, averigüe el precio!!");
    } else if (talle == "L" || talle == "l") {
        alert ("Por el momento no tenemos stock de talle L, pero puede elegir otro talle");
    } else if (talle == "XL" || talle == "xl") {
        alert ("Tenemos stock de talle XL, averigüe el precio!!");
    } else {
        alert ("Ingrese un talle válido, recuerda escribirlo en mayúscula");
    }
}

stock();



let salir= prompt ("Ingrese su talle con letra mayuscula y le dire su precio (Q o q para salir)")

while (salir!="Q" && salir!="q") {
    switch (salir){
        case "S":
            alert ("El precio de la remera es de $1900");
            break;
        case "M":
            alert ("El precio de la remera es de $2500");
            break;
        case "L":
            alert ("El precio de la remera es de $2900");
            break;
        
        case "XL":
            alert ("El precio de la remera  es de $2400");
            break;
        default:
            alert ("Ingrese un talle válido");
            break;
    }
    salir= prompt ("Ingrese su talle con letra mayuscula y le dire su precio (Q o q para salir)")
}


