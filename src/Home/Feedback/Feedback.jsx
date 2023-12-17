import a1 from '../../assets/a1.png';
import a2 from '../../assets/a2.png';
import a3 from '../../assets/a3.png';
import './Feedback.css';
const Feedback = () => {
    return (
        <div>
            <div className='feedback-section'>
                <div className='feedback'>
                    <div className='single-f'>
                        <div >
                            <img src={a1} alt="" />
                        </div>
                        <div className='single'>
                            <h4>Jenny Wilson</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                        </div>
                    </div>
                    <div className='single-f'>
                        <div >
                            <img src={a2} alt="" />
                        </div>
                        <div className='single'>
                            <h4>Jenny Wilson</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                        </div>
                    </div>
                    <div className='single-f'>
                        <div >
                            <img src={a3} alt="" />
                        </div>
                        <div className='single'>
                            <h4>Jenny Wilson</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                        </div>
                    </div>



                </div>
                <div className='f-description'>
                    <h1>Tropical Adventure </h1>
                        <p style={{fontWeight: '400', fontSize: '30px'}}> for Students.</p>
                    <p style={{fontWeight: '400', fontSize: '20px'}}>Student Tropical Vacation: Relax and Recharge</p>
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
            </div>
        </div>
    );
};

export default Feedback;