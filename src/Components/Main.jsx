import React from 'react';
import { Container, Row} from "reactstrap"
import HomePage from './HomePage';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import NavHead from './NavHead';
import ShowDetail from './ShowDetail';
import { BrowserRouter as Router, Route } from "react-router-dom";

class Main extends React.Component {
  render() {
    return (
      <Router>
        {/* everypage: */}
        <NavHead onSearch={this.searchMovies}/>
        
        {/* dir of pages: */}
        <Container>
          <Row>
            <Route path="/" exact component={HomePage} />
            <Route path="/MovieList" component={MovieList} />
            <Route path="/MovieDetails" component={MovieDetails} />
            <Route path="/ShowDetail/:allMovieDetails" component={ShowDetail} />
          </Row>
        </Container>
      </Router>
    );
  }
}

export default Main;