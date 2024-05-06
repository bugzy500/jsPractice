//extending 
type TUser = {
    name: string;
    age: number;
}

type TAdmin = User & {
    role: string
}

interface IUser {
    name: string;
    age: number;
}

interface IAdmin extends IUser {
    role: string
}

// easier to assign primitive data types, not possible with interface since with Interface we always have to describe the object

type Address = string | string[];

const user: Address = '123 st'

//can omit properties
type Guest = Omit<TAdmin, 'age'>

interface IGuest extends Omit<TAdmin, 'age' | 'name'>{}

const user1: IGuest ={
    role: 'guest'
}

//types can easily describe tuples

type Adress = [number, string]

const adres1: Adress = [1, 'chuirch']


//really unnatural syntax with interface to achieve the same
interface IAdress extends Array<number| string> {
    0: number,
    1: string
}



//extracting type of an object is super easy //suuuuppper cool

const project = {
    name: 'PAR',
    specification: {
        start: 13,
        end: 200
    }
}

//to make this project readonly add as const at last 

type Project = typeof project

type Specification = typeof project.specification


//interfaces can be merged.. types are closed 

//can lead to defects as well
interface IClass {
    id: number
}

interface IClass{
    capacity: number
}

let c1: IClass = {
    id: 1,
    capacity: 200
}

type TClass = {
    id: number,
    capacity: number
}

//types can also be used with implements
class School implements TClass {
    id: number;
    capacity: number;

    constructor(id: number, capacity: number){
        this.id = id;
        this.capacity = capacity
    }
}

// or & and come in really handy with types

type Student = {name: string} | {roleid: number}

type Student2 = {name: string} & {roleid: number}



