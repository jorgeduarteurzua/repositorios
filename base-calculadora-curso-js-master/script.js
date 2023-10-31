// Esto agrega a la pantalla el valor del boton que toquemos
function agregar(valor){
    document.getElementById('pantalla').value += valor
}

function borrar(){
    document.getElementById('pantalla').value = ''
}

function calcular(){
    const valorPantalla = document.getElementById('pantalla').value 

    // usamos eval para calcular operaciones matematicas en un string
    const resultado = eval(valorPantalla)

    document.getElementById('pantalla').value = resultado
}