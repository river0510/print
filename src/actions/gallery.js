//菜单选择
function choseMenu(id){
	return {
		type: 'CHOSE_MENU',
		id: id
	}
}

//印花选择
function chosePrint(id){
	return {
		type: 'CHOSE_PRINT',
		id: id
	}
}

//印花鼠标悬停
function mouseOverPrint(id){
	return  {
		type: 'MOUSEOVER_PRINT',
		id: id
	}
}
//印花鼠标移出
function mouseOutPrint(){
	return  {
		type: 'MOUSEOUT_PRINT'
	}
}

//移除印花
function removePrint(id){
	return {
		type: 'REMOVE_PRINT',
		id: id
	}
}

//选择主舞台
function choseStage(src){
	return {
		type: 'CHOSE_STAGE',
		mainStage: src
	}
}

const gallery = {
	choseMenu,
	chosePrint,
	mouseOverPrint,
	mouseOutPrint,
	removePrint,
	choseStage
}

export default gallery;