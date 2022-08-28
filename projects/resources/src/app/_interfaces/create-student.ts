export interface CreateStudentInterface {
    name: string;
    last_name: string;
    second_last_name?: string;
    born: string;
    group: number | string;
    observations: CreateStudentObservationsInterface;
    brothers: CreateStudentBrotherInterface[];
    parents: CreateStudentParentInterface[]
}


export interface CreateStudentObservationsInterface {
    medic?: string;
    dental?: string;
    psychology?: string;
    pedagogy?: string;
    generals?: string;
}

export interface CreateStudentBrotherInterface {
    name: string;
    last_name: string;
    second_last_name?: string;
    born?: string;
    group?: number | string;
    observations: CreateStudentObservationsInterface;
}

export interface CreateStudentParentInterface {
    prefix?: string;
    name: string;
    last_name: string;
    second_last_name?: string;
    phone: CreateStudentParentPhoneInterface;
    address?: string;
    work?: string;
    observation?: string;
}

export interface CreateStudentParentPhoneInterface {
    personal?: string | number;
    work?: string | number;
    ext?: string | number;
}