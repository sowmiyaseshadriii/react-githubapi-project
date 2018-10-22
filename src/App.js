import React, { Component } from 'react';
import './App.css';

import Form from './components/Form';
import UserRepos from './components//UserRepos';

class App extends Component {

  state={
    users: []  }
  
  getGitrepo = async(e) => {
    const gituser=e.target.elements.gitusername.value;
    e.preventDefault();
    const api_call= await fetch(`https://api.github.com/users/${gituser}/repos`);
    console.log(api_call); 
    const data=await api_call.json();
    this.setState({
      users: data
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header col-sm-12">
          <h1 className="App-title">Github API Search</h1>
        </header>         
        <Form getGituser={this.getGitrepo}/>
        <UserRepos userRepos={this.state.users}/>
      </div>
    );
  }
}

export default App;
