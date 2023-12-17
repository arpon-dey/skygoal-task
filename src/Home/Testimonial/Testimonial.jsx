import p1 from '../../assets/t1.png';
import p2 from '../../assets/t2.png';
import p3 from '../../assets/t3.png';
import './Testimonial.css';
const Testimonial = () => {
    return (
        <div className='tes-section'>
            <h2 >Testimonials</h2>
            <div className='testimonials'>
                <div className='single-testimonial'>
                    <img src={p1} alt="" />
                    <h3  >Corey Korsgaard</h3>
                    <p style={{ margin: '20px 0 0 0 '}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className='single-testimonial'>
                    <img src={p2} alt="" />
                    <h3>Corey Korsgaard</h3>
                    <p style={{ margin: '20px 0 0 0 '}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className='single-testimonial'>
                    <img src={p3} alt="" />
                    <h3>Corey Korsgaard</h3>
                    <p style={{ margin: '20px 0 0 0 '}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;