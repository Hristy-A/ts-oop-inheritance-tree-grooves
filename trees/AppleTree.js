"use strict";
class AppleTree extends FruitTree {
    constructor(age, height) {
        super(age, height);
        this.maxHeight = 26;
        this.growthSpeed = 2;
        this.minYearFruitsCount = 400;
        this.maxYearFruitsCount = 600;
        this.matureAge = 5;
        this.deathAge = 45;
        this.createFruit = Apple; // определяется в производном классе
        this.fruitName = Apple.name;
    }
}
