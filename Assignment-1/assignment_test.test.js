"use strict";
//import test, { describe } from "node:test";
//import { concatenateArrays } from "./app";
//import { filterByRating } from "./app";
// import { formatString } from "./app";
// describe('formatString', () => {
//     test('returns uppercase when toUpper is true', () => {
//         expect(formatString('Hello', true)).toBe('HELLO');
//     });
//     test('returns lowercase when toUpper is false', () => {
//         expect(formatString('Hello', false)).toBe('hello');
//     });
//     test('defaults to uppercase when toUpper is undefined', () => {
//         expect(formatString('Hello')).toBe('HELLO');
//     });
//     test('handles empty string', () => {
//         expect(formatString('', false)).toBe('');
//     });
// });
//describe('filterByRating', () => {
//    it('should return items with rating >= 4', () => {
//        const books = [
//            { title: "Book A", rating: 4.5 },
//            { title: "Book B", rating: 3.2 },
//            { title: "Book C", rating: 5.0 }
//        ];
//        const result = filterByRating(books);
//        expect(result).toEqual([
//            { title: "Book A", rating: 4.5 },
//            { title: "Book C", rating: 5.0 }
//        ]);
//    });
//    it('should return an empty array if all ratings are below 4', () => {
//        const items = [
//            { title: "Low A", rating: 1 },
//            { title: "Low B", rating: 3.9 }
//        ];
//        expect(filterByRating(items)).toEqual([]);
//    });
//    it('should include items with rating exactly 4', () => {
//        const items = [
//            { title: "Exact", rating: 4.0 },
//            { title: "Below", rating: 3.99 }
//        ];
//        expect(filterByRating(items)).toEqual([{ title: "Exact", rating: 4.0 }]);
//    });
//    it('should handle an empty input array', () => {
//        expect(filterByRating([])).toEqual([]);
//    });
//    it('should not modify the original array', () => {
//        const original = [
//            { title: "Book X", rating: 4.2 },
//            { title: "Book Y", rating: 2.5 }
//        ];
//        const copy = [...original];
//        filterByRating(original);
//        expect(original).toEqual(copy);
//    });
//});
//describe('concatenateArrays', () => {
//    it('should concatenate string arrays', () => {
//        expect(concatenateArrays(["a", "b"], ["c"])).toEqual(["a", "b", "c"]);
//    });
//    it('should concatenate number arrays', () => {
//        expect(concatenateArrays([1, 2], [3, 4], [5])).toEqual([1, 2, 3, 4, 5]);
//    });
//    it('should return an empty array when given no arrays', () => {
//        expect(concatenateArrays()).toEqual([]);
//    });
//    it('should handle a mix of empty and non-empty arrays', () => {
//        expect(concatenateArrays([], [1, 2], [], [3])).toEqual([1, 2, 3]);
//    });
//    it('should work with custom object arrays', () => {
//        const obj1 = { id: 1 }, obj2 = { id: 2 };
//        expect(concatenateArrays([obj1], [obj2])).toEqual([obj1, obj2]);
//    });
//});
//describe('Vehicle class', () => {
//    it('should return correct info from getInfo()', () => {
//        const vehicle = new Vehicle("Honda", 2015);
//        expect(vehicle.getInfo()).toBe(`"Make: Honda, Year: 2015"`);
//    });
//});
//describe('Car class', () => {
//    it('should return correct info from getInfo() (inherited)', () => {
//        const car = new Car("Toyota", 2020, "Corolla");
//        expect(car.getInfo()).toBe(`"Make: Toyota, Year: 2020"`);
//    });
//    it('should return correct model from getModel()', () => {
//        const car = new Car("Toyota", 2020, "Corolla");
//        expect(car.getModel()).toBe(`"Model: Corolla"`);
//    });
//    it('should work with different car data', () => {
//        const car = new Car("Ford", 2022, "Mustang");
//        expect(car.getInfo()).toBe(`"Make: Ford, Year: 2022"`);
//        expect(car.getModel()).toBe(`"Model: Mustang"`);
//    });
//});
//# sourceMappingURL=assignment_test.test.js.map