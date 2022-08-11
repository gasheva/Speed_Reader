export enum InputValidatorTypes {
    NOT_EMPTY, WHOLE_NUMBER, DECIMAL
}

export interface InputValidatorValues {
    type: InputValidatorTypes,
    msg?: string,
}


export interface InputValidatorResultInterface {
    isValid: boolean,
    errors: InputValidatorValues[]
}