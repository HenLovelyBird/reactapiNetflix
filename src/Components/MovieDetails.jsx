import React from 'react';
// import { emptyStatement } from '@babel/types';


class MovieDetails extends React.Component {
    state = {
    
    }
    

      render() {

        let movie = this.props.movie;

        return (
            <div className="col-md-3">
                <img style={{width: "100%"}} 
                src={movie.Poster} 
                alt={"movie poster for" + movie.Title} />
                <span>{movie.Title}</span> 
            </div>
            )}
    
}

export default MovieDetails;