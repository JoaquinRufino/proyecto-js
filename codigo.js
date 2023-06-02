
let productJSON= [];
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let botonFinalizar = document.getElementById( "finalizar");

fetch ("../product.json")
.then(data => data.json())
.then(json => {
    productJSON = json
    renderizarProductos()
})



let totalCarrito;
let contenedor = document.getElementById("sectionropa");


function renderizarProductos() {
    for (const ropa of productJSON) {
        contenedor.innerHTML += `
        <article class=${ropa.class} style=${ropa.style} height=${ropa.height}">
            <img src= ${ropa.imagen} class=${ropa.imgclass}>
        <div class="div-card">
            <p class="card-text">${ropa.titulo} <br>${ropa.descripcion}<br>$${ropa.precio}</p>
            <button id=${ropa.id} href="#">Comprar</button>
        </div>
        </article>
    `;
    }
    productJSON.forEach(ropa => {
        document.getElementById(`${ropa.id}`).addEventListener("click", function (){
        agregarAlCarrito(ropa);
        });
});
}



function agregarAlCarrito(ropaComprada){
    carrito.push(ropaComprada);
    Swal.fire({
        title:'Prenda agregada al Carrito!!',
        text: ropaComprada.titulo,
        icon: 'success',
        imageWidth: 200,
        imageHeight: 120,
        showConfirmButton: false,
        timer: 1500,
        background:"black",
        color:"white",
        
    })
    renderizarCarrito()
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

const renderizarCarrito = () =>{
    //vaciamos el carrito del html para que no se duplique
    document.getElementById("tablabody").innerHTML="";
    carrito.forEach(ropaComprada =>{
        document.getElementById("tablabody").innerHTML += `
        <tr class= "columnas">
        <td class="td-comprar">${ropaComprada.id}</td>
        <td class="td-comprar"> ${ropaComprada.titulo}</td>
        <td class="td-comprar">$ ${ropaComprada.precio}</td>
        <td><a class="btn btn-light" onclick="eliminar(event)">🗑️</a></td>
        </tr>
        `;
    })
    totalCarrito = carrito.reduce((acumulador, ropa)=> acumulador + ropa.precio,0);
    document.getElementById("total").innerText = "Total a pagar: $"+totalCarrito;
}

//llamamos a la funcion renderizarcarrito
renderizarCarrito();


//boton para finalizar compra
botonFinalizar.addEventListener("click", function() {
    if (carrito.length == 0){
        Swal.fire({
            title:'El carrito esta Vacio',
            icon: 'error',
            showConfirmButton: false,
            timer: 1500,
            background:"black",
            color:"white",
            width: 400,
        })
    }else{
        Swal.fire({
            title:'¡¡Compra realizada!!',
            icon:  'success',
            showConfirmButton: false,
            timer: 1500,
            background:"black",
            color:"white",
            width: 450,
        })
    carrito = [];
    document.getElementById("tablabody").innerHTML="";
    document.getElementById("total").innerText = "Total a pagar: $";
    //localStorage removeItem para vaciar el carrito cuando se finalice la compra y se vuelva a ingresar
    localStorage.removeItem("carrito");
}
});

//para eliminar productos del carrito 
function eliminar(ev) {
    let fila = ev.target.parentElement.parentElement;
    let id = fila.children[0].innerText;
    let indice = carrito.findIndex(ropa => ropa.id == id);
    //remueve el producto del carro
    carrito.splice(indice, 1);
    //console.table(carrito);
    //remueve la fila de la tabla
    fila.remove();
    //recalcular el total
    let totalCarritoCalculado = carrito.reduce((acumulador, ropa) => acumulador + ropa.precio, 0);
    total.innerText = "Total a pagar $: "+totalCarritoCalculado;
    //storage
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

