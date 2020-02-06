import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth'
import { Layout, Menu, Breadcrumb } from 'antd';
import Logo from './logodt.png'

const { Header, Content, Footer } = Layout;

 const Navbar = ({ auth: {isAuthenticated, loading, user}, logout }) => {
  
  const authLinks = (
    
    <Menu
        theme="dark"
        mode="horizontal"
        
        style={{ lineHeight: '64px' }}
      >
    <Menu.Item  className="logo"><img src={Logo} className='logo-nav' /><Link to='/dashboard' /></Menu.Item > 
    <Menu.Item ><Link to='/dashboard'>{user && user.login} </Link></Menu.Item>
    <Menu.Item ><Link to='/profiles'>users </Link></Menu.Item>
    <Menu.Item ><Link to={`/discussion/${user && user.login}`}>Discussion</Link></Menu.Item>
    <Menu.Item ><a onClick={logout} href="#!">
        
        Logout</a></Menu.Item>
   
    
    </Menu>
   );
   
   const guestLinks = (
    <Menu
    theme="dark"
    mode="horizontal"
    
    style={{ lineHeight: '64px' }}
  >
  <Menu.Item  className="logo"><img src={Logo} className='logo-nav' /><Link to='/' /></Menu.Item > 
  <Menu.Item ><Link to='/login'>Login</Link></Menu.Item>
  <Menu.Item ><Link to='/register'>Register</Link></Menu.Item>
  <Menu.Item ><Link to='/admin'>Admin</Link></Menu.Item>
  
  
  </Menu>
   );
    return (

      <Header style={{ position: 'fixed', zIndex: 1, width: '100%', top:'0'}}>
      
      <Menu
        theme="dark"
        mode="horizontal"
        
        style={{ lineHeight: '64px' }}
      >
        {/* <Menu.Item key="1"><Link to='/'>Chat</Link></Menu.Item> */}
        {!loading && (<Fragment> {isAuthenticated ? authLinks : guestLinks } </Fragment>)}
        
      </Menu>
      </Header>
      
      //   <nav className="navbar bg-light">
      //   <h1>
      //     <Link to='/'><i className="fas fa-code" />Chat</Link>
      //   </h1>
      //   {!loading && (<Fragment> {isAuthenticated ? authLinks : guestLinks } </Fragment>)}
      // </nav>
    );
};

Navbar.propTypes= {
  logout : PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state =>({
  auth: state.auth
})
export default connect(mapStateToProps, {logout}) (Navbar);