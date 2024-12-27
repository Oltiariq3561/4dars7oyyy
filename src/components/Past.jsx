import React, { useRef, useState } from 'react';

function Past() {
    let inpRef = useRef();
    const [mass, setMass] = useState([]);
    const [text, setText] = useState("");

    console.log(mass);

    function handeleAdd(e) {
        e.preventDefault();
        if (inpRef.current.value.trim() !== "") {
            setMass([...mass, inpRef.current.value]);
            inpRef.current.value = "";
        }
    }

    function handleCopy(value) {
        navigator.clipboard.writeText(value)
            .then(() => alert(value));
        // .catch(() => alert("xatolik"));

    }

    function handleTextareaChange(e) {
        setText(e.target.value);

        if (mass.includes(e.target.value.trim())) {
            alert("Bu matn ro'yxatda mavjud!");
        }
    }

    return (
        <div className="flex flex-col items-center mx-auto p-4">
            <form className="flex gap-2 mb-4">
                <input
                    className="border-2 border-black rounded-md p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="Enter Tasks..."
                    ref={inpRef}
                />
                <button
                    className="border-2 p-2 rounded-md border-black bg-blue-500 text-white hover:bg-blue-600 transition"
                    onClick={handeleAdd}
                >
                    Click
                </button>
            </form>

            <div className="w-full">
                <ul className="space-y-2">
                    {mass.length > 0 &&
                        mass.map(function (value, index) {
                            return (
                                <div key={index} className="bg-gray-100 p-2 rounded-md shadow">
                                    <li onClick={() => handleCopy(value)}>{value}</li>
                                </div>
                            );
                        })}
                </ul>
            </div>

            <div>
                <textarea
                    value={text}
                    onChange={handleTextareaChange}
                    placeholder='Enter text...'
                    className='mt-2 border-2 border-black rounded-xl'
                ></textarea>
            </div>
        </div>
    );
}

export default Past;
