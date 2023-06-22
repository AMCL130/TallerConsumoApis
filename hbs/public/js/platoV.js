const btnPla = document.getElementById('btnPla')

btnPla.addEventListener('click', () => {
    
    console.log('Hola')
    const nombrePla = document.getElementById('nombrePla').value
    const descripcionPla = document.getElementById('descripcionPla').value
    const precioPla = document.getElementById('precioPla').value
    const validarNombrePla = /^[a-zA-Z\s]+$/;
    const validarPrecioPla = /^[0-9\s]+$/;
    const validarDescripcionPla =  /^[a-zA-Z-0-9\s]+$/;

    try{
        if(nombrePla == '' || descripcionPla == ''){throw new Error('No ingreso un valor')}
        if(!validarNombrePla.test(nombrePla)){throw new Error('Nombre invalido')}
        if(!validarDescripcionPla.test(descripcionPla)){throw new Error('Descripcion invalida')}
        if (!validarPrecioPla.test(precioPla)) { throw new Error('No ingreso un número válido') }
        alert('Proceso exitoso')
        
    }catch(e){
        alert(`${e}`)
    }
})