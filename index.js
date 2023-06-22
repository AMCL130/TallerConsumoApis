const express = require ('express');
const app = express ();
const port = 8284;
const path = require ('path');
const hbs = require ('hbs');

app.use(express.static('hbs/public'))

app.set('views', path.join(__dirname + '/hbs/public/views'))
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/hbs/public/views/partials')

app.get('/', (req,res)=>{
    res.render('home')
});

app.get('/validacion', (req,res)=>{
    res.render('validacion',{
        titulo:'Paquete',
        modulo:'Paquete',
        descripcion_modulo: 'Crear paquete',
    })
});

app.get('/servicio', (req,res)=>{
    res.render('validacion',{
        titulo:'Servicio',
        modulo:'Servicio',
        descripcion_modulo: 'Crear Servicio',
    })
});

app.get('/producto', (req,res)=>{
    res.render('validacion',{
        titulo:'Producto',
        modulo:'Producto',
        descripcion_modulo: 'Crear Producto',
    })
});

app.get('/platos', (req,res)=>{
    res.render('validacion',{
        titulo:'Platos',
        modulo:'Platos',
        descripcion_modulo: 'Crear Platos',
    })
});

app.get('/ingrediente', (req,res)=>{
    res.render('validacion',{
        titulo:'Ingrediente',
        modulo:'Ingrediente',
        descripcion_modulo: 'Crear Ingrediente',
    })
});
app.get('/ventas', (req,res)=>{
    res.render('ventas')
});

app.get('/eventos', (req,res)=>{
    res.render('eventos')
});


app.get('/categorias', (req,res)=>{
    res.render('categorias')
});

app.get('/login', (req,res)=>{
    res.render('login')
});

app.get('/registro', (req,res)=>{
    res.render('registro')
});

app.get('/usuarios', (req,res)=>{
    res.render('usuarios')
});

app.get('/crearUsuario', (req,res)=>{
    res.render('crearUsuario')
});

app.get('/roles', (req,res)=>{
    res.render('roles')
});

app.get('/crearRoles', (req,res)=>{
    res.render('crearRoles')
});

app.get('/carrito', (req,res)=>{
    res.render('carrito')
});

app.get('/clientes', (req,res)=>{
    res.render('clientes')
});

app.get('/crearCliente', (req,res)=>{
    res.render('crearCliente')
     

});

app.get('/clientesConPlantilla', (req,res)=>{
    res.render('clientesConPlantilla')
     

});

app.get('/crearClienteConPlantilla', (req,res)=>{
    res.render('crearClienteConPlantilla')
     

});


app.listen(port, console.log ('escuchando puerto '+port));