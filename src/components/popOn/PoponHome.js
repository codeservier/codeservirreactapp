import React from 'react';
import popimage from '../../assets/backgrounds_images/Internship.jpg';

const Popup = ({ onClose }) => {

  // CSS for the blinking effect
  const styles = `
    .blink-button {
      animation: blink 2s infinite;
    }

    @keyframes blink {
      0%, 49% {
        opacity: 1;
      }
      50%, 100% {
        opacity: 0;
      }
    }
  `;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <style>{styles}</style>
      <div 
        className="relative md:w-full w-10/12 md:h-80 h-64 max-w-xl mx-auto p-6 rounded-lg shadow-lg overflow-hidden"
        style={{ 
          backgroundImage: `url(${popimage})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center text-white p-6">
          <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 text-[#26baf6] font-lilita">INTERNSHIP PROGRAM</h1>
          <p className="text-sm sm:text-base mb-4">
            Join our internship program and gain valuable experience in the field.
          </p>
          <button 
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 text-sm sm:text-base blink-button"
            onClick={() => window.location.href = '/InternshipForm'}
          >
            Fill the Form
          </button>
        </div>
        <button 
          className="absolute top-2 right-2 text-white hover:text-gray-900 z-10"
          onClick={onClose}
        >
          ✖
        </button>
      </div>
    </div>
  );
}

export default Popup;