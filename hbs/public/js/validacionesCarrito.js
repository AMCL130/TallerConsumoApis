// const expressionCorreo= //

const formulario= document.getElementById('formularioCarrito');


formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
        
        const expressionNombre= /^[a_zA-Z\s]+$/;
        const expressionCelular = /^3\d{9}$/;
        const expressionCorreo = /^\S+@\S+\.\S+$/
        const expressionfecha = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/\d{4}$/;

        const nombreCarrito = document.getElementById('nombreCarrito').value;
        const correoCarrito = document.getElementById('correoCarrito').value;
        const celularCarrito= document.getElementById('telCarrito').value;
        const fechaEveCarrito = document.getElementById('fechaEveCarrito').value;
        const direccionCarrito= document.getElementById('direccionCarrito').value;
        const fechaEmiCarrito = document.getElementById('FechaEmiCarrito').value; 


        try{
            if(nombreCarrito=='' || correoCarrito=='' || fechaEveCarrito=='' || direccionCarrito=='' || fechaEmiCarrito=='' || fechaEmiCarrito==''){
                throw 'por favor llenar todos los campos'
            }
            if(!expressionNombre.test(nombreCarrito)){
                throw 'nombre no valido'
            }
            if(!expressionCelular.test(celularCarrito)){
                    throw 'celular no valido'
            }
            if(!expressionCorreo.test(correoCarrito)){
                    throw 'correo no valido'
            }
            if(!expressionfecha.test(fechaEveCarrito)){
                    throw 'fecha no valida'
            }
            if(!expressionfecha.test(fechaEmiCarrito)){
                    throw 'fecha no valida'
            }
            alert ('se confirma el envio del carrito')
            
            

        }catch(e){
            alert(e)
        }

})



