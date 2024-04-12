import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../css/Home.css';
import '../css/rolling.css';
import Title from '../components/Title';
import Product from '../components/Product';
import Slick from '../components/Slick';
import Swiper from '../components/Swiper';
import Swiper2 from '../components/Swiper_2'
import data from '../data';
// import data3 from '../data3';

const Home = (props) => {
  let [new_item, setNew_item] = useState(data);
  let [no, setNo] = useState([0, 1, 2, 3, 4, 5]);
  let [animate, setAnimate] = useState(true);
  let onStop = () => setAnimate(false);
  let onRun = () => setAnimate(true);
  let span_style = {
    textDecoration: 'underline',
    fontWeight: 'bold'
  }

  return (
    <>
      <div className='slider'>
        <Row>
          <Col xl={20}><div><img src="/img/slider1.jpg" alt="" /></div></Col>
          <div className="Title_Text_Box">
            <div className="Text_cover">
              <div className="Text_box">
                <b>COLLABO</b><br />
                <b>벨리곰 X 위글위글</b>
                <p>귀여운 곰과 함께하는 한정판 <br />
                  제품을 바로 만나보세요!</p>
                <span style={span_style}>자세히보기</span>
              </div>
              <div className="Text_box">
                <b>NEW</b><br />
                <b>곰이 왔나봄</b>
                <p>봄의 설레임을 더해 줄 <br />
                  피크닉 아이템</p>
                <span style={span_style}>자세히보기</span>
              </div>
              <div className="Text_box">
                <b>LOOKBOOK</b><br />
                <b>리빙컬렉션</b>
                <p>집안 곳곳을 걸을 때마다 선물 같은<br />
                  하루를 보내길 원한다면?</p>
                <span style={span_style}>자세히보기</span>
              </div>
              <div className="Text_box">
                <b>CLUMPPY</b><br />
                <b>NEW 컬렉션</b>
                <p>위글위글이 전개하는<br />
                  유니섹스 캐주얼 브랜드</p>
                <span style={span_style}>자세히보기</span>
              </div>
            </div>
          </div>
        </Row>
      </div>
      <Title />
      <div className="btn">
        <Button variant="danger" onClick={() => {
          let copy = [...new_item].sort((a, b) => (a.title > b.title) ? 1 : -1)
          setNew_item(copy);
          let no_copy = [];
          for (let i in copy) {
            no_copy.push(copy[i].id);
          }
          setNo(no_copy);
        }}>이름 순</Button>{' '}
        <Button variant="danger" onClick={() => {
          let copy = [...new_item].sort((a, b) => (a.sale < b.sale) ? 1 : -1);
          setNew_item(copy);
          let no_copy = [];
          for (let i in copy) {
            no_copy.push(copy[i].id);
          }
          setNo(no_copy);
        }}>높은 가격 순</Button>{' '}
        <Button variant="danger" onClick={() => {
          let copy = [...new_item].sort((a, b) => (a.sale > b.sale) ? 1 : -1);
          setNew_item(copy);
          let no_copy = [];
          for (let i in copy) {
            no_copy.push(copy[i].id);
          }
          setNo(no_copy);
        }}>낮은 가격 순</Button>{' '}
      </div>
      <Container className='New'>
        <Row>
          {
            new_item.map((new_item, i) =>
              <Product new_item={new_item} key={i} i={i} no={no} />
            )
          }

        </Row>
      </Container>
      <div className='Kategorie'>
        <Row>
          <Col xxl={2} sm={4}><h3>LIVING<button><p>▶</p></button></h3><div className='img'><img src="/img/Kategorie1.png" alt="LIVING" width='100%' /><div className="hover_img"><img src="/img/rotate1.png" alt="rotate" width='100%' /></div></div></Col>
          <Col xxl={2} sm={4}><h3>DIGITAL<button><p>▶</p></button></h3><div className='img'><img src="/img/Kategorie2.png" alt="DIGITAL" width='100%' /><div className="hover_img"><img src="/img/rotate2.png" alt="rotate" width='100%' /></div></div></Col>
          <Col xxl={2} sm={4}><h3>OUTDOOR<button><p>▶</p></button></h3><div className='img'><img src="/img/Kategorie3.png" alt="OUTDOOR" width='100%' /><div className="hover_img"><img src="/img/rotate5.png" alt="rotate" width='100%' /></div></div></Col>
          <Col xxl={2} sm={4}><h3>FAMILY<button><p>▶</p></button></h3><div className='img'><img src="/img/Kategorie4.png" alt="FAMILY" width='100%' /><div className="hover_img"><img src="/img/rotate3.png" alt="rotate" width='100%' /></div></div></Col>
          <Col xxl={2} sm={4}><h3>FASHION<button><p>▶</p></button></h3><div className='img'><img src="/img/Kategorie5.png" alt="FASHION" width='100%' /><div className="hover_img"><img src="/img/rotate6.png" alt="rotate" width='100%' /></div></div></Col>
          <Col xxl={2} sm={4}><h3>COLLABO<button><p>▶</p></button></h3><div className='img'><img src="/img/Kategorie6.png" alt="COLLABO" width='100%' /><div className="hover_img"><img src="/img/rotate4.png" alt="rotate" width='100%' /></div></div></Col>
        </Row>
      </div>
      <Swiper></Swiper>
      <Slick></Slick>
      <Container className='eventBox'>
        <Row className='event_cover'>
          <div className="event">
            <Col sm={14}>
            </Col>
            <div className="tt_box">
              <h2>EVENT <br />
                10th HAPPY 2.9 DAY
              </h2>
              <p>10번째 위글위글의 생일파티 ! <br />
                역대급 생일파티가 여러분을 초대합니다.</p>
              <span>SHOP NOW </span>
            </div>
          </div>
          <div className="event_group">
            <Col sm={8}>
              <img src="/img/event3.jpg" alt="event" width='100%' />
            </Col>
            
            <Col sm={8}>
              <img src="/img/event2.jpg" alt="event" width='100%' />
            </Col>
          </div>
        </Row>
      </Container>
     <Swiper2></Swiper2>
    </>
  )
}


export default Home