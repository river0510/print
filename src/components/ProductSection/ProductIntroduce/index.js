import React from 'react'
import Text from '../../Text'
import './productIntroduce.css'

export default class ProductIntroduce extends React.Component{
	render(){
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