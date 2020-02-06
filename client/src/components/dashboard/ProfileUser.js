import React, {Fragment, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Spinner from '../layout/spinner'
import {getCurrentProfile} from '../../actions/profile'
import ProfileSkills from './ProfileSkills'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import ProfileTop from './ProfileTop'
const ProfileUser = ({ getProfileById, 
     profile:{ profile, loading},
     getCurrentProfile,
     auth,
     match}) => {
        const [formData, setFormData] = useState({
            company: "",
            location: "",
            status: "",
            skills: "",
            bio: "",
            twitter: "",
            facebook: "",
            linkedin: "",
            youtube: "",
            instagram: ""
          }); 
    useEffect(()=>{
        getCurrentProfile()   
    },[getCurrentProfile])
    return <Fragment>
 
    {profile == null || loading ? <Spinner /> : <Fragment>
        <div>
            <ProfileTop profile={profile} />
            <ProfileSkills profile={profile} />
        </div>
    </Fragment> }
        
    </Fragment>
}

ProfileUser.propTypes = {
getCurrentProfile: PropTypes.func.isRequired,
profile: PropTypes.object.isRequired,
auth: PropTypes.object.isRequired,
}

const mapStateToProps = state =>({
    profile: state.profile,
    auth: state.auth
})
export default connect(mapStateToProps, {getCurrentProfile}) (ProfileUser)
