import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import policyService from '../../utils/policyService';
import NavBar from '../../components/NavBar/NavBar';
import PoliciesForm from '../../components/PoliciesForm/PoliciesForm';
import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';
import './Policy.css'

class Policy extends Component {
    constructor(props) {
        super(props);
        this.state= {};
    }

    handleUpdate = (policy) => {
        this.props.updatePolicy(policy);
        fetch(`/api/policies/${policy._id}`, {
            method: 'PUT',
            headers: new Headers
            ({'Authorization': 'Bearer ' + tokenService.getToken()}),
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(res => {
            this.props.history.push('/policies');
        })
    }

    handleDelete = (policy) => {
        this.props.deletePolicy(policy);
        fetch(`/api/policies/${policy._id}`, {
            method: 'DELETE',
            headers: new Headers
                ({'Authorization': 'Bearer ' + tokenService.getToken()})
        })
            .then(res => res.json())
            .then(res => {
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
                    <Link className='btn btn-default' to='/editpolicies'>Edit Policies</Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="btn submit-btn-default" onClick={() => this.handleDelete(this.props.policy)}>Delete Policy</button>
                    <br/>
                    <br/>
                </div>
            );
        }
    };

export default Policy;