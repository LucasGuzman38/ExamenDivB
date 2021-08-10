function mostrar()
{
	let nombre;
	let edad;
	let vacuna;
	let dosis;
	let sexo;
	let seguir;
	let acumEdadRusa = 0;
	let contVacunaRusa = 0;
	let promEdadRusa;
	let nombreMaxMujer;
	let maxEdadMujer = 0;
	let maxVacunaMujer;
	let contAmericana = 0;
	let contAmericanaMayores = 0;
	let porMayoresAmer;
	let porSegundaDosis;
	let contDosis = 0;
	let contSegundaDosis = 0;
	let contRusa = 0;
	let contChina = 0;
	let contAmer = 0;
	let vacunaMenos;
	let contMujeres = 0;

	do{

		nombre = prompt("Ingrese su nombre");

		while(nombre.length < 3 || nombre.length > 10){
			nombre = prompt("ERROR, intentelo nuevamente");
		}	

		edad = parseInt(prompt("Ingrese su edad"));

		while(edad < 12){
			edad = parseInt(prompt("ERROR, intentelo nuevamente"));
		}

		if(edad >= 12 && edad <= 17){
			alert("Solo puede tener la vacuna americana");
			contAmericana++;
		}else{
			vacuna = prompt("Ingrese la vacuna");

			while(vacuna != "rusa" && vacuna != "americana" && vacuna != "china"){
				vacuna = prompt("ERROR, intentelo nuevamente");
			}
			if(vacuna == "americana"){
				contAmericana++;
				contAmericanaMayores++;
				contAmer++;
			} else if(vacuna == "rusa"){
				contRusa++;
			} else {
				contChina++;
			}
		}

		dosis = prompt("Ingrese la dosis (p/s)");

		while(dosis != "p" && dosis != "s"){
			dosis = prompt("ERROR, intentelo nuevamente");
		}

		if(dosis == "p"){
			contDosis++;
		}else if(dosis == "s"){
			contDosis++;
			contSegundaDosis++;
		}

		sexo = prompt("Ingrese el sexo (m/f)");

		while(sexo != "m" && sexo != "f"){
			sexo = prompt("ERROR, intentelo nuevamente");
		}

		if(vacuna == "rusa"){
			acumEdadRusa += edad;
			contVacunaRusa++;
		}

		if(edad > maxEdadMujer && sexo == "f"){
			maxEdadMujer = edad;
			nombreMaxMujer = nombre;
			maxVacunaMujer = vacuna;
		}

		if(sexo == "f"){
			contMujeres++;
		}

	seguir = prompt("Desea seguir ingresando datos? s/n")
	}while(seguir == "s");

	promEdadRusa = acumEdadRusa / contVacunaRusa;
	porMayoresAmer = (contAmericanaMayores / contAmericana) *100;
	porSegundaDosis = (contSegundaDosis / contDosis) * 100;


	if(contAmer < contRusa && contAmer < contChina){
		vacunaMenos = "Americana";
	}else if(contRusa <= contAmer && contRusa < contChina){
		vacunaMenos = "Rusa";
	} else {
		vacunaMenos = "China";
	}


	if(contRusa >= 1){
		alert("El promedio de edad de los vacunados con la rusa es " + promEdadRusa);
		}
	if(contMujeres >= 1){
		alert("El nombre de la mujer con mas edad es " + nombreMaxMujer + " y tiene la vacuna " + maxVacunaMujer);
	}
	if(contAmericanaMayores >= 1){
		alert("El porcentaje de mayores de edad vacunados con la americana es " + porMayoresAmer);
		}
	alert("El porcentaje de gente vacunada con la segunda dosis es " + porSegundaDosis);
	alert("La vacuna que menos se utilizo fue la " + vacunaMenos);
}
