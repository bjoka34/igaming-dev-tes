import React from 'react';

interface DropdownProps {
    options: {
        value: string;
        name: string;
        order: number;
    }[],
    name: string;
    code: string;
    validation: any;
}

const Dropdown = ({ options, name, validation }: DropdownProps) => {
    return (
        <select className='dropdown-select' id={name} name={name} title="Gender" {...validation}>
            <option className='option-dd' value="">{`Select ${name}`}</option>
            {
                options.map((item, index) => {
                    return (
                        <option className='option-dd' value={item.value} key={`option${index}`}>{item.name}</option>
                    );
                })
            }
        </select>
    );
};

export default Dropdown;