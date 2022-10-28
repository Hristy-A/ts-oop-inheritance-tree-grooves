"use strict";
class OrangeTree extends FruitTree {
    constructor(age, height) {
        super(age, height);
        this.maxHeight = 25;
        this.growthSpeed = 2.5;
        this.minYearFruitsCount = 100;
        this.maxYearFruitsCount = 300;
        this.matureAge = 6;
        this.deathAge = 100;
        this.createFruit = Orange;
        this.fruitName = Orange.name;
    }
}
