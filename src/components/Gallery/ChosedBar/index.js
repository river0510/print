import React from 'react'
import './chosedBar.css'
import chosed1 from '../../../images/chosed1.png'
import chosed2 from '../../../images/chosed2.png'
import Button from '../Button'
import Text from '../../Text'
import actions from '../../../actions'
import {connect} from 'react-redux'
const { gallery } = actions

const iconWidth = 160;
const showIconNumber = 4;

class ChosedBar extends React.Component{
	state={
		left: 0,
		animation: ''
	}
	render(){
		let {left, animation} = this.state;
		let {chosedPic, removePrint} = this.props;
		let number = chosedPic.length;
		let icons = [];
		chosedPic.forEach((item,index)=>{
			icons.push(<Icon img={item.thumbnail} key={index} onClick={this._removePrint.bind(this,item.id)}/>)
		})
		return(
			<div className='chosed-bar'>
				<div className='chosed-bar-wrapper'>					
					<div className='title'><Text text={['已选项目','Chosed']}/></div>
					<div className='icon-bar'>
						<div className='arrow-left' onClick={this._leftControll}></div>
						<div className='icon-box' style={{width: iconWidth * showIconNumber}}>
							<div className='icon-wrapper' style={{left: left,width: number * iconWidth, animation: animation}}>
								{icons}
							</div>
						</div>
						<div className='arrow-right' onClick={this._rightControll}></div>
					</div>
					<Button className='button'><p><Text text={['一键加入','Add To']}/></p><p><Text text={['购物袋','Shopping Cart']}/></p></Button>
				</div>
			</div>
		)
	}
	_leftControll = ()=>{
		if(Math.abs(this.state.left) == (this.props.chosedPic.length - showIconNumber) * iconWidth){
			this.setState({
				animation: 'leftLimit 0.6s'
			})
			setTimeout(()=>{
				this.setState({
					animation: ''
				})
			},700)
			return;
		}
		let left = this.state.left - iconWidth;
		this.setState({
			left
		})
	}
	
	_rightControll = ()=>{
		if(Math.abs(this.state.left) == 0){
			this.setState({
				animation: 'rightLimit 0.6s'
			})
			setTimeout(()=>{
				this.setState({
					animation: ''
				})
			},700)
			return;
		}
		let left = this.state.left + iconWidth;
		this.setState({
			left
		})
	}

	_removePrint(id){
		this.props.removePrint(id);
	}
}

class Icon extends React.Component{
	render(){
		return(
			<div className='icon' style={{backgroundImage: `url('${this.props.img}')`}} onClick={this.props.onClick}>
				<div className='mask'><Text text={['移除','REMOVE']}/></div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		chosedPic: state.gallery.chosedPic
	}
}

function mapDispatchToProps(dispatch){
	return {
		removePrint: (id)=>{
			dispatch(gallery.removePrint(id))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ChosedBar)