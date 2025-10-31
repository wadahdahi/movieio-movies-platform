import { useState, useEffect } from "react";
import "./Carousel.css";

type imageType = {
  image: string;
};
const images: imageType[] = [
  { image: "/public/images/Inception-movie-2010-cover.jpg" },
  { image: "/public/images/Interstellar-2014.jpg" },
  { image: "/public/images/pulp-fiction-1996-movie-cover.jpg" },
  { image: "/public/images/The-Matrix-1999.jpg" },
  { image: "/public/images/The-Dark-Knight-2008.jpg" },
];

export const Carousel = () => {
  //   const [currentIndex, setCurrentIndex] = useState(1);

  const extendedSlides = [images[images.length - 1], ...images, images[0]];

  return (
    <section id="carousel">
      <div id="movie-slider">
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
