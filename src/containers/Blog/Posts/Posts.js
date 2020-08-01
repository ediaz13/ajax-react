import React, { Component } from 'react';

import Axios from '../../../axios';
import Post from '../../../components/Post/Post';
import { Link } from 'react-router-dom';
import './Posts.module.css';

class Posts extends Component {
    state = {
        posts: []
        // selectedPostId: null,
        // error: false
    }

    componentDidMount() {
        console.log(this.props);
        Axios.get( '/posts' )
            .then( response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Emolino'
                    }
                });
                this.setState({posts: updatedPosts});
                // console.log(response);
            })
            .catch(error => {
                console.log(error);
                // this.setState({error:true});
            });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => { 
                return (
                <Link to={'/' + post.id} key={post.id}>
                    <Post 
                         
                        title={post.title} 
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)}/>
                </Link>); 
            });
        }

        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;