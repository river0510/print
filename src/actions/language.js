//切换语言  ID：1.中文  2.英文
function changeLanguage(id){
	return {
		type: 'CHANGE_LANGUAGE',
		id: id
	}
}

const language = {
	changeLanguage
}

export default language;