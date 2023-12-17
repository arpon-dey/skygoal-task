import cover from '../../assets/Group 167.png';
import './Booknow.css';
const Booknow = () => {
    return (
        <div>
            <div className='book'>
                <div><img src={cover} className='cover' alt="" /></div>
                <div>
                    <h2>Book now</h2>
                    <p style={{ marginTop: '10px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <div className='city-input'>
                        <label htmlFor="name">City <br /> </label>
                        <input type="text" id="city" placeholder='placeholder' name="name" /><br />
                    </div>
                    <div className='ad-input'>
                        <div className='arrival-input'>
                            <label htmlFor="name">Arrival <br /> </label>
                            <input  id="ad" placeholder='placeholder' name="name" /><br />
                        </div>
                        <div className='departure-input'>
                            <label htmlFor="name">Departure <br /> </label>
                            <input type="text" id="ad" placeholder='placeholder' name="name" /><br />
                        </div>
                    </div>
                    <div className='sr-input'>
                        <div className='star-input'>
                            <label style={{fontWeight: '700', fontSize : '20px'}} htmlFor="name">star <br /> </label>
                           <div className='btn-grp'>
                           <button id='plus'>+</button>
                            <button id='num'>4</button>
                            <button id='minus'>-</button>
                           </div>
                        </div>
                        <div className='room-input'>
                            <label style={{fontWeight: '700', fontSize : '20px'}} htmlFor="name">Room <br /> </label>
                            <div className='btn-grp'>
                           <button id='plus'>+</button>
                            <button id='num'>1</button>
                            <button id='minus'>-</button>
                           </div>                        </div>
                    </div>

                    <button className='book-btn'>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Booknow;