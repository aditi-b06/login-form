import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './index.css';
import Left from './components/Left';
import Right from './components/Right';

const Appp = () => {
    return (
        <>
            <Row>
                <Col><Left /></Col>
                <Col><Right /></Col>
            </Row>
        </>
    )
}

export default Appp;
