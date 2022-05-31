export class Proyeccion
{
    constructor(id, pelicula, fechaHora, sala, precio)
    {
        this.id = id;
        this.pelicula = pelicula;
        this.fechaHora = fechaHora;
        this.sala = sala;
        this.mapaOcupacion = [];
        this.precio = precio;
        //GAW: Completo el mapaDeOcupacion en funcion de la sala
        for(let f = 0; f < this.sala.asientos.length; f++)
        {
            this.mapaOcupacion[f] = [];
            for(let c = 0; c < this.sala.asientos.length; c++)
            {
                this.mapaOcupacion[f].push((f+c)%2 === 0);
            }
        }
    }
   
    intentarOcupar(indexFila, indexCol)
    {
        const CANT_FILAS = this.mapaOcupacion.length;
        const CANT_COLS = this.mapaOcupacion[0].length;

        if(indexFila < 0 || indexFila >= CANT_FILAS || indexCol < 0 || indexCol >= CANT_COLS)
        {
            return false;
        }

        //GAW: Si no esta ocupada...
        if(!this.mapaOcupacion[indexFila][indexCol])
        {
            this.mapaOcupacion[indexFila][indexCol] = true;
            return true;
        }

        return false;
    }

    tieneLugar()
    {
        for(let f = 0; f < this.mapaOcupacion.length; f++)
        {
            for(let c = 0; c < this.mapaOcupacion.length; c++)
            {
                if(!this.mapaOcupacion[f][c])
                {
                    return true;
                }
            }
        }

        return false;
    }
}