import {getData} from "./getData.js"
import { showData } from "./showData.js"

let btnMarvel = document.getElementById("btnCategory1");
let btnDC = document.getElementById("btnCategory2");
let listarCard = document.getElementById("listarCard");
let btnGuardar = document.getElementById('btnGuardar');
let btnCorreo = document.getElementById('btnCorreo');
let btnEditar = document.getElementById('btnEditar');
let btnEliminar = document.getElementById('btnEliminar');
let formulario = document.getElementById('formulario');



btnMarvel.addEventListener('click', async()=>{
    const array = await getData ('https://api-ejercicio-axios.herokuapp.com/marvel')
    showData(array, listarCard)
})

btnDC.addEventListener('click', async()=>{
    const array =  await getData('https://api-ejercicio-axios.herokuapp.com/dc')
    showData(array, listarCard)
})