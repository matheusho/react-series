import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { logout } from '../../auth/authActions';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.changeOpen = this.changeOpen.bind(this);
  }

  changeOpen() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { name, email } = this.props.user;
    const classIsOpen = this.state.isOpen
      ? 'open'
      : '';

    return (
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
          <li
            className={`dropdown user user-menu ${classIsOpen}`}
            onMouseLeave={() => this.changeOpen()}
          >
            <a
              href="javascript:;"
              onClick={() => this.changeOpen()}
              data-toggle="dropdown"
              aria-expanded={String(this.state.isOpen)}
              className="dropdown-toggle"
            >
              <img
                src="http://lorempixel.com/160/160/abstract"
                alt="User image"
                className="user-image"
              />
              <span className="hidden-xs">{name}</span>
            </a>
            <ul className="dropdown-menu">
              <li className="user-header">
                <img
                  src="http://lorempixel.com/160/160/abstract"
                  alt="User image"
                  className="img-circle"
                />
                <p>{name} <small>{email}</small></p>
              </li>
              <li className="user-footer">
                <div className="pull-right">
                  <a
                    href="#"
                    onClick={() => this.props.logout()}
                    className="btn btn-default btn-flat" 
                  >
                    Sair
                  </a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ user: state.auth.user });
const mapDispatchToProps = (dispatch) => bindActionCreators({ logout }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
