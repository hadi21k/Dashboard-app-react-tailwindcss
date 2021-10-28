import React, { useRef, useEffect } from "react";

const HeaderForm = () => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };
  return (
    <form onSubmit={handleSubmit} className="h-full">
      <input
        ref={inputRef}
        type="text"
        placeholder="Type Here"
        className="h-full px-2 py-3 font-semibold text-gray-700 placeholder-gray-700 transition-all duration-500 border border-gray-400 rounded-lg outline-none focus:px-4 "
      />
    </form>
  );
};

export default HeaderForm;
