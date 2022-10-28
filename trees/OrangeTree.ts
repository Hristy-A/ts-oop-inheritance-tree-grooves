class OrangeTree extends FruitTree<Orange> {
  override maxHeight = 25;
  override growthSpeed = 2.5;
  override minYearFruitsCount = 100;
  override maxYearFruitsCount = 300;
  override matureAge = 6;
  override deathAge = 100;

  override createFruit = Orange;
  override fruitName = Orange.name;

  constructor(age: number, height: number) {
    super(age, height);
  }
}
