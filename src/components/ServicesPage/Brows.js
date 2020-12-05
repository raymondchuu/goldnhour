import React from 'react';
import image1 from '../../Media/Brows/image1.jpg';
import image2 from '../../Media/Brows/image2.jpg';
import image3 from '../../Media/Brows/image3.jpg';
import '../../css/Brows.css';

const Brows = () => {
    return (
        <div>
            <div className="brows-header">
                {/*Header image*/}
            </div>

            <div className="brows-container">
                <div className="brows-desc">
                    <p className="lash-title">BROWS</p>
                    <div className="lash-div">{/*divider*/}</div>  
                </div>

                <div className="brows-products-grey">
                    <div className="brows-subblock">
                    <div className="left-column-services">
                        <div>
                            <img src={image1} className="product-image" />
                        </div>
                    </div>
                    <div className="right-column-services">
                        <div>
                            <p className="lash-title">LAMINATION</p>
                            <p>This brow lift service includes an aftercare kit. This service extends the brow to 1/3rd or half the width, adding beautiful, smooth dimension and colour to sparse brows. It can be customized from a bold editorial look to a natural feathered look. Lasts up to 4-6 weeks (until brow grows out). </p>
                            <p>This is suitable for those who have thick/coarse/messy/downward growing brows. It is not suitable for thin brows with little hair. </p>
                            <table className="brows-pricing">
                                <tr>
                                    <td>LAMINATION</td>
                                    <th>$75.00</th>
                                </tr>
                                <tr>
                                    <td>LAMINATION, CLEAN UP, TINT</td>
                                    <th>$85.00</th>
                                </tr>
                            </table>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="brows-products">
                    <div className="brows-subblock">
                    <div className="left-column-services">
                        <div>
                            <img src={image2} className="product-image" />
                        </div>
                    </div>
                    <div className="right-column-services">
                        <div>
                            <p className="lash-title">WAXING</p>
                            <table className="brows-pricing">
                                <tr>
                                    <td width="100%">BROW WAX & FILL IN</td>
                                    <th className="pricing-cell">$10.00</th>
                                    <td className="duration-col">15 mins</td>
                                </tr>
                                <tr>
                                    <td>BROW WAX & UPPER LIP</td>
                                    <th>$15.00</th>
                                    <td className="duration-col">15 mins</td>
                                </tr>
                                <tr>
                                    <td>BROW WAX & TINT</td>
                                    <th>$30.00</th>
                                    <td className="duration-col">20 mins</td>
                                </tr>
                                <tr>
                                    <td>UPPER LIP</td>
                                    <th>$8.00</th>
                                    <td className="duration-col">5 mins</td>
                                </tr>
                                <tr>
                                    <td>BROW TINT</td>
                                    <th>$15.00</th>
                                    <td className="duration-col">20 mins</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td className="duration-col">* Times are <br/>approximate</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="brows-products-grey">
                    <div className="brows-subblock">
                        <div className="left-column-services">
                            <div>
                                <img src={image3} className="product-image" />
                            </div>
                        </div>

                        <div className="right-column-services">
                            <div className="inner-div">
                                <p className="lash-title">PERMANENT BROWS</p>
                                <p className="coming-soon">COMING SOON</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="brows-booking">
                    <p className="lash-title">READY TO BOOK?</p>
                    <div className="lash-div">{/*divider*/}</div>
                        <p className="lash-desc">For all services, you can book using the link below.</p>
                        <a className="lashes-book-btn" href="https://goldnhour.as.me/schedule.php" target="_blank">Book Now</a>
                    </div>
                </div>
            
        </div>
    )
}

export default Brows
