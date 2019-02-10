import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component{
  state = { videos:[] };

  onTermChange =  async (term) => {
    let response = await youtube.get('/search', {
      params:{
        q: term
      }
    });
    this.setState({ videos: response.data.items });
    //console.log(response.data.items);
  };

  render(){
    return (
      <div className= "ui container">
        <SearchBar onFormSumbit={this.onTermChange}/>
        <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}



export default App;
