
# 🎯 Interview Questions - Blog Tasks




##  🧩 Interfaces vs Types in TypeScript

#### When working with TypeScript, both `interface` and `type` can be used to describe the shape of objects. At first glance, they seem interchangeable — but dig a little deeper, and subtle differences emerge.

| Feature             | `interface`                          | `type`                                   |
| ------------------- | ------------------------------------ | ---------------------------------------- |
| Extending           | Can extend other interfaces or types | Can extend other types via intersections |
| Declaration merging | ✅ Yes                                | ❌ No (will cause an error)               |
| Usage flexibility   | Object shapes only                   | Can represent unions, primitives, etc.   |

### 🚀 Example:
```ts
interface User {
  name: string;
  age: number;
}

type Admin = {
  role: string;
};

// Interface extending another interface
interface AdminUser extends User, Admin {
  isAdmin: true;
}

// Type doing the same via intersection
type AdminUserType = User & Admin & { isAdmin: true };

```
### ⚠️ Gotcha:
#### To model complex unions or primitives (e.g., type Result = string | number), you must use `type`. `Interfaces` can't do that.



##  🗝️ Understanding ```keyof``` in TypeScript

#### The `keyof` keyword is TypeScript's way of saying: 
***"Give me the keys of this type as a union of string literals."***

#### It’s a powerful tool for building generic utilities that work with object types in a type-safe way.

#### 🧠 Why it's useful:
- Enables autocomplete-friendly key access

- Prevents typos and unsafe property references

- Great for building reusable helper functions

### ✅ Example:
```ts
interface Product {
  id: number;
  name: string;
  price: number;
}

type ProductKeys = keyof Product; 
// Equivalent to: "id" | "name" | "price"

function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const item: Product = { id: 1, name: "Pen", price: 10 };
const name = getProp(item, "name"); // Typed as string, safe, and clean

```
### 🔒 Bonus Insight:
#### You can even combine `keyof` with `typeof` to extract keys from existing objects:

```ts
const colors = { red: "#f00", blue: "#00f" };
type ColorName = keyof typeof colors; // "red" | "blue"

```

#### Now your strings are guaranteed to match actual keys — no more mystery typos.
