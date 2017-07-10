import React from 'react'
import './chosedBar.css'
import chosed1 from '../../../images/chosed1.png'
import chosed2 from '../../../images/chosed2.png'
import Button from '../Button'

export default class ChosedBar extends React.Component{
	render(){
		return(
			<div className='chosed-bar'>
				<div className='chosed-bar-wrapper'>					
					<div className='title'>已选项目</div>
					<div className='icon-bar'>
						<div className='arrow-left'></div>
						<div className="icon-wrapper">
							<Icon img={chosed1} />
							<Icon img={chosed1} />
							<Icon img={chosed1} />
							<Icon img={chosed1} />
						</div>
						<div className='arrow-right'></div>
					</div>
					<Button style={{margin: '20px'}}><p>一键加入</p><p>购物袋</p></Button>
				</div>
			</div>
		)
	}
}

class Icon extends React.Component{
	render(){
		return(
			<div className='icon' style={{backgroundImage: `url('${this.props.img}')`}}>
				<div className='mask'><span>移除</span></div>
			</div>
		)
	}
}