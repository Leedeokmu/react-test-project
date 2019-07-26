import React from 'react';
import PropTypes from 'prop-types'
import './Movie.css';

const Movie = ({title, poster}) => {
    return (
        <div>
            <h1>{title}</h1>
            <MoviePoster poster={poster}/>
        </div>
    )
}
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

const MoviePoster = ({poster}) => {
    return (
        <img src={poster} alt=""/>
    );
}
MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired

}

export default Movie;

