import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import policyService from '../../utils/policyService';
import NavBar from '../../components/NavBar/NavBar';
import API from '../../API/API';
import PoliciesForm from '../../components/PoliciesForm/PoliciesForm';
import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';
import './Policy.css'

class Policy extends Component {
    constructor() {
      super();
      this.state = {
        policies: []
      }
    }

    deletePolicy(e) {
        e.preventDefault();
        fetch(`/api/policies/${this.props.policy._id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + tokenService.getToken()
            }),
        })
        .then(res => res.json())
        .then(() => {
            this.props.history.push('/policies');
        })
        }

    render() {
        return (
            <div className="Policy">
            General Aggregate: {this.props.policy.gen}
            <br/>
            Each Occurrence: {this.props.policy.occ}
            <br/>
            Products - Comp/Op Aggregate: {this.props.policy.prod}
            <br/>
            Personal and Adv Injury: {this.props.policy.pers}
            <br/>
            Damage to Rented Premises: {this.props.policy.damage}
            <br/>
            Med Expense: {this.props.policy.med}
            <br/>
            <button className="btn submit-btn-default" onClick={this.deletePolicy}>Delete Policy</button>
            <br/>
            <br/>
        </div>
        )
    };
}

export default Policy;