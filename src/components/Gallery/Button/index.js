import React from 'react'
import './button.css'

export default class Button extends React.Component{
	render(){
		return(
			<div {...this.props}>
				<div className='gallery-button'>{this.props.children}</div>
			</div>
		)
	}
}