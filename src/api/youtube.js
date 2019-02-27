import axios from 'axios';

const KEY = 'AIzaSyAtkb6_9X9LlVy9QJ7PtanegQCW3AUkw_c';


export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: 
	{
		part: 'snippet'	,
		maxResults: 5,
		key: KEY
	}
});