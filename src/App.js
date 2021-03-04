import React,{Component} from 'react';
import SearchBox from './SearchBox';
import './App.css'
 import CardList from './CardList';
 import {robots} from './robot';

class App extends Component {
  constructor(){
    super()
    this.state={
      robots:[],
      searchfeild:'',

    }
  }
  onSearchchange=(event)=>{
   this.setState({searchfeild:event.target.value})
 
 
  }
  render(){ 
    const filteredRobots=this.state.robots.filter(robots=>{
      return(robots.name.toLowerCase().includes(this.state.searchfeild.toLowerCase())
       
    )})
  return (
    <div className='tc'>
    <h1>RoboFriends</h1>
    <SearchBox searchChange={this.onSearchchange}/>
    <div>
      <CardList robots={filteredRobots}/>,
    
      </div>
      </div>   
 )
  }
  
}
 export default App;