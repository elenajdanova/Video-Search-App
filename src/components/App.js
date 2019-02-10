import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
  state = { videos:[], selectedVideo: null };

  onTermChange = async (term) => {
    let response = await youtube.get('/search', {
      params:{
        q: term
      }
    });
    this.setState({ videos: response.data.items });
    //console.log(response.data.items);
  };

  onVideoSelect = (selectedVideo) => {
    //console.log("fron the app!", selectedVideo);
    this.setState({selectedVideo: selectedVideo});
  };

  render(){
    return (
      <div className= "ui container">
        <SearchBar onFormSumbit={this.onTermChange}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    )
  }
}



export default App;
