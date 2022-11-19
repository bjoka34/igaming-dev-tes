import React from 'react';
import { BsFillCheckCircleFill } from "react-icons/bs";

type Props = {};

const SuccessScreen = (props: Props) => {
	return (
		<div className='success-screen'>
			<BsFillCheckCircleFill size={100} className="success-icon" />
			<h2 className='success-title'>Successfull Registration</h2>
		</div>
	);
};

export default SuccessScreen;