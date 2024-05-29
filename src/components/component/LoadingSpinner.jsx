const LoadingSpinner = () => {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-136px)]">
        <div className="w-12 h-12 border-8 border-dashed rounded-full animate-spin mt-5 border-blue-500"></div>
      </div>
    );
  };
  
  export default LoadingSpinner;