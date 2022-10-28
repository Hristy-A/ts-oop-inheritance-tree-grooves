abstract class Fruit {
  readonly diameter: number;
  private readonly diameters: readonly number[];

  constructor(diameters: number[]) {
    this.diameters = Object.freeze(diameters);
    this.diameter = this.randomDiameter();
  }

  randomDiameter() {
    return this.diameters[Math.floor(Math.random() * this.diameters.length)];
  }
}
