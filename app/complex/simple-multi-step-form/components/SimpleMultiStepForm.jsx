import React, { useEffect, useState } from 'react'

const initialFormData = {
    firstName: '',
    lastName: '',
    businessName: '',
    businessCity: '',
    businessWebsite: '',
    businessEmail: '',
    incomePerMonth: 0,
    agreeToTerms: false,
};

const stepsArray = ['A', 'B', 'C', 'D'];

const SimpleMultiStepForm = ({showStepNumber}) => {
    const [step, setStep] = useState('A');
    const [formData, setFormData] = useState(initialFormData);

    const handleNextStep = () => {
        if (step === 'A') setStep('B')
        else if (step === 'B') setStep('C')
        else if (step === 'C') setStep('D')
    }

    const handlePrevStep = () => {
        if (step === 'D') setStep('C')
        else if (step === 'C') setStep('B')
        else if (step === 'B') setStep('A')
    }

    //update our form data
    const handleChangeInput = (event) => {
        const fieldName = event.target.name;
        let fieldValue;
        if (fieldName === 'agreeToTerms')
            fieldValue = event.target.checked;
        else 
            fieldValue = event.target.value;

        setFormData({...formData, [fieldName]: fieldValue})
    }

    // handle submit form
    const handleSubmitFormData = () => {
        if (!formData.agreeToTerms) {
            alert ('Error!!! You must agree to terms of service')
        }
        else 
        {
            setStep('Final');
        }
    };

    useEffect(() => {
        console.log(formData);
    }, [formData])


  return (
    <div>SimpleMultiStepForm</div>
  )
}

export default SimpleMultiStepForm