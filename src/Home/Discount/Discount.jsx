import img from '../../assets/Mask group.png';
import './Discount.css';
const Discount = () => {
    return (
        <div className='discount'>
            
            <div className='f-description'>
                <p style={{ fontWeight: '400', fontSize: '20px' }}>Get 20% off for student</p>
                <h1 style={{ fontSize: '40px' }}>Student discounts available.</h1>
                <p style={{ fontWeight: '400', fontSize: '30px' }}> Get ready for some fun in the sun!</p>
               
                <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li> Massa quis natoque sit quam</li>
                    <li> Eros non pellentesque elit</li>
                    <li> Eros non pellentesque elit</li>
                    <li> tortor id euismod habitant</li>
                    <li> Sed suspendisse id in ultrices</li>
                </ul>
                <button className='btn'>Explore more</button>
            </div>
            <div>
                <img src={img} className='image' alt="" />
            </div>
        </div>
       
    );
};

export default Discount;