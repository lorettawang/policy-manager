import React from 'react';
import {Link} from 'react-router-dom';
import policyService from '../../utils/policyService';
import tokenService from '../../utils/tokenService';
import './Policy.css'

const Policy = (props) => {
    return (
        <div className="Policy">
            General Aggregate: {props.policy.gen}
            <br/>
            Each Occurrence: {props.policy.occ}
            <br/>
            Products - Comp/Op Aggregate: {props.policy.prod}
            <br/>
            Personal and Adv Injury: {props.policy.pers}
            <br/>
            Damage to Rented Premises: {props.policy.damage}
            <br/>
            Med Expense: {props.policy.med}
            <br/>
            <button className="btn submit-btn-default" onClick={this.deletePolicy}>Delete Policy</button>
            <br/>
            <br/>
        </div>
        )
    };

export default Policy;