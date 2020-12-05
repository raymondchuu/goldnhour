import React from 'react';
import image1 from '../../Media/Lashes/image1.jpg';
import image2 from '../../Media/Lashes/image2.jpg';
import image3 from '../../Media/Lashes/image3.jpg';
import image4 from '../../Media/Lashes/image4.jpg';
import '../../css/Lashes.css';

const LashServices = [
    {
        image: image1,
        title: 'THE CLASSIC',
        description: 'Classic lash extensions are applied individually one by one to your natural lashes, adding length and volume without the use of mascara. Every set of classic lashes are different as it depends on the volume and density of your natural lashes.',
        row1: 'FULL SET',
        row2: 'STANDARD REFILL',
        row3: 'EXTENDED REFILL',
        row4: 'MINI REFILL',
        p1: '$145.00',
        p2: '$60.00',
        p3: '$80.00',
        p4: '$40.00',
        col: 'Duration (times are approximate)',
        d1: '1.5 hours - 2 hours max',
        d2: '1 hour',
        d3: '70 mins - 80 mins max',
        d4: '40 mins',
        even: true
    },
    {
        image: image2,
        title: 'THE VOLUME',
        description: 'Volume lash extensions are very customizable to your desired look as you have the option to build a full set of either 2 to 5 lashes applied on one individual lash, creating a fluffier effect. This could be a natural or dramatic set depending on your preferences. ',
        row1: 'FULL SET',
        row2: 'STANDARD REFILL',
        row3: 'EXTENDED REFILL',
        row4: 'MINI REFILL',
        p1: '$200.00',
        p2: '$100.00',
        p3: '$140.00',
        p4: '$60.00',
        col: 'Duration (times are approximate)',
        d1: '2 hours - 3.5 hours',
        d2: '2 hours',
        d3: '2.5 hours',
        d4: '1 hour',
        even: false
    },    
    {
        image: image3,
        title: 'THE MEGA VOLUME',
        description: 'Mega Volume lash extensions are for those who want a bolder look, building a fullset of either 6 or more lashes applied on one individual lash, creating a dark + dramatic lash line.',
        row1: 'FULL SET',
        row2: 'STANDARD REFILL',
        row3: 'EXTENDED REFILL',
        row4: 'MINI REFILL',
        p1: '$240.00',
        p2: '$120.00',
        p3: '$150.00',
        p4: '$70.00',
        col: 'Duration (times are approximate)',
        d1: '3.5 hours',
        d2: '2 hours',
        d3: '2.5 hours',
        d4: '1 hour',
        even: true
    },

]

const Lashes = () => {
    return (
        <div>
            <div className="block-1">
                <div className="front-image">
                    {/*front-image */}
                </div>
                <div className="container">
                    <div className="blurb">
                        <p className="lash-title">EYELASH EXTENSIONS</p>
                        <div className="lash-div">{/*divider*/}</div>
                        <p className="lash-desc">All refills require at least 40% of lashes remaining for it to be considered a fill. It is recommended every 2-4 weeks, anything more than 4 weeks is considered a fullset. There will be a clean up and removal of grown out lashes, followed by reapplying natural lashes with new lash extensions.
                        </p>
                        <p className="lash-warning">
                            I DO NOT FILL ON LASHES DONE BY ANOTHER LASH TECH.
                        </p>
                    </div>
                </div>
            </div>

                <div>
                    {LashServices.map((product) => (
                        <div className={product.even ? "product-container" : "product-container-even"}>
                            <div className="sub-block">
                            <div className="left-column-services">
                                <div>
                                    <img className="product-image" src={product.image} />
                                </div>
                            </div>
                            <div className="right-column-services">
                                <div>
                                    <p className="lash-title">{product.title}</p>
                                    <p>{product.description}</p>
                                    <table className="pricing" style={{borderSpacing: '15px'}}>    
                                        <tr className="product-row">
                                            <td></td>
                                            <td></td>
                                            <td className="duration-col">{product.col}</td>
                                        </tr>
                                        <tr>
                                            <td>{product.row1}</td>
                                            <th>{product.p1}</th>
                                            <td className="duration-col">{product.d1}</td>
                                        </tr>
                                        <tr>
                                            <td>{product.row2}</td>
                                            <th>{product.p2}</th>
                                            <td className="duration-col">{product.d2}</td>
                                        </tr>
                                        <tr>
                                            <td>{product.row3}</td>
                                            <th>{product.p3}</th>
                                            <td className="duration-col">{product.d3}</td>
                                        </tr>
                                        <tr>
                                            <td>{product.row4}</td>
                                            <th>{product.p4}</th>
                                            <td className="duration-col">{product.d4}</td>
                                        </tr>
                                    </table>
                                </div>                     
                            </div>
                            </div>
                        </div>
                    ))}

                    <div className="product-container" style={{backgroundColor: '#FAFAFA'}}>
                        <div className="sub-block">
                        <div className="left-column-services"> 
                            <div>
                                <img src={image4} className="product-image" />
                            </div>
                        </div>
                        <div className="right-column-services">
                            <div>
                                <p className="lash-title">LASHLIFT</p>
                                <p>A treatment for natural lashes that can add curl and definition for up to 6-8 weeks. If you have lifted your lashes prior, it is recommended that you wait till your lashes have grown out with no crimps.</p>
                                <p className="duration-col">Duration (times are approximate): 50 mins</p>
                                <table className="pricing" style={{width: '50%'}}>
                                    <tr>
                                        <td>CLASSIC LIFT</td>
                                        <th>$70.00</th>
                                    </tr>
                                    <tr>
                                        <td>TINTED LIFT</td>
                                        <th>$80.00</th>
                                    </tr>
                                </table>
                                <p className="lash-title" style={{textAlign: 'left', marginBottom: '0'}}>REMOVAL</p>
                                <table className="pricing" style={{width: '50%', marginTop: '10px'}}>
                                    <tr>
                                        <td>Removal of lash extensions.</td>
                                        <th>$20.00</th>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    
                    </div>
                        <div className="lashes-booking">
                            <p className="lash-title">READY TO BOOK?</p>
                            <div className="lash-div">{/*divider*/}</div>
                            <p className="lash-desc">For all services, you can book using the link below.</p>
                            <a className="lashes-book-btn" href="https://goldnhour.as.me/schedule.php" target="_blank">Book Now</a>
                        </div>
                    </div>
        </div>
    )
}

export default Lashes