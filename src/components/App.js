import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component{
  onTermChange =  async (term) => {
    let response = await youtube.get('/search', {
      params:{
        q: term
      }
    });
    console.log(response.data.items);
  };

  render(){
    return (
      <div className= "ui container">
        <SearchBar onFormSumbit={this.onTermChange}/>
      </div>
    )
  }
}



export default App;
