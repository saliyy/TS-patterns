class Car {
    private engineType: "V8" | "R4"

    private numberSeats: number = 2;

    private color: string;

    private typeOfDoors: 4 | 2;

    constructor(carBuilder: CarBuilder) {
        this.engineType = carBuilder.engineType
        this.numberSeats = carBuilder.numberSeats
        this.color = carBuilder.color
        this.typeOfDoors = carBuilder.typeOfDoors
    }

}

class CarBuilder {
    // note
    // these properties must be private
    public engineType: "V8" | "R4"

    public numberSeats: number = 2;

    public color: string;

    public typeOfDoors: 4 | 2;

    public constructor(engineType: "V8" | "R4") {
        this.engineType = engineType
    }

    public setNumberSeats(numberSeats = 2): this {
        this.numberSeats = numberSeats
        return this
    }

    public setColor(color: string): this {
        this.color = color
        return this
    }

    public setTypeOfDoors(typeOfDoors: 4 | 2): this {
        this.typeOfDoors = typeOfDoors
        return this
    }

    public buildCar(): Car
    {
        return new Car(this)
    }
}

class ClientCode {
    public main() {
        const myV8Car = new CarBuilder('V8')
            .setColor('Red')
            .setNumberSeats(2)
            .setTypeOfDoors(2)
            .buildCar()
    }
}
