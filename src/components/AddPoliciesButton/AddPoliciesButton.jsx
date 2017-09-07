import React from 'react';

const AddPoliciesButton = (props) => {
  return (
    <button 
      className="btn btn-default"
      style={{margin: 10}}
      onClick={props.handleAddPoliciesClick}
    >
      Add Policies
    </button>
  );
}

export default AddPoliciesButton;