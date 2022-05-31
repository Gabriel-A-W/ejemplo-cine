import { HtmlComponent } from "./HtmlComponent.js";

export class AsientoSelectComponent extends HtmlComponent
{
    constructor(proyeccionVm)
    {
        super();
        this.proyeccionVm = proyeccionVm;
        this._asientosSeleccionados = [];


        this.template = `<div class="row animate__fadeIn"><div class="col"></div></div>`;
        this.crearElementoPrincipal();
        
        
        let divPrincipal = this._crearDivPrincipal();

        this.contenedor = this.crearElemento(`<div class="asiento-container">
                <div class="pantalla"></div> 
          </div>`);

     
        let divBotn = this.crearElemento(`<div class="col d-flex"></div>`);
        this.spanTotal = this.crearElemento(`<h5 >TOTAL: $0</h5>`);
        this.botonFinalizar = this.crearElemento(`<button class="btn btn-primary align-self-end m-3">Finalizar</button>`);
        divBotn.appendChild(this.spanTotal);
        divBotn.appendChild(this.botonFinalizar);


        divPrincipal.appendChild(this.contenedor);
     
        this.elementoHtml.appendChild(divPrincipal);
        this.elementoHtml.appendChild(divBotn);
        this.crearAsientos();

     
    }

    _crearDivPrincipal()
    {
        return this.crearElemento(`<div class="col">
        <h3>${this.proyeccionVm.pelicula.titulo}</h3>
        <h6>${this.proyeccionVm.fechaHora}</h6>
        <ul class="asiento-showcase">
          <li>
            <div class="asiento-asiento"></div>
            <small>N/A</small>
          </li>
          <li>
            <div class="asiento-asiento asiento-selected"></div>
            <small>Seleccionado</small>
          </li>
          <li>
            <div class="asiento-asiento asiento-occupied"></div>
            <small>Ocupado</small>
          </li>    
        </ul> 
      </div> `);

    }

    _actualizarMontoTotal()
    {
      this.spanTotal.innerText = `TOTAL: $${this._asientosSeleccionados.length * this.proyeccionVm.precio}`;
    }

    addFinSeleccionListener(fn)
    {
      if(typeof(fn) === "function")
      {
          this.botonFinalizar.addEventListener("click", ()=>{
              fn(this._asientosSeleccionados);
          });
      }
    }
    

    toggleAsiento(f, c)
    {

      let indexAsiento = this._asientosSeleccionados.findIndex(a => a.fila === f && a.col === c); 
      if(indexAsiento === -1)
      {
        this._asientosSeleccionados.push({fila: f, col:c});
        return true;
      }
      else
      {
        console.log(indexAsiento);
        this._asientosSeleccionados.splice(indexAsiento,1);
      }

      return false;
    }



    crearAsientos()
    {
      for(let f = 0; f < this.proyeccionVm.mapaOcupacion.length; f++)
      {
          let filaEle = this.crearElemento(`<div class="asiento-fila"></div>`);
          for(let c = 0; c < this.proyeccionVm.mapaOcupacion.length; c++)
          {
            
            const ESTA_OCUPADO = this.proyeccionVm.mapaOcupacion[f][c] ? "asiento-occupied" : "";
            let colEle = this.crearElemento(`<div class="asiento-asiento ${ESTA_OCUPADO}"></div>`);
            
            if(!this.proyeccionVm.mapaOcupacion[f][c])
            {
              const INDEX_FILA_ELEGIDA = f;
              const INDEX_COL_ELEGIDA = c; 
              colEle.addEventListener("click", ()=> {
                
                colEle.classList.toggle("asiento-selected");
                this.toggleAsiento(INDEX_FILA_ELEGIDA, INDEX_COL_ELEGIDA); 
                this._actualizarMontoTotal();
                
                console.log(this._asientosSeleccionados);
            });


            }
            
            filaEle.appendChild(colEle);   
          }
          this.contenedor.appendChild(filaEle);
      }

    }


}
