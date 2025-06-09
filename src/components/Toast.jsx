function Toast({ message }) {
    return (
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-4 py-2 rounded-lg shadow-lg z-50">
        {message}
      </div>
    );
  }
  
  export default Toast;
  