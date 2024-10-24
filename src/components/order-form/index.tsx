import { useState } from "react";
import Field from "../field";

function OrderForm() {
	const [pickupLocation, setPickupLocationValue] = useState('');
	const [dropLocation, setDropLocationValue] = useState('');
	return (
		<form className="order-form">
			<div className="order-form__wrap order-form__wrap--pickup">
				<span>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="12" cy="12" r="12" fill="#2B6BF3" fillOpacity="0.08"/>
						<circle cx="12" cy="12" r="5" fill="#2B6BF3"/>
						<circle cx="12" cy="12" r="2" fill="white"/>
					</svg>
				</span>
				<Field value={pickupLocation} label={"Pickup location"} inputId={'pickup-location'}>
					<input id="pickup-location" type ='search' placeholder='location' onChange={(evt)=>setPickupLocationValue(evt.target.value)}></input>
				</Field>
			</div>
			<div className="order-form__wrap order-form__wrap--drop">
				<span>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M18 10C18 13.3137 12 20 12 20C12 20 6 13.3137 6 10C6 6.68629 8.68629 4 12 4C15.3137 4 18 6.68629 18 10Z" fill="#FFD600"/>
					</svg>
				</span>
				<Field value={dropLocation} label={"Drop location"} inputId={'drop-location'}>
					<input id="drop-location" name="form-location" type ='search' placeholder='location' onChange={(evt)=>setDropLocationValue(evt.target.value)}></input>
				</Field>
			</div>
			<div className="order-form__btn-wrap">
				<button className='btn btn--third btn--width-full' type='submit'>Order</button>
				<button className='btn btn--reset btn--width-full order-form__reset-btn'  type='reset' onClick={() =>{
					setPickupLocationValue('');
					setDropLocationValue('')
				}}>
					<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0.276314 0.269411C-0.0921045 0.628626 -0.0921046 1.21103 0.276314 1.57024L2.76841 4.00008L0.276486 6.42976C-0.0919318 6.78897 -0.0919317 7.37137 0.276486 7.73059C0.644904 8.0898 1.24223 8.0898 1.61065 7.73059L4 5.40092L6.38935 7.73059C6.75777 8.0898 7.3551 8.0898 7.72351 7.73059C8.09193 7.37137 8.09193 6.78897 7.72351 6.42976L5.23159 4.00008L7.72369 1.57024C8.0921 1.21103 8.0921 0.628626 7.72369 0.269411C7.35527 -0.0898037 6.75794 -0.0898037 6.38953 0.269411L4 2.59924L1.61047 0.269411C1.24206 -0.0898037 0.644732 -0.0898037 0.276314 0.269411Z" fill="#C4C4C4"/>
					</svg>
					<span>Clear All</span>
				</button>
			</div>
		</form>
  	);
}

export default OrderForm;
