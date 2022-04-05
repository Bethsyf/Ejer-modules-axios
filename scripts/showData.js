export const showData = async (arrayDatos, listarHTML)=>{
    listarHTML.innerHTML = ''
    arrayDatos.forEach(heroe => {
        const {nombre, imagen, historia} = heroe

        listarHTML.innerHTML +=`
        <div class="card" style="width: 18rem;">
        <img src=${imagen} class="card-img-top" alt="...">
        <div class="card-body">
            <h1>${nombre}</h1>
          <p class="card-text">${historia}</p>
        </div>
      </div>
        `
    })
}