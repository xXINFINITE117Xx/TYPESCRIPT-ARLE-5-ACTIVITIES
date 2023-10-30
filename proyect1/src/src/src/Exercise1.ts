/*1. Crea una interface Vehicle con propiedades comunes a distintos vehículos como model, year, color, etc. Luego 
crea interfaces Car y Motorcycle que hereden de Vehicle y tengan propiedades específicas, implemente en una 
clase.*/

interface Vehicle {
    model: string;
    year: number;
    color: string;
}

interface Car extends Vehicle {
    numDoors: number;
}

interface Motorcycle extends Vehicle {
    engineType: string;
}

class VehicleInfo implements Vehicle {
    constructor(
        public model: string,
        public year: number,
        public color: string
    ) {}
}

class CarInfo extends VehicleInfo implements Car {
    constructor(
        public model: string,
        public year: number,
        public color: string,
        public numDoors: number
    ) {
        super(model, year, color);
    }
}

class MotorcycleInfo extends VehicleInfo implements Motorcycle {
    constructor(
        public model: string,
        public year: number,
        public color: string,
        public engineType: string
    ) {
        super(model, year, color);
    }
}
