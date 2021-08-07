function mostrar()
{
    let nacionalidad;
    let resultado;
    let edad;
    let cepa;

    for(i = 0; i < 8; i++){
        
    nacionalidad = prompt("Por favor, ingrese su nacionalidad");

    if(nacionalidad != "argentina" && nacionalidad != "extranjero"){
        nacionalidad = prompt("ERROR, intentelo nuevamente");
    }

    resultado = prompt("Por favor, ingrese si es positivo o negativo");

    if(resultado != "positivo" && resultado != "negativo"){
        resultado = prompt("ERROR, intentelo nuevamente");
    } 
    
    edad = parseInt(prompt("Por favor, ingrese su edad"));
        
    if(edad < 18 && edad > 65){
        edad = parseInt(prompt("ERROR, intentelo nuevamente"));
        }

    cepa = prompt("Por favor, ingrese la cepa");

    if(resultado == "positivo"){
        if(cepa != "delta" && cepa != "alfa" && cepa != "beta"){
            cepa = prompt("ERROR, por favor intentelo nuevamente");
        } else if(resultado == "negativo"){
        if(cepa != ninguna){
            cepa = prompt("ERROR, intentelo nuevamente");
        }
}