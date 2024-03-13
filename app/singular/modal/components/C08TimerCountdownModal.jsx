"use client";

import Modal from "@/components/modal/Modal";
import React, { useEffect, useState } from "react";

const C08TimerCountdownModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [timerID, setTimerID] = useState('');

  const openShowModal = () => {
    setShowModal(true);
  };

  const closeShowModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (showModal)
    {
        let newTimer = setTimeout(() => {
            closeShowModal();
        }, 1000);
        setTimerID(newTimer);
    }
    
    // Clean up function after unmounting
    return () => {
        if (timerID)
        {
            clearTimeout(timerID);
            setTimerID('');
        }
    }
  }, [showModal])

  return (
    <div>
      <button
        className="px-4 py-2 mt-4 bg-blue-900 text-white rounded-lg"
        onClick={openShowModal}
      >
        Show SimpleWorld Modal
      </button>
      <h1>Timer ID: {timerID}</h1>
      <Modal
        isOpen={showModal}
        onDismiss={closeShowModal}
        title="Show Hello World Modal"
      >
        <div className="my-4 w-[600px] max-w-full">
          <h1 className="text-xl">
            This modal will be closed after 3 seconds.
          </h1>
        </div>
      </Modal>
    </div>
  );
};

export default C08TimerCountdownModal;
