// import { ReactNode } from "react";
import './style.scss';

// interface Props {
// 	children?: ReactNode,
// 	header?: string,
// 	footer?: boolean,
// }

function Menu() {
  return (
    <ul className='Menu'>
		<li>About company</li>
		<li>Contact</li>
		<li>Rules</li>
		<li>FAQ</li>
		<li>Reviews</li>
		<li>Cargo transportation</li>
		<li>Tariffs</li>
	</ul>
  );
}

export default Menu;
