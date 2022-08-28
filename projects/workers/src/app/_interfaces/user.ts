import { CenterWorkInterface } from "./center-work";

export interface UserInterface {
    uID: number;
    active?: boolean;
    name: string;
    last_name: string;
    second_last_name?: string;
    username: string;
    mail?: UserMailInterface;
    level: UserLevelInterface;
    created?: string;
    center?: CenterWorkInterface;
    totalRows?: number;
    partners?: UserInterface[];
    avatar?: string;
    phone?: UserPhoneInterface;
}

export interface UserMailInterface {
    mail_personal?: string;
    mail_work?: string;
}

export interface UserLevelInterface {
    name: string;
    level: number | string;
}

export interface UserPhoneInterface {
    phone_personal?: string;
    phone_work?: string;
    phone_ext?: string;
}