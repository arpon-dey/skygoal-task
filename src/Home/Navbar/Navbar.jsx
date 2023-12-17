import './Navbar.css';
const Navbar = () => {
    return (
        <div>
            <div className="nav">
                <div className="nav-start">logo</div>
                <div className="nav-middle">
                    <p>Home</p>
                    <p>About</p>
                    <p>schedule</p>
                    <p>Membership</p>
                    <p>pricing</p>
                </div>
                <div className="nav-end">
                    <p>Offer</p>
                    <button>Courses</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;