"use strict";
class Fruit {
    constructor(diameters) {
        this.diameters = Object.freeze(diameters);
        this.diameter = this.randomDiameter();
    }
    randomDiameter() {
        return this.diameters[Math.floor(Math.random() * this.diameters.length)];
    }
}
