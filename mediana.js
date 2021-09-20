const lista1 = [
  100,
  200,
  80,
  900,
];
function compareNumbers(a, b) {
  return a - b;
};
const listaOrdenada = lista1.sort(compareNumbers);

function esPar(numero) {
   if (numero % 2 === 0) {
     return true;
   } else {
     return false;
   }
  
};

let mediana;

const mitadLista1d= parseInt(lista1.length / 2);
  if (esPar(lista1.length) = true) {
    mediana = (listaOrdenada[mitadLista1] + listaOrdenada[mitadLista1 - 1]) / 2;
    return mediana;
  } else {
    mediana = listaOrdenada[mitadLista1];
    return mediana;
};



