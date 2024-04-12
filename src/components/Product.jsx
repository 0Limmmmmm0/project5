import React from 'react';
import {Col, Nav} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
  let navigate = useNavigate();
  let {new_item, i , no} = props;
    const {title, imgUrl, price, sale, discount} = props.new_item;
    return (
      <Col sm={6} xl={4}>
        <Nav.Link onClick={()=>
        navigate('/detail/'+no[i])}>
        <div>
        <img src={imgUrl} width={"100%"} />
        <div className='txtbox'>
          <h4>{title}</h4>
          <div className='sub_txtbox'>
          <p>{price}</p>&nbsp;&nbsp;&nbsp;
          <b>{sale}&nbsp;&nbsp;&nbsp;</b>
          <span>{discount}</span></div>
        </div>
        </div>
        </Nav.Link>
      </Col>
      
    )
  }

  export default Product;