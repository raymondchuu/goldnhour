import React from 'react';
import quote from '../Media/quote.png';
import { ReactComponent as ReactLogo } from '../Media/logo2.svg';
import {IoLogoInstagram, IoMdMail} from 'react-icons/io';

import '../css/Testimonials.css';

const TestimonialArr = [
    {
        content: "I’ve been getting my lashes done with Michelle since 2017 and I haven’t looked back ever since! Her personality, positive attitude and professional services has me looking forward to our biweekly appointments. She not only makes me feel my best self with her incredible work, but with her patience and great listening skills every session feels like a mini therapy session. I’m so grateful for the connection we have built and so lucky to have her as my lash artist!",
        name: "Taraneh S.",
    }, 
    {
        content: "I have tried multiple last techs in the past and no one has been able to deliver the quality that Michie does! She always provide A++ quality results in an efficient manner and offers a wide variety of services. I always receive compliments on her work and will continue to be a long time client  she never disappoints 🙏 ",
        name: "Alessia R.",
    },
    {
        content: "Where do I even begin with this review? Getting my lashes done was the best decision I ever made. I’ve been going to Michelle for my lashes for 3.5 years now non stop. I drive 45 mins each way to see her and it is well worth it! The only break I ever took was for a few months of quarantine during covid and I can say that my lashes are still growing strong and I’ve never had a problem. I get soooo many compliments on my lashes and even more now that I wear a mask all day long and people only recognize me from my eyes. Michelle is not only a lash artist but also who needs a therapist when you’ve got her?! I look forward to my lash appointment every month because of the amazing conversations and laughs we have. Shes amazing at what she does and I highly highly recommend her!",
        name: "Goli A."
    },
    {
        content: "Literally no one I would trust more to touch my lashes. I was so nervous going into lash extensions, thinking it would ruin my lashes. I had them on for two years, consistently seeing Michelle every 3 weeks and each time I slept like an absolute angel the entire time. She was always so precise to make sure there were no gaps. When I did take a break from my lashes, I went to her to remove them and my lashes were so long and in perfect condition. No damage done. I’d recommend her to anyone looking for lash extensions, lash lifts and brow services!! ",
        name: "Daniela B."
    },
    {
        content: "I have been getting lashed by Michelle for over three years now. She was the first lash artist I went to and the results were absolutely stunning.  She does such amazing work and my lashes are always looking flawless  even right before a fill I get all kinds of compliments on my lashes.  Not only has Michelle made my lashes on point for the last few years,  shes also given me some of the best life advice and friendship. Michelle will always be my first choice lash artists and I recommend her to everyone! ",
        name: "Julia L."
    },    
    {
        content: "You are my first and last lash tech. You took my lash virginity and I can never go back. I love my lashes and the way you make me feel everytime I open my eyes!         ",
        name: "Ellen L."
    },
    {
        content: "Michelle is the best out there!! Michelle pays attention to close detail, and does such an amazing job. I wouldn’t go to anyone else for my services hands down. She makes the experience so welcoming and fun! ",
        name: "Julia V."
    },
]

const Testimonials = () => {
    return (
        <div className="test-container">
            <div className="inner-container">
                <p className="lash-title">TESTIMONIALS</p>
                <div className="lash-div">{/*divider*/}</div>

                <div style={{marginTop: "80px"}}>
                    {TestimonialArr.map((test) => (
                        <div className="test">
                            <img src={quote} className="quote-image"/>
                            <p className="content">{test.content}</p>
                            <p className="test-name">{test.name}</p>
                        </div>
                    ))}

                    <div className="test">
                        <img src={quote} className="quote-image"/>
                        <div className="inner-box">
                            <p className="test-title">Want to leave a testimonial?</p>
                            <p className="test-last-box">Send your message to Goldn Hour through instagram or email.</p>
                            <div className="test-contact">
                                <IoLogoInstagram style={{height: '30px', width: '30px', marginRight: '20px'}}/><a href="https://www.instagram.com/goldnhour.ca/" className="instagram">GOLDNHOUR</a>
                                <br/><br/>
                                <IoMdMail style={{height: '30px', width: '30px', marginRight: '20px'}} /><a href="mailto:Goldnhourwaitlist@gmail.com" className="email">Email</a>
                            </div>
                            <ReactLogo style={{display: 'block', margin: 'auto'}} />
                        </div>
                        

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;