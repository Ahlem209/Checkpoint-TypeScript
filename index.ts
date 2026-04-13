// Interface Véhicule
interface Vehicule {
  make: string;
  model: string;
  year: number;

  start(): void;
}

// Classe Voiture
class Voiture implements Vehicule {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Car engine started");
  }
}

// Création d'une instance
const maVoiture = new Voiture("Toyota", "Corolla", 2022);

// Appel de la méthode
maVoiture.start();