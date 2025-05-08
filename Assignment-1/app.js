"use strict";
// export function formatString(input: string, toUpper?: boolean): string {
//     var result = input;
//     return (toUpper || toUpper === undefined) ? input.toUpperCase() : input.toLowerCase();
// }
//export function filterByRating(
//  items: { title: string; rating: number }[]
//): { title: string; rating: number }[] {
//  return items.filter((item) => item.rating >= 4);
//}
//export  function concatenateArrays<T>(...arrays: T[][]): T[] {
//    return Array.prototype.concat(...arrays);
//}
//class Vehicle {
//    private make: string;
//    private year: number;
//    public constructor(make: string, year: number) {
//        this.make = make;
//        this.year = year;
//    }
//    public getInfo() {
//        return `"Make: ${this.make}, Year: ${this.year}"`;
//    }
//}
//class Car extends Vehicle {
//    private model: string
//    public constructor(make: string, year: number, model: string) {
//        super(make, year);
//        this.model = model;
//    }
//    public getModel() { return `"Model: ${this.model}"` }
//}
//function processValue(value: string | number): number {
//    return typeof value === "string" ? value.length : value * 2;
//}
//interface Product {
//    name: string;
//    price: number;
//}
//function getMostExpensiveProduct(products: Product[]): Product | null {
//    if (products.length === 0) return null;
//    return products.reduce((max, product) =>
//        product.price > max.price ? product : max
//    );
//}
//const products = [
//    { name: "Pen", price: 10 },
//    { name: "Notebook", price: 25 },
//    { name: "Bag", price: 50 }
//];
//enum Day {
//    Monday,
//    Tuesday,
//    Wednesday,
//    Thursday,
//    Friday,
//    Saturday,
//    Sunday
//}
//function getDayType(day: Day): string {
//    return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
//}
async function squareAsync(n) {
    if (n < 0) {
        throw new Error("Negative number not allowed");
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return n ** 2;
}
console.log(squareAsync(4).then(console.log), squareAsync(-3).catch(console.error));
//# sourceMappingURL=app.js.map