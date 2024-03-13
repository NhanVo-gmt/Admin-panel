"use client";

import Modal from "@/components/modal/Modal";
import React, { useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement
} from 'chart.js';
import {Line} from 'react-chartjs-2'
import { expenses, months } from "@/_mock/chartData";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const chartOptions = {
    responsive: true,
    plugins: {
        legend: false,
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
        },
        y: {
            min: 2000,
            max: 4000,
            ticks: {
                stepSize: 500,
                callback: (value) => Number(value) / 1000 + 'K'
            },
        },
    }
};

const chartData = {
    labels: months,
    datasets: [
        {
            label: 'expense',
            data: expenses,
            borderColor: "#ca3a12",
            backgroundColor: 'transparent',
            pointBorderColor: 'transparent',
            tension: 0.25,
        }
    ]
}

const C04ShowChartModal = () => {
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
        Show Chart Modal
      </button>
      <Modal
        isOpen={showModal}
        onDismiss={closeShowModal}
        title="Show Chart Modal"
      >
        <div className="my-4 w-[600px] max-w-full">
          <Line options={chartOptions} data={chartData} />
        </div>
      </Modal>
    </div>
  );
};

export default C04ShowChartModal;
