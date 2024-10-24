import { ReactNode, useState } from "react";
import Layout from '../layout';
import Video from "../video";
import bgImage from '../../assets/images/png/img.png'
import bgImageMobile from '../../assets/images/png/img-mobile.png'
import poster from "../../assets/images/png/video.png"
import Field from "../field";


function OurService () {
	const [value, setValue] = useState('');

  return (
	<section className='our-service'>
		<img src={bgImage} className='our-service__bg'></img>
		<img src={bgImageMobile} className='our-service__bg-mobile'></img>
		<Layout>
			<div className='our-service__wrapper'>
				<div>
					<h2 className='our-service__title'>Our service started work in New York</h2>
					<p className='our-service__description'>Express courier service in the city. We are a reliable logistics partner for delivery services for online stores and restaurants!</p>
					<a className='our-service__more' href="#"></a>

					<div className='our-service__video video-block'>
						<h3 className='video-block__title'>How it works</h3>
						<Video poster={poster} url={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"}></Video>
					</div>
				</div>
				<div>
					<h3 className='our-service__title'>Send a Parcel</h3>
					<div>
						тут таб с формой
					</div>
					<div className='our-service__search'>
						<h3 className='our-service__search-title'>Track a package</h3>
						<form>
							<Field classInput='field__input--search' value={value}>
								<button type='submit' className="header__search-btn btn" aria-label='Отправить форму'>
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM7 12.6667C10.2217 12.6667 12.6667 10.2217 12.6667 7C12.6667 3.77834 10.2217 1.33333 7 1.33333C3.77834 1.33333 1.33333 3.77834 1.33333 7C1.33333 10.2217 3.77834 12.6667 7 12.6667Z" fill="#B7C6E7"/>
									<path d="M7.33325 10L10.6666 8.66667V5.33333L7.33325 6.51254V10Z" fill="#B7C6E7"/>
									<path d="M6.66675 10L3.33341 8.66667V5.33333L6.66675 6.51254V10Z" fill="#B7C6E7"/>
									<path d="M6.99992 3.33333L3.33325 4.66667L6.99992 6L10.6666 4.66667L6.99992 3.33333Z" fill="#B7C6E7"/>
									<path d="M11.9523 11L16 15.0477L15.0477 16L11 11.9523L11.9523 11Z" fill="#B7C6E7"/>
									</svg>
								</button>
								<input type ='search' placeholder='Track a Package' onChange={(evt)=>setValue(evt.target.value)}></input>
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
