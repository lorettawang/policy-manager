import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './PoliciesPage.css';
import Policy from '../../components/Policy/Policy';
import NavBar from '../../components/NavBar/NavBar';
import PoliciesForm from '../../components/PoliciesForm/PoliciesForm';
import policyService from '../../utils/policyService';
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

    // deletePolicy(policy) {
    //     var index = this.state.policies.indexOf(policy);
    //     var newArray = [...this.state.policies];
    //     newArray.splice(index, 1);
    //     this.setState({policies: [...newArray]});
    // };

    deletePolicy(e) {
        e.preventDefault();
        fetch('/api/policies', {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + tokenService.getToken()
            }),
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(() => {
            this.props.history.push('/policies');
        })
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
                    deletePolicy={this.deletePolicy}
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