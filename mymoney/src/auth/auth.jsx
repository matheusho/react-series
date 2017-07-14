import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { login, signup } from './authActions';
import Grid from '../common/layouts/grid';
import Row from '../common/layouts/row';
import If from '../common/operator/if';
import Messages from '../common/msg/msg';
import InputAuth from '../common/form/inputAuth';

import './auth.css';

class Auth extends Component {
	constructor(props) {
    super(props);

    this.state = { loginMode: true };
    this.changeMode = this.changeMode.bind(this);
  }

  changeMode() {
    this.setState({ loginMode: !this.state.loginMode });
  }

  onSubmit(values) {
    const { login, signup } = this.props;
    this.state.loginMode ? login(values) : signup(values);
  }

	render() {
    const { loginMode } = this.state;
    const { handleSubmit } = this.props;

		return (
			<div className="login-box">
        <div className="login-logo"><b> My</b>Money</div>
        <div className="login-box-body">
          <div className="login-box-msg">Bem vindo!</div>
          <form onSubmit={handleSubmit((v) => this.onSubmit(v))}>
            <Field
              component={InputAuth}
              type="input"
              name="name"
              placeholder="Nome"
              icon="user"
              hide={loginMode}
            />
            <Field
              component={InputAuth}
              type="email"
              name="email"
              placeholder="E-mail"
              icon="envelope"
            />
            <Field
              component={InputAuth}
              type="password"
              name="password"
              placeholder="Senha"
              icon="lock"
            />
            <Field
              component={InputAuth}
              type="password"
              name="confirm_password"
              placeholder="Confirmação de senha"
              icon="lock"
              hide={loginMode}
            />
            <Row>
              <Grid cols="4">
                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-flat"
                >
                  {login ? 'Entrar': 'Registrar'}
                </button>
              </Grid>
            </Row>
          </form>
          <br/>
          <a onClick={() => this.changeMode()}>
            {loginMode
              ? 'Novo usuário? Registrar aqui!'
              : 'Já é cadastrado? Entrar aqui!'}
          </a>
        </div>
        <Messages />
      </div>
		);
	}
}

Auth = reduxForm({ form: 'authForm' })(Auth)
const mapDispatchToProps = (dispatch) =>
	bindActionCreators({ login, signup }, dispatch);

export default connect(null, mapDispatchToProps)(Auth);
