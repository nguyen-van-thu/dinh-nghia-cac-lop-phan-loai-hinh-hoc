"use strict";
class Rectangle {
    constructor(width, height, color, filled) {
        this._color = color;
        this._filled = filled;
        this._width = width;
        this._height = height;
    }
    getArea() {
        return this._width * this._height;
    }
    getPerimeter() {
        return 2 * (this._width + this._height);
    }
}
let rectangle = new Rectangle(2, 3, "orange", true);
console.log(rectangle);
