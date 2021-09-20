const precioOriginal = 100;
const descuento = 15;

const porcentajePrecioConDescuento = 100 - descuento;

const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento);
// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
// });

const inputCoupon = document.getElementById("InputCoupon");
const couponValue = inputCoupon.value;

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InpuPrice");
  const priceValue = inputPrice.value;

  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value;

  let descuento;

  switch(couponValue) {
    case coupons[0]: //"JuanDC_es_Batman"
      descuento = 15;
    break;
    case coupons[1]: //"pero_no_le_digas_a_nadie"
      descuento = 30;
    break;
    case coupons[2]: //"es_un_secreto"
      descuento = 25;
    break;
  }

  const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

function calcularPrecioConDescuento() {
  let inputPrecio = document.getElementById("Precio");
  let inputDescuento = document.getElementById("Descuento");
  let precio = inputPrecio.value;
  let descuento = inputDescuento.value;
  console.log(precio, descuento);

  const porcentaje = descuento / 100;
  console.log(porcentaje);
  let precioConDescuento = precio - (precio * porcentaje);

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "Sólo debes pagar $" + precioConDescuento + " :O!!";
};

const coupons = [
  "JuanDC_es_Batman",
  "pero_no_le_digas_a_nadie",
  "es_un_secreto",
];