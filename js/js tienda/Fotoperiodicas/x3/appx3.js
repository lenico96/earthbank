const semillasSecx3 = async () =>
{
    try
    {
        const response = await fetch("js/js tienda/Fotoperiodicas/x3/datax3.json");
        const data = await response.json();
        mostrarSemillasx3(data)
        
        
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
semillasSecx3()