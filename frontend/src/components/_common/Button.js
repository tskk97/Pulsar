import React from 'react';

const Button = ({
    children,
    handleOnClick,
    type='',
}) => {
    return (
        <div className={"button-container " + (type)} onClick={handleOnClick}>
            {children}
        </div>
    );
}
export default Button;