import {combineReducers} from 'redux'

const moviesReducer = ()=>{
    return[
        {title:'Spider-Man Homecoming' ,releaseDate:'05-07-2016',rating:7.43},
        {title:'Aquaman',releaseDate:'08-12-2018',rating:7.2},
        {title:'Avengers:Infinity War', releaseDate:'03-04-2018',rating:8.3},
        {title:'Black Panther',releaseDate:'13-02-2018',rating:7.4},
        {title:'Guardian of the Galaxy',releaseDate:'30-07-2014',rating:7.9}

]
}

const selectedMovieReducer=(state=null,action)=>{

    switch(action.type){
        case 'MOVIE_SELECTED':
            return action.payload
        default:
            return state
    }
}

export default combineReducers({

    movies:moviesReducer,
    selectedMovie:selectedMovieReducer
})