import React from 'react';
import '../../css/Sidebar.css';

const Sidebar = (props) => {
    let sideClass = props.show ? "show" : "";
    let close = props.setshow;

    return (
        <nav className={"sidebar " + sideClass}>
            <ul>
                <li><a href='/'>Home</a></li>

                <li><a href='/services/brows'>Brows</a></li>
                
                <li><a href='/services/lashes'>Lashes</a></li>
                            
                <li><a href='/book'>Book</a></li>
            </ul>
        </nav>
    )
}

export default Sidebar