import React, { Component } from 'react';
import List from './List';
import axios from 'axios';
import logo from './logo_sw.png';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      people: [],
    }

    this.getPeople = this.getPeople.bind(this);
  }

  getPeople(){
      [1,2,3,4,5,6,7,8,9].forEach(number => {
      axios.get(`https://swapi.co/api/people/?page=${number}`).then((response) => {
      const bkpPeople = this.state.people
      this.setState({...bkpPeople, people: response.data.results })
        })
      })
    }

  componentDidMount(){
    this.getPeople()
  }


  render() {
    const {people} = this.state;
    const filterText = this.props.filterText;

    return (
      <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">N00bGu1d3</h1>
        </header>
        <p className="App-intro">
          A noob guide to Star Wars Universe characters 
        </p>
        <form className="App-intro center">
          <input type="text" placeholder="Type to search..." value={filterText}/>
        </form>
        <br />
        <br />
        <List people={people}/>
      </div>
    );
  }
}

export default App;