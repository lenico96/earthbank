const contenedorCarrito8 = document.getElementById('carrito-contenedor')
const botonVaciar8 = document.getElementById('vaciar-carrito')
const contadorCarrito8 = document.getElementById('contadorCarrito')
const precioTotal8 = document.getElementById('precioTotal')
const buttons8 = document.getElementsByClassName("boton-agregar");



const mostrarSemillasx8= () => 
{
const contenedorSemillasx8 = document.getElementById("contenedor-semillasx8");
stockx8.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('productoSemillax6')
    div.innerHTML = `
    <img class="imgprod_semillasx6" src=${producto.img} alt= "">
    <h2>${producto.nombre}</h2>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    
    <button id="agregar${producto.id}" class="button">
    <span class="button-content">AGREGAR <i class="fas fa-shopping-cart"></i></span>
</button>
    

    
    
    `
    contenedorSemillasx8.appendChild(div)
    const boton = document.getElementById(`agregar${producto.id}`)
    boton.addEventListener('click', () => {
        agregarAlCarritox8(producto.id)
        
             

        
        
    })

    
})
}

// 2 funcion agregar carro
const agregarAlCarritox8 = (prodId) => {
    const existe = carrito.find (prod => prod.id === prodId) 

    if (existe){ 
        const prod = carrito.map (prod => { 
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { 
        const item = stockx8.find((prod) => prod.id === prodId)
       
        carrito.push(item)
    }
    actualizarCarritox8() 
    

    
};
// 3 funcion actualizar
const actualizarCarritox8 = () => {

    contenedorCarrito8.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p><span id="nombre">${prod.nombre}</span></p>
        <p>Precio:$<span id="precio">${prod.precio}</span></p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito8.appendChild(div)

    })

    
    contadorCarrito8.innerText = carrito.length    //le agrego el contador con un innertext
    
    precioTotal8.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0) //suma del total

    guardarCarritoStorage(carrito);
    

    
    
};
