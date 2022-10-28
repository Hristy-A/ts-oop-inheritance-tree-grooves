class AppleTree extends FruitTree<Apple> { // выводится из дженерика (закрывающего типа)
  override maxHeight = 26;
  override growthSpeed = 2;
  override minYearFruitsCount = 400;
  override maxYearFruitsCount = 600;
  override matureAge = 5;
  override deathAge = 45;
  
  override createFruit = Apple; // определяется в производном классе
  override fruitName = Apple.name;

  constructor(age: number, height: number) {
    super(age, height);
  }
}
