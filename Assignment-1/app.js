export function formatString(input, toUpper) {
    var result = input;
    return (toUpper || toUpper === undefined) ? input.toUpperCase() : input.toLowerCase();
}
export function filterByRating(items) {
    return items.filter((item) => item.rating >= 4);
}
export function concatenateArrays(...arrays) {
    return Array.prototype.concat(...arrays);
}
export class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        return `"Make: ${this.make}, Year: ${this.year}"`;
    }
}
export class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() { return `"Model: ${this.model}"`; }
}
export function processValue(value) {
    return typeof value === "string" ? value.length : value * 2;
}
export function getMostExpensiveProduct(products) {
    if (products.length === 0)
        return null;
    return products.reduce((max, product) => product.price > max.price ? product : max);
}
export var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
export function getDayType(day) {
    return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
}
export async function squareAsync(n) {
    if (n < 0) {
        throw new Error("Negative number not allowed");
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return n ** 2;
}
//# sourceMappingURL=app.js.map