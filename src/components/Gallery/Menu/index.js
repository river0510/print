import React from 'react'
import './menu.css'
import Text from '../../Text'
import pillow1 from '../../../images/pillow1.png'
import pillow2 from '../../../images/pillow2.png'
import pillow3 from '../../../images/pillow3.png'
import pillow4 from '../../../images/pillow4.png'

export default class Menu extends React.Component{
	render(){
		return(
			<div className='gallery-menu'>
				<div className='menu-wrapper'>
					<div className='nav-bar'>
						<NavItem title='墙纸'/>
						<NavItem title='沙发'/>
						<NavItem title='抱枕'/>
						<NavItem title='窗帘'/>
						<NavItem title='装饰'/>
					</div>
					<div className='thumbnail-wrapper'>
						<Thumbnail img={pillow1}/>
						<Thumbnail img={pillow2}/>
						<Thumbnail img={pillow3}/>
						<Thumbnail img={pillow4}/>
					</div>
					<div className='thumbnail-page'>
						<PageCell number='1'/>
						<PageCell number='2'/>
						<PageCell number='3'/>
					</div>
					<div className='hide-bar'>
						<div className='arrow'></div>
						<p >隐藏菜单</p>
					</div>
				</div>
			</div>
		)
	}
}

class NavItem extends React.Component{
	render(){
		return(
			<div className='gallery-navItem'>
				<Text text={this.props.title}/>
			</div>
		)
	}
}

class Thumbnail extends React.Component{
	render(){
		return(
			<div className='thumbnail'>
				<img src={this.props.img} alt="thumbnail"/>
			</div>
		)
	}
}

class PageCell extends React.Component{
	render(){
		return(
			<div className='page-cell'>
				{this.props.number}
			</div>
		)
	}
}