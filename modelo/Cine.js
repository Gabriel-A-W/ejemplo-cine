import { Pelicula } from "./Pelicula.js";
import { Persona } from "./Persona.js";
import { Proyeccion } from "./Proyeccion.js";
import {Sala} from "./Sala.js";
import {Rol} from "./Rol.js";

class CineSingleton
{
    constructor(nombre, salas, cartelera, proyecciones, precio)
    {
        this.nombre = nombre;
        this.salas = salas;
        this.cartelera = cartelera;
        this.proyecciones = proyecciones;
        this.precio = precio;

    }

    obtenerProyeccionesConLugar(pelicula)
    {
        return this.proyecciones.filter(p => p.pelicula === pelicula && p.tieneLugar());   

    }

}

let salas = [];

for(let i = 1; i < 10; i++)
{
    salas.push(new Sala(i));
}

let peli = new Pelicula("Matrix", 120, "blah blah", "Wachoski", [new Rol(new Persona("Keanu"), "Neo")], "https://www.themoviedb.org/t/p/w500/qK76PKQLd6zlMn0u83Ej9YQOqPL.jpg");
let otraPeli = new Pelicula("Dr Strange", 120, "blah blah", "que se yo", [new Rol(new Persona("Keanu"), "juan carlos")], "https://www.themoviedb.org/t/p/w500/vThe85YlGE5r7fqEVFePETqnWzk.jpg");

let cartelera = [
    peli,
    otraPeli
];

let proyecciones = [
    new Proyeccion(1, peli, "hoy a las 22", salas[0], 100),
    new Proyeccion(2, peli, "hoy a las 20", salas[1], 200),
    new Proyeccion(3, otraPeli, "mañana a las 19", salas[4], 200)
];

const CineInterno = new CineSingleton("Hoyts", salas, cartelera, proyecciones);
 

export const Cine = CineInterno;