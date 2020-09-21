import { findAllByDisplayValue } from '@testing-library/react'
import React from 'react'
import {connect} from 'react-redux'
import { selectedMovie } from '../actions'
import Div from '../styles/Div'

const MovieDetails = (props)=>{
    if(!props.selectedMovie){
        return(
            <Div>
                <h2>Movie</h2>
                <div className="properties">
                    <p>Select Movie</p>
                </div>
            </Div>
        )
    }

    else{

        return(
            <Div>
                <h2>Movie</h2>
                <div className="properties">
                    <p>Title: {props.selectedMovie.title}</p>
                    <p>Release Date: {props.selectedMovie.releaseDate}</p>
                    <p>Rating: {props.selectedMovie.rating}</p>
                </div>
            </Div>
        )
    }

}

const mapStateToProps=(state)=>{

    return{
        selectedMovie:state.selectedMovie
    }
}

export default connect(mapStateToProps)(MovieDetails)