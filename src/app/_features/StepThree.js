"use client";
import { useState } from "react";
import { FormInput } from "../_components/form-input";
export const StepThree = (props) => {
  const { handleNextStep } = props;
  const { handleBackStep } = props;
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
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
      formValues.firstName.length === 0 || formValues.lastName.length === 0
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
          {/* <FormInput
            inputTag={"First name"}
            handleChange={handleInputChangeFirst}
            name={"firstName"}
            value={formValues.firstName}
            error={errorState.firstName}
          /> */}
        </div>
        <div>
          <button onClick={handleBackStep}>Back</button>
          <button
            disabled={shouldDisableButton()}
            className="btn"
            onClick={handleButton}
          >
            Continue3 /3
          </button>
        </div>
      </div>
    </div>
  );
};
