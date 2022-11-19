import React, { useContext } from 'react';
import SuccessScreen from '../components/SuccessScreen';
import Form from '../components/Form';
import { RegisterContext } from '../utils/RegisterContext';
import MonkeyMascot from '../components/MonkeyMascot';
import GamblerMonkey from '../components/GamblerMonkey';

type Props = {};

const Register = (props: Props) => {
	const { step } = useContext(RegisterContext);

	return (
		<div>
			<MonkeyMascot />
			<GamblerMonkey />
			<div className='registration-container'>
				<h1 className='page-title'>Mint Casino</h1>
				{
					step === 3 ? <SuccessScreen /> : <Form />
				}
			</div>
		</div>
	);
};

export default Register;