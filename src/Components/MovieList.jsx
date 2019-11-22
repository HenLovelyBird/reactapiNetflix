import React from 'react';

class MovieList extends React.Component {
    state = {
        search: "",
        selectedMovie: undefined
      }

      selectMovie = (book) =>{
        this.setState({
            selectedMovie: movie
        })
      }
    render() {
        return (<div className="row">
        {this.props.movies
            .filter(movie => movie.Title.toLowerCase().includes(this.props.filter))
            .map((movie, index) => 
            <div className="col-md-3" key={index} onClick={()=> this.props.onMovieSelected(movie)}>
                <img src={movie.poster} style={{maxWidth:"100%"}}></img>
                <span>{movie.Title}</span>
            </div>
        )}
    </div> );
        );
    }
}

export default MovieList;