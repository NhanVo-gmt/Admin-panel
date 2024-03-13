import React from "react";

const StepB = ({
  formData,
  handleChangeInput,
  handleNextStep,
  handlePrevStep,
}) => {
  return (
    <div>
      <h1 className="mt-2 text-xl font-bold text-blue-900">
        Step B: Custom Business Info
      </h1>
      <div className="my-2">
        <lable>Business Name</lable>
        <input
          type="text"
          name="businessName"
          value={formData.businessName}
          onChange={() => handleChangeInput()}
          className="w-full outline-none border border-gray-400 px-2 py-1 rounded-lg focus:border-blue-600"
        />
      </div>
      <div className="my-2">
        <lable>Business Email</lable>
        <input
          type="text"
          name="businessEmail"
          value={formData.businessEmail}
          onChange={() => handleChangeInput()}
          className="w-full outline-none border border-gray-400 px-2 py-1 rounded-lg focus:border-blue-600"
        />
      </div>
      <div className="my-2">
        <lable>Business City</lable>
        <input
          type="text"
          name="businessCity"
          value={formData.businessCity}
          onChange={() => handleChangeInput()}
          className="w-full outline-none border border-gray-400 px-2 py-1 rounded-lg focus:border-blue-600"
        />
      </div>
      <div className="my-2">
        <lable>Business Website</lable>
        <input
          type="text"
          name="businessWebsite"
          value={formData.businessWebsite}
          onChange={() => handleChangeInput()}
          className="w-full outline-none border border-gray-400 px-2 py-1 rounded-lg focus:border-blue-600"
        />
      </div>

      <div className="my-4 flex justify-between items-center">
        <button
          className="bg-yellow-400 px-4 py-2 rounded-xl"
          onClick={() => handlePrevStep()}
        >
          Prev
        </button>
        <button
          className="bg-green-400 px-4 py-2 rounded-xl"
          onClick={() => handleNextStep()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepB;
