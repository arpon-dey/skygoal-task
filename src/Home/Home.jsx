import Banner from './Banner/Banner';
import Destination from './Destination/Destination';
import Feedback from './Feedback/Feedback';
import Navbar from './Navbar/Navbar';
import './home.css';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Feedback></Feedback>
            <Destination></Destination>
        </div>
        );
};

        export default Home;