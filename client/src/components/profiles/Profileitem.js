import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { Card } from 'antd';

const { Meta } = Card;

const Profileitem = ({profile: {
    user: {_id, login, avatar},
    status,
    company,
    location,
    skills
    
}}) => {
    return (
        <div className='card-margin'><Card 
    hoverable
    style={{ width: 200, minHeight:300  }}
    cover={<img alt="example" src={avatar} />}
  >
    <Meta title={login} description={[status,': ' ,company,skills.slice(0, 4).map((skill, index)=>(
                   <li className='disp-film'  key={index} className='disp-film'>
                       {skill}
                   </li>
                   
               ))]}   />
    
  </Card></div>
        // <div className='profile bg-light'>
        //    <img src={avatar}  className='round-img' />
        //    <div>
        //        <h2>{login}</h2>
        //        <p> {status} {company} </p>
        //        <p className='my-1'> {location} </p>
        //    </div>
        //    <ul>
        //        {skills.slice(0, 4).map((skill, index)=>(
        //            <li key={index} className='tex-primary'>
        //                {skill}
        //            </li>
        //        ))}
        //    </ul>
        // </div>
    )
}

Profileitem.propTypes = {
  profile: PropTypes.object.isRequired,
}

export default Profileitem
