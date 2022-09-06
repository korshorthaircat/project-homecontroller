import React from 'react';
import "../../css/testt.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const testt = () => {
    return (
        <div className='wrap '>
    
        <Row>
            <Col className="cardBox" >
                <div className="cardImg">
                <img src='https://www.ikea.com/ext/ingkadam/m/61778d2a4441edd9/original/PH184645-crop001.jpg?f=xs'/>
                </div>

               <div className='cardText'>
                <p className='cardMainText'>
                    일상을 바꾸는 패브릭
                </p>
                <p>
                    HOME CONTROLLER EXCLUSIVE
                </p>
                </div>
                
            </Col>
            <Col className="cardBox">2 of 3</Col>
            <Col className="cardBox">3 of 3</Col>
        </Row>
    
        </div>
    );
};

export default testt;