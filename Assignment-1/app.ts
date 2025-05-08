export function formatString(input: string, toUpper?: boolean): string {
     var result = input;

     return (toUpper || toUpper === undefined) ? input.toUpperCase() : input.toLowerCase();

 }

 export function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}


  export function concatenateArrays<T>(...arrays: T[][]): T[] {
    return Array.prototype.concat(...arrays);
}


export class Vehicle {
    private make: string;
    private year: number;
    public constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }
    public getInfo() {
        return `"Make: ${this.make}, Year: ${this.year}"`;
    }
}
export class Car extends Vehicle {
    private model: string
    public constructor(make: string, year: number, model: string) {

        super(make, year);
        this.model = model;
    }
    public getModel() { return `"Model: ${this.model}"` }
}

export function processValue(value: string | number): number {
    return typeof value === "string" ? value.length : value * 2;
}


export interface Product {
    name: string;
    price: number;
}

export function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;

    return products.reduce((max, product) =>
        product.price > max.price ? product : max
    );
}

export enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

export function getDayType(day: Day): string {
    return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
}

export async  function squareAsync(n: number): Promise<number> {
    if (n < 0) {
        throw new Error("Negative number not allowed");
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return n ** 2;
}
