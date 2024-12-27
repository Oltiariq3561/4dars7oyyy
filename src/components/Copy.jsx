import React, { useRef, useState } from 'react';

function Copy() {
  const inpRef = useRef();
  const [mass, setMass] = useState([]);

  function handleAdd(e) {
    e.preventDefault();
    const newValue = inpRef.current.value.trim();
    if (newValue !== "") {
      setMass(prevMass => [...prevMass, newValue]); 
      inpRef.current.value = "";
    }
  }

  function handleCopy(value) {
    navigator.clipboard.writeText(value)
      .then(() => alert(`Copied: ${value}`)); 
  }

  return (
    <div className="flex flex-col items-center mx-auto p-6 bg-gray-200 rounded-lg shadow-lg max-w-md">
      <form className="flex gap-4 mb-6 w-full" onSubmit={handleAdd}>
        <input
          className="border-2 border-gray-400 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder-gray-700"
          type="text"
          placeholder="Enter Tasks..."
          ref={inpRef}
        />
        <button
          className="border-2 p-3 rounded-md border-gray-400 bg-teal-500 text-white hover:bg-teal-600 transition duration-300"
          type="submit"
        >
          Add
        </button>
      </form>

      <div className="w-full">
        <ul className="space-y-4">
          {mass.length > 0 &&
            mass.map((value, index) => (
              <li
                key={index}
                onClick={() => handleCopy(value)}
                className="bg-gray-300 p-4 rounded-md shadow-sm cursor-pointer hover:bg-teal-50 hover:shadow-md transition"
              >
                {value}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Copy;
