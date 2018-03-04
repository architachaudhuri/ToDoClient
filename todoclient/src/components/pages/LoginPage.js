import React from 'react';
import LoginForm from '../forms/LoginForm';

export default class LoginPage extends React.Component{

	render(){
		return (
			<div>
   				<div className="container">  
  					<div className="row">    
   						<div className="col-md-4 col-md-offset-4">
  							<LoginForm submit={this.submit} />
  						</div>
  					</div>
  				</div>
			</div>
		);
	}
}
