import React, { Component } from "react";
import { connect } from "react-redux";
import Moment from 'react-moment';
import styles from '../../discussion.module.css';

class ChatBox extends Component {

  render() {
    if (this.props.listMessage)
    return this.props.listMessage.map((el) => (
      
      <React.Fragment>
        {(this.props.currentUser == el[1] ) ? 
          <div className={styles.mymsg}>
            <div className={styles.msg}>
              <p>
                <span className={styles.time}>
                  <Moment format="DD/MM/YYYY HH:mm">{el[2]}</Moment>
                </span>
                <span>{el[1]}</span>
              </p>
              <p className={styles.paragraph}>{el[0]}</p>
            </div>
          </div>
            : 
            <div className={styles.usermsg}>
            <div className={styles.msg}>
              <p className={styles.right}>
                <span className={styles.time}>
                  <Moment format="DD/MM/YYYY HH:mm">{el[2]}</Moment>
                </span>
                <span>{el[1]}</span>
              </p>
              <p className={styles.paragraph}>{el[0]}</p>
            </div>
            </div>

            }
      </React.Fragment>
    
    
    ));
    else return <div>aucun message</div>
  }

}

const mapStateToProps = state => {
  console.log(state.listMessage)
  return {
    listMessage: state.discussion.listMessage
  };
};
export default connect(mapStateToProps, null)(ChatBox);
