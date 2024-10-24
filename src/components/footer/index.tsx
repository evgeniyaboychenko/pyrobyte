import { menuList,  servicesList, socialList } from '../../data/footer';
import logo from '../../assets/images/svg/logo.svg'
import Layout from '../layout';

function Footer() {
  return (
    <footer className="footer">
		<Layout>
		<div className="footer__top">
			<div className="footer__about">
				<h2 className="footer__title footer__title--ml">About Whoosh</h2>
				<div className="footer__about-info">
					<svg width="44" height="46" viewBox="0 0 44 46" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M34.8679 29.8868C34.8679 32.3773 34.0377 41.5094 10.3773 41.5094L10.3773 39.0189C30.717 39.0189 32.3773 32.3774 32.3773 29.8868L34.8679 29.8868Z" fill="#C2D2F4"/>
					<path fillRule="evenodd" clipRule="evenodd" d="M34.8679 29.8868C34.8679 32.3773 34.0377 41.5094 10.3773 41.5094L10.3773 39.0189C30.717 39.0189 32.3773 32.3774 32.3773 29.8868L34.8679 29.8868Z" fill="#B7C6E7"/>
					<path fillRule="evenodd" clipRule="evenodd" d="M37.9196 10.3361C37.9325 10.2883 37.9332 10.2857 37.9332 10.3261C37.9332 7.95719 36.0033 6.0368 33.6226 6.0368C31.2419 6.0368 29.312 7.95719 29.312 10.3261C29.312 10.2857 29.3127 10.2883 29.3256 10.3361C29.3657 10.4848 29.5241 11.0711 30.1476 12.1684C30.8808 13.4585 31.9386 14.9059 33.12 16.3355C33.2875 16.5382 33.4553 16.738 33.6226 16.9342C33.7899 16.738 33.9577 16.5382 34.1252 16.3355C35.3066 14.9059 36.3644 13.4585 37.0976 12.1684C37.7211 11.0711 37.8794 10.4848 37.9196 10.3361ZM33.6226 25.7358C33.6226 25.7358 44 16.0291 44 10.3261C44 4.62316 39.3539 0 33.6226 0C27.8913 0 23.2452 4.62316 23.2452 10.3261C23.2452 16.0291 33.6226 25.7358 33.6226 25.7358Z" fill="#C2D2F4"/>
					<path fillRule="evenodd" clipRule="evenodd" d="M37.9196 10.3361C37.9325 10.2883 37.9332 10.2857 37.9332 10.3261C37.9332 7.95719 36.0033 6.0368 33.6226 6.0368C31.2419 6.0368 29.312 7.95719 29.312 10.3261C29.312 10.2857 29.3127 10.2883 29.3256 10.3361C29.3657 10.4848 29.5241 11.0711 30.1476 12.1684C30.8808 13.4585 31.9386 14.9059 33.12 16.3355C33.2875 16.5382 33.4553 16.738 33.6226 16.9342C33.7899 16.738 33.9577 16.5382 34.1252 16.3355C35.3066 14.9059 36.3644 13.4585 37.0976 12.1684C37.7211 11.0711 37.8794 10.4848 37.9196 10.3361ZM33.6226 25.7358C33.6226 25.7358 44 16.0291 44 10.3261C44 4.62316 39.3539 0 33.6226 0C27.8913 0 23.2452 4.62316 23.2452 10.3261C23.2452 16.0291 33.6226 25.7358 33.6226 25.7358Z" fill="#B7C6E7"/>
					<path fillRule="evenodd" clipRule="evenodd" d="M14.6744 20.2983C14.6873 20.2504 14.688 20.2479 14.688 20.2883C14.688 17.9194 12.758 15.999 10.3774 15.999C7.99668 15.999 6.06676 17.9194 6.06676 20.2883C6.06676 20.2479 6.06744 20.2504 6.08036 20.2983C6.12051 20.4469 6.27886 21.0333 6.9024 22.1305C7.63556 23.4207 8.6934 24.8681 9.87472 26.2976C10.0422 26.5003 10.2101 26.7001 10.3774 26.8964C10.5447 26.7001 10.7125 26.5003 10.88 26.2976C12.0613 24.8681 13.1192 23.4207 13.8523 22.1305C14.4759 21.0333 14.6342 20.4469 14.6744 20.2983ZM10.3774 35.698C10.3774 35.698 20.7547 25.9912 20.7547 20.2883C20.7547 14.5853 16.1086 9.96216 10.3774 9.96216C4.6461 9.96216 0 14.5853 0 20.2883C0 25.9912 10.3774 35.698 10.3774 35.698Z" fill="#C2D2F4"/>
					<path fillRule="evenodd" clipRule="evenodd" d="M14.6744 20.2983C14.6873 20.2504 14.688 20.2479 14.688 20.2883C14.688 17.9194 12.758 15.999 10.3774 15.999C7.99668 15.999 6.06676 17.9194 6.06676 20.2883C6.06676 20.2479 6.06744 20.2504 6.08036 20.2983C6.12051 20.4469 6.27886 21.0333 6.9024 22.1305C7.63556 23.4207 8.6934 24.8681 9.87472 26.2976C10.0422 26.5003 10.2101 26.7001 10.3774 26.8964C10.5447 26.7001 10.7125 26.5003 10.88 26.2976C12.0613 24.8681 13.1192 23.4207 13.8523 22.1305C14.4759 21.0333 14.6342 20.4469 14.6744 20.2983ZM10.3774 35.698C10.3774 35.698 20.7547 25.9912 20.7547 20.2883C20.7547 14.5853 16.1086 9.96216 10.3774 9.96216C4.6461 9.96216 0 14.5853 0 20.2883C0 25.9912 10.3774 35.698 10.3774 35.698Z" fill="#B7C6E7"/>
					</svg>
				<p> Express delivery of documents and parcels for organizations, express delivery of correspondence, purchases and other goods</p></div>
			</div>
			<div className="footer__menu">
				<h2 className="footer__title footer__title--decoration">Menu</h2>
				<ul className="footer__menu-list">
					{menuList.map((item, index) => 
						<li key={index}>
							<a href={item.href}>{item.title}</a>
						</li>
					)}
				</ul>
			</div>
			<div className="footer__services">
				<h2 className="footer__title footer__title--decoration">Services</h2>
				<ul className="footer__menu-list">
					{servicesList.map((item, index) => 
						<li key={index}>
							<a href={item.href}>{item.title}</a>
						</li>
					)}
				</ul>
			</div>
			<div className="footer__contact">
				<h2 className="footer__title footer__title--decoration">Contact us</h2>
				<a className="footer__phone" href='tel:88009345959'>8 800 934 5959</a>
				<div className="footer__address">
					<svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path opacity="0.56" d="M12 6C12 9.31371 6 16 6 16C6 16 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6Z" fill="#2B6BF3"/>
					</svg>
					<span>2545&nbsp;W. Diversey Ave. 3rd&nbsp;Floor Chicago, IL&nbsp;60647</span>
				</div>
				<ul className="footer__social-list">
					{socialList.map((item, index) => 
						<li key={index} >
							<a href={item.href} rel="nofollow noopener noreferrer" target="_blank">{item.svg}
							</a>
						</li>
					)}
				</ul>
			</div>
			
		</div>
		<div className="footer__bottom">
			<div className="footer__bottom-title">
				<span>
					Made by
				</span>
			</div>
				<div className="footer__copyright">© 2022. All rights reserved.</div>
				<a className="footer__author-logo" href="#">
					<img src={logo}/>
				</a>
				<a href="#" className="footer__policy">
					<svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9.99643 6.87252V1.53567C5.99609 3 4.99609 5.98356e-05 4.99609 5.98356e-05L4.99956 0C4.99609 5.98356e-05 4.99609 5.98356e-05 4.99609 5.98356e-05C4.99609 5.98356e-05 3.99609 3 0.00329978 1.53567L0.00268884 6.87252C-0.0113473 7.1462 -0.0253834 8.87953 1.49052 10.6281C2.20636 11.4491 3.45212 12.3158 4.99609 13C6.82079 12.1942 8.17173 11.145 8.87354 10.1871C10.0385 8.59064 10.0105 7.11579 9.99643 6.87252Z" fill="#85AAF8"/>
					</svg>
					<span>Privacy policy</span>
				</a>
		</div>
		</Layout>
    </footer>
  );
}


export default Footer;
