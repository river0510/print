import React from 'react'
import './button.css'

export default class Button extends React.Component{
	render(){
		return(
			<div {...this.props}>
				<button className='gallery-button'>{this.props.children}</button>
			</div>
		)
	}
}