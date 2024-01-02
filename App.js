import logo from './logo.svg';
import User from './User';
import React from 'react';
import './App.css';
class App extends React.Component{
  constructor(){
    super();
  render()
  {
    console.warn("Render");
    return(
      <div>
        <h1>App Component {this.state.name}</h1>
        <h2>Hello There</h2>
        <button onClick={()=>this.setState({name:"Ritesh"})}>Update name</button>
      </div>
    )
  }
  }
}
export default App;