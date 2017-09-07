import React, {Component} from 'react';
import './AddPoliciesPage.css';
// import PoliciesForm from '../../components/PoliciesForm/PoliciesForm';
// import CoverageGL from '../../components/CoverageGL/CoverageGL';
// import CoverageProp from '../../components/CoverageProp/CoverageProp';
// import CoveragBA from '../../components/CoverageBA/CoverageBA';
// import CoverageWC from '../../components/CoverageWC/CoverageWC';
// import CoverageExcessUmb from '../../components/CoverageExcessUmb/CoverageExcessUmb';
// import CoverageEPLI from '../../components/CoverageEPLI/CoverageEPLI';

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
        <header className="header-footer">Add Policies</header>
        <a href='/'>Return</a><br />
      </div>
    );
  }
}

export default AddPoliciesPage;
