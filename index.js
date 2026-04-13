"use strict";
// Classe Voiture
class Voiture {
    make;
    model;
    year;
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Car engine started");
    }
}
// Création d'une instance
const maVoiture = new Voiture("Toyota", "Corolla", 2022);
// Appel de la méthode
maVoiture.start();
