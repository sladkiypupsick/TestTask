export interface Task{
    id?: number;
    name: string;
    price: number;
    count: number;
    measure:Measure;
}

export interface Measure {
    id?: number;
    name:string;
}