import "./Card.css";

const Card = ({ title, image, price, addToCart }) => {
  return (
    
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>₹ {price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Card;
