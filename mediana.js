const lista1 = [
  100,
  200,
  80,
  900,
];
function compareNumbers(a, b) {
  return a - b;
};

function esPar(numero) {
   if (numero % 2 === 0) {
     return true;
   } else {
     return false;
   }
  
};

let mediana;

const mitadLista1 = parseInt(lista1.length / 2);
  if (esPar(lista1.length) = true) {
    mediana = (lista1[mitadLista1] + lista1[mitadLista1 - 1]) / 2;
    return mediana;
  } else {
    mediana = mitadLista1;
    return mediana;
};



