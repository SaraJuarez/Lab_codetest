import axios from 'axios';
import { apiUrl, apiKey } from '../constants';

const getAllMovies = async () => {
    try {
        const allMovies = await axios.get(`${apiUrl}${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
        return allMovies.data; 

/*         const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/550?api_key=731c2701d8928e742ef057aa7bcda182',
            params: {type: 'movie', order_by: 'date'},
            headers: {
            'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com',
            'X-RapidAPI-Key': 'd2f448bfc3msh7f1dfc7b061532cp195071jsn4bfdc80b38fb'
            }
        };
        
        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        }); */
  
    } catch(error) {
      console.log(error)
    }
}



export {getAllMovies};