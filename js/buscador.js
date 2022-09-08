const productos = [
    { nombre: 'fresa', categoria: 'frutas' },
    { nombre: 'mango', categoria: 'frutas' },
    { nombre: 'melón', categoria: 'frutas' },
    { nombre: 'brócoli', categoria: 'verduras' },
    { nombre: 'apio', categoria: 'verduras' },
    { nombre: 'calabaza', categoria: 'verduras' },
]
const buscar = document.querySelector('#buscar');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');

const filtrar = () => {
    resultado.innerHTML = '';
    const texto = buscar.value.toLocaleLowerCase();
    for( let producto of productos){
        let nombre = producto.nombre.toLocaleLowerCase();
        if(nombre.indexOf(texto) !== -1){
            resultado.innerHTML +=
            `<li>${producto.nombre} - ${producto.categoria}</li>`
        }
    }
}
boton.addEventListener('click', filtrar);
buscar.addEventListener('keyup', filtrar);
