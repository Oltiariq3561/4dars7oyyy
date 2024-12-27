import React, { useContext, useState } from 'react';
import { MyDragonContext } from '../App';

function Dragn() {
  const { cardList, setCardList } = useContext(MyDragonContext);
  const [currentCard, setCurrentCard] = useState(null);

  function dragStartHandle(e, card) {
    setCurrentCard(card);
  }

  function dragOverHandle(e) {
    e.preventDefault(); 
  }

  function dropHandle(e, card) {
    e.preventDefault();

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

  const sortCard = (a, b) => a.order - b.order;

  return (
    <div className='flex gap-16 mx-auto'>
      {cardList.length > 0 &&
        cardList.sort(sortCard).map((value) => (
          <div key={value.id}>
            <h2
              className='p-5 border-2 max-w-sm'
              draggable={true}
              onDragStart={(e) => dragStartHandle(e, value)}
              onDragOver={dragOverHandle}
              onDrop={(e) => dropHandle(e, value)}
            >
              {value.text}
            </h2>
          </div>
        ))}
    </div>
  );
}

export default Dragn;
