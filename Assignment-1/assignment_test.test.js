"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const app_1 = require("./app");
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
(0, node_test_1.describe)('filterByRating', () => {
    it('should return items with rating >= 4', () => {
        const books = [
            { title: "Book A", rating: 4.5 },
            { title: "Book B", rating: 3.2 },
            { title: "Book C", rating: 5.0 }
        ];
        const result = (0, app_1.filterByRating)(books);
        expect(result).toEqual([
            { title: "Book A", rating: 4.5 },
            { title: "Book C", rating: 5.0 }
        ]);
    });
    it('should return an empty array if all ratings are below 4', () => {
        const items = [
            { title: "Low A", rating: 1 },
            { title: "Low B", rating: 3.9 }
        ];
        expect((0, app_1.filterByRating)(items)).toEqual([]);
    });
    it('should include items with rating exactly 4', () => {
        const items = [
            { title: "Exact", rating: 4.0 },
            { title: "Below", rating: 3.99 }
        ];
        expect((0, app_1.filterByRating)(items)).toEqual([{ title: "Exact", rating: 4.0 }]);
    });
    it('should handle an empty input array', () => {
        expect((0, app_1.filterByRating)([])).toEqual([]);
    });
    it('should not modify the original array', () => {
        const original = [
            { title: "Book X", rating: 4.2 },
            { title: "Book Y", rating: 2.5 }
        ];
        const copy = [...original];
        (0, app_1.filterByRating)(original);
        expect(original).toEqual(copy);
    });
});
//# sourceMappingURL=assignment_test.test.js.map