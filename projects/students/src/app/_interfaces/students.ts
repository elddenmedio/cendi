import { ParentsInterface } from "./parents";
import { WorkerInterface } from "./workers";

export interface StudentInterface {
    sID: number;
    name: string;
    last_name: string;
    second_last_name?: string;
    born: string;
    avatar?: string;
    center_name?: string;
    group?: string;
    created?: string;
    observations: StudentObservationsInterface;
    parents: ParentsInterface[];
    brothers: BrothersInterface[]
    totalRows: number;

    [any: string]: any;
    //********************** */
    // id?: number;
    // name: string;
    //  lastName?: string;
    //  secondLastName?: string;
    // avatar?: string;
    // group?: string;
    //  birthday?: string;
    // brothers?: StudentInterface[];
    // parents?: any[];
    //  options?: any[];
    //  teachers?: WorkerInterface[];
    //  partners?: StudentInterface[];
}

export interface StudentObservationsInterface {
    medic?: string;
    dental?: string;
    pedagogy?: string;
    psychology?: string;
    general?: string;
}

export interface BrothersInterface {
    bID?: number;
    name: string;
    last_name: string;
    second_last_name?: string;
    born: string;
    avatar?: string;
    created: string;
    observations: StudentObservationsInterface;
}