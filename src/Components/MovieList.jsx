import React from 'react';
import { Row } from "reactstrap";
import MovieDetails from './MovieDetails'


class MovieList extends React.Component {
    state = { }
    render() {
        return (<>
            <Row>
                <h3>{this.props.title}</h3>
            <Row>
                {this.props.movies.map((movie, index) =>
                <MovieDetails movie={movie} key={index} />
                )}
            </Row>
        </Row>
    </>);
}
}




export default MovieList;


//     state = {  
//         loading: true,
//         movies: [],
//     };

//     componentDidMount = async () => {
//         const response = await fetch ("http://www.omdbapi.com/?apikey=24ad60e9&s=harry%20potter", {

//         }
//             const data = await response.json();
//             this.setState({movie: data.results[0]});
//         )};

//     render() { 
//         return (<div className="row">
//                 {this.setState.movies
//                     .filter(movies => movies.Title.toLowerCase().includes(this.props.filter))
//                     .arr((movies, index) =>
//                         <div className="col-md-3" key={index} onClick={() => this.props.onMovieSelected(movie)}>
//                             <img src={movie.poster} style={{ maxWidth: "100%" }}></img>
//                             <span>{movie.Title}</span>
//                         </div>
//     </div>)}                                                  
//                 }






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
