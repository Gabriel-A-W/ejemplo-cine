import { ModalComponent } from "./vista/ModalComponent.js";
import { PeliculaCardComponent } from "./vista/PeliculaCardComponent.js";
import { ProyeccionSelectComponent } from "./vista/ProyeccionSelectComponent.js";
import { AsientoSelectComponent } from "./vista/AsientoSelectComponent.js";
import { Cine } from "./modelo/Cine.js";
import { ListaEntradasComponent } from "./vista/ListaEntradasComponent.js";
import { Entrada } from "./modelo/Entrada.js";

const PELIS_CONTAINER = document.getElementById("pelisContainer");
const MODAL_COMPONENT = new ModalComponent(document.getElementById("staticBackdrop"), document.getElementById("peliSelector"));

function ocuparYGenerarEntradas(proyeccion, listaAsientos)
{
    const entradas = [];
    let ocupoTodas = true;
    listaAsientos.forEach((asientoCoord) => {
        if(proyeccion.intentarOcupar(asientoCoord.fila, asientoCoord.col))
        {
            entradas.push(new Entrada(proyeccion, asientoCoord.fila, asientoCoord.col));
        }
        else
        {
            ocupoTodas = false;
        }
    });

    //TODO: Avisar si no se pudo ocupar
    const ec = new ListaEntradasComponent(entradas);
    MODAL_COMPONENT.setContent(ec.elementoHtml);
    MODAL_COMPONENT.show();
}

function seleccionarAsientos(proyeccion)
{
    const asc = new AsientoSelectComponent(proyeccion);
    asc.addFinSeleccionListener((listaAsientos) => {
        ocuparYGenerarEntradas(proyeccion, listaAsientos);
    });
    MODAL_COMPONENT.setContent(asc.elementoHtml);
    MODAL_COMPONENT.show();
}

function seleccionarProyeccion(pelicula)
{
    const pysConLugar = Cine.obtenerProyeccionesConLugar(pelicula);
    const ps = new ProyeccionSelectComponent(pelicula, pysConLugar);
    ps.addCompraListener(seleccionarAsientos);

    MODAL_COMPONENT.setContent(ps.elementoHtml);
    MODAL_COMPONENT.show();
}

function cargarCartelera()
{
    Cine.cartelera.forEach((pelicula) =>{
        const peliComp = new PeliculaCardComponent(pelicula);
        peliComp.addEventListener("click", () =>{
            seleccionarProyeccion(pelicula);
        });

        PELIS_CONTAINER.appendChild(peliComp.elementoHtml);
    });


    
}
 

cargarCartelera();


