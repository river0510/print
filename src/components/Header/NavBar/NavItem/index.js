import React from 'react'
import {Link} from 'react-router'
import Text from '../../../Text'
import './navItem.css'

class NavItem extends React.Component{
	render(){
		return(
			<div className='nav-item'>
				<div className='nav-text'><Link activeStyle={{textDecoration: 'none'}} to={this.props.link}><Text text={this.props.text}/></Link></div>
				<div className='underline'></div>
			</div>
		)
	}
}

export default NavItem;