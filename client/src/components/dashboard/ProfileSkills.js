import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileSkills = ({
  profile: {
    bio,
    skills,
    user: { login }
  }
}) => {
  return (
    <div className="profile-about bg-light p-2">
        <h2>Skills</h2>
      <div className="skills">
          {skills.map((skill, index) =>(
            <div key={index} className="margin-skill">{skill}</div>
          ))}
        
      </div>
      <div className="line"></div>
      {bio && (
        <Fragment>
          <h2>{login} Bio</h2>
          <p>{bio}</p>
          
        </Fragment>
      )}

      
    </div>
  );
};

ProfileSkills.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileSkills;
