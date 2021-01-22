import axios from 'axios';

const KEY = 'AIzaSyCtvsvJK0yyOg3Umf3088rGd0hkn-jg2rY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});