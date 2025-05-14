const Loader = ({ scale = 1 }) => {
  return (
    <div
      className="m-auto"
      style={{
        transform: `scale(${scale})`,
      }}
    >
      <div className="camera-loader">
        <div
          aria-hidden="true"
          className="absolute top-1 right-1 w-3 h-3 bg-secondary rounded-full animate-blink"
        ></div>
      </div>
      <span className="opacity-80 dark:text-white text-black">Loading ...</span>
    </div>
  );
};

export default Loader;
