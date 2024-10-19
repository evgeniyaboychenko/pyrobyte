import './style.scss';
import { menuList,  servicesList, socialList } from '../../data/footer';

function Footer() {
  return (
    <div className="Footer">
		<div className="Footer-Top">
			<div className="Footer-About">
				<h2>About Whoosh</h2>
				<p>Express delivery of documents and parcels for organizations, express delivery of correspondence, purchases and other goods</p>
			</div>
			<div className="Footer-Menu">
				<h2>Menu</h2>
				<ul>
					{menuList.map((item, index) => 
						<li key={index} >{item.title}</li>
					)}
				</ul>
			</div>
			<div className="Footer-Menu">
				<h2>Services</h2>
				<ul>
					{servicesList.map((item, index) => 
						<li key={index} >{item.title}</li>
					)}
				</ul>
			</div>
			<div className="Footer-Contact">
				<h2>Contact us</h2>
				<a href='tel:88009345959'>8 800 934 5959</a>
				<p>2545 W. Diversey Ave.3rd Floor Chicago, IL 60647</p>
				<ul>
					{socialList.map((item, index) => 
						<li key={index} >
							<a href={item.href}>{item.svg}
							</a>
						</li>
					)}
				</ul>
			</div>
			
		</div>
		<div className="Footer-Bottom">
			<div className="Footer-Copyright">© 2022. All rights reserved.</div>
			<div className="Footer-AuthorLogo">Logo</div>
			<div className="Footer-Policy">Privacy policy</div>
		</div>
    </div>
  );
}


export default Footer;
