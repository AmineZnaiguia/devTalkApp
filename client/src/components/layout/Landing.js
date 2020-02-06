import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Logo from './logodt.png'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
 const Landing = ({isAuthenticated}) => {
if(isAuthenticated) {
  return <Redirect to='/dashboard' />
}

    return (
        <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
          <img src={Logo} className='logo-landing' />
            <p className="lead">
              Create a Chat profile, send  and get messages with developers
            </p>
            <div style={{padding:'20px'}}>
            <Button type="default" ghost className='land-pad' size='large'><Link to="register">Sign Up</Link></Button>
            <Button type="default" ghost className='land-pad' size='large'> <Link to="login">Login</Link></Button>
            </div>
          </div>
        </div>
        <div className="footer-dt">devTalk ©2020 Created by ZM </div>
      </section>
    )
}

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state =>({
  isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps) (Landing)