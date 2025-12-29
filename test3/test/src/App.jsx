
import React from "react";
import ImageCard from "./Components/ImageCard";

function App() {
  const cardData = [
    {
      id: 1,
      title: "Nature1",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      id: 2,
      title: "Mountain Escape",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    {
      id: 3,
      title: "City Lights",
      image:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
    },
  ];

  return (
    <div style={styles.container}>
      {cardData.map((card) => (
        <ImageCard
          key={card.id}
          image={card.image}
          title={card.title}
        />
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "25px",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "40px",
  },
};

export default App;
