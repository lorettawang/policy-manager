import React from 'react';

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
            <br/>
        </div>
    );
}

export default Policy;