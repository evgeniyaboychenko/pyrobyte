import { ReactNode } from "react";
import Layout from '../layout';
import Slider from '../slider';
import { paymentsList } from '../../data/our-partners';
import bgImage from '../../assets/images/png/pad.png'
import bgImageSecond from '../../assets/images/png/Intersect.png'
import {list} from '../../data/what-we-do'

function WhatWeDo () {

  return (
	<section className='what-we-do'>
		<img src={bgImage} className='what-we-do__bg'></img>
		<img src={bgImageSecond} className='what-we-do__bg-second'></img>
		<Layout>
				<h2  className=''>What we do</h2>
				<p className='what-we-do__description'>Express courier service in the city. We are a reliable logistics partner for delivery services for online stores and restaurants!</p>
				<ul className='what-we-do__list'>
					{
					list.map((item : {
						href: string;
						title: string;
						titleLink?: {
							href: string,
							text: string,
						},
						text: string;
						svg: JSX.Element;
					}, index) => 
					<li key={index} className='what-we-do__item'>
						<div className='what-we-do__icon'>
							{item.svg}
						</div>
						<h3 className='what-we-do__item-title'>{item.title}
							{item.titleLink && (
								<span>&#32;
									<a href={item.titleLink?.href}>{item.titleLink?.text}</a>
								</span>
								)
							}
						</h3>
						<p>{item.text}</p>
					</li>
					)}
				</ul>
		<button className='btn btn--secondary'>Get started!</button>				
		</Layout>
	</section>
  );
};

export default WhatWeDo;
