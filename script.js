// input del usuario
var humano = prompt("Que eliges Piedra Papel o Tijera");
var computadora = Math.random();
var resultado;




//logica básica
	if (computadora <= 0.33) {
		computadora = "Piedra"
	} else if (computadora > 0.33 && computadora <= 0.66) {
		computadora = "Papel"
	} else if (computadora > 0.66) {
		computadora = "Tijera"
	}





// The maths
	if (humano == computadora) {
		resultado = "Empate";
	} 
	else if (humano == "Piedra") {
		if (computadora == "Papel") {
			resultado == "perdiste";
		}
		else if (computadora == "Tijera") {
			resultado = "Ganaste";
		}
	}
	else if (humano == "Papel") {
		if (computadora == "Piedra") {
			resultado = "Ganaste";
		}
		else if (computadora == "Tijera") {
			resultado = "Perdiste";
		}
	}
	else if (humano == "Tijera") {
		if (computadora == "Piedra") {
			resultado = "Perdiste";
		}
		else if (computadora == "Papel") {
			resultado = "Ganaste";
		}
	}




// The results
	console.log(humano);
	console.log(computadora);
	console.log(resultado);




//mostrar resultados
document.getElementById("respuesta-h").innerHTML = humano;
document.getElementById("respuesta-c").innerHTML = computadora; 
document.getElementById("resultado").innerHTML = resultado;
