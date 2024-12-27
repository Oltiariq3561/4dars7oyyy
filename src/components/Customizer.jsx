import React, { useState } from "react";

function Customizer() {
  const [currentCard, setCurrentCard] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [finalCards, setFinalCards] = useState([]);

  const categories = {
    "Soch Turmagi": [
      { id: 1, text: "Santimetirovka", type: "hair" },
      { id: 2, text: "Kal", type: "hair" },
    ],
    Kiyim: [
      { id: 3, text: "zori", type: "clothing" },
      { id: 4, text: "skromnisi", type: "clothing" },
    ],
    Aksessuarlar: [
      { id: 5, text: "mishka", type: "accessory" },
      { id: 6, text: "klavyatura", type: "accessory" },
    ],
  };

  function dragStartHandle(e, card) {
    setCurrentCard(card);
  }

  function dragOverHandle(e) {
    e.preventDefault();
  }

  function dropHandle(e) {
    e.preventDefault();
    if (currentCard && !selectedItems.find((item) => item.id === currentCard.id)) {
      setSelectedItems((prevItems) => [...prevItems, currentCard]);
    }
  }

  function showFinalCards() {
    setFinalCards(selectedItems);
  }

  return (
    <div className="p-6 space-y-8">
      <div className="flex flex-col space-y-6">
        {Object.keys(categories).map((category) => (
          <div key={category}>
            <h3 className="text-xl font-bold mb-4">{category}</h3>
            <div className="flex gap-4">
              {categories[category].map((card) => (
                <div
                  key={card.id}
                  className="p-4 border-2 border-blue-500 bg-white text-center text-lg font-medium rounded-md shadow-md cursor-grab hover:bg-blue-100 transition"
                  draggable={true}
                  onDragStart={(e) => dragStartHandle(e, card)}
                >
                  {card.text}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        className="min-h-[150px] p-6 border-2 border-dashed border-gray-400 bg-gray-100 rounded-lg flex flex-wrap gap-4 items-center justify-center"
        onDragOver={dragOverHandle}
        onDrop={dropHandle}
      >
        {selectedItems.length === 0 ? (
          <p className="text-gray-500">Drop selected items here</p>
        ) : (
          selectedItems.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-blue-200 rounded-md shadow-md"
            >
              {item.text}
            </div>
          ))
        )}
      </div>

      <button
        className="px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition"
        onClick={showFinalCards}
      >
        ADD
      </button>

      {finalCards.length > 0 && (
        <div className="p-4 bg-gray-50 rounded-md shadow-md">
          <h3 className="text-lg font-bold mb-4">Card</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {finalCards.map((item) => (
              <div
                key={item.id}
                className="p-4 border border-gray-300 rounded-md shadow"
              >
                <h4 className="text-center">{item.text}</h4>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Customizer;
