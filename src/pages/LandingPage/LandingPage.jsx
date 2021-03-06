import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import PoliciesPage from '../PoliciesPage/PoliciesPage';
import './LandingPage.css';

const LandingPage = (props) => {
    
    return (
        <div className="PoliciesPage">
            <NavBar 
                user={props.user} 
                handleLogout={props.handleLogout} 
            />
            <p>
                As a small business owner, especially during the beginning stages of establishing a business, there are multiple hats worn and many tasks that are needed to be completed on a daily basis. Often times, it is also only you and/or another individual who is responsible for completing such tasks. One especially important task is keeping up with the necessary insurance policy renewals with all the different insurance carriers you bind coverage with. Policy Manager (BETA) is an application that will allow you to input your essential insurance BOP coverage and help you manage all your information in one place. 
            </p>
            <Link className='btn btn-default' to='/addpolicies'><center>Add Policies</center></Link>
        </div>
    );
}

export default LandingPage;