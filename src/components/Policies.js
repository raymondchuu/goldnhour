import React from 'react';
import image1 from '../Media/Policies/policies-header.png';
import '../css/Policies.css';

const Policies = () => {
    return (
        <div>
            <div className="policies-header">
                {/*background image*/}
            </div>
            <div className="policies-container">
                <p className="lash-title">Policies</p>
                <div className="lash-div">{/*divider*/}</div>

                <div className="policy-body">
                    <p className="policy-title">DEPOSIT</p>
                    <p>All services require a NON-REFUNDABLE DEPOSIT, which will be used and deducted from the total cost of your service. Remaining balance will be paid on the day of your appointment.</p>

                    <p className="policy-title">REFILLS</p>
                    <p>I do not refill on top of another Lash Artist's work. If you currently have lashes from another artist, a removal is required ($20) upon booking a new set. Refills must have 40% of lashes remaining. Anything under will be charged a full set. Not sure what is 40%? Send me a message with a picture and I can help determine that for you!</p>

                    <p className="policy-title">CANCELLATION</p>
                    <ul className="policy-ul">
                        <li>Cancelling your INITIAL APPOINTMENT for ANY REASON will result in losing the deposit.</li>
                        <li>FOR ONE TIME ONLY - You may reschedule your appointment if given 48hrs notice before your initial appointment</li>
                        <li>If less than 48hrs notice is given = deposit will be FORFEITED and a NEW deposit is required for further bookings</li>
                        <li>If you are a NO SHOW for any of your appointments = your deposit will be FORFEITED and a NEW deposit is required for further bookings</li>
                    </ul>

                    <p className="policy-title">TARDINESS</p>
                    <ul className="policy-ul">
                        <li>If you are late, you will compromise your appointment as it cuts down the time that is needed for quality work (prep time alone is approximately 15-20 minutes)</li>
                        <li>If you are running late for your appointments, it is your responsibility to call/text IMMEDIATELY</li>
                        <li>Being more than 20 minutes late will result in a cancellation of your appointment and your deposit will be forfeited</li>
                        <li>I will always try my best to accommodate as I know life happens, BUT ONLY if it does not affect my other clients or personal commitments.</li>
                    </ul>

                    <p className="policy-right">I HAVE THE RIGHT TO REFUSE SERVICE TO ANYONE. PRICES ARE SUBJECT TO CHANGE WITHOUT NOTICE.</p>
                </div>
                
            </div>
        </div>
    )
}

export default Policies;