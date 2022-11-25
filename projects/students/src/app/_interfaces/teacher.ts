export interface TeacherInterface {
    uID: number | string;
    avatar?: string;
    name: string;
    last_name: string;
    second_last_name?: string;
    username?: string;
    mail: TeacherMailInterface;
    phone?: any;
    level: TeacherLevelInterface;
    created: string;
    center: TeacherCenterInterface;
    totalRows?: number;
    partners: TeacherPartnersInterface[];
}

export interface TeacherMailInterface {
    mail_personal?: string;
    mail_work?: string;
}

export interface TeacherLevelInterface {
    name?: string;
    level?: number | string;
}

export interface TeacherCenterInterface {
    name: string;
    check_in?: string;
    check_out?: string;
    check_break?: string;
    position?: string;
    positionStyle?: string;
    group: {
        value?: number | string;
        abbreviation?: string;
        name?: string;
    },
    subject: {
        subject_id?: number | string;
        name: string;
        style?: string;
        abbreviation?: string;
    }
}

export interface TeacherPartnersInterface{
    uID: number | string;
    avatar?: string;
    name: string;
    last_name: string;
    second_last_name?: string;
    username?: string;
    mail: TeacherMailInterface;
    phone?: any;
    level: TeacherLevelInterface;
    created: string;
    center: TeacherCenterInterface;
    partners?: any;
}

export interface WorkerPositionInterface {
    name: string;
    styleClass?: string;
}

