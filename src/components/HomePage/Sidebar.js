import React from 'react';
import '../../css/Sidebar.css';

const Sidebar = (props) => {
    let sideClass = props.show ? "show" : "";
    let close = props.setshow;

    return (
        <nav className={"sidebar " + sideClass}>
            <ul>
                <li><a href='/home'>HOME</a></li>

                <li><a href='/about'>ABOUT</a></li>

                <li><a href='/policies'>POLICIES</a></li>

                <li><a href='/faq'>FAQ</a></li>


                <li><a href='/testimonials'>TESTIMONIALS</a></li>



                <p style={{fontSize: '25px', fontWeight: 'bold', marginTop: '20px'}}>SERVICES</p>

                    <li><a href='/services/brows'>BROWS</a></li>

                    <li><a href='/services/PMU'>PMU</a></li>
                
                    <li><a href='/services/lashes'>LASHES</a></li>

                    <li><a href='/services/training'>TRAINING</a></li>

                    <p style={{fontSize: '25px', fontWeight: 'bold', marginTop: '20px'}}>PRE/AFTER CARE</p>

                    <li><a href='/care/brows'>BROWS</a></li>
                    <li><a href='/care/lashes'>LASHES</a></li>


                <div className="sidebar-btn-container">
                    <button href="/book" className="sidebar-book-btn">BOOK</button>

                </div>

            </ul>
        </nav>
    )
}

export default Sidebar