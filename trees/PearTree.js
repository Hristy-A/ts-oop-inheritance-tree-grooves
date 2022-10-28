"use strict";
class PearTree extends FruitTree {
    constructor(age, height) {
        super(age, height);
        this.maxHeight = 20;
        this.growthSpeed = 2.5;
        this.minYearFruitsCount = 175;
        this.maxYearFruitsCount = 225;
        this.matureAge = 5;
        this.deathAge = 40;
        this.createFruit = Pear;
        this.fruitName = Pear.name;
    }
}
