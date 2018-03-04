import '../css/LoginForm.css';
import React from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import PropTypes from 'prop-types';
import axios from 'axios';
import { withRouter } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.userName.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const redirect = this.props;
    axios.get('http://localhost:9010/todo/login/'+this.state.userName+'/'+this.state.password)
      .then(function(response){
        console.log(response); 
          if(response.data.statusCode==='200'){
            console.log('success');
            redirect.history.push("/dashboard");
          } else {
            console.log('user not authorized');
          }
      })
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
        	<div className="form-group">
          		<FormGroup controlId="userName" bsSize="large">
            		<ControlLabel>User Name</ControlLabel>
            			<FormControl
              				autoFocus
              				type="text"
              				value={this.state.userName}
              				onChange={this.handleChange}
            			/>
          		</FormGroup>
          	</div>
          	<div className="form-group">
          		<FormGroup controlId="password" bsSize="large">
            		<ControlLabel>Password</ControlLabel>
            			<FormControl
              				value={this.state.password}
              				onChange={this.handleChange}
              				type="password"
            			/>
          		</FormGroup>
          	</div>	
          	<Button className="btn btn-lg btn-primary btn-block"
            	block
            	bsSize="large"
            	disabled={!this.validateForm()}
            	type="submit"
          	>
            	Login
          	</Button>
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
	submit: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
};

export default withRouter(LoginForm);