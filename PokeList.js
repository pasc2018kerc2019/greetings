import React, { Component } from 'react';
import { render } from 'react-dom'
import axios from 'axios';


export default class PokeList extends React.Component {
  constructor() {
    super();
    this.state = {
      poke: []
    }
  }
    componentDidMount() {
        axios.get(`http://pokeapi.co/api/v2/pokemon?limit=5`)
          .then(res => {
            const poke = res.data.results;
            
            this.setState({ poke });
          })
      }
    
      render() {
        console.log(this.state.poke.results)
        return (
         
          <ul>
            
            { this.state.poke.map(poke => <li>{poke.name}</li>)}
          </ul> 
        )
      }
    } 
    
    
    
render(
        <PokeList />,
        document.getElementById('pok')
      )