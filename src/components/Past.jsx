import React, { useRef, useState } from 'react';

function Past() {
  let inpRef = useRef();
  const [mass, setMass] = useState([]);
  const [text, setText] = useState("");

  console.log(mass);

  function handeleAdd(e) {
    e.preventDefault();
    const value = inpRef.current.value.trim();
    if (value !== "") {
      setMass([...mass, value]);
      inpRef.current.value = "";
    }
  }

  function handleCopy(value) {
    navigator.clipboard.writeText(value)
      .then(() => alert(`Matn nusxalandi: ${value}`))
      .catch(() => alert("Nusxalashda xatolik yuz berdi!"));
  }

  function handleTextareaChange(e) {
    const newText = e.target.value.trim();
    setText(newText);

    if (mass.includes(newText) && newText !== "") {
      alert("Bu matn ro'yxatda mavjud!");
    }
  }

  return (
    <div className="flex flex-col items-center mx-auto p-6 space-y-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-lg shadow-xl">
      <form className="flex gap-3 mb-6">
        <input
          className="border-2 border-gray-700 rounded-lg p-3 w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          type="text"
          placeholder="Enter Tasks..."
          ref={inpRef}
        />
        <button
          className="p-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
          onClick={handeleAdd}
        >
          Add
        </button>
      </form>

      <div className="w-full">
        <ul className="space-y-4">
          {mass.length > 0 &&
            mass.map(function (value, index) {
              return (
                <div key={index} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition">
                  <li
                    onClick={() => handleCopy(value)}
                    className="text-lg font-medium text-gray-800 cursor-pointer hover:text-indigo-600"
                  >
                    {value}
                  </li>
                </div>
              );
            })}
        </ul>
      </div>

      <div className="w-full">
        <textarea
          value={text}
          onChange={handleTextareaChange}
          placeholder="Enter text..."
          className="mt-4 w-64 p-4 rounded-xl border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        ></textarea>
      </div>
    </div>
  );
}

export default Past;
