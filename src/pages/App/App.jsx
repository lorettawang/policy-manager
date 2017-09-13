import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import LandingPage from '../LandingPage/LandingPage';
import PoliciesPage from '../PoliciesPage/PoliciesPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import AddPoliciesPage from '../AddPoliciesPage/AddPoliciesPage';
import UpdatePoliciesPage from '../UpdatePoliciesPage/UpdatePoliciesPage';
import userService from '../../utils/userService';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      policies: [],
      user: userService.getUser()
    }
  }

/*---------- Helper Methods ----------*/


/*---------- Callback Methods ----------*/

  addPolicy = (policy) => {
    this.setState ({
      Policies: [...this.state.Policies]
    });
  }

  deletePolicy = (policy) => {
    this.setState ({
      Policies: [...this.state.Policies]
    });
  }

  handleLogout = () => {
    userService.logout();
    this.setState ({
      user: null});
  }

  handleSignup = () => {
    this.setState ({
      user: userService.getUser()
    });
  }

  handleLogin = () => {
    this.setState ({
      user: userService.getUser()
    });
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
            <Route exact path='/' render={(props) => 
              <LandingPage
                user={this.state.user}
                handleLogout={this.handleLogout}
                history={props.history}
                policies={this.state.policies}
                addPolicy={this.addPolicy}
                deletePolicy={this.deletePolicy}
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
            <Route exact path='/editpolicies' render={(props) => (
                userService.getUser() ?
                <UpdatePoliciesPage 
                  history={props.history} 
                  user={this.state.user}
                  handleLogout={this.handleLogout}
                  policies={this.state.policies}
                  addPolicy={this.addPolicy}
                  deletePolicy={this.deletePolicy}

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
                  addPolicy={this.addPolicy}
                  deletePolicy={this.deletePolicy}
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