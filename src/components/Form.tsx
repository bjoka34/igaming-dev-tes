import React, { useContext } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import Input from './Input';
import data from '../data.json';
import { InputType, Validators } from '../types/InputType';
import Button from './Button';
import { RegisterContext } from '../utils/RegisterContext';
import { UserData } from '../types/UserData';
import Dropdown from './Dropdown';

const Form = () => {
    const { setUserData, setStep, step } = useContext(RegisterContext);
    const inputFieldsJSON: InputType[] = data.fields;
    const { register, handleSubmit, setError, formState: { errors } } = useForm();

    const onSubmit: SubmitHandler<any> = (inputData: UserData) => {
        if (step === 2) {
            setUserData(inputData);
            setStep(3);
        } else {

            if (!validatePassword(inputData.password, inputData.password_confirm)) {
                setError("password", {
                    type: "manual",
                    message: "Dont Forget Your Passwords Should Be The Same!"
                });

                return;
            }

            if (!validatePlayerAge(inputData.birthdate)) {
                setError("birthdate", {
                    type: "manual",
                    message: "You Should Be At Least 18 To Register!"
                });

                return;
            }
            setStep(2);
        }
    };

    const validatePlayerAge = (age: Date) => {
        const playerDateOfBirth = new Date(age).getFullYear();
        const currentDate = new Date().getFullYear();

        return (currentDate - playerDateOfBirth) > 18;
    };

    const errorMessage = (text: string | any) => {
        let errMsg = text.replaceAll("_", " ");

        errMsg = errMsg === "matchesField failed" ? "Passwords do not match!" : errMsg;

        return errMsg && errMsg;
    };

    const validatePassword = (password: string, passwordConfirm: string) => {
        return password === passwordConfirm;
    };

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    inputFieldsJSON.map((input: InputType, index) => {
                        let validators: any;

                        input.validators.forEach((validator: Validators) => {
                            for (const [key, value] of Object.entries(validator.parameters)) {
                                let validatorKey;

                                validatorKey = validatorKey === "regex" ? "pattern" : validator.key;

                                validators = {
                                    message: validator.invalid_message,
                                    [validatorKey]: value,
                                    ...validators
                                };
                            }
                        });

                        if (step === input.step) {
                            let renderField;

                            input.fieldType === "dropdown"
                                ?
                                renderField = <Dropdown code={input.code} name={input.name} options={input.valueList} validation={{ ...register(input.code, { required: validators?.message, ...validators }) }} key={`dropdown${index}`} />
                                :
                                renderField =
                                <div key={`input${index}`}>
                                    <Input code={input.code} name={input.name} type={input.fieldType} validation={{ ...register(input.code, { required: validators?.message, ...validators }) }} />
                                    <p className='error-msg'> {errors[input.code] && errorMessage(errors[input.code]?.message)}</p>
                                </div>;

                            return renderField;
                        }
                    })
                }

                <div className='checkbox-tos'>
                    <input className='checkbox' type="checkbox" id="termsAndConditions" name='tos' required />
                    <label className='tos-label' htmlFor='tos'>Terms And Conditions</label>
                </div>

                {
                    step === 2 && <Button onClick={() => setStep(1)}>go back</Button>
                }
                <Button>{step === 1 ? "next" : "finish registration"}</Button>
            </form>
        </div>
    );
};

export default Form;