import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import API from '../../API/API';
import PoliciesPage from '../PoliciesPage/PoliciesPage';
import PoliciesForm from '../../components/PoliciesForm/PoliciesForm';
import AddPoliciesButton from '../../components/AddPoliciesButton/AddPoliciesButton';
// import PoliciesForm from '../../components/PoliciesForm/PoliciesForm';
// import CoverageGL from '../../components/CoverageGL/CoverageGL';
// import CoverageProp from '../../components/CoverageProp/CoverageProp';
// import CoveragBA from '../../components/CoverageBA/CoverageBA';
// import CoverageWC from '../../components/CoverageWC/CoverageWC';
// import CoverageExcessUmb from '../../components/CoverageExcessUmb/CoverageExcessUmb';
// import CoverageEPLI from '../../components/CoverageEPLI/CoverageEPLI';
import userService from '../../utils/userService';
import tokenService from './../../utils/tokenService';
import './AddPoliciesPage.css';

const AddPoliciesPage = (props) => {
  return (
    <div className="PoliciesForm">
      <NavBar 
        user={props.user} 
        handleLogout={props.handleLogout} 
        />
      <PoliciesForm
        history={props.history}
      />
    </div>
  );
};

export default AddPoliciesPage;
