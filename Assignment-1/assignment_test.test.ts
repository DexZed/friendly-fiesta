// import { formatString, filterByRating, concatenateArrays, processValue, getMostExpensiveProduct, getDayType, squareAsync, Car, Product, Day } from "./app";

// describe('formatString', () => {
//    test('returns uppercase by default', () => {
//      expect(formatString('hello')).toBe('HELLO');
//    });
  
//    test('returns uppercase if true passed', () => {
//      expect(formatString('world', true)).toBe('WORLD');
//    });
  
//    test('returns lowercase if false passed', () => {
//      expect(formatString('HeLLo', false)).toBe('hello');
//    });
//  });

//  describe('filterByRating', () => {
//    const items = [
//      { title: 'A', rating: 4 },
//      { title: 'B', rating: 3.5 },
//      { title: 'C', rating: 5 },
//    ];
  
//    test('filters items with rating >= 4', () => {
//      expect(filterByRating(items)).toEqual([
//        { title: 'A', rating: 4 },
//        { title: 'C', rating: 5 },
//      ]);
//    });
//  });

//  describe('concatenateArrays', () => {
//    test('concats arrays of strings', () => {
//      expect(concatenateArrays(['a'], ['b', 'c'])).toEqual(['a', 'b', 'c']);
//    });
  
//    test('concats arrays of numbers', () => {
//      expect(concatenateArrays([1], [2, 3], [4])).toEqual([1, 2, 3, 4]);
//    });
//  });

//  describe('Car class', () => {
//    const car = new Car('Toyota', 2020, 'Corolla');
  
//    test('returns correct info from getInfo()', () => {
//      expect(car.getInfo()).toBe('"Make: Toyota, Year: 2020"');
//    });
  
//    test('returns correct model from getModel()', () => {
//      expect(car.getModel()).toBe('"Model: Corolla"');
//    });
//  });

//  describe('processValue', () => {
//    test('returns length if input is string', () => {
//      expect(processValue('hello')).toBe(5);
//    });
  
//    test('returns double if input is number', () => {
//      expect(processValue(7)).toBe(14);
//    });
//  });

//  describe('getMostExpensiveProduct', () => {
//    const products: Product[] = [
//      { name: 'Pen', price: 10 },
//      { name: 'Notebook', price: 25 },
//      { name: 'Bag', price: 50 },
//    ];
  
//    test('returns the most expensive product', () => {
//      expect(getMostExpensiveProduct(products)).toEqual({ name: 'Bag', price: 50 });
//    });
//    test('returns null for empty array', () => {
//        expect(getMostExpensiveProduct([])).toBeNull();
//      });
//    });

//    describe('getDayType', () => {
//        test('returns Weekday for Monday', () => {
//          expect(getDayType(Day.Monday)).toBe('Weekday');
//        });
      
//        test('returns Weekend for Sunday', () => {
//          expect(getDayType(Day.Sunday)).toBe('Weekend');
//        });
//      });

//      describe('squareAsync', () => {
//        test('returns the square after 1s for positive number', async () => {
//          await expect(squareAsync(3)).resolves.toBe(9);
//        });
      
//        test('throws error for negative number', async () => {
//          await expect(squareAsync(-1)).rejects.toThrow('Negative number not allowed');
//        });
//      });