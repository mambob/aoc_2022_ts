class MyClass {
    private _name: string;

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        if (value.length < 4) {
            throw new Error('Name is too short.');
        }
        this._name = value + "!!!";
    }
}

const myClass = new MyClass();
myClass.name += 'Alphonse';
console.log(myClass.name); // Bob!!!