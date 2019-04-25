import React from 'react';
import { IAuthState, IState } from '../../reducers';
import { connect } from 'react-redux';
import { login } from '../../actions/auth.actions';
import { RouteComponentProps } from 'react-router';

interface ISignInState {
  username: string;
  password: string;
}

interface ISignInProps extends RouteComponentProps<{}>{
  auth: IAuthState
  login: (username: string, password: string, history: any) => void
}

export class SignInComponent extends React.Component<ISignInProps, ISignInState> {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  submit = async (event) => {
    event.preventDefault();
    console.log('attempting to login');
    this.props.login(this.state.username, this.state.password, this.props.history);
  }

  updateUsername = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  updatePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  render() {
    const { username, password } = this.state;
    const errorMessage = this.props.auth.errorMessage;
    return (
      <form className="form-signin" onSubmit={this.submit}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputUsername" className="sr-only">Username</label>
        <input type="text" id="inputUsername" name="username"
          className="form-control" placeholder="Username"
          required value={username} onChange={this.updateUsername} />

        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" name="password"
          className="form-control" placeholder="Password"
          required value={password} onChange={this.updatePassword} />

        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <p id="login-error">{errorMessage}</p>
      </form>
    );
  }
}

const mapStateToProps = (state: IState) => {
  return  {
    auth: state.auth
  }
}

const mapDispatchToProps = {
  login: login
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInComponent);
