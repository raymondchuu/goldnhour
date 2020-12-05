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
import Pmu from './ServicesPage/Pmu';
import Training from './Training';
import Testimonials from './Testimonials';
import Faq from './Faq.js';
import CareBrows from './CareBrows';
import CareLashes from './CareLashes';
import logo from '../Media/Homepage/logo.svg';
import About from './AboutPage';
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
                <a href="/"><img src={logo} /></a>
            </figure>
            <nav className="navigation">
                <div className="toggle">
                    <ToggleButton toggle={handleClick} />
                </div>

                <ul>
                    <li><a href='/' style={window.location.pathname == '/' ? {color: '#AE3B15', borderBottom: "1px solid #AE3B15"} : {}}>HOME</a></li>
                    <li><a href='/about' style={window.location.pathname == '/about' ? {color: '#AE3B15', borderBottom: "1px solid #AE3B15"} : {}}>ABOUT</a></li>
                    <div className="dropdown">
                        <li><a href="" className="service-btn" style={(window.location.pathname == '/services/brows' || window.location.pathname == '/services/lashes' || window.location.pathname == '/services/pmu' || window.location.pathname == '/services/training') ? {color: '#AE3B15', borderBottom: "1px solid #AE3B15"} : {}}>SERVICES</a></li>
                        <div className="dropdown-content">
                            <li><a href='/services/brows' style={window.location.pathname == '/services/brows' ? {color: '#AE3B15', borderBottom: "1px solid #AE3B15"} : {}}>Brows</a></li>
                            <li><a href='/services/pmu' style={window.location.pathname == '/services/pmu' ? {color: '#AE3B15', borderBottom: "1px solid #AE3B15"} : {}}>PMU</a></li>
                            <li><a href='/services/lashes' style={window.location.pathname == '/services/lashes' ? {color: '#AE3B15', borderBottom: "1px solid #AE3B15"} : {}}>Lashes</a></li>
                            <li><a href='/services/training' style={window.location.pathname == '/services/training' ? {color: '#AE3B15', borderBottom: "1px solid #AE3B15"} : {}}>Training</a></li>
                        </div>
                    </div>
                    <li><a href='/policies' style={window.location.pathname == '/policies' ? {color: '#AE3B15', borderBottom: "1px solid #AE3B15"} : {}} >POLICIES</a></li>
                    <div className="dropdown2">
                        <li><a className="service-btn" style={(window.location.pathname == '/care/brows' || window.location.pathname == '/care/lashes') ? {color: '#AE3B15', borderBottom: "1px solid #AE3B15"} : {}}>PRE/AFTER CARE</a></li>
                        <div className="dropdown-content2">
                            <li><a href='/care/brows' style={window.location.pathname == '/care/brows' ? {color: '#AE3B15', borderBottom: "1px solid #AE3B15"} : {}}>Brows</a></li>
                            <li><a href='/care/lashes' style={window.location.pathname == '/care/lashes' ? {color: '#AE3B15', borderBottom: "1px solid #AE3B15"} : {}}>Lashes</a></li>
                        </div>
                    </div>
                    <li><a href='/faq' style={window.location.pathname == '/faq' ? {color: '#AE3B15', borderBottom: "1px solid #AE3B15"} : {}}>FAQ</a></li>
                    <li><a href='/testimonials' style={window.location.pathname == '/testimonials' ? {color: '#AE3B15', borderBottom: "1px solid #AE3B15"} : {}}>TESTIMONIALS</a></li>

                    <button href="/book" className="navbar-book-btn">BOOK</button>
                </ul>
            </nav>
        </div>
        <Switch>
            <Route path='/care/lashes'>
                <CareLashes />
                <Footer />
            </Route>
            <Route path='/care/brows'>
                <CareBrows />
                <Footer/>
            </Route>
            <Route path='/services/training'>
                <Training />
                <Footer />
            </Route>
            <Route path ='/services/pmu'>
                <Pmu />
                <Footer />
            </Route>
            <Route path='/about'>
                <About />
                <Footer />
            </Route>
            <Route path="/faq">
                <Faq />
                <Footer />
            </Route>
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
            <Route path="/">
                <Homepage />
                <Footer />

            </Route>
        </Switch>
        </Router>
    )
    
}

export default Navbar;