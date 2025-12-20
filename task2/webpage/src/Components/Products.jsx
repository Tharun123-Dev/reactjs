import "./Products.css"

const Products = () => {
  const items = [
    { id: 1, img: "prod1.jpg", name: "Berry Yogurt" },
    { id: 2, img: "prod2.jpg", name: "Vanilla Yogurt" },
    { id: 3, img: "prod3.jpg", name: "Chocolate Yogurt" }
  ];

  return (
    <section className="products">
      <h2>Our Products</h2>

      <div className="product-list">
        {items.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.img} alt={item.name} />
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
