import Banner from './Banner/Banner';
import Feedback from './Feedback/Feedback';
import Navbar from './Navbar/Navbar';
import './home.css';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Feedback></Feedback>
        </div>
        );
};

        export default Home;