const semillasSecx3Auto = async () =>
{
    try
    {
        const response = await fetch("js/js tienda/Automaticas/x3/datax3auto.json");
        const data = await response.json();
        mostrarSemillasx3Auto(data)
        
        
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
semillasSecx3Auto()