// cd-movie-app terminale yazdım
import { Link } from 'react-router-dom';
import React from 'react';

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className='movie_poster' key={index}>
          {movie.Poster !== 'N/A' ? (
            <Link to="/empty-page">
              <img src={movie.Poster} alt='movie' />
            </Link>
          ) : (
            <p className='poster_p' style={{ textAlign: "center" }}>Poster not available</p>
          )}
          <div className='H3' style={{ width: "200px", minHeight: "30px", overflow: "hidden" }}>
            <h3 style={{ padding: "5px" }}>{movie.Title}</h3>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
