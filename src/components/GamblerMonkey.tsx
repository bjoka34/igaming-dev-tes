import React from 'react';
import monkey from '../assets/monkey.png';
import chips from '../assets/poker-chips.png';

type Props = {};

const GamblerMonkey = (props: Props) => {
    return (
        <div className='gambling-monkey'>
            <img className='monkey' src={monkey} alt="monkey-with-chips" />
            <img className='poker-chips' src={chips} alt="chips" />
        </div>
    );
};

export default GamblerMonkey;