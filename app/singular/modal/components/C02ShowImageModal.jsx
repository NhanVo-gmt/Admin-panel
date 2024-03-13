"use client"

import Modal from "@/components/modal/Modal";
import Image from "next/image";
import React, { useState } from "react";

const C02ShowImageModal = () => {
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
        className="px-4 py-2 my-10 bg-blue-900 text-white rounded-lg"
        onClick={openShowModal}
      >
        Show Image Modal
      </button>
      <Modal
        isOpen={showModal}
        onDismiss={closeShowModal}
        title="Show Image Modal"
      >
        <div className="my-4 w-[600px] max-w-full">
          <Image src="/assets/images/sky.jpg" width={600} height={300} alt="Sky"/>
        </div>
      </Modal>
    </div>
  );
};

export default C02ShowImageModal;
