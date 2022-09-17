const semillasSecx1 = async () =>
{
    try
    {
        const response = await fetch("js/js tienda/catalogoxunidad/dataxuni.json");
        const data = await response.json();
        mostrarSemillasx1(data)
        
        
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
semillasSecx1()