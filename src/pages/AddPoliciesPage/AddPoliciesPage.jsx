import React, {Component} from 'react';
import NavBar from '../../components/NavBar/NavBar';
import API from '../../API/API';
import AddPoliciesButton from '../../components/AddPoliciesButton/AddPoliciesButton';
// import PoliciesForm from '../../components/PoliciesForm/PoliciesForm';
// import CoverageGL from '../../components/CoverageGL/CoverageGL';
// import CoverageProp from '../../components/CoverageProp/CoverageProp';
// import CoveragBA from '../../components/CoverageBA/CoverageBA';
// import CoverageWC from '../../components/CoverageWC/CoverageWC';
// import CoverageExcessUmb from '../../components/CoverageExcessUmb/CoverageExcessUmb';
// import CoverageEPLI from '../../components/CoverageEPLI/CoverageEPLI';
import tokenService from './../../utils/tokenService';
import './AddPoliciesPage.css';

export class AddPoliciesPage extends Component {
  constructor() {
    super();
    this.state = {
      gen: "",
      occ: "",
      prod: "",
      pers: "",
      damage: "",
      med: ""
    }
  }

  updateGen = (e) => {
    this.setState({
      gen: e.target.value
    })
  }

  updateOcc = (e) => {
    this.setState({
      gen: e.target.value
    })
  }

  updateProd = (e) => {
    this.setState({
      gen: e.target.value
    })
  }

  updatePers = (e) => {
    this.setState({
      gen: e.target.value
    })
  }

  updateDamage = (e) => {
    this.setState({
      gen: e.target.value
    })
  }

  updateMed = (e) => {
    this.setState({
      gen: e.target.value
    })
  }

  addPolicy(e) {
    e.preventDefault()
    API.fetchAddPolicy(this.state)
        .then((policy) => {
          this.props.history.push('/policy');

        })
        .catch(err => {
          console.log('err =', err)
        })
  }

  deletePolicy(e) {
    e.preventDefault()
    API.fetchDeletePolicy(this.state)
        .then((policy) => {
          this.props.history.push('/policy');

        })
        .catch(err => {
          console.log('err =', err)
        })
  }

  render() {
    return (
      <div className='AddPoliciesPage'>
        <NavBar 
          user={this.props.user}
          handleLogout={this.props.handleLogout}
        />
        <form className="addPolicy" onSubmit={(e) => {this.addPolicy(e)}}>
          <label htmlFor="gen">General Aggregate</label>
          <input id="gen" 
             type="text" 
             required 
             defaultValue={this.state.gen} 
                onChange={(e)=>{this.updateGen(e)}}
                value={this.props.newGen}
          />
          <label htmlFor="occ">Each Occurrence</label>
          <input id="occ" 
             type="text" 
             required 
             defaultValue={this.state.occ} 
                onChange={(e)=>{this.updateOcc(e)}}
                value={this.props.newOcc}
          />
          <label htmlFor="prod">Products - Comp/Op Aggregate</label>
          <input id="prod" 
             type="text" 
             required 
             defaultValue={this.state.prod} 
                onChange={(e)=>{this.updateOcc(e)}}
                value={this.props.newProd}
          />
          <label htmlFor="pers">Personal and Adv Injury</label>
          <input id="pers" 
             type="text" 
             required 
             defaultValue={this.state.pers} 
                onChange={(e)=>{this.updatePers(e)}}
                value={this.props.newPers}
          />
          <label htmlFor="damage">Damage To Rented Premises</label>
          <input id="damage" 
             type="text" 
             required 
             defaultValue={this.state.damage} 
                onChange={(e)=>{this.updateDamage(e)}}
                value={this.props.newDamage}
          />
          <label htmlFor="med">Med Exp</label>
          <input id="med" 
             type="text" 
             required 
             defaultValue={this.state.med} 
                onChange={(e)=>{this.updateMed(e)}}
                value={this.props.newMed}
          />
          <button type="submit" className="btn btn-success"><AddPoliciesButton/></button>
        </form>
      </div>
    )
  }
}

export default AddPoliciesPage;
