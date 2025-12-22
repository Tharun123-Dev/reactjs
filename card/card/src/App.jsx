import { useState } from "react";
import Navbar from "./Components/Navbar";
import Cardd from "./Components/Cardd"
import Card from "./Components/Card";
  import b1 from "./assets/b1.webp";
  import b2 from "./assets/b2.jpg";
  import b3 from "./assets/b3.jpg";
  import b4 from "./assets/b4.jpg";
  import b5 from "./assets/b5.jpg";
  import b6 from "./assets/b6.jpg";
  import b7 from "./assets/b7.jpg";
  import b8 from "./assets/b8.png";
  import b9 from "./assets/b9.jpg";
  import b10 from "./assets/b10.png";

  

import Footer from "./Components/Footer";
import MediaSection from "./Components/MediaSection";




const App = () => {
  const [cart, setCart] = useState(0);

  const books = [
    { id: 1, title: "Atomic Habits", price: 399, image: b1 },
    { id: 2, title: "Rich Dad Poor Dad", price: 299, image: b2 },
    { id: 3, title: "Think & Grow Rich", price: 349, image: b3 },
    { id: 4, title: "The Alchemist", price: 249, image: b4 },
    { id: 5, title: "Ikigai", price: 199, image: b5 },
    { id: 6, title: "Deep Work", price: 379, image: b6 },
    { id: 7, title: "Psychology of Money", price: 329, image: b7 },
    { id: 8, title: "Start With Why", price: 289, image: b8 },
    { id: 9, title: "Subconscious Mind", price: 259, image: b9 },
    { id: 10, title: "Zero to One", price: 319, image: b10 },
    { id: 11, title: "The Power of Habit", price: 279, image: b1 },
  ];

  return (
    <>
      <Navbar cartCount={cart} />
      <Cardd/>

      <div className="cards-container">
        {books.map(book => (
          <Card
            key={book.id}
            title={book.title}
            price={book.price}
            image={book.image}
            addToCart={() => setCart(cart + 1)}
          />
        ))}
      </div>
      <MediaSection/>
      <Footer />
    </>
  );
};

export default App;
