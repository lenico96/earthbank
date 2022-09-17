const mostrarSemillasx8Automaticas = () => 
{
const contenedorSemillasx8Automaticas = document.getElementById("contenedor-semillas-automaticasx8");
stockx8Auto.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('productoSemillax3')
    div.innerHTML = `
    <img class="imgprod_semillasx3" src=${producto.img} alt= "">
    <h2>${producto.nombre}</h2>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    
    <button id="agregar${producto.id}" class="button">
    <span class="button-content">AGREGAR <i class="fas fa-shopping-cart"></i></span>
</button>
    
    
    `
    contenedorSemillasx8Automaticas.appendChild(div)
    const boton = document.getElementById(`agregar${producto.id}`)
    boton.addEventListener('click', () => {
        agregarAlCarritox8Auto(producto.id)
        
             

        
        
    })

    
})
}

// 2 funcion agregar carro
const agregarAlCarritox8Auto = (prodId) => {
    const existe = carrito.find (prod => prod.id === prodId) 

    if (existe){ 
        const prod = carrito.map (prod => { 
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { 
        const item = stockx8Auto.find((prod) => prod.id === prodId)
       
        carrito.push(item)
    }
    actualizarCarritox8Auto() 
    

    
};
// 3 funcion actualizar
const actualizarCarritox8Auto = () => {

    contenedorCarrito2.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p><span id="nombre">${prod.nombre}</span></p>
        <p>Precio:$<span id="precio">${prod.precio}</span></p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito2.appendChild(div)

    })

    
    contadorCarrito2.innerText = carrito.length    //le agrego el contador con un innertext
    
    precioTotal2.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0) //suma del total

    guardarCarritoStorage(carrito);
    

    
    
};