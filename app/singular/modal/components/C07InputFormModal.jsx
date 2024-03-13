"use client";

import Modal from "@/components/modal/Modal";
import React, { useState } from "react";

const C07InputFormModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const openShowModal = () => {
    setShowModal(true);
  };

  const closeShowModal = () => {
    setShowModal(false);
  };

  const onConfirm = () => {
    alert("You have confirm");
    setShowModal(false);
  };

  const onSendform = () => {
    if (fullName === '' || email === "")
    {
        alert("Please fill all the form");
        return;
    }
    else 
    {
        alert("Successfully send the form");
    }
  }

  return (
    <div>
      <button
        className="px-4 py-2 mt-4 bg-blue-900 text-white rounded-lg"
        onClick={openShowModal}
      >
        Input Form Modal
      </button>
      <Modal
        isOpen={showModal}
        onDismiss={closeShowModal}
        title="Input Form Modal"
      >
        <div className="my-4 w-[600px] max-w-full">
          <form className="flex flex-col gap-6 p-4">
            <div className="flex flex-col justify-center items-start gap-1">
              <label className="text-xl font-bold">Full Name</label>
              <input
                type="text"
                name="fullname"
                value={fullName}
                onChange={(e) => setFullName((prev) => (prev = e.target.value))}
                className="w-full outline-none border-2 border-blue-300 focus:border-blue-600 px-2 py-1 rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center items-start gap-1">
              <label className="text-xl font-bold">Email</label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail((prev) => (prev = e.target.value))}
                className="w-full outline-none border-2 border-blue-300 focus:border-blue-600 px-2 py-1 rounded-lg"
              />
            </div>
          </form>
        </div>
        <div className="my-4 flex flex-col justify-center items-center gap-y-10">
          <div className="flex justify-center items-center gap-10" >
            <button className="text-xl text-white font-bold bg-blue-400 hover:bg-blue-800 border-2 overflow-hidden p-2 rounded-lg" onClick={() => onSendform()}>Submit</button>
            <button className="text-xl text-white font-bold bg-red-400 hover:bg-red-800 border-2 overflow-hidden p-2 rounded-lg" onClick={() => closeShowModal()}>Close</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default C07InputFormModal;
