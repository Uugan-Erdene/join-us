"use client";
import Image from "next/image";
import "../index.css";
import { useState } from "react";
import { FormInput } from "../_components/form-input";
const checkIfInputHasSpeacialCharacters = (string) => {
  return /[!@#$%^&*(),.?":{}|<>]/.test(string);
};
const checkIfInputHasNumber = (string) => {
  return /\d/.test(string);
};
export const StepOne = (props) => {
  const { handleNextStep } = props;
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
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
      checkIfInputHasNumber(formValues.firstName) ||
      checkIfInputHasSpeacialCharacters(formValues.firstName)
    ) {
      errors.firstName = "input ";
    }
    if (
      checkIfInputHasNumber(formValues.lastName) ||
      checkIfInputHasSpeacialCharacters(formValues.lastName)
    ) {
      errors.lastName = "last input ";
    }
    if (
      checkIfInputHasNumber(formValues.userName) ||
      checkIfInputHasSpeacialCharacters(formValues.userName)
    ) {
      errors.userName = "user last input ";
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
      formValues.firstName.length === 0 ||
      formValues.lastName.length === 0 ||
      formValues.userName.length === 0
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
            inputTag={"First name"}
            handleChange={handleInputChangeFirst}
            name={"firstName"}
            value={formValues.firstName}
            error={errorState.firstName}
          />
          <FormInput
            inputTag={"Last name"}
            handleChange={handleInputChangeFirst}
            name={"lastName"}
            value={formValues.lastName}
            error={errorState.lastName}
          />
          <FormInput
            inputTag={"User name"}
            handleChange={handleInputChangeFirst}
            name={"userName"}
            value={formValues.userName}
            error={errorState.userName}
          />
        </div>
        <button
          disabled={shouldDisableButton()}
          className="btn"
          onClick={handleButton}
        >
          Continue1 /3
        </button>
      </div>
    </div>
  );
};
