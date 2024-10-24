import Layout from '../layout';
import bgImage from '../../assets/images/png/pad.png'
import bgImageSecond from '../../assets/images/png/Intersect.png'
import {list} from '../../data/what-we-do'

function WhatWeDo () {

  return (
	<section className='what-we-do'>
		<img src={bgImage} className='what-we-do__bg'></img>
		<img src={bgImageSecond} className='what-we-do__bg-second'></img>
		<Layout>
				<h2  className='what-we-do__title'>What we do</h2>
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
				<div className='what-we-do__btn'>
					<a className='btn btn--secondary'>Get started!</a>	
				</div>			
		</Layout>
	</section>
  );
};

export default WhatWeDo;
