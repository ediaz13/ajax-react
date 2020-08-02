import React, { Component } from 'react';

import { Route, NavLink, Switch } from 'react-router-dom';
import Posts from '../Blog/Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/" 
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration:'underline'
                                }}>Home</NavLink></li>
                            <li><NavLink to="/new-post">New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Posts /> */}
                {/* <Route path="/" exact render={() => <h1>Home 1</h1>}/>
                <Route path="/" render={() => <h1>Home 2</h1>}/>
                <Route path="/new-post" exact render={() => <h1>Home 3</h1>}/> */}
                <Route path="/" exact component= {Posts}/>
                <Switch>
                    <Route path="/new-post" component= {NewPost} />
                    <Route path="/:id" exact component= {FullPost}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;

