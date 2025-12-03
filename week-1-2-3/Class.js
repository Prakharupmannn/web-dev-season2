//legcount, spreak , name
class Animal {
    constructor(name, legCount, speaks, color) {
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
        this.color = color;
    }
    static myType() {
        console.log("Animal");
    }
speak() {
    console.log(" hi there " + this.speaks);
}
showlegCount() {
    console.log(" hi there , I have " + this.legCount + " legs");
}
showscolor() {
    console.log(" hi there i am " + this.color + " in color ");
}
}

console.log(Animal.myType());
let dog = new Animal("dog", 4, "bhow bhow", "brown"); ///creating objects
let cat = new Animal("cat", 4, "meow", "white");
cat.speak();////calling function
dog.showlegCount();
cat.showscolor();
dog.showscolor();