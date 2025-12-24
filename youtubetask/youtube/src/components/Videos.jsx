import v1 from "../videos/v1.mp4";
import v2 from "../videos/v2.mp4";
import v3 from "../videos/v3.mp4";
import v4 from "../videos/v4.mp4";
import v5 from "../videos/v5.mp4";
import v6 from "../videos/v6.mp4";
import v7 from "../videos/v7.mp4";
import v8 from "../videos/v8.mp4";
import v9 from "../videos/v9.mp4";

const videos = [v1,v2,v3,v4,v5,v6,v7,v8,v9];

function Videos() {
  return (
    <div className="video-grid">
      {videos.map((vid, i) => (
        <div className="video-card" key={i}>
          <video controls>
            <source src={vid} type="video/mp4" />
          </video>
          <h4>Sample Video Title {i + 1}</h4>
          <p className="channel">Channel Name</p>
          <span className="meta">100K views • 2 days ago</span>
        </div>
      ))}
    </div>
  );
}

export default Videos;
