import React from 'react'
import { connect } from 'react-redux';
import { language } from '../../actions'

class Text extends React.Component{
	render(){
		let {id} = this.props;
		return(
			<span>{this.props.text && this.props.text[id]}</span>
		)
	}
}

function mapStateToProps(state){
	return {
		id: state.language.languageId
	}
}

export default connect(mapStateToProps)(Text)