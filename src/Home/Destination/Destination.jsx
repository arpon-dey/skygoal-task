import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


import img2 from '../../assets/card-image-1.png';
import img3 from '../../assets/card-image-2.png';
import img4 from '../../assets/card-image-3.png';
import img1 from '../../assets/card-image.png';
import './Destination.css';

const Destination = () => {

    return (
        <div className='destination' >
            <h2 style={{ margin: '240px 0 50px 0', fontSize: '40px' }}>Our destination</h2>
            <Swiper
                slidesPerView={4}
                spaceBetween={190}
                freeMode={true}
            >
                <SwiperSlide>
                    <img src={img1} className='img' alt="" />
                    <p style={{fontSize: '20px', margin: '20px 0 30px 0', fontWeight: '600'}}>Harvard University</p>
                    <p>Cambridge, Massachusetts, UK</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} className='img' alt="" />
                    <p style={{fontSize: '20px', margin: '20px 0 30px 0', fontWeight: '600'}}>Oxford University</p>
                    <p>Oxford, England</p>
                    </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} className='img' alt="" />
                    <p style={{fontSize: '20px', margin: '20px 0 30px 0', fontWeight: '600'}}>Stanford University</p>
                    <p>Stanford, California</p>
                    </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} className='img' alt="" />
                    <p style={{fontSize: '20px', margin: '20px 0 30px 0', fontWeight: '600'}}>Oxford University</p>
                    <p>Oxford, England</p>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={img1} className='img' alt="" />
                    <p style={{fontSize: '20px', margin: '20px 0 30px 0', fontWeight: '600'}}>Harvard University</p>
                    <p>Cambridge, Massachusetts, UK</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} className='img' alt="" />
                    <p style={{fontSize: '20px', margin: '20px 0 30px 0', fontWeight: '600'}}>Oxford University</p>
                    <p>Oxford, England</p>
                    </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Destination;