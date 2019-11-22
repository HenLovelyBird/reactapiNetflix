import React from 'react';

class MovieList extends React.Component {
    state = {  
        loading: true,
        movies: [],
    };

    componentDidMount = async () => {
        const response = await fetch ("http://www.omdbapi.com/?apikey=24ad60e9&s=harry%20potter", {
            
        }
            const data = await response.json();
            this.setState({movie: data.results[0]});
        )};

    render() { 
        return (<div className="row">
                {this.setState.movies
                    .filter(movies => movies.Title.toLowerCase().includes(this.props.filter))
                    .arr((movies, index) =>
                        <div className="col-md-3" key={index} onClick={() => this.props.onMovieSelected(movie)}>
                            <img src={movie.poster} style={{ maxWidth: "100%" }}></img>
                            <span>{movie.Title}</span>
                        </div>
    </div>)}                                                  
                }
 
export default MovieList;




// class MovieList extends React.Component {
//     state = {
//         // loading: true;
//     }

//     componentDidMount = async () => {
//         let response = await fetch("http://www.omdbapi.com/?apikey=24ad60e9&s=harry%20potter", {
//             method: "GET",
//             body: JSON.stringify()
//         }

//         )}
   
//     render() {
