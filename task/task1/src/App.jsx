import Header from "./header";
import Content from "./Content";
import Footer from "./Footer";



function App() {
  return (
    <div>
      <h1>Media Gallery</h1>

      <img src="/src/assets/bea4.jpg" width="300" />

      <br /><br />

      <audio controls>
        <source src="/src/assets/audio.mp3" type="audio/mp3" />
      </audio>

      <br /><br />

      <video controls width="400">
        <source src="/src/assets/video.mp4" type="video/mp4" />
      </video>

      <br /><br />
      <div>
      <h1>React Learning Media</h1>

      <img src="/src/assets/download.png" width="250" />

      <br /><br />

      <iframe
        width="400"
        height="250"
        src="https://www.youtube.com/embed/bMknfKXIFA8"
        title="React Tutorial"
      ></iframe>
    </div>



      <br /><br />
      <div>
         <Header />
          <Content />
          <Footer />
      </div>
  
      



    </div>
    



  );


}

export default App;

