import React from 'react';
import '../styles/PodcastCard.css';

const PodcastCard = ({ image, title, description, age }) => {
  return (
    <div className="podcast-card">
      <div className="podcast-card__image">
        <img src={image} alt={title} />
      </div>
      <h3 className="podcast-card__title">{title}</h3>
      <p className="podcast-card__description">{description}</p>
      <span className="podcast-card__age">{age}+</span>
    </div>
  );
};

export default PodcastCard; 