import { ButonCardInterface } from "./button-cards";

export interface CardOptionInterface {
    icon?: string;
    title: string;
    subtitle?: string;
    description?: string;
    buttons?: ButonCardInterface[];
}
