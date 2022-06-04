/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let simbols = ["♦", "♥", "♠", "♣"];
let numeros = [
  "A",
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
  "K"
];

window.onload = function() {
  // generar selección aleatoria
  let randomitem = simbols[Math.floor(Math.random() * simbols.length)];

  let superior = document.getElementById("superior");
  superior.innerHTML = "<h2>" + randomitem + "</h2>";

  let inferior = document.getElementById("inferior");
  inferior.innerHTML = "<h2>" + randomitem + "</h2>";

  // generar numero o letra

  let randomletra = numeros[Math.floor(Math.random() * numeros.length)];
  let letra = document.getElementById("numero");
  letra.innerHTML = "<h1>" + randomletra + "</h1>";

  // generar color
  if (randomitem == "♦" || randomitem == "♥") {
    inferior.style.color = "red";
    superior.style.color = "red";
  } else {
    inferior.style.color = "black";
    superior.style.color = "black";
  }
};

// generar con boton
let boton = document.getElementById("generar");
boton.addEventListener("click", generar);

function generar() {
  // generar selección aleatoria
  let randomitem = simbols[Math.floor(Math.random() * simbols.length)];

  // generar simbolos
  let superior = document.getElementById("superior");
  superior.innerHTML = "<h2>" + randomitem + "</h2>";

  let inferior = document.getElementById("inferior");
  inferior.innerHTML = "<h2>" + randomitem + "</h2>";

  // generar numero o letra

  let randomletra = numeros[Math.floor(Math.random() * numeros.length)];
  let letra = document.getElementById("numero");
  letra.innerHTML = "<h1>" + randomletra + "</h1>";

  // generar color
  if (randomitem == "♦" || randomitem == "♥") {
    inferior.style.color = "red";
    superior.style.color = "red";
  } else {
    inferior.style.color = "black";
    superior.style.color = "black";
  }
}

// cambiar el tamañano de la carta

let carta = document.getElementById("carta");

// cada cierto tiempo

let tiempo = document.getElementById("tiempo");

tiempo.addEventListener("click", intervalo);

function intervalo() {
  setInterval(function() {
    // generar selección aleatoria
    let randomitem = simbols[Math.floor(Math.random() * simbols.length)];

    // generar simbolos
    let superior = document.getElementById("superior");
    superior.innerHTML = "<h2>" + randomitem + "</h2>";

    let inferior = document.getElementById("inferior");
    inferior.innerHTML = "<h2>" + randomitem + "</h2>";

    // generar numero o letra

    let randomletra = numeros[Math.floor(Math.random() * numeros.length)];
    let letra = document.getElementById("numero");
    letra.innerHTML = "<h1>" + randomletra + "</h1>";

    // generar coloración
    if (randomitem == "♦" || randomitem == "♥") {
      inferior.style.color = "red";
      superior.style.color = "red";
    } else {
      inferior.style.color = "black";
      superior.style.color = "black";
    }
  }, 5000);
}
