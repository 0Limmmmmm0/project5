import { useState } from 'react';
import './css/App.css';
import Home from './routes/Home';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Routes, Route, Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from './data';
import Detail from './components/Detail';
import { Row, Col, Button } from 'react-bootstrap';

function App() {
  const [new_item, setNew_item] = useState(data);
  const [no, setNo] = useState([0, 1, 2, 3, 4, 5]);
  let img_Style = {
    paddingBottom: '30px'
  }
  let span_Style = {
    fontWeight: 'bold'
  }
  let h2_Style = {
    marginBottom: '20px'
  }
  let img2_Style = {
    marginRight: '20px'
  }

  return (
    <div className='App'>
      <Navbar fixed="top" collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container className='head'>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#ALL">ALL</Nav.Link>
              <Nav.Link href="#NEW">NEW</Nav.Link>
              <Nav.Link href="#BEST">BEST</Nav.Link>
              <Nav.Link href="#OUTLET">OUTLET</Nav.Link>
              <Nav.Link href="#ABOUT US">ABOUT US</Nav.Link>
              <Nav.Link href="#OFFLINE">OFFLINE</Nav.Link>
            </Nav>
            <Navbar.Brand href="#home" className='logo'><img src="/img/logo.png" alt="logo" width={"100%"} height={"100%"} /></Navbar.Brand>
            <Nav>
              <Nav.Link href="#search"><img src="/img/search.png" alt="돋보기" /></Nav.Link>
              <Nav.Link href="#shopping"><img src="/img/shopping.png" alt="장바구니" /></Nav.Link>
              <Nav.Link href="#user"><img src="/img/user.png" alt="사용자" /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Home new_item={new_item} setNew_item={setNew_item} no={no} setNo={setNo} />} />
        <Route path='/detail/:id' element={<Detail new_item={new_item} />} />
      </Routes>
      {/* <Home /> */}
      {/* <Slick /> */}
      <footer>
        {/* <div className='cover_box'>
            <div className="logobox">
              <div className="sub_logo">
                <img src="/img/sub_logo.png" alt="sub_logo" />
              </div>
            </div>
        </div> */}
        <Container className='footer_cover'>
          <Row>
            <Col xxl={14} className='bottom_cover'>
              <div className="imgbox"><img src="/img/sub_logo.png" alt="footer_logo" width='100%' height='100%' /></div></Col>
            <Col sm={6} xl={3}>
              <div className="index">
                <h2>Corporate Name.</h2>
                <p>주식회사 아트쉐어</p>
              </div>
              <div className="index">
                <h2>Owner.</h2>
                <p>모성현</p>
              </div>
              <div className="index">
                <h2>Business License.</h2>
                <p>201-86-38817</p>
              </div>
              <div className="index">
                <h2>Phone.</h2>
                <p>1533-8266(Korean only)</p>
              </div>
            </Col>
            <Col sm={6} xl={3}>
              <div className="index">
                <h2>Contact Mail.</h2>
                <p> biz_as@artshare.kr</p>
              </div>
              <div className="index">
                <h2>Address.</h2>
                <p>서울특별시 강남구 테헤란로 <br />44길 8 (역삼동) 4층</p>
              </div>
              <div className="index">
                <h2>Personal Information <br />anager .</h2>
                <p>오정현 (privacy_as@artshare.kr)</p>
              </div>
            </Col>
            <Col sm={6} xl={3}>
              <div className="index">
                <h2>CS Center.</h2>
                <div className="img_in"><img src="/img/call.png" alt="call" /><p> 1533 - 8266</p></div>
                <div className="img_in"><img style={img_Style} src="/img/open.png" alt="open" /><p>9:30AM - 17:00PM <br />(Lunch 12:00 - 13:00)</p></div>
                <div className="img_in"><img style={img_Style} src="/img/close.png" alt="close" /><p> Sat/Sun/Holiday <br />
                  <span style={span_Style} >CLOSED</span></p></div>

              </div>
            </Col>
            <Col sm={6} xl={3}>
              <div className="index">
                <h2 style={h2_Style}>Payment Methods.</h2>
                <img style={img2_Style} src="/img/pay.jpg" alt="pay" />
                <img src="/img/pay2.jpg" alt="pay" />
              </div>
              <div className="index">
                <p className='p_name'><span>개인정보처리방침</span> | <span>이용약관</span> | <span>이용안내</span> | <span>제휴문의</span></p>
              </div>
            </Col>
            <Col xxl={12}>
              <p>© ARTSHARE CO. LTD. ALL RIGHTS RESERVED.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;
