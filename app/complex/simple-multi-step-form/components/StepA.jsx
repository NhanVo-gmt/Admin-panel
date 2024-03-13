import React from "react";

const StepA = ({ formData, handleChangeInput, handleNextStep }) => {
  return (
    <div>
      <h1 className="mt-2 text-xl font-bold text-blue-900">
        Step A: Custom Identity Info
      </h1>
      <div className="my-2">
        <lable>First Name</lable>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={() => handleChangeInput()}
          className="w-full outline-none border border-gray-400 px-2 py-1 rounded-lg focus:border-blue-600"
        />
      </div>
      <div className="my-2">
        <lable>Last Name</lable>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={() => handleChangeInput()}
          className="w-full outline-none border border-gray-400 px-2 py-1 rounded-lg focus:border-blue-600"
        />
      </div>
      <div className="my-4 flex justify-end items-center">
        <button className="bg-green-400 px-4 py-2 rounded-xl" onClick={() => handleNextStep()}>
            Next
        </button>
      </div>
    </div>
  );
};

export default StepA;
