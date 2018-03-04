import React from 'react';
import LoginForm from '../forms/LoginForm';

export default class LoginPage extends React.Component{

  //submit = (data) => this.props.login(data).then(() => this.props.history.push("/dashboard"));

	render(){
		return (
			<div>
   				<div className="container">  
  					<div className="row">    
   						<div className="col-md-4 col-md-offset-4">
  							<LoginForm />
  						</div>
  					</div>
  				</div>
			</div>
		);
	}
}
