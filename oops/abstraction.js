// ****************************** encapsuation ****************************** //
class BankAccount {
    #balance; // private field

    constructor(balance) {
        this.#balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    getBalance() {
        return this.#balance;
    }
}

// const acc = new BankAccount(1000);

// acc.deposit(500);

// console.log(acc.getBalance()); // 1500

// // console.log(acc.#balance); ❌ Error

// ****************************** abstraction ****************************** //
class CoffeeMachine {
    startMachine() {
        console.log("Machine Started");
    }

    boilWater() {
        console.log("Boiling Water");
    }

    makeCoffee() {
        this.startMachine();
        this.boilWater();

        console.log("Coffee Ready");
    }
}

// const machine = new CoffeeMachine();

// machine.makeCoffee();

// ****************************** abstract class ****************************** //
class Animal {
    constructor() {
        if (this.constructor === Animal) {
            throw new Error("Abstract class cannot be instantiated");
        }
    }

    makeSound() {
        throw new Error("Method must be implemented");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Bark");
    }
}

// const dog = new Dog();

// dog.makeSound();

// // const a = new Animal(); ❌ Error

// ****************************** interface ****************************** //
class PaymentInterface {
    pay() {
        throw new Error("pay() method must be implemented");
    }
}

class JazzCash extends PaymentInterface {
    pay() {
        console.log("Payment through JazzCash");
    }
}

class EasyPaisa extends PaymentInterface {
    pay() {
        console.log("Payment through EasyPaisa");
    }
}

// const j = new JazzCash();
// j.pay();

// const e = new EasyPaisa();
// e.pay();