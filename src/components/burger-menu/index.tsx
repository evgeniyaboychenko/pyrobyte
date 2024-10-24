import { useState } from "react";
import { navMobileList } from '../../data/header';
import Field from '../field';

interface Props {
	handleClose: (value: boolean) => void
}

function BurgerMenu({...props}:Props) {
	const {handleClose} = props;
	const [value, setValue] = useState('');
  return (
	<section className='burger-menu'>
		<div  className='burger-menu__overlay' onClick={()=>handleClose(false)}></div>
		<div  className='burger-menu__container'>
			<div  className='burger-menu__body'>
				<button type='button' className='burger-menu__close btn' onClick={()=>handleClose(false)}>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M5.28914 18.711C4.89861 18.3205 4.9162 17.6697 5.32842 17.2575L17.2707 5.31527C17.6829 4.90305 18.3336 4.88546 18.7242 5.27598C19.1147 5.66651 19.0971 6.31726 18.6849 6.72948L6.74264 18.6717C6.33042 19.0839 5.67966 19.1015 5.28914 18.711Z" fill="#C2D2F4"/>
					<path d="M5.28914 18.711C4.89861 18.3205 4.9162 17.6697 5.32842 17.2575L17.2707 5.31527C17.6829 4.90305 18.3336 4.88546 18.7242 5.27598C19.1147 5.66651 19.0971 6.31726 18.6849 6.72948L6.74264 18.6717C6.33042 19.0839 5.67966 19.1015 5.28914 18.711Z" fill="#B7C6E7"/>
					<path d="M5.28911 5.28914C5.67963 4.89861 6.33041 4.91622 6.74265 5.32846L18.6856 17.2714C19.0978 17.6836 19.1154 18.3344 18.7249 18.7249C18.3344 19.1155 17.6836 19.0979 17.2714 18.6856L5.32844 6.74268C4.91619 6.33043 4.89858 5.67966 5.28911 5.28914Z" fill="#C2D2F4"/>
					<path d="M5.28911 5.28914C5.67963 4.89861 6.33041 4.91622 6.74265 5.32846L18.6856 17.2714C19.0978 17.6836 19.1154 18.3344 18.7249 18.7249C18.3344 19.1155 17.6836 19.0979 17.2714 18.6856L5.32844 6.74268C4.91619 6.33043 4.89858 5.67966 5.28911 5.28914Z" fill="#B7C6E7"/>
					</svg>
				</button>
				<button type='button' className="header__location-btn btn">
						<svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M11 6C11 6.57825 10.721 7.43892 10.1734 8.50282C9.6424 9.53439 8.92352 10.6362 8.18814 11.6588C7.45537 12.6777 6.72044 13.5984 6.1676 14.2653C6.10961 14.3353 6.05367 14.4024 6 14.4665C5.94633 14.4024 5.89039 14.3353 5.8324 14.2653C5.27956 13.5984 4.54463 12.6777 3.81186 11.6588C3.07648 10.6362 2.3576 9.53439 1.82663 8.50282C1.27902 7.43892 1 6.57825 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z" stroke="#C2D2F4" strokeWidth="2"/>
							<path d="M11 6C11 6.57825 10.721 7.43892 10.1734 8.50282C9.6424 9.53439 8.92352 10.6362 8.18814 11.6588C7.45537 12.6777 6.72044 13.5984 6.1676 14.2653C6.10961 14.3353 6.05367 14.4024 6 14.4665C5.94633 14.4024 5.89039 14.3353 5.8324 14.2653C5.27956 13.5984 4.54463 12.6777 3.81186 11.6588C3.07648 10.6362 2.3576 9.53439 1.82663 8.50282C1.27902 7.43892 1 6.57825 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z" stroke="#B7C6E7" strokeWidth="2"/>
						</svg>
						<span>NY, Manhattan</span>
				</button>
				<form className='burger-menu__form'>
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

				<nav className="header__nav main-nav">
					<ul className="main-nav__list">
						{navMobileList.map((item, index) => 
							<li className="main-nav__item" key={index}>
								<a href={item.href}>{item.title}</a>
							</li>
						)}
					</ul>
				</nav>
			</div>

			<div className="burger-menu__bottom">
				<a href="#" className="btn btn--third btn--width-full">
					Take a complex order
				</a>
			</div>
		</div>
	</section>

	
  );
}

export default BurgerMenu;
