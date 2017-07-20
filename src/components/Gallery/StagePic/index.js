import React from 'react'
import './stagePic.css'

export default class StagePic extends React.Component{
	render(){
		let style = this.props.main ? null : {position: 'absolute'};
		return(
			<img className='stage-pic' src={this.props.img} style={{...style,...this.props.style}}/>
		)
	}
}