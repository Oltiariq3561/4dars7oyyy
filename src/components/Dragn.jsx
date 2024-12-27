import React, { useContext, useState, useMemo } from 'react';
import { MyDragonContext } from '../App';

function Dragn() {
  const { cardList, setCardList } = useContext(MyDragonContext);
  const [currentCard, setCurrentCard] = useState(null);
  const sortedCardList = useMemo(() => {
    return [...cardList].sort((a, b) => a.order - b.order);
  }, [cardList]);

  function dragStartHandle(e, card) {
    setCurrentCard(card);
  }

  function dragOverHandle(e) {
    e.preventDefault();
  }

  function dropHandle(e, card) {
    e.preventDefault();
    if (currentCard && currentCard.id !== card.id) {
      setCardList((prevList) =>
        prevList.map((c) => {
          if (c.id === card.id) {
            return { ...c, order: currentCard.order };
          }
          if (c.id === currentCard.id) {
            return { ...c, order: card.order };
          }
          return c;
        }).sort((a, b) => a.order - b.order)
      );
    }
  }

  return (
    <div className="flex gap-8 mx-auto p-6 justify-center items-center">
      {sortedCardList.length > 0 &&
        sortedCardList.map((value) => (
          <div
            key={value.id}
            className="flex-shrink-0"
            draggable={true}
            onDragStart={(e) => dragStartHandle(e, value)}
            onDragOver={dragOverHandle}
            onDrop={(e) => dropHandle(e, value)}
          >
            <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl cursor-grab">
              <h2 className="text-white text-xl font-bold text-center">{value.text}</h2>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Dragn;
