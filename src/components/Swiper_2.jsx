import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import $ from 'jquery';
import React, { useState } from 'react';
import '../css/rolling.css';
import '../css/Swiper.css';

export default function App() {
    //   let [best] = useState(data4);
    let [no] = useState([0, 1, 2, 3]);

    // $('.swiper').each(function(index) {
    //     t = $(this);
    //     t.addClass('swiepr-' + index);
    // })
    $('.swiper').each(function (index) {
        Swiper = $(this);
        Swiper.addClass('swiepr-' + index);
    });

    return (
        <>
            <Swiper
                // style={{ height: '780px' }}
                // effect={"fade"}
                // autoplay={{ delay: 3500, disableOnInteraction: false }}
                // loop={true}
                // modules={[Pagination, Navigation, Autoplay]}
                className="Swiper"
                autoplay={{ delay: 0, disableOnInteraction: false, }}
                speed={5000}
                loop={true}
                loopAdditionalSlides={1}
                slidesPerView={5}
            >
                <div class="swiper" dir="ltr">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide_img">1</div>
                        <div class="swiper-slide_img">2</div>
                        <div class="swiper-slide_img">3</div>
                        <div class="swiper-slide_img">4</div>
                        <div class="swiper-slide_img">5</div>
                        <div class="swiper-slide_img">6</div>
                        <div class="swiper-slide_img">7</div>
                        <div class="swiper-slide_img">8</div>
                        <div class="swiper-slide_img">9</div>
                        <div class="swiper-slide_img">10</div>
                    </div>
                </div>
            </Swiper>
        </>
    );
}

// export default Swiper