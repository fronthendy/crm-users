import React, { Component } from 'react';
import faker from 'faker';
import Toolbar from 'material-ui/Toolbar';
import Blog from './Blog';
import Address from './Address';
import AccountHistory from './AccountHistory';
// import logo from './logo.svg';
import './App.css';

const fetchUser = () => {
  return new Promise((resolve) => {
      const user = faker.helpers.createCard();
      setTimeout(() => {
        resolve(user)
      }, 1000);
  })

  return faker.helpers.createCard();
}

class App extends Component {
  state = { user: null };

  componentDidMount(){
      fetchUser().then((user) => this.setState({ user: user}));
  }

  render() {
    return (
      <div className="App">
          <Toolbar>
            <h2>{(this.state.user ? this.state.user.name : 'Loading...')}</h2>
          </Toolbar>
          <AccountHistory history={(this.state.user ? this.state.user.accountHistory : [])} />
          <Address address={(this.state.user ? this.state.user.address : {})} />
          <Blog posts={(this.state.user ? this.state.user.posts : [])}/>
          
      </div>
    );
  }
}

export default App;
