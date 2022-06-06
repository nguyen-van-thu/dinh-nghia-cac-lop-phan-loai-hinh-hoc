class Rectangle {
   private _width: number;
   private _height: number;
   private _color: string;
   private _filled: boolean;
    constructor(width: number,
                height: number,
                color: string,
                filled: boolean) {
        this._color = color;
        this._filled = filled;
        this._width = width;
        this._height = height;
    }

    getArea(): number {
        return this._width * this._height;
    }


    getPerimeter(): number {
        return 2 * (this._width + this._height);
    }
}
let rectangle = new Rectangle(2, 3, "orange", true);

console.log(rectangle);