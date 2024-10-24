import { ReactNode } from "react";
import Layout from '../layout';
import Slider from '../slider';
import { paymentsList } from '../../data/payments';

function Payments () {
	const sliderList = paymentsList.map(item => {
		return (
		<div className="payments__slider">
			<a href={item.href} aria-label={item.aria} className="payments__link">
				{item.svg}
			</a>
		</div>	
		)
	}) as ReactNode[];
	
	const sliderParameters = {
		navigation: true,
		default: {
			spaceBetween: 10,
			slidesPerView: 2.5
		},
		breakPoints: {
			768: {
			spaceBetween: 20,
			slidesPerView: 6,
			}
		}
	}

  return (
	<section className='payments'>
		<Layout>
			<h2  className='payments__title'>Payment methods</h2>
		</Layout>
		<Layout className="layout layout--no-mobile">
			<Slider sliderList={sliderList} className={'swiper--payments'} sliderParameters={sliderParameters}>
			</Slider>
		</Layout>

	</section>
  );
};


export default Payments;
