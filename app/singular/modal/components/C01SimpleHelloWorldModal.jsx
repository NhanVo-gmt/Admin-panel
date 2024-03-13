"use client";

import Modal from "@/components/modal/Modal";
import React, { useState } from "react";

const C01SimpleHelloWorldModal = () => {
  const [showModal, setShowModal] = useState(false);

  const openShowModal = () => {
    setShowModal(true);
  };

  const closeShowModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button
        className="px-4 py-2 bg-blue-900 text-white rounded-lg"
        onClick={openShowModal}
      >
        Show SimpleWorld Modal
      </button>
      <Modal
        isOpen={showModal}
        onDismiss={closeShowModal}
        title="Show Hello World Modal"
      >
        <div className="my-4 w-[600px] max-w-full">
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default C01SimpleHelloWorldModal;
