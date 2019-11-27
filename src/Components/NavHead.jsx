import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';

class NavHead extends React.Component {
    state = { 
            searchMovies: "",
            searchString: ""
            
    }
    searchChange = ev => {
        this.setState({
          searchString: ev.target.value.toLowerCase()
        });
      };

    searchMovies = async (query) => {
        let response = await fetch("http://www.omdbapi.com/?apikey=24ad60e9&s=" + query);
        let movieResult = await response.json();
        this.setState({
            movies: [...this.state.movies, { items: movieResult.Search, title: query + " search result" }]
        });
    }
    render() {
        return (
        <Nav className="ml-5 nav bg-dark">
            <NavItem>
                <img src="src/Images/nflixLogo.png" alt="netflix logo"/> 
            </NavItem>
            <NavItem>
                <NavLink href="#" active>Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Fantasy</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Documentary</NavLink>
            </NavItem>
            <NavItem>
                <NavLink disabled href="#">Comedy</NavLink>
            </NavItem>
            <NavItem>
            <div className="align-self-right"> 
                <input type="text" placeholder="Search a title here" 
                    value={this.state.searchMovies}
                    onChange={(input) => this.setState({ searchMovies: input.target.value})} />
                <button type="search" onClick={() => this.props.onSearch(this.state.searchMovies)}>Search</button>
            </div>
            </NavItem>
        </Nav> 
        );
    }
}

export default NavHead;