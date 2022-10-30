type Cat = {
    name: string,
    meow: () => string,
}

type Dog = {
    name: string,
    bark: () => string,
}

const cat: Cat = {
    name: 'Pushok',
    meow: () => 'meow!'
};

const dog: Dog = {
    name: 'Bobik',
    bark: () => 'bark!',
}



    console.log(whatDoesThePetSay1(cat));
    console.log(whatDoesThePetSay1(dog));
    console.log(whatDoesThePetSay2(cat));
    console.log(whatDoesThePetSay2(dog));
    console.log(whatDoesThePetSay3(cat));
    console.log(whatDoesThePetSay3(dog));



function whatDoesThePetSay3(pet: Dog | Cat): string {
    if ('meow' in pet)
    {
        return (pet as Cat).meow()
    }
    else ('bark' in pet)
    {
        return (pet as Dog).bark()
    }
}

function whatDoesThePetSay2(pet: Dog | Cat): string {
    if(isDog(pet))
    {
        return pet.bark();
    }
    else(!isDog(pet))
    {
        return pet.meow();
    }
}

function isDog(pet: Dog | Cat): pet is Dog
{
    return (pet as Dog).bark !== undefined;
}

function whatDoesThePetSay1(pet: Dog | Cat): string {
    if (pet.name === 'Pushok')
    {
        return (pet as Cat).meow()
    }
    else (pet.name === 'Bobik')
    {
        return (pet as Dog).bark()
    }
}