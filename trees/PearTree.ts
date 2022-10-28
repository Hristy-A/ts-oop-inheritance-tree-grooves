class PearTree extends FruitTree<Pear> {
  override maxHeight = 20;
  override growthSpeed = 2.5;
  override minYearFruitsCount = 175;
  override maxYearFruitsCount = 225;
  override matureAge = 5;
  override deathAge = 40;
  
  override createFruit = Pear;
  override fruitName = Pear.name;

  constructor(age: number, height: number) {
    super(age, height);
  }
}
