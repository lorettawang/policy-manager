import React from 'react';
import {Link} from 'react-router-dom';
import './PoliciesPage.css';
import NavBar from '../../components/NavBar/NavBar';
import PoliciesBoard from '../../components/PoliciesBoard/PoliciesBoard';
import AddPoliciesButton from '../../components/AddPoliciesButton/AddPoliciesButton';

const PoliciesPage = (props) => {
    
    return (
        <div className="PoliciesPage">
            <NavBar 
                user={props.user} handleLogout={props.handleLogout} 
            />
        
            PoliciesBoard
            <Link className='btn btn-default' to='/addpolicies'>Add Policies</Link>
            {/* <AddPoliciesButton handleAddPoliciesClick={props.handleAddPoliciesButtonClick}/> */}
        </div>
    );
}

export default PoliciesPage;