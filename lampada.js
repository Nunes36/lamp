const ligar = document.getElementById("turnOn");
const desligar = document.getElementById("turnOff");
const lamp = document.getElementById("lamp");

function lampOn() {
    lamp.src = "./img/ligada.jpg";
}

function lampOff() {
    lamp.src = "./img/desligada.jpg";
}

function lampBroken() {
    lamp.src = "./img/quebrada.jpg";
}

ligar.addEventListener('click', lampOn);
desligar.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);