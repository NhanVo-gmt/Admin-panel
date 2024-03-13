"use client"

import Modal from "@/components/modal/Modal";
import React, { useState } from "react";

const C06ConfirmationModal = () => {
  const [showModal, setShowModal] = useState(false);

  const openShowModal = () => {
    setShowModal(true);
  };

  const closeShowModal = () => {
    setShowModal(false);
  };

  const onConfirm = () => {
    alert('You have confirm')
    setShowModal(false);
  }

  return (
    <div>
      <button
        className="px-4 py-2 mt-4 bg-blue-900 text-white rounded-lg"
        onClick={openShowModal}
      >
        Comfirmation Modal
      </button>
      <Modal
        isOpen={showModal}
        onDismiss={closeShowModal}
        title="Comfirmation Modal"
      >
        <div className="my-4 flex flex-col justify-center items-center gap-y-10">
          <h1 className="text-2xl font-bold">Are you sure ?</h1>
          <div className="flex justify-center items-center gap-4" >
            <button className="text-xl text-white font-bold bg-blue-400 hover:bg-blue-800 border-2 overflow-hidden p-2 rounded-lg" onClick={() => onConfirm()}>Confirm</button>
            <button className="text-xl text-white font-bold bg-red-400 hover:bg-red-800 border-2 overflow-hidden p-2 rounded-lg" onClick={() => closeShowModal()}>Dismiss</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default C06ConfirmationModal;
