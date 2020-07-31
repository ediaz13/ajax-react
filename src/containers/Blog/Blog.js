import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import Posts from '../Blog/Posts/Posts';
import NewPost from './NewPost/NewPost';

import './Blog.css';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                {/* <Posts /> */}
                {/* <Route path="/" exact render={() => <h1>Home 1</h1>}/>
                <Route path="/" render={() => <h1>Home 2</h1>}/>
                <Route path="/new-post" exact render={() => <h1>Home 3</h1>}/> */}
                <Route path="/" exact component= {Posts}/>
                <Route path="/new-post" exact component= {NewPost} />
            </div>
        );
    }
}

export default Blog;

{/* <section>
        <FullPost id={this.state.selectedPostId}/>
    </section>
    <section>
        <NewPost />
</section> */}