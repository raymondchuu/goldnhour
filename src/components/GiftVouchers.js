import React from 'react';
import Giftvoucher from '../Media/giftvoucher.png';

const GiftVouchers = () => {
    return (
        <div>
            <div>
                <p>GIFT VOUCHERS</p>
                <div></div>
            </div>
            <div>
                <div>
                    <img src={Giftvoucher}/>
                </div>
                <div>
                    <p>Gift the Goldn Hour experience!</p>
                    <p>Send a gift voucher to your loved ones or buy one for yourself this holiday season! To purchase a gift voucher, please email info@goldnhour.ca. </p>
                    <ul>
                        <li>Pick up in Vaughan or have it mailed to the recipient.</li>
                        <li>Gift vouchers never expire or lose value and cannot be exchanged for cash.</li>
                        <li>Gift vouchers are FINAL SALE.</li>
                        <li>Redeemable towards any services & produces provided by Goldn Hour.</li>
                        <li>Booking instructions will be on the back of the voucher.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default GiftVouchers;