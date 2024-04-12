import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Detail = (props) => {
    let {id} = useParams();
    let {new_item} = props;
  return (
    <Container>
    <Row>
        <Col md={6}>
            <img src={new_item[id].imgUrl} width="100%" />
        </Col>
        <Col md={6}>
            <h4 className='pt-5'>{new_item[id].title}</h4>
            <p>{new_item[id].price}</p>
            <b>{new_item[id].sale}</b>
            <span>{new_item[id].discount}</span>
            <Button variant='danger'>주문하기</Button>
        </Col>
    </Row>
</Container>
  )
}

export default Detail