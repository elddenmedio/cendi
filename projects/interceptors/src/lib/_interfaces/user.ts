import { CenterWorkInterface } from "./center-work";

export interface UserInterface {
    name: string;
    last_name: string;
    second_last_name?: string;
    username: string;
    mail?: UserMailInterface;
    level: UserLevelInterface;
    created?: string;
    center?: CenterWorkInterface;
    totalRows?: number;
}

export interface UserMailInterface {
    mail_personal?: string;
    mail_work?: string;
}

export interface UserLevelInterface {
    name: string;
    level: number | string;
}
