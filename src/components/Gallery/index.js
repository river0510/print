import React from 'react'
import './gallery.css'
import StagePic from './StagePic'
import mainStage from '../../images/main-stage.jpg';
import Menu from './Menu'
import ChosedBar from './ChosedBar'

export default class Gallery extends React.Component{
	render(){
		return(
			<div className='gallery clearfix'>
				<div className='gallery-top'>
					<StagePic img={mainStage} main/>
					<StagePic img={mainStage} />
					<StagePic img={mainStage} />
					<StagePic img={mainStage} />
					<StagePic img={mainStage} />
					<Menu/>
				</div>	
				<ChosedBar/>
			</div>
		)
	}
}