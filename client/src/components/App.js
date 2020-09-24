import React,{ Component, Fragment } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import './App.css';

// Components
import Header from './Header';
import Login from './pages/Login';
import Register from './pages/Register';
import News from './pages/News';
import Ask from './pages/Ask';
import Submit from './pages/Submit';
import Profile from './pages/Profile';
import Post from './pages/Post';
import SessionWrapperHOC from './SessionWrapperHOC';

const Root = ({refetch, session}) => (
    <Router>
        <Header session={session}/>
        <Switch>
            <Route exact path="/" component={News} />
            <Route path="/ask" component={Ask} />
            <Route path="/submit" render={() => <Submit session={session} refetch={refetch}/>} />
            <Route path="/login" render={() => <Login refetch={refetch}/>} />
            <Route path="/register" render={() => <Register refetch={refetch}/>} />
            <Route path="/profile" render={() => <Profile session={session}/>} />
            <Route path="/post" component={Post} />
        </Switch>
    </Router>
);

const RootWithWrapper = SessionWrapperHOC(Root);

class App extends Component{
  render(){
      return (

            <Fragment>
                <RootWithWrapper/>
            </Fragment>
      );
  }
}

export default App;
