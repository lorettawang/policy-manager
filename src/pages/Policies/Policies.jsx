
import React from 'react'
import PoliciesRow from '../../components/PoliciesRow/PoliciesRow'
import {Link} from 'react-router-dom';

export const Policies  = (props) => {
  return (
    <div className="PoliciesList" >
      <table>
        <thead>
          <tr colSpan={4}>
            <th>General Aggregate |</th>
            <th>Each Occurrence |</th>
            <th>Products - Comp/Op Aggregate |</th>
            <th>Personal and Adv Injury | </th>
            <th>Damage to Rented Premises</th>
            <th>Medical Expense</th>
          </tr>
          <tr>
            <td colSpan={4}>
              <Link to="policies/gen">
                General Aggregate
              </Link>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <Link to="policies/occ">
                Each Occurrence
              </Link>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <Link to="policies/prod">
                Products - Comp/Op Aggregate
              </Link>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <Link to="policies/pers">
                Personal and Adv Injury
              </Link>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <Link to="policies/damage">
                Damage to Rented Premises
              </Link>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <Link to="policies/med">
                Med Expense
              </Link>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <li></li>
              <li></li>
            </td>
          </tr>
        </thead> 
      </table>
    </div>
  )
}
export default Policies;