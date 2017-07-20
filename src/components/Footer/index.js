import React from 'react'
import FooterItem from './FooterItem'
import './footer.css'

const item1 = [
	{name:['購物',''],url: ''},
	{name:['配送時間',''],url: ''},
	{name:['支付預退款',''],url: ''},
	{name:['退貨中心',''],url: ''},
	{name:['售後服務',''],url: ''},
	{name:['認證',''],url: ''},
	{name:['保養說明',''],url: ''},
],
item2 = [
	{name:['歐洲',''],url: ''},
	{name:['亞洲',''],url: ''},
	{name:['美洲',''],url: ''},
],
item3 = [
	{name:['深圳辦事處',''],url: ''},
	{name:['媒體',''],url: ''},
	{name:['招納賢士',''],url: ''}
],
item4 = [
	{name:['使用條款和條件',''],url: ''},
	{name:['銷售條款和條件',''],url: ''},
	{name:['退貨政策',''],url: ''}
],
item5 = [
	{name:['新浪微博',''],url: ''},
	{name:['微信公眾號',''],url: ''}
];

export default class Footer extends React.Component{
	render(){
		return(
			<div className='footer'>
				<div className='footer-wrapper'>
					<FooterItem title={['客戶關係','']} links={item1}/>
					<FooterItem title={['實體店','']} links={item2}/>
					<FooterItem title={['公司','']} links={item3}/>
					<FooterItem title={['法律聲明','']} links={item4}/>
					<FooterItem title={['關注我們','']} links={item5}/>
				</div>
				<p className='footer-copyright'>copyright©2017 诚业科技版权所有</p>
			</div>
		)
	}
}