function mostrar()

/*
1) nombre, edad, vacuna, dosis, sexo

nombre => 3 y nombre <= 10
edad >= 12
vacuna (rusa, china y americana)
si edad >= 12 y edad <= 17 (americana)
dosis ("p" en caso de primera y "s" en caso  de segunda)
sexo (f o m)

promedio de vacunadosRusa
contadorEdad
porcentaje de americana mayores de edad
contador2dosis
contadorRusa
contadorAmericana
contadorChina
*/
{
	let seguir;
	let nombre;
	let edad;
	let vacuna;
	let dosis;
	let sexo;
	let acumAmericana = 0;
	let acumChina = 0;
	let acumRusa = 0;
	let acumEdadRusa = 0;
	let contPersonas = 0;
	let promEdadRusa;
	let maxEdadMujer = 0;
	let maxNombre;
	let maxVacuna;
	let contadorAmericanaMayores = 0;
	let contadorMayores = 0;
	let porcentajeMayores;
	let acumSegundaDosis = 0;
	let porcetajeSegundaDosis;
	let vacunaMenos;

	do{

	nombre = prompt("Por favor, ingrese su nombre");

	if(nombre.length < 3 || nombre.length > 10){
		nombre = prompt("ERROR, el nombre debe tener entre 3 y 10 caracteres");
	}

	edad = parseInt(prompt("Por favor, ingrese su edad"));
	
	if(edad >= 12 && edad <= 17){
		alert("La vacuna solo podra ser americana");
		acumAmericana++;
	}
	else if(edad > 17){
	vacuna = prompt("Por favor, ingrese la vacuna");
	contadorMayores++;

	if(vacuna != "rusa" && vacuna != "americana" && vacuna != "china"){
		vacuna = prompt("ERROR, intentelo nuevamente");
		}
		if(vacuna == "rusa"){
			acumEdadRusa = edad+acumEdadRusa;
			acumRusa++;
		}
		else if(vacuna == "americana"){
			contadorAmericanaMayores++;
			acumAmericana++;
		}
		else{
			acumChina++;
		}
	}

	dosis = prompt("Por favor, ingrese la dosis. p/s");

	if(dosis != "p" && dosis != "s"){
		dosis = prompt("ERROR, por favor intentelo nuevamente. (p/s)");
	}

	if(dosis == "s"){
		acumSegundaDosis++;
	}

	sexo = prompt("Por favor, ingrese su sexo. (f/m)");
	
	if(sexo != "m" && sexo != "f"){
		sexo = prompt("ERROR, por favor intentelo nuevamente. (f/m)");
	}
	
	if(sexo == "f" && edad > maxEdadMujer){
		maxEdadMujer = edad + maxEdadMujer;
		maxNombre = nombre;
		maxVacuna = vacuna;
	}

	contPersonas++;
	seguir = prompt("¿Desea seguir ingresando datos? s/n");
	}while(seguir == "s")

	porcetajeSegundaDosis = (acumSegundaDosis / contPersonas) * 100;
	porcentajeMayores = (contadorMayores / contadorAmericanaMayores) *100;
	promEdadRusa = acumEdadRusa / contPersonas;

	if(acumAmericana < acumChina && acumAmericana < acumRusa){
		vacunaMenos = "Americana";
	}
	else if(acumChina <= acumAmericana && acumChina < acumRusa){
		vacunaMenos = "China"
	}
	else{
		vacunaMenos = "Rusa"
	}

	alert("El promedio de edad de personas con la rusa es " + promEdadRusa);
	alert("El nombre de la mujer con mas edad es " + maxNombre + " y tiene la vacuna " + maxVacuna);
	alert("El porcentaje de mayores de edad con la americana es " + porcentajeMayores + "%");
	alert("El porcentaje de de las personas con segunda dosis frente a todos es " + porcetajeSegundaDosis + "%");
	alert("La vacuna menos inoculada es " + vacunaMenos);
}
