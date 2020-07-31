import React, { Component } from 'react';

import { BrowserRouter} from 'react-router-dom'
import Axios from 'axios';
import Blog from './containers/Blog/Blog';

Axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
Axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
Axios.defaults.headers.post['Content-Type'] = 'application/json';

Axios.interceptors.request.use(request => {
  console.log(request);
  return request;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

Axios.interceptors.response.use(response => {
  console.log(response);
  return response;
}, error => {
  console.log(error);
  return Promise.reject(error);
});


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
