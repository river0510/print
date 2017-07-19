import React from 'react'
import Text from '../../Text'
import './footerItem.css'

export default class FooterItem extends React.Component{
	render(){
		let {links,title} = this.props;
		let linkGroup = [];
		links.forEach((item,index)=>{
			let name = item.name;
			linkGroup.push(<a href={item.url} key={index} className='footer-item-link'><Text text={name}/></a>)
		})
		return(
			<div className='footer-item'>
					<p className='footer-item-title'><Text text={title}/></p>
					{linkGroup}
			</div>
		)
	}
}