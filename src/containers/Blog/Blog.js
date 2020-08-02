import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from '../Blog/Posts/Posts';
    import asyncComponent from '../../hoc/asyncComponent'
// import NewPost from './NewPost/NewPost';

const AsyncNewPost = asyncComponent (() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/posts/" 
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
                <Switch>
                    <Route path="/new-post" component=  {AsyncNewPost} />
                    <Route path="/posts/" component= {Posts}/>
                    <Redirect from = "/" to="/posts"/>
                    {/* <Route path="/" component= {Posts}/> */}
                    {/* <Route path="/:id" exact component= {FullPost}/> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;

