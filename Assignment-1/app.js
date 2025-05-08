"use strict";
// export function formatString(input: string, toUpper?: boolean): string {
//     var result = input;
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterByRating = filterByRating;
//     return (toUpper || toUpper === undefined) ? input.toUpperCase() : input.toLowerCase();
// }
function filterByRating(items) {
    return items.filter((item) => item.rating >= 4);
}
//# sourceMappingURL=app.js.map