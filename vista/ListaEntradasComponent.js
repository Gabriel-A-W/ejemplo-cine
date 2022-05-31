import { HtmlComponent } from "./HtmlComponent.js";

export class ListaEntradasComponent extends HtmlComponent
{
    constructor(entradas)
    {
        super();

        this.template = `<div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">`;

        entradas.forEach(e => {
            this.template += `<div class="col"><div class="card">
            <div class="card-body">
              <h5 class="card-title">${e.proyeccion.pelicula.titulo}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${e.proyeccion.fechaHora}</h6>
              <p class="card-text">Sala: ${e.proyeccion.sala.numero}</p>
              <p class="card-text">Fila: ${e.fila} Columna: ${e.columna}</p>
              <p class="card-text">Precio: $${e.precio}</p>
            </div>
          </div></div>`;
        });

        this.template += "</div>";

        this.crearElementoPrincipal();
    }



}