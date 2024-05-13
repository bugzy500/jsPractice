class Animal {
    #name
    constructor(iname){
        this.#name = iname
    }

    get name() {return this.#name}
    sleep = () => { return `${this.name} is sleeping...`}
    eat = () => { return `${this.name} is eating. Nom nom!` }
}

class Dog extends Animal{
    constructor(name, breed){
        super(name),
        this.breed = breed
    }

    breed = this.breed
    bark = () => { return `${this.name}: Woof! Woof!` }
}

class GoldenRetriever extends Dog {
    constructor(name, breed) {
        super(name, 'Golden Retriever')
    }

    guardHouse = () => { return `${this.name} is a ${this.breed} thus too friendly to guard the house.` }
}

const myDog = new GoldenRetriever("Susie");

console.log(myDog.guardHouse())