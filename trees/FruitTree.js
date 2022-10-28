"use strict";
class FruitTree {
    constructor(age = 0, height = 0) {
        this._age = age;
        this._height = height;
        this._fruits = [];
    }
    get age() {
        return this._age;
    }
    get height() {
        return this._height;
    }
    passGrowingSeason() {
        this._age += 1;
        if (this._height + this.growthSpeed <= this.maxHeight)
            this._height += this.growthSpeed;
        if (this.isMature()) {
            this._fruits.length = 0;
            this._fruits.push(...Array.from({
                length: Math.floor(Math.random() * (this.maxYearFruitsCount + 1)) + this.minYearFruitsCount
            }, () => new this.createFruit()) // используется для создания массива фруктов
            );
        }
    }
    isMature() {
        return this._age >= this.matureAge;
    }
    isDead() {
        return this._age >= this.deathAge;
    }
    hasFruits() {
        return this._fruits.length > 0;
    }
    pickAnFruit() {
        if (!this.hasFruits())
            throw Error(`This tree has no ${this.fruitName}`);
        return this._fruits.pop();
    }
}
