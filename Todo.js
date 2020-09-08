import React, { Component } from 'react'
import { render } from 'react-dom'



export default class App extends Component {
    constructor() {
        super();
        //etat
        this.state= {
            message:"Hello world !"

        }
    }
//Comportement
handleMessage () {
    this.setState({message: "Bonjour le monde !"});
}
//Rendu
render () {
    let {message} = this.state;
    return [
    <div>
        

      <h1>{ message }</h1>
      <button onClick={this.handleMessage.bind(this)}>Changer de message</button>
    </div>
      ]
}
}



 render{
    <App />,
    document.getElementById('root')
}