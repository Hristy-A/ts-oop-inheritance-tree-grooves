describe('Fruits', () => {
  let fruit: Orange;
  let desiredDiameterRange: number[];

  describe('Orange', () => {
    beforeEach(() => {
      fruit = new Orange();
      desiredDiameterRange = [2, 3.2];
    });
  
    test('has a diameter more than 2', () => {
      expect(fruit.diameter >= desiredDiameterRange[0]).toBeTruthy();
    });
  
    test('has a diameter less than 3.2', () => {
      expect(fruit.diameter <= desiredDiameterRange[1]).toBeTruthy();
    });
  })

  describe('Apple', () => {
    beforeEach(() => {
      fruit = new Apple();
      desiredDiameterRange = [1, 2.5];
    });
  
    test('has a diameter more than 1', () => {
      expect(fruit.diameter >= desiredDiameterRange[0]).toBeTruthy();
    });
  
    test('has a diameter less than 2.5', () => {
      expect(fruit.diameter <= desiredDiameterRange[1]).toBeTruthy();
    });
  })

  describe('Pear', () => {
    beforeEach(() => {
      fruit = new Pear();
      desiredDiameterRange = [2.4, 4.1];
    });
  
    test('has a diameter more than 2.4', () => {
      expect(fruit.diameter >= desiredDiameterRange[0]).toBeTruthy();
    });
  
    test('has a diameter less than 4.1', () => {
      expect(fruit.diameter <= desiredDiameterRange[1]).toBeTruthy();
    });
  })
});
