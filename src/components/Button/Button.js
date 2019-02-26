import React from 'react';
import propTypes from 'prop-types';
import './Button.css';

export const Button = ({ disabled, handleOnClick, title }) => {
    return (
        <button className="btn btn-green" disabled={disabled}
            onClick={handleOnClick}
        >
            {title}
        </button>
    );
}
// demonstrating the usage of prop types.
Button.propTypes = {
    title: propTypes.string,
    disabled: propTypes.bool,
    handleOnClick: propTypes.func
}