class Polygon {
    constructor([...sides]) {
        if (sides.length < 3) {
            throw new Error('Polygon must have at least 3 sides');
        } else if (sides.some(side => side <= 0)) {
            throw new Error('Sides must be greater than 0');
        } else if (sides.some(side => parseFloat(side) != side)) {
            throw new Error('Sides must be numbers');
        }
        this.sides = sides;
    }
    get perimeter() {
        return this.sides.reduce((sum, curr) => sum + curr);
    }
    get countSides() {
        return this.sides.length;
    }
}

class Triangle extends Polygon {
    constructor([...sides]) {
        super(sides);
    }
    get isValid() {
        const valid = (this.countSides === 3 &&
            this.sides[0] + this.sides[1] > this.sides[2] &&
            this.sides[0] + this.sides[2] > this.sides[1] &&
            this.sides[1] + this.sides[2] > this.sides[0]
        );
        return valid;
    }
}

class Square extends Polygon {
    constructor([...sides]) {
        super(sides);
    }
    get isValid() {
        const valid = (
            this.countSides === 4 &&
            this.sides.every(side => side === this.sides[0])
        );
        return valid;
    }
    get area() { return this.sides[0] * this.sides[0]; }
}

/*
const square = new Square([5, 5, 5, 5]);
const square2 = new Square([5, 4, 3, 2]);
const triangle = new Triangle([5, 5, 5]);
const triangle2 = new Triangle([15, 10, 1]);

console.log("Expecting: true");
console.log("=>", triangle.isValid);
console.log("Expecting: false");
console.log("=>", triangle2.isValid);
console.log("Expecting: true");
console.log("=>", square.isValid);
console.log("Expecting: false");
console.log("=>", square2.isValid);
console.log("Expecting: 20");
console.log("=>", square.perimeter);
console.log("Expecting: 26");
console.log("=>", triangle2.perimeter);
console.log("Expecting: 25");
console.log("=>", square.area);
console.log("Expecting: 25");
console.log("=>", square2.area);
console.log("Expecting: 20");
console.log("=>", square.perimeter);
console.log("Expecting: 15");
console.log("=>", triangle.perimeter);
*/