import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const renderMovies = movies.map(movie =>
    <li><Link key={movie.id} to={`/movies/${movie.id}`}>{movie.title}</Link></li>
  );

  return (
    <div>
      <ul>
      {renderMovies}
    </ul>
    </div>
  );
};

export default MoviesList;
