export function birthDateCalc(day, month, year) {
  const birthDate = new Date(year, month - 1, day);
  const today = new Date();
  const timeDiff = today.getTime() - birthDate.getTime();
  const age = Math.floor(timeDiff / (1000 * 3600 * 24 * 365));
  return age;
}

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero";
  }
  return a / b;
}

export function areaOfCircle(radius) {
  return Math.PI * radius * radius;
}

export function areaOfRectangle(length, width) {
  return length * width;
}

export function areaOfTriangle(base, height) {
  return 0.5 * base * height;
}

export function calculateBMI(weight, height) {
  if (height <= 0) {
    return "Error: Height should be greater than zero";
  }
  return weight / (height * height);
}

export function compoundInterest(principal, rate, time, n = 1) {
  const amount = principal * Math.pow(1 + rate / (n * 100), n * time);
  return amount - principal;
}

export function standardDeviation(numbers) {
  const mean = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
  const squaredDiffs = numbers.map((num) => Math.pow(num - mean, 2));
  const variance =
    squaredDiffs.reduce((sum, diff) => sum + diff, 0) / numbers.length;
  return Math.sqrt(variance);
}

export function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

export function factorial(n) {
  if (n < 0) return "Error: Negative numbers do not have factorials";
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

export function quadraticSolver(a, b, c) {
  const discriminant = b * b - 4 * a * c;
  if (discriminant < 0) {
    return "No real roots";
  }
  const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  return { root1, root2 };
}
