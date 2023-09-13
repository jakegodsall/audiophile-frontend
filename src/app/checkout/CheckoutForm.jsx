'use client';

import React, { useState } from 'react';
import BillingDetails from './formSections/BillingDetails';
import ShippingDetails from './formSections/ShippingDetails';
import PaymentDetails from './formSections/PaymentDetails';

const CheckoutForm = () => {
	const [formData, setFormData] = useState({
		billing: {
			name: '',
			email: '',
			phone: '',
		},
		shipping: {
			address: '',
			zip: '',
			city: '',
			country: '',
		},
		payment: {
			method: 'e-cash',
		},
	});

	const onChangeHandler = (e, section) => {
		// extract inputs
		const input = e.target.name;
		const value = e.target.value;

		// create new section based on changed input
		let newSection = { ...formData[section] };
		newSection = { ...newSection, [input]: value };

		// set the new state including the new section
		setFormData((prevState) => {
			return {
				...prevState,
				[section]: newSection,
			};
		});
	};

	const onRadioHandler = (radioValue) => {
		let newSection = { ...formData.payment };
		newSection.method = radioValue;

		setFormData((prevState) => {
			return {
				...prevState,
				newSection,
			};
		});
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		console.log(e);
	};

	return (
		<form
			onSubmit={onSubmitHandler}
			className="flex w-full flex-col items-center bg-[#FAFAFA] px-[2.4rem]"
		>
			<div className="w-full bg-white p-[2.4rem]">
				<h1 className="mb-[3.2rem] text-[2.8rem] font-bold uppercase tracking-[0.1rem]">
					Checkout
				</h1>
				{/* <BillingDetails onChangeHandler={onChangeHandler} />
				<ShippingDetails onChangeHandler={onChangeHandler} /> */}
				<PaymentDetails onRadioHandler={onRadioHandler} />
			</div>
			<div>
				<button type="submit">Continue & Pay</button>
			</div>
		</form>
	);
};

export default CheckoutForm;
