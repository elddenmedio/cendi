import { PhoneInterface } from "./phone";
import { StudentInterface } from "./students";
import { WorkInterface } from "./work";

export interface ParentInterface {
    id: number;
    name: string;
    lastName?: string;
    secondLastName?: string;
    avatar?: string;
    phone?: PhoneInterface[],
    canCall: boolean;
    canText?: boolean;
    sex?: string;
    prefix?: string;
    maried?: boolean;
    birthday?: string;
    sonsNumber: number;
    sons?: StudentInterface[];
    couple?: ParentInterface;
    work?: WorkInterface;
}
