export type InputType = {
    code: string;
    name: string;
    fieldType: string;
    dataType: string;
    order: number;
    defaultValue: string;
    required: boolean;
    step: number;
    Updatable?: boolean;
    valueList: any;
    validators: Validators[];
};

export type Validators = {
    key: string;
    name: string;
    warning: boolean;
    invalid_message: string;
    description: string;
    parameters: any;
};