let titulo1 = document.getElementById('titulo1');
let titulo2 = document.getElementById('titulo2');
let titulo3 = document.getElementById('titulo3');
titulo1.style.color = 'red';
titulo2.style.color = 'blue';
titulo3.style.color = 'purple';

let button = document.getElementById('btn_saludo');

button.onclick = () => {
    console.log("Hola")
}