import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser , addRoom } from "../../actions/discussion";
import styles from '../../discussion.module.css';
const axios = require('axios');
class Contact extends Component {

  state = {
    profiles: []
  }

  componentDidMount = () => {
    axios.get("/profile")
    .then(response => {this.setState({profiles: response.data})})
    .catch(function (error) {console.log(error);})
  };

  userSelect(user, image) {
    const obj = {
      user: user,
      image: image
    };
    console.log(obj);
    this.props.addUser(obj);

    let roomId = `${this.props.currentUser}-${Date.now()}`;
    console.log(roomId);
    this.props.addRoom(roomId);
    this.props.socket.emit("addUserToRoom", this.props.currentUser, roomId);
    this.props.socket.emit("addUserToRoom", obj.user, roomId);
  }

  render() {
    console.log(this.state.profiles)

    const users = this.state.profiles.map( (item, i) => {
      return (
        <div
          className={styles.state}
          onClick={() => this.userSelect(item.user.login, 1)}
        >
          <div className={styles.pic}>
          <img src={item.user.avatar} alt="" />
            <span className={styles.statedot}></span>
          </div>
          <div className={styles.info}>
            <h6>{item.user.login}</h6>
            <span>online</span>
          </div>
        </div>
      )
    })
    
    return (
      <React.Fragment>
        {users}
        
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
    return {
      socket: state.discussion.socket
    };
  };
  
const mapDispatchToProps = { addUser, addRoom };
export default connect(mapStateToProps, mapDispatchToProps)(Contact);