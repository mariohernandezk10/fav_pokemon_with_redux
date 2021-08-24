import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchAllPokemons} from '../actions/postActions';

class Posts extends Component {

    componentDidMount() {
        this.props.fetchAllPokemons();
    }
    
    render() {
        const postPokemons = this.props.posts.map(post => (
            <div name={post.name} url={post.url} >
                <h3>{post.name}</h3>
                <p>More info: {post.url}</p>
            </div>
        ));
        return (
            <div>
                <h1>Which is your favorite?</h1>
                {postPokemons}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchAllPokemons: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    posts: state.posts.items
})


export default connect(mapStateToProps, {fetchAllPokemons})(Posts);