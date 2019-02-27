import React from 'react';
import VideoItem from './VideoItem';

//videos array is carried down as props:::
//destructed videos from (prop) as ( { videos } )

const VideoList = ({ videos, onVideoSelect }) => {

	//map the array and store as a const for each videoItem
	const renderedList = videos.map(video =>
	{
		return <VideoItem
				key={ video.id.videoId } 
				onVideoSelect={ onVideoSelect } 
				video={video} 
				/>;
	});

	return (
		<div className="ui relaxed divided list">{ renderedList }</div>
	)
}

export default VideoList;