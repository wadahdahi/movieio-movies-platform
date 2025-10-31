import { useState, useEffect } from "react";
import "./Carousel.css";

type imageType = { image: string };

const images: imageType[] = [
  { image: "/images/Inception-movie-2010-cover.jpg" },
  { image: "/images/Interstellar-2014.jpg" },
  { image: "/images/pulp-fiction-1996-movie-cover.jpg" },
  { image: "/images/The-Matrix-1999.jpg" },
  { image: "/images/The-Dark-Knight-2008.jpg" },
];

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const intervalTime = 3000;

  const extendedSlides = [images[images.length - 1], ...images, images[0]];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, intervalTime);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleTransitionEnd = () => {
    if (currentIndex === extendedSlides.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(extendedSlides.length - 2);
    } else {
      setIsTransitioning(true);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => setIsTransitioning(true));
    }
  }, [isTransitioning]);

  return (
    <section
      id="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        id="movie-slider"
        onTransitionEnd={handleTransitionEnd}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? "transform 0.5s ease" : "none",
        }}
      >
        {extendedSlides.map((m, i) => (
          <div className="single-slide" key={i}>
            <div className="slider-text">
              <h2 className="slider-heading">Lorem, ipsum dolor sit amet</h2>
              <p className="slider-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                perferendis dolore dolorum! Totam dicta perferendis fuga sint
                corporis voluptate esse, vero tenetur, animi consequatur quia
                quos adipisci asperiores illum deserunt.
              </p>
            </div>
            <img className="slider-movie-cover-image" src={m.image} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};
