import { PhoneInterface } from "./phone";

export interface WorkInterface {
    jobPosition?: string;
    jobPlace?: string;
    jobBoss?: string;
    jobPhone?: PhoneInterface[];
    jobAddress?: string;
}
