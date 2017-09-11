import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './PoliciesPage.css';
import Policy from '../../components/Policy/Policy';
import NavBar from '../../components/NavBar/NavBar';
import PoliciesForm from '../../components/PoliciesForm/PoliciesForm';
import policyService from '../../utils/policyService';
import API from '../../API/API';
import PoliciesBoard from '../../components/PoliciesBoard/PoliciesBoard';
import AddPoliciesButton from '../../components/AddPoliciesButton/AddPoliciesButton';
import userService from '../../utils/userService';
import tokenService from './../../utils/tokenService';

class PoliciesPage extends Component {
    constructor() {
      super();
      this.state = {
        policies: []
      }
    }
  
    componentDidMount() {
      fetch('/api/policies', {
        method: 'GET',
        headers: new Headers({'Authorization': 'Bearer ' + tokenService.getToken()})
      })
      .then(res => res.json())
      .then(policies => {
        this.setState({policies});
      });
    }

    render() {
        return (
            <div className="PoliciesPage">
                <NavBar 
                    user={this.props.user}
                    handleLogout={this.props.handleLogout}
                />
                <h2>All Policies</h2>
                {this.state.policies.map(policy =>
                <Policy 
                    policy={policy} 
                    key={policy._id}
                />
                )}
                <div>
                    <center><Link className='btn btn-default' to='/'>Back</Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link className='btn btn-default' to='/addpolicies'>Add Policies</Link></center>
                </div>
            </div>
        );
    }
};

export default PoliciesPage;