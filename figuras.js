//Codigo Cuadrado
console.group("Codigo Cuadrado");
// const ladoCuadrado = 5;

// console.log("Los lados del cuadrado miden: " + ladoCuadrado+"cm");

function perimetroCuadrado(lado){
   return lado*4; 
}
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado+"cm");


function AreaCuadrado(lado){
    return lado * lado;
}
// console.log("El area del cuadrado es: " + AreaCuadrado +"cm2");
console.groupEnd();

//aqui interactuamos con el archivo html Cuadrado
function CalcPerCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    let result = document.getElementById("result");
    result.innerText = "Perimetro: " + perimetro+"u";

    const input2 = document.getElementById("InputCuadrado");
    const value2 = input2.value;

    const area = AreaCuadrado(value2);
    let result2 = document.getElementById("result2");
    result2.innerText = "Area: " + area+"u2";
}


//Codigo Triangulo
console.group("Codigo Triangulo");
function perimetroTriangulo(lado1,lado2,ladobase){
    let perim = lado1 + lado2 + ladobase;
    return perim;
}
function areaTriangulo(altura,ladobase){
    const are = (altura* ladobase)/2;
    return are;
}
console.groupEnd();

function CalculosTriangle(){
    // Al poner los .value hay que usar "Number()" para obtener el valor del elemento
    let inputLadoA = document.getElementById("InputTriangle1");
    let valueLadoA = Number(inputLadoA.value);
    let inputLadoB = document.getElementById("InputTriangle2");
    let valueLadoB = Number(inputLadoB.value);

    let inputAltura = document.getElementById("InputTriangleAltura");
    let valueAltura = Number(inputAltura.value);

    let inputTriangleBase = document.getElementById("InputTriangleBase");
    let valueBase = Number(inputTriangleBase.value);

    let TrianglePerimetro = perimetroTriangulo(valueLadoA,valueLadoB,valueBase);

    let resultTriangle = document.getElementById("resultTriangle");
    resultTriangle.innerText = "Perimetro: " + TrianglePerimetro +"u";

    const TriangleArea = areaTriangulo(valueAltura,valueBase);

    let resultTriangle2 = document.getElementById("resultTriangle2");
    resultTriangle2.innerText = "Area: "+ TriangleArea +"u2";
}


//codigo Circulo
console.group("codigo Circulo");
function diametroCirculi(radio){
    return radio*2;
}
function perimetroCirculo(radio){
    const diametro=diametroCirculi(radio);
    return diametro * Math.PI;
}
function AREACirculo(radio){
    return (radio*radio)*Math.PI;
}
console.groupEnd();

function CalculosCircle(){
    let inputRadio = document.getElementById("InputRadio");
    let valueRadio = Number(inputRadio.value);

    let circlePerimetro = perimetroCirculo(valueRadio);
    let resultCircle1 = document.getElementById("resultCircle1");
    resultCircle1.innerText = "Perimetro: " + circlePerimetro + "u";


    let circleArea = diametroCirculi(valueRadio);
    let resultCircle2 = document.getElementById("resultCircle2");
    resultCircle2.innerText = "Area: " + circleArea + "u";
}

