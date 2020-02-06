import React, { Component } from "react";
import { connect } from "react-redux";
import styles from '../../discussion.module.css';

class ChatTeams extends Component {
    render() {
        
        if (this.props.selectedUser){
          return (
          <div className={styles.groupbanner}>
            <div className={styles.members}>
              <h6>Team</h6>
              {this.props.selectedUser.map((el) => (
                <div className={styles.pic}>
                  
                  
                  <img src="http://www.gravatar.com/avatar/3979576bcdcbd166d005a5b225e1bc52?s=200&r=pg&d=mm" alt=""/>
                  <span className={styles.statedot}></span>
                </div>
              ))}
         

            </div>
          </div> )
        }else{
              return ( null )
        }
    }
}

const mapStateToProps = state => {
  return {
    selectedUser: state.discussion.selectedUser
  };
};
export default connect(mapStateToProps, null)(ChatTeams);