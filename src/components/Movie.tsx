import React from 'react';
import './Movie.css';

function Movie(props:any) {
  const { program } = props;
  
  return (
    <div className="container" data-testid="movie">
        <div className="poster">
          <img className="poster-image" src={program.image}></img>
        </div>
        <div className="title">
          <h1>{program.title}</h1>
        </div>
        <div className="info">
          <span>Type: {program.type}</span>
          <span>Rating: {program.rating}</span>
          <span>Genre: {program.genre}</span>
          <span>Year: {program.year}</span>
          <span>Language: {program.language}</span>
        </div>
        <div className="description">{program.description}</div>  
    </div>
  );
}

export default Movie;
