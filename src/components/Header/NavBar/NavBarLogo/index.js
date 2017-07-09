import React from 'react'
import logo from '../../../../images/logo.png'
import './navbarLogo.css'

export default class NavBarLogo extends React.Component{
	render(){
		return(
			<div className='navbar-logo'>
				<img className='logo' src={logo} alt="logo"/>
			</div>
		)
	}
}