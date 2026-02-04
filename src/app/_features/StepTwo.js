"use client";
import { useState } from "react";
import { FormInput } from "../_components/form-input";
const checkIfInputHasSpeacialCharacters = (string) => {
  return /[!#$%^&*(),?":{}|<>]/.test(string);
};
const PhoneNumber = (string) => {
  return /[8]/.test(string);
};
const checkIfInputHasNumber = (string) => {
  return /\d/.test(string);
};
export const StepTwo = (props) => {
  const { handleBackStep } = props;
  const { handleNextStep } = props;
  const [formValues, setFormValues] = useState({
    email: "",
    phoneNumber: "",
    passWord: "",
    confirmPassWord: "",
  });
  const [errorState, setErrorState] = useState({});
  const handleInputChangeFirst = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormValues({ ...formValues, [inputName]: inputValue });
  };
  console.log(formValues, "value");

  const validateInput = () => {
    const errors = {};
    if (
      checkIfInputHasNumber(formValues.email) ||
      checkIfInputHasSpeacialCharacters(formValues.email)
    ) {
      errors.email = "input email";
    }
    if (
      checkIfInputHasNumber(formValues.phoneNumber) ||
      checkIfInputHasSpeacialCharacters(formValues.phoneNumber)
    ) {
      errors.phoneNumber = "input ";
    }
    if (
      checkIfInputHasNumber(formValues.passWord) ||
      checkIfInputHasSpeacialCharacters(formValues.passWord)
    ) {
      errors.passWord = "last input ";
    }
    if (
      checkIfInputHasNumber(formValues.confirmPassWord) ||
      checkIfInputHasSpeacialCharacters(formValues.confirmPassWord)
    ) {
      errors.confirmPassWord = "user last input ";
    }
    return errors;
  };
  const handleButton = () => {
    const errors = validateInput();
    console.log("asdads", errors);
    if (Object.keys(errors).length === 0) {
      setErrorState({});
      handleNextStep();
    } else {
      setErrorState(errors);
    }
  };
  const shouldDisableButton = () => {
    return (
      formValues.email.length === 0 ||
      formValues.phoneNumber.length === 0 ||
      formValues.passWord.length === 0 ||
      formValues.confirmPassWord.length === 0
    );
  };
  return (
    <div className="container">
      <div className="camel">
        <img src="Main 1.svg" className="photo"></img>
        <h1 className="join">Join Us!😎</h1>
        <p className="p">Please provide all current information accurately.</p>
        <div className="first">
          <FormInput
            inputTag={"Email"}
            handleChange={handleInputChangeFirst}
            name={"email"}
            value={formValues.email}
            error={errorState.email}
          />
          <FormInput
            inputTag={"Phone number"}
            handleChange={handleInputChangeFirst}
            name={"phoneNumber"}
            value={formValues.phoneNumber}
            error={errorState.phoneNumber}
          />
          <FormInput
            inputTag={"Password"}
            handleChange={handleInputChangeFirst}
            name={"passWord"}
            value={formValues.passWord}
            error={errorState.passWord}
          />
          <FormInput
            inputTag={"Confirm password"}
            handleChange={handleInputChangeFirst}
            name={"confirmPassWord"}
            value={formValues.confirmPassWord}
            error={errorState.confirmPassWord}
          />
        </div>
        <div>
          <button onClick={handleBackStep}>Back</button>
          <button
            disabled={shouldDisableButton()}
            className="btn"
            onClick={handleButton}
          >
            Continue2 /3
          </button>
        </div>
      </div>
    </div>
  );
};
