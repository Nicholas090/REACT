import React from 'react';
import styled from 'styled-components';
// import './errorMessage.css';
const ErrorMessage = () => {
    const Img = styled.img`
        width: 100%;
        height: 100%; 
         `
    return (
        <>
        <Img src={process.env.PUBLIC_URL + '/img/err.jpeg'} alt='error'></Img>
    <span>Something goes wrong</span>
    </>
    )
}

export default ErrorMessage;