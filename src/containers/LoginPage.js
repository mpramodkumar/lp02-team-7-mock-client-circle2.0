import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as loginAction from '../actions/auth';
import LoginForm from '../components/LoginForm';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      role: process.env.REACT_APP_ROLE,
      message: '',
    };
  }

  componentWillMount() {}

  handleLogin(e) {
    debugger;
    e.preventDefault();
    const { userName, password } = this.state;
    const credentials = { userName, password };
    this.props.actions.loginUser(credentials).then(() => {
      this.props.actions.getCurrentUser().then(() => {
        if (sessionStorage.getItem('user')) {
          this.redirectToDashboard();
        }
      });
    });
  }

  redirectToDashboard() {
    this.props.history.push('/dashboard');
  }

  renderForm() {
    const { message } = this.props;
    return (
      <LoginForm
        userName={this.state.userName}
        password={this.state.password}
        handleChange={(name, value) => this.setState({ [name]: value })}
        onSubmit={e => this.handleLogin(e)}
        message={message}
      />
    );
  }

  render() {
    return <div className="page-container">{this.renderForm()}</div>;
  }
}

LoginPage.propTypes = {
  actions: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
  message: PropTypes.string,
  history: PropTypes.object,
};

function mapState(state) {
  debugger;
  return {
    message: state.loginReducer.message,
    isAdmin: state.loginReducer.isAdmin,
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(loginAction, dispatch),
  };
}

export default connect(mapState, mapDispatch)(LoginPage);
