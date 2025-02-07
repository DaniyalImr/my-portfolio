import React from "react";

const DownloadResume = () => {
  const handleDownload = () => {
    const resumeUrl = "/Daniyal_Malik_CV.pdf"; // Ensure this matches your file name
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
    className="px-8 py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg md:text-xl rounded-full border-4 border-black shadow-lg hover:scale-105 hover:shadow-2xl hover:border-gray-900 transition-all duration-300 ease-in-out"
  >
    🚀 Download Resume
  </button>
  
  );
};

export default DownloadResume;
