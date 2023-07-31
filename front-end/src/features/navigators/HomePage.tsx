import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import Callback from '../callback/Callback';

const HomePage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inViewRef, inView] = useInView({
    triggerOnce: true, // Start playing only once when it comes into view
    threshold: 0.5, // Play video when it is at least 50% visible
  });

  // Track the video's playing state
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (inView && videoRef.current && !isPlaying) {
      // Play the video when it comes into view and is not already playing
      videoRef.current?.play().catch((error) => {
        // Autoplay failed, possibly due to browser restrictions.
        // We'll try playing again when the user interacts with the page.
        setIsPlaying(false);
      });
      setIsPlaying(true);
    } else if (!inView && isPlaying) {
      // Pause the video when it goes out of view and is playing
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  }, [inView, isPlaying]);

  return (
    <div>
      <div>
        <img
          className="d-block w-100" // Use w-100 to make the image responsive
          src={require('../../images/mypicture.png')}
          alt="background picture"
        />
      </div>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ position: 'relative', top: 50 }}
      >
        <div ref={inViewRef} style={{ maxWidth: '1000px', width: '100%' }}>
          <video
            ref={videoRef}
            width="100%"
            height="auto"
            controls
            controlsList="nodownload"
            muted
            playsInline
          >
            <source src={require('../../images/myvideo.mp4')} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Container>

      <Callback/>
    </div>
  );
};

export default HomePage;
