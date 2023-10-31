// generamos numero al azar para comparar

// Usamos floor para redondear hacia abajo siempre y despues sumamos 1, asi podremos tener entre 1 y 100
let numeroAzar = Math.floor(Math.random()*100) + 1 

let numeroEntrada = document.getElementById('numeroEntrada')

let mensaje = document.getElementById('mensaje')

let intento = document.getElementById('intento')
let intentos = 0

// Esta acción revisa si le achuntamos
function chequearResultado(){

    let numeroIngresado = parseInt(numeroEntrada.value)
    intentos++
    intento.textContent = 'Intentos realizados :' + intentos

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        // Valor ingresado no es valido
        mensaje.textContent = 'Por favor introduce un numero válido entre 1 y 100'
        mensaje.style.color = 'black'       
        return
    }

    if (numeroIngresado == numeroAzar) {
        // Valor ingresado no es valido
        mensaje.textContent = 'FELICIDADES, has ADIVINADO EL NUMERO'
        mensaje.style.color = 'green'
        numeroEnrtada.disabled = true
    } else if(numeroIngresado < numeroAzar){
        mensaje.textContent = 'SUBE la punteria, '
        mensaje.style.color = 'red'
    } else {
        mensaje.textContent = 'BAJA la punteria, '
        mensaje.style.color = 'red'       
    }
}