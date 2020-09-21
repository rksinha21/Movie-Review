import React from 'react'
import {connect} from 'react-redux'
import {selectMovie} from '../actions/index'
import Header from '../styles/Header'
import Button from '../styles/Button'
import Group from '../styles/Group'


const MovieList=(props)=>{

    const listItems = props.movies.map((movie)=>{

        return(
            <Header key={movie.title}>
                <span>
                    {movie.title}
                </span>
                <Group>
                <Button onClick={()=>props.selectMovie(movie)}>Details</Button>
                </Group>
            </Header>
        )
    })

    return(
        <div className="list-container">
            <h2>Movie List</h2>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

const mapStatesToProps=(state)=>{
    return{
        movies:state.movies
    }
}

const mapDispatchToProps={
    selectMovie:selectMovie
}

export default connect(mapStatesToProps,mapDispatchToProps)(MovieList)