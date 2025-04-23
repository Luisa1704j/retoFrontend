const botonDetallesNitro = document.getElementById("boton-detalles-nitro")
const botonDetallesExpresion = document.getElementById("boton-detalles-expresion")
const botonDetallesNitroAir = document.getElementById("boton-detalles-nitro-air")
const botonDetallesAllBlack = document.getElementById("boton-detalles-all")
const botonDetallesDancing = document.getElementById("boton-detalles-dancing")
const botonDetallesDancingNigh = document.getElementById("boton-detalles-nigh")

const botonVolver = document.getElementById("boton-volver")

const sectionNav = document.getElementById("seleccionar-categoria")
const sectionTarjetasProductos = document.getElementById("contenedor-productos")
const sectionDetallesNitro = document.getElementById("container-detalles-nitro")
const sectionDetallesExpresion = document.getElementById("container-detalles-expresion")
const sectionDetallesNitroAir = document.getElementById("container-detalles-nitro-air")
const sectionDetallesAllBlack = document.getElementById("container-detalles-all-black")
const sectionDetallesDancing = document.getElementById("container-detalles-dancing")
const sectionDetallesDancingNigh = document.getElementById("container-detalles-dancing-night")


const sectionVolver = document.getElementById("volver")

botonDetallesNitro.addEventListener("click", detallesNitro);
botonDetallesExpresion.addEventListener("click", detallesExpresion);
botonDetallesNitroAir.addEventListener("click", detallesNitroAir);
botonDetallesAllBlack.addEventListener("click", detallesAllBlack);
botonDetallesDancing.addEventListener("click", detallesDancing);
botonDetallesDancingNigh.addEventListener("click", detallesDancingNigh);
botonVolver.addEventListener("click", volver);



function volver() {
  sectionTarjetasProductos.style.display = "grid"
  sectionDetallesNitro.style.display = "none"
  sectionDetallesExpresion.style.display = "none"
  sectionDetallesNitroAir.style.display = "none"
  sectionDetallesAllBlack.style.display = "none"
  sectionDetallesDancing.style.display = "none"
  sectionDetallesDancingNigh.style.display = "none"
  sectionVolver.style.display = "none"
  document.getElementById('volver').scrollIntoView({ behavior: 'smooth' });
}

function detallesNitro() {
  sectionVolver.style.display = "block"
  sectionDetallesNitro.style.display = "block"
  sectionTarjetasProductos.style.display = "none"
  sectionDetallesExpresion.style.display = "none"
  sectionDetallesNitroAir.style.display = "none"
  sectionDetallesAllBlack.style.display = "none"
  sectionDetallesDancing.style.display = "none"
  sectionDetallesDancingNigh.style.display = "none"
}

function detallesExpresion() {
  sectionVolver.style.display = "block"
  sectionDetallesExpresion.style.display = "block"
  sectionDetallesNitro.style.display = "none"
  sectionTarjetasProductos.style.display = "none"
  sectionDetallesNitroAir.style.display = "none"
  sectionDetallesAllBlack.style.display = "none"
  sectionDetallesDancing.style.display = "none"
  sectionDetallesDancingNigh.style.display = "none"
}

function detallesNitroAir() {
  sectionVolver.style.display = "block"
  sectionDetallesNitroAir.style.display = "block" 
  sectionDetallesNitro.style.display = "none"
  sectionTarjetasProductos.style.display = "none"
  sectionDetallesExpresion.style.display = "none"
  sectionDetallesAllBlack.style.display = "none"
  sectionDetallesDancing.style.display = "none"
  sectionDetallesDancingNigh.style.display = "none"
}

function detallesAllBlack() {
  sectionVolver.style.display = "block"
  sectionDetallesNitroAir.style.display = "none"
  sectionDetallesNitro.style.display = "none"
  sectionTarjetasProductos.style.display = "none"
  sectionDetallesExpresion.style.display = "none"
  sectionDetallesAllBlack.style.display = "block" 
  sectionDetallesDancing.style.display = "none"
  sectionDetallesDancingNigh.style.display = "none"
}

function detallesDancing() {
  sectionVolver.style.display = "block"
  sectionDetallesNitroAir.style.display = "none"
  sectionDetallesNitro.style.display = "none"
  sectionTarjetasProductos.style.display = "none"
  sectionDetallesExpresion.style.display = "none"
  sectionDetallesAllBlack.style.display = "none"
  sectionDetallesDancing.style.display = "block" 
  sectionDetallesDancingNigh.style.display = "none"
}

function detallesDancingNigh() {
  sectionVolver.style.display = "block"
  sectionDetallesNitroAir.style.display = "none"
  sectionDetallesNitro.style.display = "none"
  sectionTarjetasProductos.style.display = "none"
  sectionDetallesExpresion.style.display = "none"
  sectionDetallesAllBlack.style.display = "none"
  sectionDetallesDancing.style.display = "none"
  sectionDetallesDancingNigh.style.display = "block"
}


