import React from 'react'
import Text from '../../Text'
import './productReduce.css'

export default class ProductReduce extends React.Component{
	render(){
		console.log(this.props.title)
		return(
			<figure className='product-figure'>
				<img src={this.props.img} alt="product"/>
				<figcaption>
					<p className='figure-title'><Text text={this.props.title}/></p>
					<p className='figure-content'><Text text={this.props.content}/></p>
				</figcaption>
			</figure>
		)
	}
}