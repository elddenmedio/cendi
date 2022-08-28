export interface WorkerInterface {
    id: number;
    name: string;
    lastName: string;
    secondLastName?: string;
    avatar?: string;
    group?: string;
    subject?: string;
    position?: WorkerPositionInterface;
    timeFrom?: string;
    timeTo?: string;
    timeBreak?: string;
}

export interface WorkerPositionInterface {
    name: string;
    styleClass?: string;
}
