import { IValidator } from "./ivalidator";
import {BaseValidator} from "./baseValidator";
import { CreateValidatorOption } from "./createValidatorOption";

export class StringRequiredValidator extends BaseValidator implements IValidator{
    constructor(option: CreateValidatorOption){
        super(option);
    }

    public isValid(val:string):boolean{
        return !String.isNullOrWhiteSpace(val);
    }
}