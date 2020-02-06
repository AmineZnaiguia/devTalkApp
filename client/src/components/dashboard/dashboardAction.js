import React from 'react';
import {Link} from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
 const dashboardAction = () => {
    return (
        
           <Button type="primary"><Link to='/edit-profile'>Edit Profile</Link></Button>  
        
    )
}
export default dashboardAction