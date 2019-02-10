import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
  let renderedList = props.videos.map((videoEl) => {
    return (
      <VideoItem
        video={videoEl}
        onVideoSelect={props.onVideoSelect}
      />)
  });
    return (
      <div className="ui relaxed divided list">{renderedList}</div>
    )
};

export default VideoList;
