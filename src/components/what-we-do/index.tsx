import { ReactNode } from "react";
import Layout from '../layout';
import Slider from '../slider';
import { paymentsList } from '../../data/our-partners';
import bgImage from '../../assets/images/png/pad.png'

function WhatWeDo () {

  return (
	<section className='what-we-do'>
		<img src={bgImage} className='what-we-do__bg'></img>
		<Layout>
			<div className='what-we-do'>
				<h2  className=''>What we do</h2>
				<p  className='what-we-do__description'>Express courier service in the city. We are a reliable logistics partner for delivery services for online stores and restaurants!</p>

			</div>
		</Layout>
	</section>
  );
};

export default WhatWeDo;
