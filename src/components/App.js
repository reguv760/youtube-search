import React from 'react';

//components:::
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

import youtube from '../api/youtube';
//


//class needs to hold state::
class App extends React.Component
{
	state = { 
		videos: [],
		selectedVideo: null
	};

	componentDidMount()
	{
		//this runs once App loads:::
		this.onSearchSubmit('Google');
	}

	//async + await function needed
	//as it requests to API dependent on network connection
	onSearchSubmit = async myText => 
	{
		//console.log(myText);
		const response = await youtube.get('/search', 
			{
				params: 
				{
					q: myText
				}
			});
		//console.log(response  + " is my response");

		this.setState( { 
			videos: response.data.items,
			selectedVideo: response.data.items[0]
		});
	}

	//this is passed to VideoList THEN to VideoItem:::
	onVideoSelect = video =>
	{
		//console.log('From the App!', video);
		this.setState( { selectedVideo: video });
	}

	render()
	{
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={ this.onSearchSubmit } />
				
				<div className="ui grid">					
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail video={this.state.selectedVideo} />
						</div>

						<div className="five wide column">						
							<VideoList onVideoSelect={ this.onVideoSelect } videos={ this.state.videos } />
						</div>
					</div>
				</div>
				
			</div>

		)
	}
}

export default App;