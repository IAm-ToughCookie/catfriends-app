import React, { Component } from 'react';

import CardList from '../components/cardlist';
import SearchBox from '../components/searchbox';
import Scroll from '../components/scroll'
import ErrorBoundry from '../components/errorboundry'

import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            cats: [],
            searchfield: ''
        }
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>  response.json())
        .then(users => this.setState({ cats: users}));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { cats, searchfield} = this.state;
        const filteredCats = cats.filter(cat => {
            return cat.name.toLowerCase().includes(searchfield.toLowerCase())
            || cat.email.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !cats.length ?
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>CatFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList cats={filteredCats}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }
}

export default App;