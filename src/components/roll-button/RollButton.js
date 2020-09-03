import React from 'react';
import styled from 'styled-components/macro';

const RollButtonStyle = styled.button`
    background: ${({disabled}) => disabled ? 'gray' : '#000'};
    width: 25rem;
    height: 5rem;
    color: white;
    font-size: 1.8rem;
    outline: none;
    border: 0;
    border-radius: 5px;
    cursor: ${({disabled}) => disabled ? 'normal' : 'pointer'};
    display: block;
    margin: 0 auto;
`;

export default ({buttonText, rollHandler, disabled}) => <RollButtonStyle onClick={rollHandler} disabled={disabled}>{buttonText}</RollButtonStyle>;