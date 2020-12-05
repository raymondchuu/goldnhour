import React from 'react';
import image1 from '../../Media/pmu-img1.png';
import image2 from '../../Media/pmu-img2.png';
import '../../css/Pmu.css';
const Pmu = () => {
    return (
        <div className="pmu-entire-container" style={{backgroundColor: '#FAFAFA', width: '100%'}}>
            <div className="brows-header">
                {/*Header image*/}
            </div>
            <div className="pmu-container">

                <div>
                    <div className="pmu-title">
                        <p className="lash-title">PERMANENT BROWS</p>
                        <div className="lash-div"></div>
                    </div>
                    <div style={{ margin: 'auto'}}>
                        <div className="pmu-left">
                            <div className="pmu-img-container">
                                <img src={image1} className="pmu-image1"/>
                            </div>
                        </div>
                        <div className="pmu-right">
                            <p className="pmu-subtitle">OMBRE POWDER BROWS</p>
                            <p>Ombre Powder Brows, also known as powder brows, is a technique described by its name, soft and powdery in the front and gradually darker towards the tail. Once healed, it gives a soft shaded brow pencil look. Whether the client is looking for light soft shading or bold brows, it can be customized according to the client’s desire. This service is suitable for all skin types, even previous semi-permanent makeup, oily, mature and acne prone skin! </p>
                            <p>Keep note: The intensity of the ombre effect is contingent on how much existing brow hair there is, thus results vary per person. If you have darker hairs, you will likely need a fuller powder-filled brow style so that your natural brow hairs blend seamlessly. </p>
                            <p style={{textAlign: 'left'}}>First Initial Appointment (Virgin Brows)<span style={{float: 'right', fontWeight: 'bold'}}>$300.00 PROMO</span></p>
                            <p>*First touch up (4-6 weeks) included</p>

                        </div>
                    </div>

                    <div style={{clear: 'both', marginTop: '15%'}}>
                        <div className="pmu-left">
                            <div style={{display: 'block', margin: 'auto', width: '65%'}}>
                                <img src={image2} style={{width: '100%'}} />
                            </div>
                        </div>
                        <div className="pmu-right">
                            <p className="pmu-subtitle">COMBO BROWS</p>
                            <p>The Combo Brows is a crossover between blading and powder brows. This method is great for those who have sparse eyebrows, who’d love microblading but with some density. It is recommended for those with oily skin, as microblading on its own won’t give satisfactory results. </p>
                            <p style={{textAlign: 'left'}}>First Initial Appointment (Virgin Brows)<span style={{float: 'right', fontWeight: 'bold'}}>$300.00 PROMO</span></p>
                        </div>
                    </div>

                    <div className="pmu-aftersection">
                        <div className="pmu-correctional-brows" >
                            <p className="pmu-subtitle">CORRECTIONAL BROWS</p>
                            <p>If you would like to have your brows done, please email info@goldnhour.ca with BARE photos of your eyebrows BEFORE YOU BOOK. You must wait for an approval email to ensure you are a suitable candidate. </p>
                            <p>First Initial Appointment<span style={{float: 'right', fontWeight: 'bold'}}>$300.00 PROMO</span></p>
                            <p>First touch up (4-6 weeks included)</p>
                        </div>
                        <div style={{marginTop: '5%'}}>
                            <br/>
                            <p className="pmu-subtitle">TOUCH UPS</p>
                            <p style={{textAlign: 'center'}}>Existing clients only</p>
                            <p style={{textAlign: 'center'}}>Touch up time frame is based on the last recent appointment. </p>
                            <p>2-4 Month Touch up<span style={{float: 'right', fontWeight: 'bold'}}>$100</span></p>
                            <p>This touch up is recommended for clients who have decided to go darker than their initial session, opted out for natural brows (less saturated = lighter), correctional brows, oily/resistant skin, and/or for clients who have healed lighter due to aftercare accidents. </p>
                            <p>4-6 Month Touch up<span style={{float: 'right', fontWeight: 'bold'}}>$150</span></p>
                            <p>This touch up is recommended for client</p>
                            <p>6-12 Month Touch up<span style={{float: 'right', fontWeight: 'bold'}}>$200</span></p>
                            <p>This touch up is recommended for client</p>
                            <p>12-18 Month Touch up<span style={{float: 'right', fontWeight: 'bold'}}>$250</span></p>
                            <p>This touch up is recommended for client</p>
                            <p>Touch-up appointments after 18 months is charged for a new set.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Pmu;