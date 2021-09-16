function calcularPerimetro(a, b, base) {
  if(a == b && a != base) {
    return a + b + base;
  } else {
    alert("Esto no es un isosceles >:C");
  }
}

function calcularArea(a, b, base) {
  if(a == b && a != base) {
    let altura = Math.sqrt(a**2 - (b**2 / 4));
    return (base * altura) / 2;
  } else {
    alert("Esto no es un isosceles >:C");
  }
}