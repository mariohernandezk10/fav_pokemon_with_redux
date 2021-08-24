import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchAllPokemons} from '../actions/postActions';

class Posts extends Component {

    componentDidMount() {
        this.props.fetchAllPokemons();
    }
    
    render() {
        const postAllPokemons = this.props.arrayOfPokemons.map(pokemon => (
            <div name={pokemon.name} url={pokemon.url} >
                <h3>{pokemon.name}</h3>
                <p>More info: {pokemon.url}</p>
            </div>
        ));
        return (
            <div>
                <h1>Which is your favorite?</h1>
                {postAllPokemons}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchAllPokemons: PropTypes.func.isRequired,
    arrayOfPokemons: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    arrayOfPokemons: state.arrayOfPokemons.items
})


export default connect(mapStateToProps, {fetchAllPokemons})(Posts);