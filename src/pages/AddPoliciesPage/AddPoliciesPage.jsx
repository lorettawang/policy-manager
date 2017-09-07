import React, {Component} from 'react';
import NavBar from '../../components/NavBar/NavBar';
// import PoliciesForm from '../../components/PoliciesForm/PoliciesForm';
// import CoverageGL from '../../components/CoverageGL/CoverageGL';
// import CoverageProp from '../../components/CoverageProp/CoverageProp';
// import CoveragBA from '../../components/CoverageBA/CoverageBA';
// import CoverageWC from '../../components/CoverageWC/CoverageWC';
// import CoverageExcessUmb from '../../components/CoverageExcessUmb/CoverageExcessUmb';
// import CoverageEPLI from '../../components/CoverageEPLI/CoverageEPLI';
import tokenService from './../../utils/tokenService';
import './AddPoliciesPage.css';

class AddPoliciesPage extends Component {
  constructor() {
    super();
    this.state = {
      policies: []
    }
  }

  render() {
    return (
      <div className='AddPoliciesPage'>
        <NavBar 
          user={this.props.user}
          handleLogout={this.props.handleLogout}
        />
        {/* <PoliciesBoard
        /> */}
        <a href='/policies'>Return</a><br />
      </div>
    );
  }
}

export default AddPoliciesPage;
