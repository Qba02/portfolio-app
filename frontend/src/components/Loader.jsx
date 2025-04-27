import React from "react";

const Loader = () => {
  return (
    <div className="bg-dark m-auto w-full h-screen flex flex-col justify-center items-center p-6 z-20">
      <div className="camera-loader">
        <div
          aria-hidden="true"
          className="absolute top-1 right-1 w-3 h-3 bg-secondary rounded-full animate-blink"
        ></div>
      </div>
      <span className="opacity-80 text-white">Loading ...</span>
    </div>
  );
};

export default Loader;
