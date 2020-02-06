import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import {Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {login} from '../../actions/auth'
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState ({
     email: "",
     password: ""
   });
   
   const {email, password} = formData;
 
   const onChangeHandler = e =>{
     setFormData({...formData, [e.target.name]: e.target.value }
     );
   }
   const onSubmit = async e =>{
     e.preventDefault();
     login({email, password})
     
   }
   // Redirect if logged in

   if(isAuthenticated){
     return<Redirect to="/dashboard" />
   }
  //  const  getFieldDecorator  = form;
     return (
   
      <Fragment> 
        
        <p className="lead" style={{width:'300px', margin:'auto'}}>
          Login
        </p>

        <Form onSubmit={(e) => onSubmit(e)} className="login-form" style={{width:'300px', margin:'auto'}}>
        <Form.Item>
          
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="email"
              name="email"
              value={email}
              onChange={e => onChangeHandler(e)}
            />
          
        </Form.Item>
        <Form.Item>
          
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={e => onChangeHandler(e)}
            />
          
        </Form.Item>
        <Form.Item>
          <Checkbox>Remember me</Checkbox>
          
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <Link to='register'> Register now!</Link>
        </Form.Item>
      </Form>
      
       <div className="footer-dt">devTalk ©2020 Created by ZM </div>
      </Fragment>
    );
  }

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}
const mapStateToProps = state =>({
  isAuthenticated: state.auth.isAuthenticated,

})
export default connect(mapStateToProps, { login })(Login);
  