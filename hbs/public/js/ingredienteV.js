const btnIngre = document.getElementById('btnIngre')

btnIngre.addEventListener('click', () => {
    
    console.log('Hola')
    const nombreIngre = document.getElementById('nombreIngre').value
    const descripcionIngre = document.getElementById('descripcionIngre').value
    const precioIngre = document.getElementById('precioIngre').value
    const validarNombreIngre = /^[a-zA-Z\s]+$/;
    const validarPrecioIngre = /^[0-9\s]+$/;
    const validarDescripcionIngre =  /^[a-zA-Z-0-9\s]+$/;

    try{
        if(nombreIngre == '' || descripcionIngre == ''){throw new Error('No ingreso un valor')}
        if(!validarNombreIngre.test(nombreIngre)){throw new Error('Nombre invalido')}
        if(!validarDescripcionIngre.test(descripcionIngre)){throw new Error('Descripcion invalida')}
        if (!validarPrecioIngre.test(precioIngre)) { throw new Error('No ingreso un número válido') }
        alert('Proceso exitoso')
        
    }catch(e){
        alert(`${e}`)
    }
})
