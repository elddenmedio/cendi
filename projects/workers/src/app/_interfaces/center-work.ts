import { GroupsInterface } from "./groups";
import { SubjectsInterface } from "./subjects";

export interface CenterWorkInterface {
    id?: number | string;
    level?: number | string;
    name?: string;
    check_in?: string;
    check_out?: string;
    check_break?: string;
    position?: number | string ;
    positionStyle?: number | string;
    permission?: number | string;
    group?: GroupsInterface;
    subject?: SubjectsInterface;
}
