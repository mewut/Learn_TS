type TypeUser = {
    name: string;
    age: number;
    adress: string;
};

let user: TypeUser

user = {
    name: 'John',
    age: 30,
    adress: 'Moscow',
}


type TypeUserSpread = {
    name: string;
    age: number;
};

type TypeAdressSpread = {
    country: string;
    city: string;
};

const userSpread: TypeUserSpread = {
    name: 'John',
    age: 30,
};

const userAdressSpread: TypeAdressSpread = {
    country: 'Russia',
    city: 'Moscow',
}

let common: TypeUserSpread & TypeAdressSpread;

common = { ...userSpread, ...userAdressSpread }