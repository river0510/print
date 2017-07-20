import React from 'react'
import header from '../../images/section2-head.png'
import btn from '../../images/start.png'
import Text from '../Text'
import './entrySection.css'

export default class EntrySection extends React.Component{
	render(){
		return(
			<div className='entry-section'>
				<div className='entry-section-header'>
					<img src={header} alt=""/>
				</div>
				<div className='entry-section-title'>
					<p><Text text={['開始你的','START YOUR']}/></p>
					<p><Text text={['專屬搭配之旅','EXCLUSIVE MATCH TRIP']}/></p>
				</div>
				<div className='entry-section-btn'>
					<img src={btn} alt=""/>
				</div>
			</div>
		)
	}
}