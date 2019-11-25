import React from 'react';
import {Container} from "reactstrap"
import MovieList from './MovieList';
import NavHead from './NavHead';
import TestLifeCycle from './TestLifeCycle';



class  Main extends React.Component {
    state = { //
        movies: []
     }

     searchMovies = async (query) => {
        let response = await fetch ("http://www.omdbapi.com/?apikey=24ad60e9&s=" + query);
        let movieResult = await response.json();
        this.setState({
            movies: [...this.state.movies, { items: movieResult.Search, title: query + " search result" }] 
        });
     }

     render() { 
        return (<>
        <TestLifeCycle/>

        <NavHead onSearch={this.searchMovies} />     
     
     
            
        <Container flex>
            {this.state.movies.map((movie, index)=>
                <MovieList movies={movie.items} key={index} title={movie.Title} /> )}
            {/* <MovieList movies={this.state.movies} title="Harry Potter"></MovieList> */}
            {/* {this.state.movies.map((movie, index) => <img className="col-md-3" alt={"movie poster for" + movie.Title} src={movie.Poster} key={index} />)} */}
        </Container>
        </>); 
    }

     componentDidMount = async () => {
        let movieTitles = ["Harry Potter", "James Bond", "Star Wars", "Lord of the Rings"];

            movieTitles.forEach(async movie => {
                let response = await fetch ("http://www.omdbapi.com/?apikey=24ad60e9&s=" + movie);
                let movieResult = await response.json();
                this.setState({
                    movies: [...this.state.movies, { items: movieResult.Search, title: movie }] 
                });
            })

        }
    }
    

export default Main;