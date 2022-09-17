const getProduct = async () =>
{
    try
    {
        const response = await fetch("js/js home destacados/data.json");
        const data = await response.json();
        mostrarProductos(data)
        
        
        for (const btn of buttons)
{
    btn.addEventListener('click', () =>{
        Toastify({
            text: "Agregado con exito !",
            duration: 2000,
            gravity: "bottom"
            
          
    
        }).showToast()

    })
} 
    }
    catch(error)
    {
    (error);
    }
}
//
getProduct()