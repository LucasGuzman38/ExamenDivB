function mostrar()
{
    let nacionalidad;
    let resultado;
    let edad;
    let cepa;
    let acumPositivos = 0;
    let acumNegativos = 0;
    let acumResultados = 0;
    let porcentajePos;
    let porcentajeNeg;
    let acumDelta = 0;
    let acumAlfa = 0;
    let acumBeta = 0;
    let maxCepa;
    let edadMax = 0;
    let acumArgDelta = 0;

    for(let i = 0; i < 3; i++){

        nacionalidad = prompt("Ingrese su nacionalidad");

        while(nacionalidad != "argentina" && nacionalidad != "extranjero"){
            nacionalidad = prompt("ERROR, intentelo nuevamente");
        }

        resultado = prompt("Ingrese el resultado");

        while(resultado != "positivo" && resultado != "negativo"){
            resultado = prompt("ERROR, intentelo nuevamente");
        }

        edad = parseInt(prompt("Ingrese su edad"));

        while(edad < 18 || edad > 65){
            edad = parseInt(prompt("ERROR, intentelo nuevamente"));
        }

        if(resultado == "positivo"){
            acumResultados++;
            acumPositivos++;
            cepa = prompt("Ingrese la cepa");

            while(cepa != "delta" && cepa != "alfa" && cepa != "beta"){
                cepa = prompt("ERROR, intentelo nuevamente");
            }
        }else if(resultado == "negativo"){
            alert("No puede ingresar ninguna cepa debido a que su resultado dio negativo");
            acumResultados++;
            acumNegativos++;
        }

        if(cepa == "delta"){
            acumDelta++;
        } else if(cepa == "alfa"){
            acumAlfa++;
        } else {
            acumBeta++;
        }

        if(nacionalidad == "extranjero" && resultado == "positivo" && edad > edadMax){
            edadMax = edad;
        }

        if(nacionalidad == "argentina" && cepa == "delta"){
            acumArgDelta++;
        }
    }

    porcentajePos = (acumPositivos / acumResultados) * 100;
    porcentajeNeg = (acumNegativos / acumResultados) * 100;


    if(acumDelta > acumAlfa && acumDelta > acumBeta){
        maxCepa = "Delta";
    }else if(acumAlfa >= acumDelta && acumAlfa > acumBeta){
        maxCepa = "Alfa";
    }else{
        maxCepa = "Beta";
    }

    alert("El porcentaje de positivos es " + porcentajePos);
    alert("El porcentaje de negativos es " + porcentajeNeg);
    alert("La cepa mas encontrada es " + maxCepa);
    alert("La edad del mayor extranjero contagiado es " + edadMax);
    alert("La cantidad de argentinos con la cepa delta es " + acumArgDelta);
}