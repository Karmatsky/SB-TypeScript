type Person = {
    name: string,
    age: number,
}

type Bridge = {
    city: string,
    age: number,
}


type Wine = {
    manufacturer: string,
    age: number,
    grade: string,
}

function getOldest<T extends {age: number;}>(items: T[]): T{
    return items.sort((a, b) => b.age - a.age)[0];
}

let bridges: Array<Bridge> = [
    {   city: "Ekaterinburg",
        age: 2,
    },
    {
        city: "Moscow",
        age: 15,
    },
    {
        city: "Ufa",
        age: 11,
    }
];

let persons: Array<Person> = [
    {   name: "Daniil",
        age: 20,
    },
    {
        name: "Alex",
        age: 18,
    },
    {
        name: "Max",
        age: 19,
    }
];

let wines: Array<Wine> = [
    {   manufacturer: "x",
        age: 100,
        grade: "x",
    },
    {
        manufacturer: "xx",
        age: 200,
        grade: "xx",
    },
    {
        manufacturer: "xxx",
        age: 300,
        grade: "xxx",
    }
];

console.log(getOldest(bridges));
console.log(getOldest(persons));
console.log(getOldest(wines));
