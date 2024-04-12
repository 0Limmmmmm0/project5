// import React, { Component } from "react";
import Slider from "react-slick";
import { Row, Col } from 'react-bootstrap';
import data2 from '../data2';
import React, { useRef, useState } from 'react';

function Slick() {
  let [md] = useState(data2);
  const settings = {
    dots: false,
    arrow: true,
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  const settings2 = {
    dots: false,
    arrow: false,
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <div className="md_pick">
        <h1> MD’s PICK</h1>
        <p>위글위글에서 놓치면 아쉬울 아이템 가득!</p>
        <Slider {...settings} className='Slick1'>
          {
          md.map((md, i) =>
            <Product md={md} key={i} />
          )
          }
        </Slider>
      </div>
      <Slider {...settings2} className='Slick2'>
        <div className="background">
        <iframe src="https://player.vimeo.com/video/917361180?autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;autopause=0&amp;background=1&amp;" allow="autoplay; fullscreen; picture-in-picture" ></iframe>
          <div className="up">
            <div className="up_cover">
            <div className="up_txt">
            <h2>WIGGLEWIGGLE ZIP</h2>
            <h6>블랙 하우스의 문을 여는 순간, <br />
            세상 모든 컬러가 쏟아집니다.</h6>
            <button>View All +</button></div>
            </div>
          </div>
        </div>
        <div className="background">
          <img src="/img/zip_two.jpg" alt="zip" width="100%" height="100%"/>
          <div className="up">
            <div className="up_cover">
            <div className="up_txt2">
            <h2>WELCOME HOUSE !</h2>
            <h5>주소</h5>
            <p>서울특별시 강남구 언주로 168길 31 <br />
                위글위글 도산 플래그십 스토어</p>
            <h5>운영시간</h5>
            <p>매일 AM 11:00 ~ PM 20:00</p>
            <h5>문의</h5>
            <p>02-6959-2051</p>
            </div>
            </div>
          </div>
        </div>
        <div className="background">
          <img src="https://wiggle-wiggle.com/web/pages/flagship//240229/flip_room.gif" alt="zip" width="100%" height="100%"/>
          <div className="up">
            <div className="up_cover2">
            <div className="up_txt3">
            <h2>TIME TO FLIP</h2>
            <h6>문턱을 넘는 순간, <br />
            모든게 뒤집히는 플립룸을 소개합니다.</h6>
            <button>View All +</button></div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
function Product(props) {
  const { title, imgUrl, price, sale, discount } = props.md;
  return (
      <div>
        <img src={imgUrl} alt="md's_pick" />
        <div className='txtbox'>
          <h4>{title}</h4>
          <div className='sub_txtbox'>
            <p>{price}</p>&nbsp;&nbsp;&nbsp;
            <b>{sale}&nbsp;&nbsp;&nbsp;</b>
            <span>{discount}</span>
          </div>
        </div>
      </div>
  )
}
export default Slick