import React from 'react';
import PropTypes from 'prop-types'
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css';

const Movie = ({title, poster, genres, synopsis}) => {
    return (
        <div className="Movie">
            <div className="Movie__Columns">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Columns">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index}/>)}
                </div>
                <p className="Movie__Synopsis">
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='2'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />
                </p>
            </div>
        </div>
    );
};
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
};

const MovieGenre = ({genre}) => {
    return (
        <span className="Movie_Genre">{genre}</span>
    )
};
MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired

};

const MoviePoster = ({poster, alt}) => {
    return (
        <img src={poster} className="Movie__Poster" alt={alt} title={alt}/>
    );
};
MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired

};

export default Movie;

