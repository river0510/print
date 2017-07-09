import React from 'react'
import ProductReduce from './ProductReduce'
import pic1 from '../../images/section3-p1.jpg'
import pic2 from '../../images/section3-p2.jpg'
import './productSection.css'

let content = 'this is our product,this is our product,this is our product,this is our product,this is our product,this is our product,this is our product,this is our product,this is our product,this is our product,this is our product,this is our product'

export default class ProductSection extends React.Component{
	render(){
		return(
			<div className='product-section'>
				<div className='product-content'>
					<h1 className='product-section-title'>THE FABRIC UNION</h1>
					<ProductReduce title='Product Information' content={content} img={pic1}/>
					<ProductReduce title='Product Information' content={content} img={pic2}/>
				</div>
			</div>
		)
	}
}