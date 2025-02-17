import { useEffect, useState } from 'react';

const FlightDetailsModal = ({ selectedFlight }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  // Sayfa yüklenirken modal'ı aç
  useEffect(() => {
    if (selectedFlight) {
      openModal();
    }
  }, [selectedFlight]);

  return (
    <div
      className={`fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50 ${isOpen ? 'block' : 'hidden'}`}
    >
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-semibold">Check Details</h4>
          <button
            type="button"
            className="text-gray-500 text-2xl"
            onClick={closeModal}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <div className="modal-body">
          {selectedFlight ? (
            <>
              <p className="text-gray-700 mb-2"><strong>Airline:</strong> airline</p>
              <p className="text-gray-700 mb-2"><strong>Price:</strong> price</p>
              <p className="text-gray-700 mb-2"><strong>Arrival Time:</strong> arrivalTime</p>
            </>
          ) : (
            <p className="text-gray-500">No details available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlightDetailsModal;