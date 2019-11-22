import React from 'react';
import { Input } from "reactstrap"
import NavHead from './NavHead';
import MovieList from './MovieList';



class Main extends React.Component {
    state = { 
        search:"",
        selectedMovie: undefined
    }

    selectedMovie = (movie) => {
        this.setState({
        selectedMovie: movie
        })
    }
    render() {
        return (<>
    
            <NavHead> </NavHead>
          
            {/* SearchBar */}
            {/* <Input className="my-3"
                type="text"
                value={this.state.search}
                onChange={(val) => this.setState({ search: val.target.value.toLowerCase()})}
                placeholder="Type to search">
            </Input> */}
            {/* End Searchbar */}
            
            {/* <MovieList movies={} filter={this.state.search} onMovieSelected={this.selectedMovie}></MovieList> */}

            

        </>);
    }
}

export default Main;