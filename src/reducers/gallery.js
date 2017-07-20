import {deepCopy} from '../Utils'
import mainStage from '../images/main-stage.jpg'
import stage1 from '../images/花色1.jpg'
import stage1Hover from '../images/花色1选中.jpg'
import stage1Thumb from '../images/图片花色1.jpg'
import stage2 from '../images/花色2.jpg'
import stage2Hover from '../images/花色2选中.jpg'
import stage2Thumb from '../images/图片花色2.jpg'

const initialState = {
	picData: [
		{
			menuId: 0,
			menuName: ['墙纸','WALL'],
			menuPic: [
				{
					stage: stage1,
					stageHover: stage1Hover,
					thumbnail: stage1Thumb,
					id: "01",
					commodityId: 0
				},{
					stage: stage2,
					stageHover: stage2Hover,
					thumbnail: stage2Thumb,
					id: "02",
					commodityId: 0
				}
			]
		}
	],
	chosedMenuId: 0,
	chosedPic: [],
	mainStage: mainStage,
	hoverStage: null,
	isHover: false     //鼠标是否悬停标志，为了实现渐隐效果
}

//传入id 返回对应印花对象
function findMenuPic(state, id){
	let {picData, chosedMenuId} = state;
	for(let i = 0; i < picData.length; i++){
		let menuPic = picData[i].menuPic;
		for(let j = 0; j < menuPic.length; j++){
			if(menuPic[j].id === id){
				return menuPic[j];
			}
		}
	}
}

//检测图片是否选择，已选择 返回true ，未选择返回false
function checkChosedPic(state, id){
	let {chosedPic} = state;
	for(let i = 0; i < chosedPic.length; i++){
		if(chosedPic[i].id === id){
			return true;
		}
	}
	return false;
}

export default function reducer(state = initialState, action){
	switch(action.type){
		case "CHOSE_MENU": {
			let newState = deepCopy(state);
			if(action.id != null){
				newState.chosedMenuId = action.id;
			}
			return newState;
		}
		case "CHOSE_PRINT": {
			if(checkChosedPic(state, action.id)){
				return state;
			}

			let newState = deepCopy(state);
			if(action.id != null){
				let pic = findMenuPic(newState, action.id);
				newState.chosedPic.push(pic);
			}
			return newState;
		}
		case "MOUSEOVER_PRINT": {
			let newState = deepCopy(state);
			if(action.id != null){
				let pic = findMenuPic(newState, action.id);
				newState.hoverStage = pic.stageHover;
				newState.isHover = true;
			}
			return newState;
		}
		case "MOUSEOUT_PRINT": {
			let newState = deepCopy(state);
			newState.isHover = false;
			return newState;
		}
		case "REMOVE_PRINT": {
			if(!checkChosedPic(state, action.id)){
				return state;
			}
			let newState = deepCopy(state);
			let {chosedPic} = newState;
			for(let i = 0; i < chosedPic.length; i++){
				if(chosedPic[i].id === action.id){
					chosedPic.splice(i,1);
					break;
				}
			}
			return newState;
		}
		case "CHOSE_STAGE": {

		}
		default: {
    		return state;
    	}
	}
}
