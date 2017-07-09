import React from 'react'
import './footerItem.css'

export default class FooterItem extends React.Component{
	render(){
		let {links} = this.props;
		let linkGroup = [];
		links.forEach((item,index)=>{
			console.log(item);
			linkGroup.push(<a href={item.url} key={index} className='footer-item-link'>{item.name}</a>)
		})
		return(
			<div className='footer-item'>
					<p className='footer-item-title'>{this.props.title}</p>
					{linkGroup}
			</div>
		)
	}
}