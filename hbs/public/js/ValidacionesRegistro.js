const formulario = document.getElementById('msform');
formulario.addEventListener('submit', e => {
    e.preventDefault();

    const expUsuario = /^[a-zA-Z]+$/;
    const expContrasena = /^[0-9\s]+$/;
    const expNombre = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]+$/;

    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;
    const nombre = document.getElementById('nombre').value;

    console.log(usuario + contrasena + nombre);

    try {
        if (usuario === '' || contrasena === '' || nombre === '') {
            throw 'Todos los campos son obligatorios';
        }

        if (!expUsuario.test(usuario)) {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Usuario incorrecto. ¡Solo se permiten letras!',
            });
        } else if (!expContrasena.test(contrasena)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Contraseña incorrecta. ¡Solo se permiten números!',
            });
        } else if (!expNombre.test(nombre)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Nombre incorrecto. ¡Solo se permiten letras!',
            });
        } else {
            Swal.fire({
                title: '¡Bien hecho! Te has registrado correctamente',
                icon: 'success',
            }).then(() => {
                window.location.href = '/';
            });
        }
    } catch (e) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: e,
        });
    }
});
