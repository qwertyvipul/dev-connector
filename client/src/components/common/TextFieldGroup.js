import React from 'react'
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({
    id,
    name,
    placeholder,
    value,
    label,
    error,
    info,
    type,
    onChange,
    disabled
}) =>{
    return (
        <div className="TextFieldGroup">
            {error && (<p className="input-error">{error}</p>)}

            <label>{label}</label>
            <input 
                type={type} 
                name={name} 
                className={classnames('form-input', {
                    'is-invalid': error
                })}
                id={id}
                value={value}
                onChange={onChange} 
                placeholder={placeholder}
                disabled={disabled}
            />

            {info && <small className="input-info">{info}</small>}
        </div>
    );
};

TextFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.string,
}

TextFieldGroup.defaultProps = {
    id: 'noid',
    type: 'text'
}

export default TextFieldGroup
