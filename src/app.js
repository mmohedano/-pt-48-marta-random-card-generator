/* eslint-disable */

import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

const listaPalos = ["♦", "♥", "♠", "♣"];
const listaNumeros = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];
let cartaEstado = { palo: listaPalos[0], numero: listaNumeros[0] };

document.generarCarta = () => {
  const palo = obtenerPaloAleatorio();
  const numero = obtenerNumeroAleatorio();
  cartaEstado = { palo, numero };
  renderizar(cartaEstado);
};

const obtenerPaloAleatorio = () => {
  const randomIndexPalo = Math.floor(Math.random() * listaPalos.length);
  return listaPalos[randomIndexPalo];
};

const obtenerNumeroAleatorio = () => {
  const randomIndexNumero = Math.floor(Math.random() * listaNumeros.length);
  return listaNumeros[randomIndexNumero];
};

const renderizar = carta => {
  console.log(carta);
  const figuraSupIzq = document.querySelector(".sup-izq");
  figuraSupIzq.innerHTML = carta.palo;
  const figuraInfDer = document.querySelector(".inf-der");
  figuraInfDer.innerHTML = carta.palo;
  const num = document.querySelector(".num");
  num.innerHTML = carta.numero;
};
