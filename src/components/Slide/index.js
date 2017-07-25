import React from 'react'
import {Carousel} from 'antd';
import pic1 from '../../images/part1.jpg'
import slideLogo from '../../images/section1-logo.png'
import './slide.css'

export default class Slide extends React.Component{
	render(){
		return(
			<div className='slide'>
				<Carousel  className='slide-wrapper' autoplay>
					<div className='slide-img'><img  src={pic1} alt=""/></div>
					<div className='slide-img'><img  src={pic1} alt=""/></div>
				</Carousel>
				<img className='slide-logo' src={slideLogo}></img>
			</div>
		)
	}
}