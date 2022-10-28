abstract class FruitTree<T extends Fruit /*| (new () => T)*/> {
  protected _age: number;
  protected _height: number;
  protected readonly _fruits: T[];

  abstract maxHeight: number;
  abstract growthSpeed: number;
  abstract minYearFruitsCount: number;
  abstract maxYearFruitsCount: number;
  abstract matureAge: number;
  abstract deathAge: number;
  abstract createFruit: (new () => T);
  abstract fruitName: string;

  constructor(age = 0, height = 0) {
    this._age = age;
    this._height = height;
    this._fruits = [];
  }

  public get age(): number {
    return this._age;
  }

  public get height(): number {
    return this._height;
  }

  passGrowingSeason() {
    this._age += 1;
    if (this._height + this.growthSpeed <= this.maxHeight)
      this._height += this.growthSpeed;
    if (this.isMature()){
      this._fruits.length = 0;
      this._fruits.push(
        ...Array.from({
          length: Math.floor(Math.random() * (this.maxYearFruitsCount + 1)) + this.minYearFruitsCount
        }, () => new this.createFruit()) // используется для создания массива фруктов
      )
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
