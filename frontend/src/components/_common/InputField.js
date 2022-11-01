import React from 'react';

const InputField = ({
    label,
    value,
    classes='',
    validationMessage='',
    ...rest
}) => {
    return (
        <div className={"input-field-container " + (classes)}>
            <div className="meta-info">{label}</div>
            <input
				autoComplete="off"
				className="at-input"
                value={value}
                {...rest}
			/>
            <div className="validation-message">{validationMessage}</div>
        </div>
    );
}
export default InputField;