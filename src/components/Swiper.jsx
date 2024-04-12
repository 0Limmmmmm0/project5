import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
// import './styles.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React, { useState } from 'react';
import data4 from '../data4';
import '../css/Swiper.css';

export default function App() {
  let [best] = useState(data4);
  let [no] = useState([0,1,2,3]);
    return (
      <>
        <Swiper
        style={{height:'780px'}}
        effect={"fade"}
        autoplay={{delay:3500, disableOnInteraction:false}}
        loop={true}
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {/* <SwiperSlide>
        {
          best.map((best, i) =>
            <Product best={best} key={i} i={i} no={no} />
          )
          }
        </SwiperSlide> */}
        <SwiperSlide><div className="left">
            <img src={best[0].imgUrl} />
        <div className="r_txt">
          <h2>BEST SELLER</h2>
          <h4>{best[0].title}</h4>
          <div className='sub_txtbox1'>
            <p>{best[0].price}</p>&nbsp;&nbsp;&nbsp;
            <b>{best[0].sale}&nbsp;&nbsp;&nbsp;</b>
            <span>{best[0].discount}</span>
          </div>
          <div className="comt_box">
          <p>{best[0].content}</p>
          <button>Shop Now ></button>
          </div>
          <div className='play'>PLAYLIST</div>
        </div>
          </div></SwiperSlide>
        <SwiperSlide><div className="left">
            <img src={best[1].imgUrl} />
        <div className="r_txt">
          <h2>BEST SELLER</h2>
          <h4>{best[1].title}</h4>
          <div className='sub_txtbox1'>
            <p>{best[1].price}</p>&nbsp;&nbsp;&nbsp;
            <b>{best[1].sale}&nbsp;&nbsp;&nbsp;</b>
            <span>{best[1].discount}</span>
          </div>
          <div className="comt_box">
          <p>{best[1].content}</p>
          <button>Shop Now ></button>
          </div>
          <div className='play'>PLAYLIST</div>
        </div>
          </div></SwiperSlide>
        <SwiperSlide><div className="left">
            <img src={best[2].imgUrl} />
        <div className="r_txt">
          <h2>BEST SELLER</h2>
          <h4>{best[2].title}</h4>
          <div className='sub_txtbox1'>
            <p>{best[2].price}</p>&nbsp;&nbsp;&nbsp;
            <b>{best[2].sale}&nbsp;&nbsp;&nbsp;</b>
            <span>{best[2].discount}</span>
          </div>
          <div className="comt_box">
          <p>{best[2].content}</p>
          <button>Shop Now ></button>
          </div>
          <div className='play'>PLAYLIST</div>
        </div>
          </div></SwiperSlide>
        <SwiperSlide>
        <div className="left">
            <img src={best[3].imgUrl} />
        <div className="r_txt">
          <h2>BEST SELLER</h2>
          <h4>{best[3].title}</h4>
          <div className='sub_txtbox1'>
            <p>{best[3].price}</p>&nbsp;&nbsp;&nbsp;
            <b>{best[3].sale}&nbsp;&nbsp;&nbsp;</b>
            <span>{best[3].discount}</span>
          </div>
          <div className="comt_box">
          <p>{best[3].content}</p>
          <button>Shop Now ></button>
          </div>
          <div className='play'>PLAYLIST</div>
        </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </>
    );
  }
// const Product = (props) => {
//     const { title, imgUrl, price, sale, discount } = props.best;
//     return(
//       <SwiperSlide>
//         <div className="left">
//             <img src={imgUrl} />
//         <div className="r_txt">
//           <h2>BEST SELLER</h2>
//           <h4>{title}</h4>
//           <div className='sub_txtbox'>
//             <p>{price}</p>&nbsp;&nbsp;&nbsp;
//             <b>{sale}&nbsp;&nbsp;&nbsp;</b>
//             <span>{discount}</span>
//           </div>
//         </div>
//           </div>
//         </SwiperSlide>
//     )
//   }

  // export default Swiper