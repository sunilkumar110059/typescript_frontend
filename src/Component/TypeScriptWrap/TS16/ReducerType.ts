export enum CountEnum {
    INC = 'INCREMENT',
    DEC = 'DECREMENT',
    RESET = "RESET"
}

export type CountState = {
    count: number;
}

export type CountAction = {
    type: string;
    payload: number;
}
