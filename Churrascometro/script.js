function calculate(){

    var h = document.getElementById("duration").value;

    var carne = document.getElementById("adults").value * 0.4 + document.getElementById("kids").value * 0.2;
    var ceva = document.getElementById("adults").value * 3.4;
    var refri = document.getElementById("adults").value * 0.5 + document.getElementById("kids").value * 0.25;

    var resultA = document.getElementById("resultA");
    var resultC = document.getElementById("resultC");
    var resultB = document.getElementById("resultB");

    resultA.innerHTML = carne.toFixed(1) + " Kg de Carne";
    resultC.innerHTML = Math.ceil(ceva) + " Latas de Cerveja";
    resultB.innerHTML = Math.ceil(refri) + " Pet's 2l de Bebidas";

    if(h > 5){
        resultA.innerHTML = (carne + (carne * 0.625)).toFixed(1) + " Kg de Carne";
        resultC.innerHTML = Math.ceil(ceva + (ceva * 0.625)) + " Latas de Cerveja";
        resultB.innerHTML = Math.ceil(refri + (refri * 0.625)) + " Pet's 2l de Bebidas";
    }
    
}


