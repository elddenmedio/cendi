import { CenterWorkInterface } from "./center-work";
import { UserMailInterface } from "./user";

export interface SendUserInterface {
    uID?: number | string;
    name: string;
    last_name: string;
    second_last_name?: string;
    mail?: UserMailInterface;
    center?: CenterWorkInterface;
}
