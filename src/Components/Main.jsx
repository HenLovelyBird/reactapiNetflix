import React from 'react';
import { Input } from '.reactstrap';
import NavHead from './NavHead';
import MovieList from './MovieList';



class Main extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <NavHead />
            </div>

            <Input className="my-3"
                type="text"
                value={this.state.search}
                onChange={(val) => this.setState({ search: val.target.value.toLowerCase() })}
                placeholder="Type to search">
            </Input>

            <MovieList />

        );
    }
}

export default Main;