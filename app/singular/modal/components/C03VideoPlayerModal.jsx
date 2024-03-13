"use client";

import Modal from "@/components/modal/Modal";
import React, { useState } from "react";

const C03VideoPlayerModal = () => {
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
        className="px-4 py-2 mt-4 bg-blue-900 text-white rounded-lg"
        onClick={openShowModal}
      >
        Show Video Modal
      </button>
      <Modal
        isOpen={showModal}
        onDismiss={closeShowModal}
        title="Show Video Modal"
      >
        <div className="my-4 w-[600px] max-w-full">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/WXADtw7nnVU?si=hGQOdlb4m7uyReLQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};

export default C03VideoPlayerModal;
