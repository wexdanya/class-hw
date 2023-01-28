"use strict";
// Створити новий клас RangeValidator, з полями from і to (from повинен бути менше за to)
// Тип данних для кожного поля - number
// Значення за замовчуванням - from=0 і to=10

// Реалізувати методи: setter & getter  для кожного поля
// Реалізувати метод get range, який буде повертати масив з двома полями одразу

// Реалізувати метод validate, який приймає значення(number) і повертає true, якщо значення входить в діапазон, якщо не входить - повертає false

// Обробляти помилки(виключення)
// Використовувати try/catch

class RangeValidator {
  constructor(from = 0, to = 10) {
    this.from = from;
    this.to = to;
  }
  get from() {
    return this._from;
  }
  set from(value) {
    if (typeof value !== "number") {
      throw new TypeError("Value must be number type!");
    }
    if (value > this.to) {
      throw new TypeError("Try smaller number!");
    }
    return (this._from = value);
  }
  get to() {
    return this._to;
  }
  set to(value) {
    if (typeof value !== "number") {
      throw new TypeError("Value must be number type!");
    }
    if (value < this.from) {
      throw new TypeError("Try bigger number!");
    }
    return (this._to = value);
  }

  getRange() {
    return [this.from, this.to];
  }
  validate(number) {
    if (typeof number !== "number") {
      throw new TypeError("Value must be number type!")
    }
    return number >= this._from && number <= this._to;
  }
}

const range1 = new RangeValidator();

try {
  console.log(range1);
  console.log((range1.to = 5));
  console.log((range1.from = 5));
  console.log(range1.validate(5));
} catch (error) {
  console.log(error);
}
