import Page from '../../components/page-layout';
import Footer from '../../components/footer';
import Header from '../../components/header';
import AboutUs from '../../components/about-us';
import Payments from '../../components/payments';
import OurPartners from '../../components/our-partners';
import WhatWeDo from '../../components/what-we-do';
import OurService from '../../components/our-service';

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
				<OurPartners/>
				<WhatWeDo/>
				<Payments/>
				<AboutUs/>

			</>
		}
		footer={<Footer/>}
		/>
  );
}

export default Main;
