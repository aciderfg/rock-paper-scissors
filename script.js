// input del usuario
var humano = prompt("Que eliges Piedra Papel o Tijera");
var computadora = Math.random();
var resultado;

//logica básica
var generarRespuestas = function() {
	if (computadora <= 0.33) {
		computadora = "Piedra"
	} else if (computadora > 0.33 && computadora <= 0.66) {
		computadora = "Papel"
	} else if (computadora > 0.66) {
		computadora = "Tijera"
	}
}

var compararResultados = function(resultado1, resultado2) {

		if (resultado1 == resultado2) {
			resultado = "Empate";
		} 
		else if (resultado1 == "Piedra") {
			if (resultado2 == "Papel") {
				console.log( "perdiste");
			}
			else if (resultado2 == "Tijera") {
				console.log( "ganaste");
				resultado = "Ganaste";
			}
		}
		else if (resultado1 == "Papel") {
			if (resultado2 == "Piedra") {
				resultado = "Ganaste";
			}
			else if (resultado2 == "Tijera") {
				resultado = "Perdiste";
			}
		}
		else if (resultado1 == "Tijera") {
			if (resultado2 == "Piedra") {
				resultado = "Perdiste";
			}
			else if (resultado2 == "Papel") {
				resultado = "Ganaste";
			}
		}

}

generarRespuestas();
compararResultados(humano, computadora);

console.log(humano);
console.log(computadora);
console.log(resultado);


//mostrar resultados
document.getElementById("respuesta-h").innerHTML = humano;
document.getElementById("respuesta-c").innerHTML = computadora; 
document.getElementById("resultado").innerHTML = resultado;
