import React from "react";

const DownloadResume = () => {
  const handleDownload = () => {
    const resumeUrl = "/Daniyal Malik_CV.pdf"; // Ensure this matches your file name
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Daniyal_Malik_Resume.pdf"; // Set the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
    onClick={handleDownload}
    className="px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-base md:text-lg rounded-full border-2 border-black shadow-md hover:scale-105 hover:shadow-lg hover:border-gray-900 transition-all duration-300 ease-in-out"
  >
    🚀 Download Resume
  </button>
  
  );
};

export default DownloadResume;
