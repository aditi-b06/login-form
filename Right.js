
import React from 'react';
import { Image } from 'react-bootstrap';
import img from '../pic.svg';
import '../index.css';

const Right = () => {
    return (
        <div>
           <Image className="right-b" src={img} thumbnail style={{border:"none",padding:"3rem",float:"left"}} /> 
        </div>
    )
}

export default Right;