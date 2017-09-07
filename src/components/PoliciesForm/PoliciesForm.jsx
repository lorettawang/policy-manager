import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import userService from '../../utils/userService';

class PoliciesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // handleChange = (field, e) => {
  //   this.props.updateMessage('');
  //   this.setState({
  //     // Using ES2015 Computed Property Names
  //     [field]: e.target.value
  //   });
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   userService.signup(this.state)
  //     // successfully signed up - show GamePage
  //     .then(() => {
  //       this.props.handleSignup();
  //       this.props.history.push('/');
  //     })
  //     // invalid user data
  //     .catch(err => this.props.updateMessage(err.message));
  // }

  isFormInvalid() {
    return !(this.state.genAgg && this.state.products && this.state.eachOcc && this.state.personalAdInj && this.state.damageRented && this.state.medExp);
  }

  render() {
    return (
      <div>
        <header className="header-footer">General Liability</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="General Aggregate" value={this.state.genAgg} onChange={(e) => this.handleChange('genAgg', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="email" className="form-control" placeholder="Products - Comp/Op Agg" value={this.state.products} onChange={(e) => this.handleChange('products', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Each Occurrence" value={this.state.eachOcc} onChange={(e) => this.handleChange('eachOcc', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Personal & Adv Injury" value={this.state.personalAdInj} onChange={(e) => this.handleChange('personalAdInj', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Damage to Rented Premises" value={this.state.damageRented} onChange={(e) => this.handleChange('damageRented', e)} />
            </div>
          </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input type="password" className="form-control" placeholder="Medical Expense" value={this.state.medExp} onChange={(e) => this.handleChange('medExp', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default" disabled={this.isFormInvalid()}>Add Policy</button>&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default PoliciesForm;