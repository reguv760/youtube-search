import React from 'react';

class SearchBar extends React.Component 
{
	state = { myText: ''};

	//this is my user-created => function
	//that listens for onChange()
	onInputChange = (e) => 
	{
		this.setState( { myText: e.target.value });
	};

	//defined + inherited from <SearchBar /> in App.js
	onFormSubmit = (e) =>
	{
		e.preventDefault();
		
		//callback from parent component:::
		this.props.onFormSubmit( this.state.myText );

	}

	render()
	{		
	  return (
	    <div className="search-bar ui segment">
	    	<form onSubmit={ this.onFormSubmit } className="ui form">
	    		<div className="field">
	    			<label>Video Search</label>
	    			<input 
	    				type="text" 
	    				value={ this.state.myText } 
	    				onChange={ this.onInputChange }
	    			/>
	    		</div>
	    	</form>
	    	
	    </div>
	  )
	}
}

export default SearchBar;