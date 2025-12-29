import React from "react";
import "./ImageCard.css";

function ImageCard({ image, title }) {
  return (
    <div className="image-card">
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
    </div>
  );
}

export default ImageCard;
