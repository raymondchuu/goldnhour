import React, {useState} from 'react';
import '../css/Navbar.css';
import Brows from './ServicesPage/Brows';
import Lashes from './ServicesPage/Lashes';
import Homepage from './HomePage/Homepage';
import Policies from './Policies';
import Book from './Book';
import ToggleButton from './HomePage/ToggleButton';
import Sidebar from './HomePage/Sidebar';
import Backdrop from './HomePage/Backdrop';
import Footer from './Footer';
import Testimonials from './Testimonials';
import logo from '../Media/Homepage/logo.svg';
import { ReactComponent as ReactLogo } from '../Media/logo2.svg';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Preloader from './Preloader';
const Navbar = (props) => {

    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(true);
    }

    const handleBackdrop = () => {
        setToggle(false);
    }

    return (
        <Router>
            <Sidebar show={toggle} setshow={handleBackdrop}/>
            {toggle ? <Backdrop click={handleBackdrop}/> : ""}
        <div className="navbar">
            <figure className="logo"> 
                <img src={logo} />
            </figure>
            <nav className="navigation">
                <div className="toggle">
                    <ToggleButton toggle={handleClick} />
                </div>

                <ul>
                    <li><a href='/home' style={window.location.pathname == '/home' ? {color: '#AE3B15', borderBottom: "1px solid #AE3B15"} : {}}>HOME</a></li>
                    <div className="dropdown">
                        <li><a href="" className="service-btn" style={(window.location.pathname == '/services/brows' || window.location.pathname == '/services/lashes') ? {color: '#AE3B15', borderBottom: "1px solid #AE3B15"} : {}}>SERVICES</a></li>
                        <div className="dropdown-content">
                            <li><a href='/services/brows' style={window.location.pathname == '/services/brows' ? {color: '#AE3B15', borderBottom: "1px solid #AE3B15"} : {}}>BROWS</a></li>
                            <li><a href='/services/lashes' style={window.location.pathname == '/services/lashes' ? {color: '#AE3B15', borderBottom: "1px solid #AE3B15"} : {}}>LASHES</a></li>
                        </div>
                    </div>

                    <li><a href="/book" style={window.location.pathname == '/book' ? {color: '#AE3B15', borderBottom: "1px solid #AE3B15" } : {}}>BOOK</a></li>
                </ul>
            </nav>
        </div>
        <Switch>
            <Route path="/testimonials">
                <Testimonials />
                <Footer />
            </Route>
            <Route path="/book">
                <Book />
                <Footer />
            </Route>
            <Route path="/policies">
                <Policies />
                <Footer />

            </Route>
            <Route path="/services/lashes">
                <Lashes />
                <Footer />

            </Route>
            <Route path="/services/brows">
                <Brows />
                <Footer />

            </Route>
            <Route path="/home">
                <Homepage />
                <Footer />

            </Route>
            <Route path="/">
                <Preloader />
            </Route>
        </Switch>
        </Router>
    )
    
}

export default Navbar;