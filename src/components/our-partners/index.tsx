import { ReactNode } from "react";
import Layout from '../layout';
import Slider from '../slider';
import { paymentsList } from '../../data/our-partners';

function OurPartners () {
	const sliderList = paymentsList.map(item => {
		return (
		<div className="our-partners__slider">
			<a href={item.href} aria-label={item.aria} className="our-partners__link">
				{item.svg}
			</a>
		</div>	
		)
	}) as ReactNode[];

	const sliderParameters = {
		navigation: true,
		default: {
			spaceBetween: 20,
			slidesPerView: 2,
			centeredSlides: true,
		},
		breakPoints: {
			768: {
			spaceBetween: 10,
			slidesPerView: 3,
			centeredSlides: false,
			},
			1280: {
				spaceBetween: 10,
				slidesPerView: 8,
				centeredSlides: false,
			}
		},

	}

  return (
	<section className='our-partners'>
		<Layout>
			<div className='our-partners__head'>
				<h2  className='our-partners__title'>Our Partners</h2>
				<a href='#' className='our-partners__collaborate'>
					<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M11 11H6V10L0 8.5V14.2633C0 15.224 0.751579 16 1.68211 16H15.3179C16.2484 16 17 15.224 17 14.2633V8.5L11 10V11Z" fill="#FD466E"/>
					<path d="M15.3179 2.99996H12V2.37825C12 0.934501 11.3779 0 10 0H7C5.6221 0 5 0.934539 5 2.37829V3H1.68669C0.756159 3 0.00458002 3.7875 0.00458002 4.7625L0 7L6 8.5V7H11V8.5L17 7V4.74371C17 3.78746 16.2484 2.99996 15.3179 2.99996ZM6 2.60526C6 2.13158 6.52778 2 7 2H10C10.4722 2 11 2.13158 11 2.60526V3L6 3V2.60526Z" fill="#FD466E"/>
					<path d="M10 8H7V10H10V8Z" fill="#FD466E"/>
					</svg>
					<span>Let's collaborate</span>
				</a>
			</div>
		</Layout>
		<Layout className="layout layout--no-mobile">
			<Slider sliderList={sliderList} className={'swiper--our-partners our-partners__swipers'} sliderParameters={sliderParameters}>
			</Slider>
		</Layout>
		<Layout>
			<a href='#' className='our-partners__collaborate our-partners__collaborate--mobile'>
					<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M11 11H6V10L0 8.5V14.2633C0 15.224 0.751579 16 1.68211 16H15.3179C16.2484 16 17 15.224 17 14.2633V8.5L11 10V11Z" fill="#FD466E"/>
					<path d="M15.3179 2.99996H12V2.37825C12 0.934501 11.3779 0 10 0H7C5.6221 0 5 0.934539 5 2.37829V3H1.68669C0.756159 3 0.00458002 3.7875 0.00458002 4.7625L0 7L6 8.5V7H11V8.5L17 7V4.74371C17 3.78746 16.2484 2.99996 15.3179 2.99996ZM6 2.60526C6 2.13158 6.52778 2 7 2H10C10.4722 2 11 2.13158 11 2.60526V3L6 3V2.60526Z" fill="#FD466E"/>
					<path d="M10 8H7V10H10V8Z" fill="#FD466E"/>
					</svg>
					<span>Let's collaborate</span>
				</a>
		</Layout>

	</section>
  );
};

export default OurPartners;
