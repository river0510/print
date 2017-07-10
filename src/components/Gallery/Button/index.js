import React from 'react'
import './button.css'

export default class Button extends React.Component{
	render(){
		return(
			<button style={{...this.props.style}} className='gallery-button'>{this.props.children}</button>
		)
	}
}