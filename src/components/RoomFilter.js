import React, { useState } from 'react';
import FilterList from './FilterList';
const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div>
      <span
        onClick={openModal}
        className="bg-[#280274]  text-white font-bold py-2 px-4 rounded ml-4 cursor-pointer hover:bg-[#FE7A36] hover:text-white"
      >
        Filters
      </span>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75"></div>
            <div className="relative bg-white rounded-lg w-1/2">
              <div className="p-8">
                <h1 className="text-xl font-bold mt-4">Filters</h1>
                <FilterList /> 
                <button
                  onClick={closeModal}
                  className="mt-10 bg-[#280274] hover:bg-[#280274] text-white font-bold py-2 px-4 rounded"
                >
                  Close 
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
