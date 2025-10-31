import type { MovieType } from "./data/moviesData";
import "./Movie.css";

type MovieProps = MovieType & { hidden: boolean };

export const Movie = ({
  cover,
  imageAlt,
  title,
  year,
  runtime,
  imdbRating,
  hidden,
}: MovieProps) => {
  return (
    <article id="movie-card">
      <div id="card-upper">
        <p id="imdb-rate">
          {imdbRating}
          <img id="rate-icon" src="/icons/star-02.svg" alt="" />
        </p>
        <div id="movie-image-wrapper">
          <img id="movie-image" src={cover} alt={imageAlt} />
        </div>
      </div>
      <div id="card-lower">
        <p id="movie-title">
          {title}
          <span id="movie-release">{!hidden && <span>{year}</span>}</span>
        </p>

        <p id="movie-runtime">{runtime}</p>
      </div>
    </article>
  );
};
