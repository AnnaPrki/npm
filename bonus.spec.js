const calculateBonus = require("./bonus");

test('Сумма меньше или равна 50', () => {
    
    expect(calculateBonus(20, 30)).toBe(50);
    expect(calculateBonus(40, 10)).toBe(50);
    expect(calculateBonus(50, 0)).toBe(50);
  });
  
  test('Сумма больше 50', () => {
   
    expect(calculateBonus(60, 40)).toBe(50);
    expect(calculateBonus(100, 200)).toBe(50);
    expect(calculateBonus(75, 25)).toBe(50);
  });
