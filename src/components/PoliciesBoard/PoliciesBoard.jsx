import React from 'react';
import './PoliciesBoard.css';
// import CoverageGL from '../../components/CoverageGL/CoverageGL';
// import CoverageProp from '../../components/CoverageProp/CoverageProp';
// import CoveragBA from '../../components/CoverageBA/CoverageBA';
// import CoverageWC from '../../components/CoverageWC/CoverageWC';
// import CoverageExcessUmb from '../../components/CoverageExcessUmb/CoverageExcessUmb';
// import CoverageEPLI from '../../components/CoverageEPLI/CoverageEPLI';

const PoliciesBoard = (props) => {
  return (
    <div className="PoliciesBoard">
      {props.guesses.map((guess, idx) => 
        {/* <PoliciesBoard
        />
        <CoverageGL
        />
        <CoverageProp
        />
        <CoverageBA
        />
        <CoverageWC
        />
        <CoverageExcessUmb
        />
        <CoverageEPLI
        /> */}
      )}
    </div>
  );
}

export default PoliciesBoard;
