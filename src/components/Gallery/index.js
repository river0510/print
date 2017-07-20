import React from 'react'
import './gallery.css'
import StagePic from './StagePic'
import Menu from './Menu'
import ChosedBar from './ChosedBar'
import {connect} from 'react-redux'

class Gallery extends React.Component{
	render(){
		let {chosedPic, mainStage, hoverStage, isHover} = this.props;
		let stagePic = [];
		chosedPic.forEach((item,index)=>{
			stagePic.push(<StagePic img={item.stage} key={index}/>)
		})
		return(
			<div className='gallery'>
				<div className='gallery-top'>
					<StagePic img={mainStage} main/>
					{stagePic}
					<StagePic 
						img={ hoverStage } 
						style={isHover ? {opacity: 1} : {opacity: 0}}/>
					<Menu/>
				</div>	
				<ChosedBar/>
			</div>
		)
	}
}

function mapStateToProps (state){
	return {
		picData: state.gallery.picData,
		chosedPic: state.gallery.chosedPic,
		mainStage: state.gallery.mainStage,
		hoverStage: state.gallery.hoverStage,
		isHover: state.gallery.isHover
	}
}

export default connect(mapStateToProps)(Gallery)