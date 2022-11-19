import React from 'react';
import monkeyMascot from '../assets/monkey-mascot.png';

type Props = {};

const MonkeyMascot = (props: Props) => {
    return (
        <div className='monkey-mascot'>
            <img src={monkeyMascot} alt="monkey" />
            <div className='bubble'>
                <p className='monkey-talks'>Sign Up now!<br></br> Let's play together!</p>
            </div>
        </div>
    );
};

export default MonkeyMascot;