import { PhonesInterface } from "./phones";

export interface ParentsInterface {
    pID: number;
    prefix?: string;
    name: string;
    last_name: string;
    second_last_name?: string;
    avatar?: string;
    address?: string;
    work?: string;
    observation?: string;
    phone: PhonesInterface

    [any: string]: any;
}
