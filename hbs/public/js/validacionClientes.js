const formulario1= document.getElementById('btn');
formulario1.addEventListener('click', () =>{

    const expressionNombre= /^[a_zA-Z\s]+$/;
    const expressionCelular = /^3\d{9}$/;
    const expressionCorreo = /^\S+@\S+\.\S+$/
    const expressionfecha = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/\d{4}$/;

    const nombreCliente = document.getElementById('nombreC').value;
    const correoCliente = document.getElementById('correoC').value;
    const celularCliente= document.getElementById('celularC').value;
    const ndocCliente = document.getElementById('ndocC').value;
    const direccionCliente= document.getElementById('direccionC').value;
    const contraseñaC = document.getElementById('contraseñaC').value; 
    const confirmacionC = document.getElementById('confirmacionC').value; 



    try{
        if(nombreCliente=='' || correoCliente=='' || ndocCliente=='' || celularCliente=='' || direccionCliente=='' || contraseñaC==''|| confirmacionC==''){
            throw 'por favor llenar todos los campos'
        }
        if(!expressionNombre.test(nombreCliente)){
            throw 'nombre no valido'
        }
        if(!expressionCelular.test(celularCliente)){
                throw 'celular no valido'
        }
        if(!expressionCorreo.test(correoCliente)){
                throw 'correo no valido'
        }
        
        if(confirmacionC != contraseñaC){
                throw 'Las contraseñas no coinciden'
        }
            alert ('cliente creado con exito')
        
        

    }catch(e){
        alert(e)
    }

})