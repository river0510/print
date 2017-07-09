import React from 'react'
import './productReduce.css'

export default class ProductReduce extends React.Component{
	render(){
		return(
			<figure className='product-figure'>
				<img src={this.props.img} alt="product"/>
				<figcaption>
					<p className='figure-title'>{this.props.title}</p>
					<p className='figure-content'>{this.props.content}</p>
				</figcaption>
			</figure>
		)
	}
}