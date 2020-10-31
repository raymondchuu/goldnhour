import React from 'react';
import map from '../Media/Book/location.jpg';
import '../css/Book.css';

const Book = () => {
    return (
        <div>
            <div className="book-header">
                {/*background image*/}
            </div>
            <div className="book-container">
                <p className="lash-title">BOOK</p>
                <div className="lash-div">{/*divider*/}</div>
                <div className="book-body">
                    <div className="book-left-col">
                        <div className="book-center">
                            <img src={map} className="location"/> 
                        </div>
                    </div>
                    <div className="book-right-col">
                        <div className="book-center">
                            <p className="book-line">Located in Vaughn, ON</p>
                            <p className="book-line">Book your services online using the link below.<br/><span style={{fontWeight: 'bold'}}>Appointments are required</span> for all services.</p>
                            <p className="book-line">a <span style={{fontWeight: 'bold'}}>non-refundable deposit</span> is required to book.<br/>Please see the policies before booking.</p>
                            <p className="book-line">All clients <span style={{fontWeight: 'bold'}}>must sign the COVID-19 form <br/></span>otherwise service will be refused.</p>
                            <a className="book-book-btn" href="https://goldnhour.as.me/schedule.php">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Book;