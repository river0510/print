import React from 'react'
import NavItem from './NavItem'
import NavBarLogo from './NavBarLogo'
import './navbar.css'

export default class NavBar extends React.Component{
	render(){
		return(
			<div className='navbar'>
				<div className='navbar-wrapper'>					
					<NavItem link='/' text={['首页','HOME']}/>
					<NavItem text={['SHOP','SHOP']}/>
					<NavItem link='/gallery' text={['體驗館','GALLERY']}/>
					<NavBarLogo />
					<NavItem text={['門店','STORE']}/>
					<NavItem text={['關於我們','ABOUT']}/>
					<NavItem text={['聯繫我們','CONTACT']}/>
				</div>
			</div>
		)
	}
}