//Cuadrado
console.group("Cuadrado");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
  return lado * 4;
}

// const areaCuadrado = ladoCuadrado * ladoCuadrado
// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
function areaCuadrado(lado){
  return lado * lado;
}
console.groupEnd();

//Triangulo
console.group("Triangulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log("Los lados de mi triangulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   +"cm"
// );

// // const alturaTriangulo = 5.5;
// // console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo1 + baseTriangulo;
// console.log("El perímetro del triángulo es de: " + perimetroTriangulo + "cm")

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2 
// console.log("El área del triángulo es de: " + areaTriangulo + "cm^2");

function perimetroTriangulo(lado1, lado2, base){
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.groupEnd();

//Circulo
console.group("Círculos");

// const radioCirculo = 4;
// const diametroCirculo = radioCirculo * 2;


// const pi = Math.PI;
// console.log("Pi vale: " + pi)

// const perimetroCirculo = pi * diametroCirculo;
// console.log("El perímetro del círculo es de: " + perimetroCirculo + "cm")

// const areaCirculo = (radioCirculo * radioCirculo) * pi;
// console.log("El área del círculo es de: " + areaCirculo + "cm^2");
function diametroCirculo(radio) {
  return radio * 2;
}

function perimetroCirculo(radio){
  let diametro = diametroCirculo(radio);
  return diametro *  Math.PI;
}

function areaCirculo(radio) {
  return (radio * radio) * Math.PI;
}

console.groupEnd();

//Interaccion con html

/* Cuadrado */
function calcularPerimetroCuadrado() {
  let input = document.getElementById("InputCuadrado");
  let value = input.value;

  let perimetro = perimetroCuadrado(value);
  alert("El perímetro es de: " + perimetro + "cm");

}
function calcularAreaCuadrado() {
  let input = document.getElementById("InputCuadrado");
  let value = input.value;

  let area = areaCuadrado(value);
  alert("El área es de: " + area + "cm^2");
}

/* Triángulo */
function calcularPerimetroTriangulo() {
  let inputA = document.getElementById("LadoA");
  let inputB = document.getElementById("LadoB");
  let inputBase = document.getElementById("Base");
  let ladoA = parseInt(inputA.value);
  let ladoB = parseInt(inputB.value);
  let base = parseInt(inputBase.value);

  let perimetro = perimetroTriangulo(ladoA, ladoB, base);
  alert("El perimetro es de: " + perimetro + "cm")
}
function calcularAreaTriangulo() {
  let inputAlto = document.getElementById("Alto");
  let inputBase = document.getElementById("Base");
  let alto = inputAlto.value;
  let base = inputBase.value;
  
  let area = areaTriangulo(base, alto);
  alert("El area es de: " + area + "cm2");
}

/* Circulo */

function calcularPerimetroCirculo() {
  let inputRadius = document.getElementById("InputCirculo");
  let radius = inputRadius.value;

  let perimetro = perimetroCirculo(radius);
  alert("El perimetro es de: " + perimetro + "cm");
}

function calcularAreaCirculo() {
  let inputRadius = document.getElementById("InputCirculo");
  let radius = inputRadius.value;

  let area = areaCirculo(radius);
  alert("El area es de: " + area + "cm^2");
}