import Page from '../../components/page-layout';
import Footer from '../../components/footer';
import Header from '../../components/header';
import AboutUs from '../../components/about-us';
import Payments from '../../components/payments';
import OurPartners from '../../components/our-partners';
import WhatWeDo from '../../components/what-we-do';
import OurService from '../../components/our-service';
import Decoration from '../../components/decoration';

interface Props {
	handleClose: (value: boolean) => void
}

function Main({...props}: Props) {

  const {handleClose} = props;
  return (
		<Page
		header={<Header handleClose={handleClose}/>}
		main={
			<>	
			<OurService/>
				<Decoration>
					<span>
						<svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M16 0L0 4.5V23.6923L16 28L32 23.5V4.5L16 0ZM2 22V7.5L15 11V25.5L2 22ZM2 5.5L7.5 4L21.5 7.5L16 9L2 5.5ZM30 22L17 25.5V11L22 9.5V15L25 14V8.5L30 7V22ZM25 6.5L11 3L16 1.5L29 5.5L25 6.5Z" fill="#C2D2F4"/>
							<path d="M16 0L0 4.5V23.6923L16 28L32 23.5V4.5L16 0ZM2 22V7.5L15 11V25.5L2 22ZM2 5.5L7.5 4L21.5 7.5L16 9L2 5.5ZM30 22L17 25.5V11L22 9.5V15L25 14V8.5L30 7V22ZM25 6.5L11 3L16 1.5L29 5.5L25 6.5Z" fill="#B7C6E7"/>
						</svg>
					</span>
				</Decoration>
				<OurPartners/>
				
				<WhatWeDo/>
				<Payments/>
				<Decoration>
					<span>
						<svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M16 0L0 4.5V23.6923L16 28L32 23.5V4.5L16 0ZM2 22V7.5L15 11V25.5L2 22ZM2 5.5L7.5 4L21.5 7.5L16 9L2 5.5ZM30 22L17 25.5V11L22 9.5V15L25 14V8.5L30 7V22ZM25 6.5L11 3L16 1.5L29 5.5L25 6.5Z" fill="#C2D2F4"/>
							<path d="M16 0L0 4.5V23.6923L16 28L32 23.5V4.5L16 0ZM2 22V7.5L15 11V25.5L2 22ZM2 5.5L7.5 4L21.5 7.5L16 9L2 5.5ZM30 22L17 25.5V11L22 9.5V15L25 14V8.5L30 7V22ZM25 6.5L11 3L16 1.5L29 5.5L25 6.5Z" fill="#B7C6E7"/>
						</svg>
					</span>
				</Decoration>
				<AboutUs/>

			</>
		}
		footer={<Footer/>}
		/>
  );
}

export default Main;
