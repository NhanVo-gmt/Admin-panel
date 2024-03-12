import React, { useEffect, useState } from "react";

const initialFormData = {
  firstName: "",
  lastName: "",
  businessName: "",
  businessCity: "",
  businessWebsite: "",
  businessEmail: "",
  incomePerMonth: 0,
  agreeToTerms: false,
};

const stepsArray = ["A", "B", "C", "D"];

const SimpleMultiStepForm = ({ showStepNumber }) => {
  const [step, setStep] = useState("A");
  const [formData, setFormData] = useState(initialFormData);

  const handleNextStep = () => {
    if (step === "A") setStep("B");
    else if (step === "B") setStep("C");
    else if (step === "C") setStep("D");
  };

  const handlePrevStep = () => {
    if (step === "D") setStep("C");
    else if (step === "C") setStep("B");
    else if (step === "B") setStep("A");
  };

  //update our form data
  const handleChangeInput = (event) => {
    const fieldName = event.target.name;
    let fieldValue;
    if (fieldName === "agreeToTerms") fieldValue = event.target.checked;
    else fieldValue = event.target.value;

    setFormData({ ...formData, [fieldName]: fieldValue });
  };

  // handle submit form
  const handleSubmitFormData = () => {
    if (!formData.agreeToTerms) {
      alert("Error!!! You must agree to terms of service");
    } else {
      setStep("Final");
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const renderTopStepNumbers = () => {
    if (!showStepNumber || step === "Final") {
      return null;
    }

    return (
      <section className="mt-2 mb-4 flex justify-between">
        {stepsArray.map((item) => (
          <div
            key={item}
            className={`w-8 h-8 flex justify-between items-center border-2 border-gray-600 rounded-full cursor-pointer ${
              step === item ? "bg-blue-500" : ""
            }`}
            onClick={() => setStep(item)}
          >
            {item}
          </div>
        ))}
      </section>
    );
  };

  return (
  <div className='w-[600px] max-w-full px-6 py-1 mx-auto rounded-lg border-2 border-dotted border-sky-300'>
    {renderTopStepNumbers()}
  </div>)
};

export default SimpleMultiStepForm;
