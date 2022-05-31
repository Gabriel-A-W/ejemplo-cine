import { HtmlComponent } from "./HtmlComponent.js";


export class ProyeccionSelectComponent extends HtmlComponent
{
    constructor(peliculaVm, proyeccionesVm)
    {
        super();

        this.proyeccionesVm = proyeccionesVm;

        let divElemForm = this.crearElemento(`<div class="col-5"></div>`);
        this.botonComprar = this.crearElemento(`<button class="btn btn-primary align-self-end m-3" disabled>Comprar</button>`);
        this.formElement = this.crearElemento( `<form id="lawea"><h3>Horarios</h3></form>`);
        

        proyeccionesVm.forEach((p) => {
            let input = this.crearElemento(`<input class="btn-check" type="radio" name="horario" id="inlineRadio${p.id}" value="${p.id}">`);
            input.addEventListener("click", ()=> {
                this.botonComprar.disabled = false;
            });
            this.formElement.appendChild(input);
            this.formElement.appendChild(this.crearElemento(`<label class="btn btn-outline-dark m-1" for="inlineRadio${p.id}">${p.fechaHora}</label>`));

        });
        
        divElemForm.appendChild(this.formElement);
        divElemForm.appendChild(this.botonComprar);
         
        this.template = 
        `<div class="row g-3">
         <div class="col-3 text-center border-start border-2"><img class="img-fluid" src="${peliculaVm.poster}"></div>
         <div class="col-4">
            <h3>${peliculaVm.titulo}</h3>
            <p>Duracion: ${peliculaVm.duracion} min</p>
            <p>${peliculaVm.sinopsis}</p>
         </div>
        </div>`;    

       this.crearElementoPrincipal();
       this.elementoHtml.prepend(divElemForm); 
    }

    addCompraListener(fn)
    {
        if(typeof(fn) === "function")
        {
            this.botonComprar.addEventListener("click", ()=>{
                fn(this.proyeccionSeleccionada);
            });
        }
    }

     
    get proyeccionSeleccionada()
    {
        const id = parseInt((new FormData(this.formElement)).get("horario"));
    
        return this.proyeccionesVm.find((p)=> p.id === id);
    }


} 