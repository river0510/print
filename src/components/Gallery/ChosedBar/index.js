import React from 'react'
import './chosedBar.css'
import chosed1 from '../../../images/chosed1.png'
import chosed2 from '../../../images/chosed2.png'
import Button from '../Button'
import Text from '../../Text'

const iconWidth = 160;

export default class ChosedBar extends React.Component{
	state={
		left: 0,
		number: 7,
		animation: ''
	}
	render(){
		let {left, number,animation} = this.state;
		return(
			<div className='chosed-bar'>
				<div className='chosed-bar-wrapper'>					
					<div className='title'><Text text={['已选项目','Chosed']}/></div>
					<div className='icon-bar'>
						<div className='arrow-left' onClick={this._leftControll}></div>
						<div className='icon-box' style={{width: 160 * 4}}>
							<div className='icon-wrapper' style={{left: left,width: number * iconWidth, animation: animation}}>
								<Icon img={chosed1} />
								<Icon img={chosed1} />
								<Icon img={chosed1} />
								<Icon img={chosed1} />
								<Icon img={chosed1} />
								<Icon img={chosed1} />
								<Icon img={chosed1} />
							</div>
						</div>
						<div className='arrow-right' onClick={this._rightControll}></div>
					</div>
					<Button className='button'><p><Text text={['一键加入']}/></p><p><Text text={['购物袋']}/></p></Button>
				</div>
			</div>
		)
	}
	_leftControll = ()=>{
		if(Math.abs(this.state.left) == (this.state.number - 4) * iconWidth){
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
}

class Icon extends React.Component{
	render(){
		return(
			<div className='icon' style={{backgroundImage: `url('${this.props.img}')`}}>
				<div className='mask'><Text text={['移除']}/></div>
			</div>
		)
	}
}