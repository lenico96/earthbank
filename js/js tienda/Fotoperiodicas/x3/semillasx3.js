const contenedorCarrito2 = document.getElementById('carrito-contenedor')
const botonVaciar2 = document.getElementById('vaciar-carrito')
const contadorCarrito2 = document.getElementById('contadorCarrito')
const precioTotal2 = document.getElementById('precioTotal')
const buttons2 = document.getElementsByClassName("boton-agregar");





const mostrarSemillasx3 = () => 
{
const contenedorSemillasx3 = document.getElementById("contenedor-semillasx3");
stockx3.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('productoSemillax3')
    div.innerHTML = `
    <img class="imgprod_semillasx3" src=${producto.img} alt= "">
    <h2>${producto.nombre}</h2>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    
    <button id="agregar${producto.id}" class="BUTTON_TIENDA">
    <span class="button-content">AGREGAR <i class="fas fa-shopping-cart"></i></span>
</button>
    
    
    `
    contenedorSemillasx3.appendChild(div)
    const boton = document.getElementById(`agregar${producto.id}`)
    boton.addEventListener('click', () => {
        agregarAlCarritox3(producto.id)
        
             

        
        
    })

    
})
}

// 2 funcion agregar carro
const agregarAlCarritox3 = (prodId) => {
    const existe = carrito.find (prod => prod.id === prodId) 

    if (existe){ 
        const prod = carrito.map (prod => { 
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { 
        const item = stockx3.find((prod) => prod.id === prodId)
       
        carrito.push(item)
    }
    actualizarCarritox3() 
    

    
};
// 3 funcion actualizar
const actualizarCarritox3 = () => {

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

//4. funcion eliminar carrito
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarritox3() //llamo a la funcion ya que en la funcion anterior en el button cree un evento onclick con el nombre de la funcion
}

//4 boton vaciar
botonVaciar2.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarritox3()
    
})

//Storage carrito.

const cantidad = document.getElementById('cantidad')
const precioTotalFinal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

const guardarCarritoStorage = (carrito) => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
    

}

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarritox3()
    }
})



////////////////
