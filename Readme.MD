# Calculator Package

A comprehensive calculator package including arithmetic operations, area calculations, and advanced math functions.

## Features

- **Arithmetic Operations**: Addition, Subtraction, Multiplication, Division
- **Geometric Calculations**: Area of Circle, Rectangle, and Triangle
- **Advanced Math Functions**:
  - BMI Calculation
  - Compound Interest Calculation
  - Standard Deviation
  - Distance between two points
  - Factorial Calculation
  - Quadratic Equation Solver
- **Age Calculator**: Calculate age from a given birth date

## Installation

```bash
npm install calculator-package
```

## Usage

### Importing Functions

```javascript
import {
  birthDateCalc,
  add,
  subtract,
  multiply,
  divide,
  areaOfCircle,
  areaOfRectangle,
  areaOfTriangle,
  calculateBMI,
  compoundInterest,
  standardDeviation,
  distance,
  factorial,
  quadraticSolver
} from 'calculator-package';
```

### Examples

#### Arithmetic Operations

```javascript
console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 4)); // Output: 6
console.log(multiply(2, 3)); // Output: 6
console.log(divide(10, 2)); // Output: 5
```

#### Area Calculations

```javascript
console.log(areaOfCircle(7)); // Output: 153.93804002589985
console.log(areaOfRectangle(5, 10)); // Output: 50
console.log(areaOfTriangle(4, 8)); // Output: 16
```

#### Advanced Math Functions

```javascript
console.log(calculateBMI(70, 1.75)); // Output: 22.857142857142858
console.log(compoundInterest(1000, 5, 2)); // Output: 102.5
console.log(standardDeviation([1, 2, 3, 4, 5])); // Output: 1.4142135623730951
console.log(distance(0, 0, 3, 4)); // Output: 5
console.log(factorial(5)); // Output: 120
```

#### Quadratic Equation Solver

```javascript
console.log(quadraticSolver(1, -3, 2)); // Output: { root1: 2, root2: 1 }
```

#### Age Calculator

```javascript
console.log(birthDateCalc(15, 8, 1995)); // Output: 29 (depending on current date)
```

## Repository

[GitHub Repository](https://github.com/PritiranjanPatra2/Calculator-Npm-Package.git)

## Issues

For issues or feature requests, visit: [Issues Page](https://github.com/PritiranjanPatra2/Calculator-Npm-Package.git)

## License

This project is licensed under the ISC License.
