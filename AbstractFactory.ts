interface AbstractFactory {
    createButton(): Button ;

    createCheckbox(): Checkbox;
}

interface Button {
    click(): void;
}

interface Checkbox {
    check(): void;
}

class WinButton implements Button {
    public click(): void {
        console.log("win button click!")
    }
}

class WinCheckbox implements Checkbox {
    public check(): void {
        console.log("win checkbox clicked!")
    }
}

class MacCheckbox implements Checkbox {
    public check(): void {
        console.log("mac checkbox clicked!")
    }
}

class MacButton implements Button {
    public click(): void {
        console.log("mac button clicked")
    }
}

class WinFactory implements AbstractFactory {
    public createButton(): Button {
        return new WinButton();
    }

    public createCheckbox(): Checkbox {
        return new WinCheckbox();
    }
}


class MacFactory implements AbstractFactory {
    public createButton(): Button {
        return new MacButton();
    }

    public createCheckbox(): Checkbox {
        return new MacCheckbox();
    }
}

const CURRENT_OS = "MacOS"

const someConfig: Record<string, string> = {
    OS: CURRENT_OS
}

class ClientCode {
    public static getGui(): AbstractFactory {
        if (someConfig.OS === "Windows") {
            return new WinFactory();
        }

        return new MacFactory();
    }
}


const factory: AbstractFactory = ClientCode.getGui()

const button: Button = factory.createButton();

const checkbox: Checkbox = factory.createCheckbox();

button.click()
checkbox.check()

