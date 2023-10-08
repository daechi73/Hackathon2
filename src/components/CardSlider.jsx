import React, { useState } from "react";
import "../style/CardSlider.css"; // Create a CSS file for styling

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex(currentIndex === cards.length - 1 ? 0 : currentIndex + 1);
  };

  const prevCard = () => {
    setCurrentIndex(currentIndex === 0 ? cards.length - 1 : currentIndex - 1);
  };

  const cards = ["Card 1", "Card 2", "Card 3"]; // Add more cards as needed

  return (
    <div className="card-slider">
      <button className="prev-button card-slider-btn" onClick={prevCard}>
        Previous
      </button>
      <div
        className="cards"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {cards.map((card, index) => (
          <div className="card" key={index}>
            {card}
          </div>
        ))}
      </div>

      <button className="next-button card-slider-btn" onClick={nextCard}>
        Next
      </button>
    </div>
  );
};

export default CardSlider;
