import React from 'react';

const Button = ({
    children,
    handleOnClick,
    loading=false,
    type='',
}) => {
    return (
        <div className={"button-container " + (loading ? 'loading ' : '') + (type)} onClick={handleOnClick}>
            {children}
        </div>
    );
}
export default Button;
