const actor = {

    name: 'Michael',

    firstName: 'Ivanov',

    country: 'Russia',

    city: 'Machachkala',

    hasOskar: false,

    filmsCount: 10,

    age: 14,

    languages: ['RU-ru', 'EN-us', 'TR-tr'],

};

const howOldWillBeActorAfterTwentyYears = (actor: {age: number}) => {

    return +actor.age + 20;

}

console.log(howOldWillBeActorAfterTwentyYears(actor)); //34