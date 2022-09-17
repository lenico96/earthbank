const mostrarSemillasx6Auto= async () =>
{
    try
    {
        const response = await fetch("js/js tienda/Automaticas/x6/datax6auto.json");
        const data = await response.json();
        mostrarSemillasx6Automaticas(data)
        
        
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


    mostrarSemillasx6Auto()
