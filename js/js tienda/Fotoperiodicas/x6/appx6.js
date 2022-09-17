const semillasSecx6 = async () =>
{
    try
    {
        const response = await fetch("js/js tienda/Fotoperiodicas/x6/datax6.json");
        const data = await response.json();
        mostrarSemillasx6(data)
        
        
        for (const btn of buttons2)
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
semillasSecx6()