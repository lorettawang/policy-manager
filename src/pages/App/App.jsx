import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import PoliciesPage from '../PoliciesPage/PoliciesPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import AddPoliciesPage from '../AddPoliciesPage/AddPoliciesPage';
import userService from '../../utils/userService';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: userService.getUser()
    }
  }

/*---------- Helper Methods ----------*/


/*---------- Callback Methods ----------*/

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogin = () => {
    this.setState({user: userService.getUser()});
  }


/*---------- Lifecycle Methods ----------*/
  
  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});
  }

  render() {
    return (
      <div>
        <header className="App-header">Policy Manager</header>
        <Router>
          <Switch>
            {/* <NavBar 
              user={this.state.user} 
              handleLogout={this.handleLogout}
            /> */}
            <Route exact path='/' render={() =>
              <PoliciesPage
                handleAddPoliciesButton={this.handleAddPoliciesButton}
                user={this.state.user}
                handleLogout={this.handleLogout}
              />
            }/>
            <Route exact path='/signup' render={(props) => 
              <SignupPage
                {...props}
                handleSignup={this.handleSignup}
              />
            }/>
            <Route exact path='/login' render={(props) => 
              <LoginPage
                {...props}
                handleLogin={this.handleLogin}
              />
            }/>
            <Route exact path='/addpolicies' render={(props) => (
                userService.getUser() ?
                <AddPoliciesPage 
                  history={props.history} 
                  user={this.state.user}
                  handleLogout={this.handleLogout}
                />
                :
                <Redirect to ='./login' />
            )}/>
            <Route exact path='/policies' render={() => (
              userService.getUser() ?
                <PoliciesPage
                  user={this.state.user}
                  handleLogout={this.handleLogout}
                  policies={this.state.policies} 
                />
                :
                <Redirect to='/login' />
            )}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;