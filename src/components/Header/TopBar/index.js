import React from 'react';
import { connect } from 'react-redux';
import actions from '../../../actions'
import './topBar.css'
const {language} = actions

class TopBar extends React.Component{
	render(){
		return(
			<div className='header-topbar'>
				<div className='topbar-left'>
					<span className='topbar-button' onClick={this._changeLanguageClick} value="0">中文</span>
					<span >|</span>
					<span className='topbar-button' onClick={this._changeLanguageClick} value="1">English</span>
				</div>
				<div className='topbar-right'></div>
			</div>
		)
	}

	_changeLanguageClick = (e)=>{
		let id = Number(e.target.getAttribute('value'));
		this.props.changeLanguage(id);
	}
}

function mapDispatchToProps(dispatch){
	return {
		changeLanguage: (id)=>{
			dispatch(language.changeLanguage(id));
		}
	}
}

function mapStateToProps(state){
	return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);