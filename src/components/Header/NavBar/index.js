import React from 'react'
import NavItem from './NavItem'
import NavBarLogo from './NavBarLogo'
import './navbar.css'

export default class NavBar extends React.Component{
	render(){
		return(
			<div className='navbar'>
				<div className='navbar-wrapper'>					
					<NavItem link='/' text={['首页']}/>
					<NavItem text={['商城']}/>
					<NavItem link='/gallery' text={['體驗館']}/>
					<NavBarLogo />
					<NavItem text={['門店']}/>
					<NavItem text={['關於我們']}/>
					<NavItem text={['聯繫我們']}/>
				</div>
			</div>
		)
	}
}