import React, {Component} from 'react';
import './App.css';
import Movie from './Movie'

class App extends Component {
    state = {
        greeting: 'Hello!',
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                movies: [
                    {
                        title: "Matrix",
                        poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
                    }, {
                        title: "Metal",
                        poster: "https://posterspy.com/wp-content/uploads/2018/06/small-NEW-fmj-version-3-copy.jpg"
                    }, {
                        title: "Oldboy",
                        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
                    }, {
                        title: "Star Wars",
                        poster: "https://cdn.images.express.co.uk/img/dynamic/36/590x/Star-Wars-actor-slams-The-Last-Jedi-1134707.jpg?r=1559328214519"
                    }
                ]

            });
        }, 3000)
    }
     _renderMovies = () => {
        const movies = this.state.movies.map((movie, index) => <Movie title={movie.title} poster={movie.poster} key={index}/>)
         return movies;
    }

    render() {
        return (
            <div className="App">
                {this.state.movies ? this._renderMovies() : 'Loading'}
            </div>
        );
    }
}
export default App;
