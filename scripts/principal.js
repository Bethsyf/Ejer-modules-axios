import {getData} from "./getData.js"
import { showData } from "./showData.js"

let btnMarvel = document.getElementById("btnCategory1")
let btnDC = document.getElementById("btnCategory2")
let listarCard = document.getElementById("listarCard")



btnMarvel.addEventListener('click', async()=>{
    const array = await getData ('https://api-ejercicio-axios.herokuapp.com/marvel')
    showData(array, listarCard)
})

btnDC.addEventListener('click', async()=>{
    const array =  await getData('https://api-ejercicio-axios.herokuapp.com/dc')
    showData(array, listarCard)
})