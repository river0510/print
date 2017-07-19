import React from 'react'
import NavBar from './NavBar'
import TopBar from './TopBar'
import './header.css'

class Header extends React.Component{
	render(){
		return(
			<div className='header'>
				<TopBar></TopBar>
				<NavBar></NavBar>
			</div>
		)
	}
}

export default Header;