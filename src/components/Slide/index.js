import React from 'react'
import {Carousel} from 'antd';
import pic1 from '../../images/part1.jpg'
import slideLog from '../../images/section1-logo.png'
import './slide.css'

export default class Slide extends React.Component{
	render(){
		return(
			<div className='slide'>
				<Carousel  className='slide'>
					<div className='slide-img'><img  src={pic1} alt=""/></div>
					<div className='slide-img'><img  src={pic1} alt=""/></div>
				</Carousel>
				<img className='slide-log' src={slideLog}></img>
			</div>
		)
	}
}