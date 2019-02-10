import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
  let renderedList = props.videos.map((videoElm) => {
    return (
      <VideoItem
        key={videoElm.id.videoId}
        video={videoElm}
        onVideoSelect={props.onVideoSelect}
      />
    );
  });
    return (
      <div className="ui relaxed divided list">{renderedList}</div>
    )
};

export default VideoList;
