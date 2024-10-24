import { useState } from 'react';
// import { navList } from '../../data/header';
// import logo from '../../assets/images/svg/logo-main.svg'
import Layout from '../layout';
// import Field from '../field';


function AboutUs() {
  const [etc, setExpanded] = useState(false);
  const classNameIsExpand = etc && 'is-expanded';
  
  return (
    <section className='about-us'>
		<h2  className='visually-hidden'></h2>
		<Layout>
			<div className={`about-us__wrapper ${classNameIsExpand}`}>
				<p>Since 2019, LibertyWalk has successfully provided express courier delivery services in the city for both individuals and legal entities,
					and is also a reliable logistics partner for delivery services for online stores and restaurants!
					Express delivery of documents and parcels for organizations, express delivery of correspondence, purchases, 
					flowers, food, gifts and goods up to 1.5 tons - the most frequent orders in our company.</p>
				<p>But at the same time, we do not limit the range of courier services and without problems we can buy and bring goods and 
					products from the online store, arrange delivery for the online store, cafe, supermarket, restaurant or any other business. 
					Around the clock on our website you can call a courier in just a minute and arrange an express courier delivery without 
					unnecessary bureaucracy, negotiations and calls to the call center.
					<span><button type='button' className="about-us__etc btn" aria-label="Показать еще" onClick={()=>setExpanded(true)}>
						<svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect width="25" height="15" rx="4" fill="#CCDBFC"/>
						<rect x="17" y="5" width="5" height="5" rx="2.5" fill="white"/>
						<rect x="10" y="5" width="5" height="5" rx="2.5" fill="white"/>
						<rect x="3" y="5" width="5" height="5" rx="2.5" fill="white"/>
						</svg>
					</button>
					</span>
				</p>
				</div>

			<div className={`about-us__etc-text ${classNameIsExpand}`}>
				<p>Since 2019, LibertyWalk has successfully provided express courier delivery services in the city for both individuals and legal entities,
					and is also a reliable logistics partner for delivery services for online stores and restaurants!
					Express delivery of documents and parcels for organizations, express delivery of correspondence, purchases, 
					flowers, food, gifts and goods up to 1.5 tons - the most frequent orders in our company.</p>
				<p>But at the same time, we do not limit the range of courier services and without problems we can buy and bring goods and 
					products from the online store, arrange delivery for the online store, cafe, supermarket, restaurant or any other business. 
					Around the clock on our website you can call a courier in just a minute and arrange an express courier delivery without 
					unnecessary bureaucracy, negotiations and calls to the call center.</p>
				<button type='button' className="about-us__collapse btn" onClick={()=>setExpanded(false)}>Collapse text</button>	
			</div>
		</Layout>
    </section>
  );
}
export default  AboutUs;
