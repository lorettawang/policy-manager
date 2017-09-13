import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';
import UpdatePoliciesPage from '../../pages/UpdatePoliciesPage/UpdatePoliciesPage';

class UpdatePoliciesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gen: "",
      occ: "",
      prod: "",
      pers: "",
      damage: "",
      med: ""
    };
  }

  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/api/policies/${e._id}`, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        }),
        body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(() => {
        this.props.history.push('/policies');
    });
  }

  isFormInvalid() {
    return !(this.state.gen && this.state.occ && this.state.prod && this.state.pers && this.state.damage && this.state.med);
  }

  updateGen = (e) => {
    this.setState({
      gen: e.target.value
    })
  }

  updateOcc = (e) => {
    this.setState ({
      occ: e.target.value
    })
  }

  updateProd = (e) => {
    this.setState ({
      prod: e.target.value
    })
  }

  updatePers = (e) => {
    this.setState ({
      pers: e.target.value
    })
  }

  updateDamage = (e) => {
    this.setState ({
      damage: e.target.value
    })
  }

  updateMed = (e) => {
    this.setState ({
      med: e.target.value
    })
  }

  updatePolicy = (e) => {
    this.setState ({
    })
  }

  render() {
    return (
      <div className='UpdatePoliciesPage'>
        <form className="update" onSubmit={(e) => {this.update(e)}}>
          <label htmlFor="gen">General Aggregate </label>
          <br/>
          <input id="gen" 
             type="text" 
             required 
             defaultValue={this.state.gen} 
                onChange={(e)=>{this.updateGen(e)}}
                value={this.props.newGen}
          />
          <br/>
          <label htmlFor="occ">Each Occurrence </label>
          <br/>
          <input id="occ" 
             type="text" 
             required 
             defaultValue={this.state.occ} 
                onChange={(e)=>{this.updateOcc(e)}}
                value={this.props.newOcc}
          />
          <br/>
          <label htmlFor="prod">Products - Comp/Op Aggregate </label>
          <br/>
          <input id="prod" 
             type="text" 
             required 
             defaultValue={this.state.prod} 
                onChange={(e)=>{this.updateProd(e)}}
                value={this.props.newProd}
          />
          <br/>
          <label htmlFor="pers">Personal and Adv Injury </label>
          <br/>
          <input id="pers" 
             type="text" 
             required 
             defaultValue={this.state.pers} 
                onChange={(e)=>{this.updatePers(e)}}
                value={this.props.newPers}
          />
          <br/>
          <label htmlFor="damage">Damage To Rented Premises </label>
          <br/>
          <input id="damage" 
             type="text" 
             required 
             defaultValue={this.state.damage} 
                onChange={(e)=>{this.updateDamage(e)}}
                value={this.props.newDamage}
          />
          <br/>
          <label htmlFor="med">Med Expense </label>
          <br/>
          <input id="med" 
             type="text" 
             required 
             defaultValue={this.state.med} 
                onChange={(e)=>{this.updateMed(e)}}
                value={this.props.newMed}
          />
          <br/>
          <br/>
            <center><Link className='btn btn-default' to='/'>Back</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn submit-btn-default" onClick={this.handleChange}>Update Policy</button></center>
        </form>
      </div>
    )
  }
}

export default UpdatePoliciesForm;