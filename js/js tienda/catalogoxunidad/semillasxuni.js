const contenedorCarritox1 = document.getElementById('carrito-contenedor')
const botonVaciarx1 = document.getElementById('vaciar-carrito')
const contadorCarritox1 = document.getElementById('contadorCarrito')
const precioTotalx1 = document.getElementById('precioTotal')
const buttonsx1 = document.getElementsByClassName("boton-agregar");




const mostrarSemillasx1 = () => 
{
const contenedorSemillasx1 = document.getElementById("catalogo-xunidad");
stockx1.forEach((producto) => {
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
    contenedorSemillasx1.appendChild(div)
    const boton = document.getElementById(`agregar${producto.id}`)
    boton.addEventListener('click', () => {
        agregarAlCarritox1(producto.id)
        
             

        
        
    })

    
})
}

// 2 funcion agregar carro
const agregarAlCarritox1 = (prodId) => {
    const existe = carrito.find (prod => prod.id === prodId) 

    if (existe){ 
        const prod = carrito.map (prod => { 
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { 
        const item = stockx1.find((prod) => prod.id === prodId)
       
        carrito.push(item)
    }
    actualizarCarritox1() 
    

    
};
// 3 funcion actualizar
const actualizarCarritox1 = () => {

    contenedorCarritox1.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p><span id="nombre">${prod.nombre}</span></p>
        <p>Precio:$<span id="precio">${prod.precio}</span></p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarritox1.appendChild(div)

    })

    
    contadorCarritox1.innerText = carrito.length    //le agrego el contador con un innertext
    
    precioTotalx1.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0) //suma del total

    guardarCarritoStorage(carrito);
    

    
    
};



////////////////
