import { useState } from "react";
import moviesData from "../../data/moviesData";
import { Movie } from "../../Movie";
import { Carousel } from "../../components/Carousel/Carousel";
import Optimize from "../../components/Optimize/Optimize";

import "./HomePage.css";

export const HomePage = () => {
  const [hidden, setHidden] = useState(true);

  return (
    <div id="home-page">
      <Carousel />
      <section id="movies-section">
        <div id="control-bar">
          <button
            id="toggle-btn"
            onClick={() => setHidden(!hidden)}
            type="button"
          >
            Year
          </button>
          <Optimize />
        </div>
        <div id="movies-wrapper">
          {moviesData.map((m) => (
            <Movie
              key={m.id}
              id={m.id}
              title={m.title}
              year={m.year}
              genre={m.genre}
              cover={m.cover}
              imageAlt={m.imageAlt}
              imdbRating={m.imdbRating}
              runtime={m.runtime}
              hidden={hidden}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
