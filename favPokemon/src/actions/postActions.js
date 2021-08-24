import { FETCH_POSTS } from './types';

export const fetchPosts = () => dispatch => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=251')
        .then(res => res.json())
        .then(posts => console.log(posts.results))
        // .then(posts => 
        //     dispatch({
        //     type: FETCH_POSTS,
        //     payload: posts
        //     })
        // )

}
// SIDE NOTE: TOO MANY ".then()" INSIDE THE FETCH WILL GIVE AN ERROR