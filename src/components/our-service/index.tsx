import { ReactNode, useState } from "react";
import Layout from '../layout';
import Video from "../video";
import bgImage from '../../assets/images/png/img.png'
import bgImageMobile from '../../assets/images/png/img-mobile.png'
import poster from "../../assets/images/png/video.png"
import Field from "../field";
import TabComponent from "../tabs";
import OrderForm from "../order-form";
import {tabList} from '../../data/our-service'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


function OurService () {
	const [value, setValue] = useState('');

	const tabListInner = tabList.map(item => {
		return (
		<div className="tab-inner">
			{item.svg}
			<p className="tab-inner__text">{item.text}</p>
		</div>	
		)
	}) as ReactNode[];

	const tabPanelListInner = [
		<OrderForm />,
		<OrderForm />,
		<OrderForm />,
	] as ReactNode[];

  return (
	<section className='our-service'>
		<img src={bgImage} className='our-service__bg'></img>
		<img src={bgImageMobile} className='our-service__bg-mobile'></img>
		<Layout>
			<div className='our-service__wrapper'>
				<div className='our-service__column-first'>
					<h1 className='our-service__title'>Our service started work in New York</h1>
					<p className='our-service__description'>We make delivery exactly at the time you need - we can start to fulfill the order a few minutes after it arrives, or we can deliver on a specific day and hour.</p>
					<a className='our-service__more' href="#">
						<span>Read more</span>
						<svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M4.72351 3.30468L1.61047 0.269411C1.24206 -0.0898037 0.644732 -0.0898037 0.276314 0.269411C-0.0921045 0.628626 -0.0921046 1.21103 0.276314 1.57024L2.76841 4.00008L0.276486 6.42976C-0.0919318 6.78897 -0.0919317 7.37137 0.276486 7.73059C0.644904 8.0898 1.24223 8.0898 1.61065 7.73059L4.72369 4.69531C4.92006 4.50384 5.01177 4.24896 4.99879 3.99827C5.01075 3.74869 4.91899 3.49527 4.72351 3.30468Z" fill="#2B6BF3"/>
						</svg>
					</a>
					<div className='our-service__video video-block'>
						<h3 className='video-block__title'>How it works</h3>
						<Video poster={poster} url={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"}></Video>
					</div>
				</div>
				<div>
					<div className='our-service__order'>
					<div className='our-service__title-wrap'>
						<h2 className='our-service__order-title'>Send a Parcel</h2>
						<Tippy content={<p className='our-service__tooltip'>A commission is a piece of work that someone is asked to do and is paid for.</p>} arrow={false}>
							<button className="btn btn--reset our-service__tooltip-btn">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="12" cy="12" r="12" fill='currentColor'/>
								<path d="M11 11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V11Z" fill="white"/>
								<path d="M11 7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7C13 7.55228 12.5523 8 12 8C11.4477 8 11 7.55228 11 7Z" fill="white"/>
								</svg>
							</button>
						</Tippy>
					</div>
					<TabComponent tabListInner={tabListInner} tabPanelListInner={tabPanelListInner}></TabComponent>
					</div>
					<div className='our-service__search'>
						<h3 className='our-service__search-title'>Track a package</h3>
						<form>
							<Field classInput='field__input--search' value={value}>
								<button type='submit' className="header__search-btn btn" aria-label='Отправить форму'>
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M13.0909 6.54545C13.0909 7.98177 12.6283 9.31003 11.8439 10.3894L16 14.5455L14.5455 16L10.3894 11.8439C9.31004 12.6283 7.98178 13.0909 6.54545 13.0909C2.9305 13.0909 0 10.1604 0 6.54545C0 2.9305 2.9305 0 6.54545 0C10.1604 0 13.0909 2.9305 13.0909 6.54545ZM6.5 11C9 11 11 9.09091 11 6.54545C11 4 9 2 6.54545 2C4.09091 2 2 4 2 6.54545C2 9.09091 4 11 6.5 11Z" fill="#CCCCCC"/>
								</svg>
								</button>
								<input type ='search' placeholder='Enter code' onChange={(evt)=>setValue(evt.target.value)}></input>
							</Field>
						</form>
					</div>
				</div>
			</div>			
		</Layout>
	</section>
  );
};

export default OurService;
