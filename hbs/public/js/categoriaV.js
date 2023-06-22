
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    
    console.log('Hola')
    const nombre = document.getElementById('nombreCategoria').value
    const descripcion = document.getElementById('descripcion').value
    const validarNombre = /^[a-zA-Z\s]+$/;
    const validarDescripcion =  /^[a-zA-Z-0-9\s]+$/;
    try{
        if(nombre == '' || descripcion == ''){throw new Error('No ingreso un valor')}
        if(!validarNombre.test(nombre)){throw new Error('Nombre invalido')}
        if(!validarDescripcion.test(descripcion)){throw new Error('Descripcion invalida')}
        else{
            alert('Proceso exitoso')
            window.location.href = '/';
        }
        
    }catch(e){
        alert(`${e}`)
    }
})











