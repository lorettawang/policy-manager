import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './UpdatePoliciesPage.css';
import Policy from '../../components/Policy/Policy';
import NavBar from '../../components/NavBar/NavBar';
import PoliciesForm from '../../components/PoliciesForm/PoliciesForm';
import policyService from '../../utils/policyService';
import PoliciesBoard from '../../components/PoliciesBoard/PoliciesBoard';
import AddPoliciesButton from '../../components/AddPoliciesButton/AddPoliciesButton';
import userService from '../../utils/userService';
import tokenService from './../../utils/tokenService';
import UpdatePoliciesForm from '../../components/UpdatePoliciesForm/UpdatePoliciesForm';

class UpdatePoliciesPage extends Component {
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
      .then(user => {
        this.setState({policies: [...user.policy]});
      });
    }

    updatePolicy = (policy) => {
        var index = this.state.policies.indexOf(policy);
        var newArray = [...this.state.policies];
        newArray[index] = {gen:policy.gen, occ:policy.occ, prod:policy.prod, pers:policy.pers, damage:policy.damage, med:policy.med};
        this.setState({policies: [...newArray]});
    };

    render() {
        return (
            <div className="PoliciesPage">
                <NavBar 
                    user={this.props.user}
                    handleLogout={this.props.handleLogout}
                />
                <h2>Update Policy</h2>
                <UpdatePoliciesForm 
                    policy={this.props.policy} 
                    // key={this.props.policy._id} */}
                    history={this.props.history}
                    updatePolicy={this.props.updatePolicy}
                />
                <div>
                    <center><Link className='btn btn-default' to='/policies'>Back</Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link className='btn btn-default' to='/addpolicies'>Add Policies</Link></center>
                </div>
            </div>
        );
    }
};

export default UpdatePoliciesPage;