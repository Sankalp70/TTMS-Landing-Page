import React, { useState } from "react";
import "./main.css";
import thumbnail from "../../assests/thumbnail.jpg";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => setIsPlaying(true);

  return (
    <section className="video-section-modern">
      <div className="content-wrapper">
        {/* Text Section */}
        <div className="text-content">
          <h2 className="title">Transform Your Teaching</h2>
          <p className="subheading">
            Engage your students with expert-led courses designed for success.
          </p>
          <ul className="benefits">
            <li>💡 <strong>Dynamic Learning</strong></li>
            <li>⏰ <strong>Anytime Access</strong></li>
            <li>🎓 <strong>Expert Trainers</strong></li>
            <li>🛠️ <strong>Practical Tools</strong></li>
          </ul>
          <a href="/get-started" className="cta-button-modern">
            Start Now
          </a>
        </div>

        {/* Video Section */}
        <div className="video-container-modern">
          {!isPlaying ? (
            <div className="thumbnail-wrapper" onClick={handlePlayVideo}>
              <img src={thumbnail} alt="Thumbnail" className="thumbnail" />
              <div className="play-overlay">
                <span className="play-icon">▶</span>
              </div>
            </div>
          ) : (
            <iframe
              className="video-frame"
              src="https://www.youtube.com/embed/_OaSknBsV3E?autoplay=1"
              title="Teaching Video"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
