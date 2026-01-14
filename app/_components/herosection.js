import React, { useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo } from "@cloudinary/react";

const CloudinaryVideo = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dl21jdd1c",
    },
  });

  // Use the public ID of your video asset in Cloudinary
  const myVideo = cld.video(
    "att.Q5AAHQyilfp2m4xcNSnwBsvZCpWCR3G1JpKhwQGAr0U_dklzkq"
  );

  return (
    <AdvancedVideo
      className={`hero-video ${isVideoLoaded ? "loaded" : ""}`}
      cldVid={myVideo}
      controls={false} // Optional: hide controls for a seamless background video
      autoPlay
      muted
      loop
      playsInline // Recommended for mobile devices to prevent forced fullscreen
      onLoadedData={() => setIsVideoLoaded(true)}
    />
  );
};

export default function HeroSection() {
  return (
    <>
      <div className="hero-container">
        {/* Video Background */}
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`hero-video ${isVideoLoaded ? "loaded" : ""}`}
        >
          <source
            src="https://res.cloudinary.com/dl21jdd1c/video/upload/v1768211167/att.Q5AAHQyilfp2m4xcNSnwBsvZCpWCR3G1JpKhwQGAr0U_dklzkq.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video> */}
        <CloudinaryVideo />

        {/* Gradient Overlay */}
        <div className="hero-overlay" />

        {/* Content */}
        <div className="hero-content">
          <div className="hero-text-container">
            {/* Main Heading */}
            <h1 className="hero-heading">
              Where History
              <span className="hero-heading-gradient">Meets Artistry</span>
            </h1>

            {/* Subheading */}
            <p className="hero-subheading">
              Discover exceptional antiques, from sacred Filipino bulul carvings
              to timeless artifacts. Each piece tells a story centuries in the
              making.
            </p>

            {/* CTA Buttons */}
            {/* <div className="hero-buttons">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-secondary">Learn More</button>
            </div> */}
          </div>

          {/* Scroll Indicator */}
          <div className="scroll-indicator">
            <div className="scroll-indicator-box">
              <div className="scroll-indicator-dot" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .hero-container {
          position: relative;
          height: calc(100vh - 125px);
          width: 100%;
          overflow: hidden;
          margin-top: 125px;
        }
        @media (max-width: 425px) {
            .hero-container{
                    margin-top: 104px;
            }
        }
        .hero-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .hero-video.loaded {
          opacity: 1;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.6) 0%,
            rgba(0, 0, 0, 0.4) 50%,
            rgba(0, 0, 0, 0.7) 100%
          );
        }

        .hero-content {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 1rem;
        }

        .hero-text-container {
          max-width: 64rem;
          animation: fadeIn 1s ease-out;
        }

        .hero-heading {
          font-size: 3rem;
          font-weight: bold;
          color: white;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .hero-heading-gradient {
          display: block;
          background: linear-gradient(to right, #60a5fa, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subheading {
          font-size: 1.25rem;
          color: #e5e7eb;
          margin-bottom: 2rem;
          max-width: 42rem;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          justify-content: center;
          align-items: center;
        }

        .btn {
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          min-width: 160px;
        }

        .btn:hover {
          transform: scale(1.05);
        }

        .btn-primary {
          background-color: white;
          color: black;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .btn-primary:hover {
          background-color: #f3f4f6;
        }

        .btn-secondary {
          background-color: transparent;
          color: white;
          border: 2px solid white;
        }

        .btn-secondary:hover {
          background-color: white;
          color: black;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          animation: bounce 2s infinite;
        }

        .scroll-indicator-box {
          width: 1.5rem;
          height: 2.5rem;
          border: 2px solid white;
          border-radius: 1.25rem;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 0.5rem;
        }

        .scroll-indicator-dot {
          width: 0.375rem;
          height: 0.75rem;
          background-color: white;
          border-radius: 0.375rem;
          animation: pulse 2s infinite;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-10px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        /* Responsive Design */
        @media (min-width: 640px) {
          .hero-heading {
            font-size: 3.75rem;
          }

          .hero-subheading {
            font-size: 1.5rem;
          }

          .hero-buttons {
            flex-direction: row;
          }
        }

        @media (min-width: 1024px) {
          .hero-heading {
            font-size: 4.5rem;
          }

          .hero-content {
            padding: 0 2rem;
          }
        }
      `}</style>
    </>
  );
}
