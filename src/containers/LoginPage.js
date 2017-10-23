import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import LoginForm from '../components/LoginForm';


class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      role: process.env.REACT_APP_ROLE,
      bankCode: process.env.REACT_APP_BANK_CODE,
      message: '',
    };
  }

  componentWillMount() {
  }

  handleLogin(e) {
    e.preventDefault();
    
  }

  redirectToDashboard() {
    this.props.actions.authSuccess();
    this.props.history.push('/dashboard');
  }

  renderForm() {
    const { message, spinner } = this.props;
    return (
      <LoginForm
        userName={this.state.userName}
        password={this.state.password}
        handleChange={(name, value) => this.setState({ [name]: value })}
        onSubmit={e => this.handleLogin(e)}
        message={message}
        spinner={!!spinner}
      />
    );
  }

  render() {
    return (
      <div className="page-container">
        {this.renderForm()}
      </div>
    );
  }
}

LoginPage.propTypes = {
  actions: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
  message: PropTypes.string,
  history: PropTypes.object,
};

function mapState(state) {
  return {
    message: '',
  };
}


export default connect(mapState)(LoginPage);
