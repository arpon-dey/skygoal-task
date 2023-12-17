import banner from '../../assets/Group 171.png';
import './Banner.css';
const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-text'>
                <p>Discover the beauty of the tropics</p>
                <h2><span>Tropical Destinations</span> <br /> For Student</h2>
                <p className='text-description'>Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum integer rutrum nisi. A nec nisl vitae </p>
                <button className=''>
                    SIGN UP
                </button>
            </div>
            <div className=''>
                <img src={banner} className='banner-img' alt="" />
            </div>
        </div>
    );
};

export default Banner;