import React from 'react'
import NavItem from './NavItem'
import NavBarLogo from './NavBarLogo'
import './navbar.css'

export default class NavBar extends React.Component{
	render(){
		return(
			<div className='navbar'>
				<div className='navbar-wrapper'>					
					<NavItem link='/' text={['Collections','Collections']}/>
					<NavItem text={['SHOP','SHOP']}/>
					<NavItem link='/gallery' text={['体验馆','GALLERY']}/>
					<NavBarLogo />
					<NavItem text={['Look Book','Look Book']}/>
					<NavItem text={['Film','Film']}/>
					<NavItem text={['About Us','About Us']}/>
				</div>
			</div>
		)
	}
}