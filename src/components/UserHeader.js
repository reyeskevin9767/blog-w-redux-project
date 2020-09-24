import React from 'react';

// Need to use action creator
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    return <div>User Header</div>;
  }
}

export default connect(null, { fetchUser })(UserHeader);
