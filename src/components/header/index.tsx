import { useState } from 'react';
import { navList } from '../../data/header';
import logo from '../../assets/images/svg/logo-main.svg'
import Layout from '../layout';
import Field from '../field';

interface Props {
	handleClose: (value: boolean) => void
}

function Header({...props}: Props) {
  const {handleClose} = props;
 
  const [value, setValue] = useState('');
  
  return (
    <header className="header">
		<Layout>
			<div className="header__wrapper">
				<div className="header__wrap">
					<a className="header__logo" href="#" aria-label="На главную">
					<img src={logo} width="192" height="64" alt="Whoosh" />
					</a>
					<button type='button' className="header__location-btn btn">
						<svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M11 6C11 6.57825 10.721 7.43892 10.1734 8.50282C9.6424 9.53439 8.92352 10.6362 8.18814 11.6588C7.45537 12.6777 6.72044 13.5984 6.1676 14.2653C6.10961 14.3353 6.05367 14.4024 6 14.4665C5.94633 14.4024 5.89039 14.3353 5.8324 14.2653C5.27956 13.5984 4.54463 12.6777 3.81186 11.6588C3.07648 10.6362 2.3576 9.53439 1.82663 8.50282C1.27902 7.43892 1 6.57825 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z" stroke="#C2D2F4" strokeWidth="2"/>
							<path d="M11 6C11 6.57825 10.721 7.43892 10.1734 8.50282C9.6424 9.53439 8.92352 10.6362 8.18814 11.6588C7.45537 12.6777 6.72044 13.5984 6.1676 14.2653C6.10961 14.3353 6.05367 14.4024 6 14.4665C5.94633 14.4024 5.89039 14.3353 5.8324 14.2653C5.27956 13.5984 4.54463 12.6777 3.81186 11.6588C3.07648 10.6362 2.3576 9.53439 1.82663 8.50282C1.27902 7.43892 1 6.57825 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z" stroke="#B7C6E7" strokeWidth="2"/>
						</svg>
						<span>NY, Manhattan</span>
					</button>
				</div>

				<form className="header__form-search">
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
						{navList.map((item, index) => 
							<li className="main-nav__item" key={index}>
								<a href={item.href}>{item.title}</a>
							</li>
						)}
					</ul>
					<button type='button' className="header__login btn"  aria-label="Войти">
						<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect width="40" height="40" rx="20" fill="#2B6BF3"/>
						<path fillRule="evenodd" clipRule="evenodd" d="M20 14C18.0276 14 16 15.6789 16 17.75V19H15.7143C15.3198 19 15 19.3358 15 19.75V25.25C15 25.6642 15.3198 26 15.7143 26H24.2857C24.6802 26 25 25.6642 25 25.25V19.75C25 19.3358 24.6802 19 24.2857 19H24V17.75C24 15.6789 21.9724 14 20 14ZM20 16C18.8165 16 18 17 18 17.75V19H22V17.75C22 17 21.1835 16 20 16Z" fill="white"/>
						</svg>
					</button>
				</nav>
				
			</div>

			{/* mobile version */}
			<div className="header__wrapper--display-1280" >
				<button type='button' className="header__profile btn" aria-label="Войти">
					<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect x="0.5" y="2.5" width="23" height="23" rx="11.5" stroke="#C2D2F4"/>
					<rect x="0.5" y="2.5" width="23" height="23" rx="11.5" stroke="#B7C6E7"/>
					<path d="M21.4 7.8C23.2778 7.8 24.8 6.27777 24.8 4.4C24.8 2.52223 23.2778 1 21.4 1C19.5222 1 18 2.52223 18 4.4C18 6.27777 19.5222 7.8 21.4 7.8Z" fill="#FD466E" stroke="#F8FAFF" strokeWidth="2"/>
					<path d="M12 13.3999C12.5934 13.3999 13.1735 13.2239 13.6669 12.8942C14.1602 12.5645 14.5448 12.0959 14.7718 11.5476C14.9988 10.9993 15.0581 10.396 14.9422 9.81404C14.8263 9.23206 14.5404 8.69751 14.1207 8.27802C13.701 7.85852 13.1663 7.57293 12.5843 7.45735C12.0022 7.34178 11.399 7.40142 10.8508 7.62872C10.3027 7.85603 9.83424 8.2408 9.50479 8.73436C9.17534 9.22792 8.99966 9.80809 8.99998 10.4015C9.00125 11.1966 9.31778 11.9588 9.88016 12.5209C10.4425 13.0829 11.2049 13.3991 12 13.3999Z" fill="#C2D2F4"/>
					<path d="M12 13.3999C12.5934 13.3999 13.1735 13.2239 13.6669 12.8942C14.1602 12.5645 14.5448 12.0959 14.7718 11.5476C14.9988 10.9993 15.0581 10.396 14.9422 9.81404C14.8263 9.23206 14.5404 8.69751 14.1207 8.27802C13.701 7.85852 13.1663 7.57293 12.5843 7.45735C12.0022 7.34178 11.399 7.40142 10.8508 7.62872C10.3027 7.85603 9.83424 8.2408 9.50479 8.73436C9.17534 9.22792 8.99966 9.80809 8.99998 10.4015C9.00125 11.1966 9.31778 11.9588 9.88016 12.5209C10.4425 13.0829 11.2049 13.3991 12 13.3999Z" fill="#B7C6E7"/>
					<path d="M8.01637 20.5999H15.9836C16.3592 20.5999 16.7195 20.4593 16.9851 20.209C17.2508 19.9587 17.4 19.6192 17.4 19.2652V18.9599C17.3639 17.6328 16.7792 16.3716 15.7704 15.445C14.7616 14.5185 13.4087 13.9999 12 13.9999C10.5913 13.9999 9.23832 14.5185 8.22956 15.445C7.22079 16.3716 6.63604 17.6328 6.59998 18.9599V19.2652C6.59998 19.6192 6.7492 19.9587 7.01483 20.209C7.14635 20.3329 7.30249 20.4312 7.47434 20.4983C7.64618 20.5654 7.83037 20.5999 8.01637 20.5999Z" fill="#C2D2F4"/>
					<path d="M8.01637 20.5999H15.9836C16.3592 20.5999 16.7195 20.4593 16.9851 20.209C17.2508 19.9587 17.4 19.6192 17.4 19.2652V18.9599C17.3639 17.6328 16.7792 16.3716 15.7704 15.445C14.7616 14.5185 13.4087 13.9999 12 13.9999C10.5913 13.9999 9.23832 14.5185 8.22956 15.445C7.22079 16.3716 6.63604 17.6328 6.59998 18.9599V19.2652C6.59998 19.6192 6.7492 19.9587 7.01483 20.209C7.14635 20.3329 7.30249 20.4312 7.47434 20.4983C7.64618 20.5654 7.83037 20.5999 8.01637 20.5999Z" fill="#B7C6E7"/>
					</svg>
				</button>
				<a className="header__logo" href="#" aria-label="На главную">
				<img src={logo} width="120" height="40" alt="Whoosh" />
				</a>
				<button type='button' className="header__burger-menu btn" aria-label="Открыть меню" onClick={()=>handleClose(true)}>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M9 17C9 16.4477 9.44772 16 10 16H20C20.5523 16 21 16.4477 21 17C21 17.5523 20.5523 18 20 18H10C9.44772 18 9 17.5523 9 17Z" fill="#C2D2F4"/>
					<path d="M9 17C9 16.4477 9.44772 16 10 16H20C20.5523 16 21 16.4477 21 17C21 17.5523 20.5523 18 20 18H10C9.44772 18 9 17.5523 9 17Z" fill="#B7C6E7"/>
					<path d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z" fill="#C2D2F4"/>
					<path d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z" fill="#B7C6E7"/>
					<path d="M3 7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H4C3.44772 8 3 7.55228 3 7Z" fill="#C2D2F4"/>
					<path d="M3 7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H4C3.44772 8 3 7.55228 3 7Z" fill="#B7C6E7"/>
					</svg>
				</button>				
			</div>
		</Layout>
    </header>
  );
}
export default Header;
