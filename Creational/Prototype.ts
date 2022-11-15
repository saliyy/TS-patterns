abstract class Shape {
    public x: number;
    public y: number;
    public color: string;

    constructor(shape: Shape) {
        this.x = shape.x
        this.y = shape.y
        this.color = shape.color
    }

    // this is maing logic, we abstraction of the client from the implementation
    abstract clone(): Shape;

}

class Reactangle extends Shape {

    protected width: number;
    protected height: number;

    constructor(shape: Reactangle) {
        super(shape);
        this.width = shape.width
        this.height = shape.height
    }

    clone(): Shape {
        // some huge logic
        return new Reactangle(this)
    }
}

class Circle extends Shape {

    protected radius: number;

    constructor(shape: Circle) {
        super(shape);
        this.radius = shape.radius
    }

    clone(): Shape {
        // some huge logic
        return new Circle(this)
    }
}