'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileScene from '../../screens/Setting/ProfileScene';
import { AppState } from '../../store/configure-store';
class ProfileContainer extends Component {

  render() {
    return (
      <ProfileScene />
    );
  }
}

function mapStateToProps(state: AppState) {
  return {
    userReducer:state.userReducer
  }
}

export default connect(mapStateToProps)(ProfileContainer);
