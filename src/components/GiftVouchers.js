import React from 'react';
import Giftvoucher from '../Media/giftvoucher.png';
import '../css/Giftvouchers.css';

const GiftVouchers = () => {
    return (
        <div className="gift-entire-container">
            <div className="gift-inner-container">
            <div style={{display: 'block', margin: 'auto', width: '100%'}}>
                <p className="lash-title">GIFT VOUCHERS</p>
                <div className="lash-div"></div>
            </div>
            <div className="gift-content">
                <div className="gift-left">
                    <div className="gift-inner-img">
                        <img src={Giftvoucher} style={{width: '100%'}}/>
                    </div>
                </div>
                <div className="gift-right">
                    <p style={{fontSize: '20px'}}>Gift the Goldn Hour experience!</p>
                    <p>Send a gift voucher to your loved ones or buy one for yourself this holiday season! To purchase a gift voucher, please email <a href="mailto:info@goldnhour.ca">info@goldnhour.ca.</a> </p>
                    <ul className="carebrows-ul">
                        <li>Pick up in Vaughan or have it mailed to the recipient.</li><br/>
                        <li>Gift vouchers never expire or lose value and cannot be exchanged for cash.</li><br/>
                        <li>Gift vouchers are FINAL SALE.</li><br/>
                        <li>Redeemable towards any services & produces provided by Goldn Hour.</li><br/>
                        <li>Booking instructions will be on the back of the voucher.</li><br/>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
}

export default GiftVouchers;