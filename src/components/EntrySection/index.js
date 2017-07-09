import React from 'react'
import header from '../../images/section2-head.png'
import btn from '../../images/start.png'
import './entrySection.css'

export default class EntrySection extends React.Component{
	render(){
		return(
			<div className='entry-section'>
				<div className='entry-section-header'>
					<img src={header} alt=""/>
				</div>
				<div className='entry-section-title'>
					<p>開始你的</p>
					<p>專屬搭配之旅</p>
				</div>
				<div className='entry-section-btn'>
					<img src={btn} alt=""/>
				</div>
			</div>
		)
	}
}