import Banner from './Banner/Banner';
import Booknow from './Booknow/Booknow';
import Destination from './Destination/Destination';
import Discount from './Discount/Discount';
import Feedback from './Feedback/Feedback';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import Testimonial from './Testimonial/Testimonial';
import './home.css';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Feedback></Feedback>
            <Destination></Destination>
            <Discount></Discount>
            <Booknow></Booknow>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
        );
};

        export default Home;