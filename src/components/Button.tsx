import React from 'react';

const Button: React.FC<React.ButtonHTMLAttributes<any>> = ({ children, ...props }) => {
    return <button className="app-btn" {...props}>
        {children}
    </button>;
};

export default Button;