import { WorkerInterface } from "./workers";

export interface StudentInterface {
    id: number;
    active: boolean;
    name: string;
    lastName?: string;
    secondLastName?: string;
    avatar?: string;
    group?: string;
    birthday?: string;
    brothers?: StudentInterface[];
    parents?: any[];
    options?: any[];
    teachers?: WorkerInterface[];
    partners?: StudentInterface[];
}