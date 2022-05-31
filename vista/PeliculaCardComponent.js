import { HtmlComponent } from "./HtmlComponent.js";


export class PeliculaCardComponent extends HtmlComponent
{
    constructor(peliculaVm)
    {
        super();
        this.template = 
        `<div id="${peliculaVm.titulo}" class="col peliculaCard ">
          <div class="card shadow-sm animate__fadeIn">
                <img class="bd-placeholder-img card-img-top" src="${peliculaVm.poster}"> 
                <div class="card-body">
                  <p class="card-text">${peliculaVm.titulo}</p>
                </div>
          </div>
        </div>`;    

       this.crearElementoPrincipal();
    }

    


} 