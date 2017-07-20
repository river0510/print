import React from 'react'
import './menu.css'
import Text from '../../Text'
import actions from '../../../actions'
import {connect} from 'react-redux'
const {gallery} = actions;

//每个页面显示的icon数目
const showIconNumber = 4;
const pageWidth = 240;

class Menu extends React.Component{
	state={
		isShow: true,
		chosedPage: 1
	}
	render(){
		let menuClassName = this.state.isShow ? 'gallery-menu' : 'gallery-menu menu-hide'
		let navItems = [], thumbnails = [], pageCells = [], menuPic = [], pages = [];
		let {picData, chosedMenuId} = this.props;

		//装载navitem,获取选中菜单的menuPic
		picData.forEach((item,index)=>{
			navItems.push(<NavItem title={item.menuName} key={item.menuId} onClick={this._menuClick.bind(this,item.menuId)}/>)
			if(item.menuId === chosedMenuId){
				menuPic = item.menuPic;
			}
		})

		//装载选中菜单下的icon
		menuPic.forEach((item,index)=>{
			thumbnails.push(<Thumbnail img={item.thumbnail} key={item.id} onClick={this._printClick.bind(this,item.id)} onMouseOver={this._printMouseOver.bind(this,item.id)} onMouseOut={this._printMouseOut.bind(this)}/>)
		})
		
		//进行分页
		let onePage = [];
		for(let i = 0; i < thumbnails.length; i = i + showIconNumber){
			if(i + showIconNumber > thumbnails.length){
				onePage = thumbnails.slice(i);
			}else{
				onePage = thumbnails.slice(i, i + showIconNumber);
			}
			pages.push(<div className='thumbnail-page' key={i/showIconNumber + 1}>{onePage}</div>)
		}

		//装载分页按钮
		for(let i = 0; i < pages.length; i++){
			pageCells.push(<PageCell number={i+1} onClick={this._chosePage.bind(this,i+1)} key={i+1}/>)
		}

		return(
			<div className={menuClassName}>
				<div className='menu-wrapper'>
					<div className='nav-bar'>
						{navItems}
					</div>
					<div className='thumbnail-wrapper'>
						<div className='thumbnail-page-wrapper' style={{width: pageWidth * pages.length, left: - (this.state.chosedPage - 1) * pageWidth}}>
							{pages}
						</div>
					</div>
					<div className='page-cell-wrapper'>
						{pageCells}
					</div>
				</div>
				<div className='hide-bar' onClick={this._showMenu}>
					<div className='arrow'></div>
					<p >{this.state.isShow ? <Text text = {['隱藏菜單','HIDE']} /> : <Text text = {['顯示菜單','SHOW']} />}</p>
				</div>
			</div>
		)
	}

	_showMenu = ()=>{
		let isShow = !this.state.isShow
		this.setState({
			isShow
		})
	}

	_menuClick(id){
		this.props.choseMenu(id);
	}

	_printClick(id){
		this.props.chosePrint(id);
	}

	_printMouseOver(id,e){
		e.preventDefault();
		e.stopPropagation();
		this.props.mouseOverPrint(id)
	}

	_printMouseOut(e){
		e.preventDefault();
		e.stopPropagation();
		this.props.mouseOutPrint();
	}

	_chosePage(page){
		this.setState({
			chosedPage: page
		})
	}
}

class NavItem extends React.Component{
	render(){
		return(
			<div className='gallery-navItem' onClick={this.props.onClick}>
				<Text text={this.props.title}/>
			</div>
		)
	}
}

class Thumbnail extends React.Component{
	render(){
		return(
			<div onClick={this.props.onClick}className='thumbnail'>
				<img src={this.props.img} alt="thumbnail"  onMouseOver={this.props.onMouseOver} onMouseOut={this.props.onMouseOut} />
			</div>
		)
	}
}

class PageCell extends React.Component{
	render(){
		return(
			<div className='page-cell' onClick={this.props.onClick}>
				{this.props.number}
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		picData: state.gallery.picData,
		chosedMenuId: state.gallery.chosedMenuId
	}
}

function mapDispatchToProps(dispatch){
	return {
		choseMenu: (id) => {
			dispatch(gallery.choseMenu(id))
		},
		chosePrint: (id)=> {
			dispatch(gallery.chosePrint(id))
		},
		mouseOverPrint: (id)=>{
			dispatch(gallery.mouseOverPrint(id))
		},
		mouseOutPrint: ()=>{
			dispatch(gallery.mouseOutPrint())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)