import axios from 'axios';

const movieBaseUrl = 'https://api.themoviedb.org/3/';
const api_key = '6ec2b65ecd51458f23c1028529ad719d';

// https://api.themoviedb.org/3/trending/all/day?api_key=6ec2b65ecd51458f23c1028529ad719d
const getTrendingVideos=axios.get(movieBaseUrl+'trending/all/day?api_key='+api_key);

export default{
    getTrendingVideos
}

