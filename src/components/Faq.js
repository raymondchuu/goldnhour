import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../css/Faq.css';

const Faq = () => {
    return (
        <div style={{backgroundColor: '#FAFAFA'}}>
        <div className="faq-container">
            <div className="faq-title">
                <p>FAQ</p>
            </div>
            <div className="faq-subtitle">
                <p>LASH FAQ</p>
            </div>
            <div>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className="faq-section">How long do they last?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className="faq-desc">
                    There are many factors that go into the longevity of your lash extensions. Everybody’s natural eyelashes run on a life cycle of 4-6 weeks, shedding and replenishing itself within time. We lose about 2-5 lashes per day! So if you have extensions on, it is normal to see a natural lash shedding along. This is why it is important to book your refill appointments between 2-3 weeks after your initial appointment to keep refreshing your look! It also depends on your lifestyle, diet, if you’re taking any medication, skincare regime, etc. See the aftercare section for more details. 
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className="faq-section">Can I wear mascara?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className="faq-desc">
                    It is not recommended as it is extremely difficult to remove from your natural lash/extension. If mascara residue remains on your lashes, it tends to attract debris (ie other makeup, dirt, etc), which can likely ruin the retention for your next refill. If you apply mascara on top of your lashes, it can clump your lashes together and tug on your natural lashes causing discomfort. If you decide to wear mascara, please remove it properly and ensure that you have clean lashes for your next appointment. 

                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className="faq-section">Can I wear other eye make up?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className="faq-desc">
                    You can, however it is advised where possible to use oil free make up around the eyes when wearing eyelash extensions as any oil found in products can loosen the bonding agent in the glue and affect the longevity. 

                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className="faq-section">How do I clean my lashes?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className="faq-desc">
                        We recommend using a lash cleanser and a clean fluffy brush to cleanse the lashes/eyes to keep them free from bacteria. Use a paper towel to pat your lashes dry and brush them. Avoid using q-tips and cotton as the lint can catch onto your extensions and tug. 
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className="faq-section">How can I remove the lashes?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className="faq-desc">
                    It is highly recommended to book an appointment to remove them professionally. It is the safest, quickest and most pain free procedure. Removing it yourself can cause unnecessary tugging and pulling of the natural lashes. 
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className="faq-section">Do eyelash extensions damage my natural eyelashes?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className="faq-desc">
                        <p>Eyelash extensions are completely safe and cause no damage to the natural lash when applied professionally and maintained well. As mentioned above, you should never attempt to pull out any eyelash extensions/remove them yourself as the only thing that will break the bond of the glue is the professional remover. Any attempt to remove the lashes with oils, pulling and tugging will undoubtedly result in your natural lash being damaged with it.</p>
                        <p>If brushed twice a day, kept clean and no pulling/tugging/picking there are no risks of damage to your natural lash underneath. The extensions that do fall out (naturally/when brushed) will be replenished with another natural lash at your refill appointment! </p>
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className="faq-section">Lashes pre-care</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className="faq-desc">
                        <li>Please arrive to your appointment without any eye makeup on, as this will prevent the glue from bonding to your lashes. This will minimize the “clean-up” time, thus having more lashing time.</li>
                        <li>Avoid caffeine so your eyes do not flutter during the process.</li>
                        <li>Do not use any cream, moisturizer or oils around your eye area 24 hours prior.</li>
                        <li>It is recommended to shower before coming to your appointment, since you won’t be able to get your lashes super wet in the following days</li>
                        <li>Removal of contacts lenses is suggested to avoid any irritation of the eyes.</li>
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className="faq-section">Lashes after-care</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className="faq-desc">
                        <p>DOs</p>
                        <li>If you like wearing eye makeup, use an oil-free remover + cleanser to clean your lashes. You will have better retention while preventing bacteria build-up that can lead to infection. For best results, use a lash cleanser and a soft eyeshadow brush and go through the lash line via top + bottom (while still have your eye closed). Rinse and repeat if necessary</li>
                        <li>Oily skin types = faster lash loss. When possible, wipe your oily eyelids to prevent oil traveling down to your lashes. </li>
                        <li>If you’re very active, repeat the above when sweating. </li>
                        <li>Brush your lashes daily to help get rid of any fall out and keep them neat </li>
                        <li>Book your refill appointments in advance (2-3 weeks) to maintain the fullness and avoid disappointments. It is recommended to wash your lashes prior to your appointment. </li>
                        <li>Keep in mind that it is normal that natural lashes shed on a daily basis (on avg up to 5 lashes/day)</li>
                        <br/>
                        <p>DONTS</p>
                        <li>In the first 24-48hrs after getting your lashes done, avoid fully immersing your eyes in water: hot showers, steam or saunas</li>
                        <li>Avoid wearing eye makeup within this time frame as well </li>
                        <li>Avoid sleeping on your face as you will increase the chances of losing more lashes</li>
                        <li>Avoid using oil-based products around the eye area</li>
                        <li>Avoid picking, rubbing or pulling your lashes as it will result in premature lash loss </li>
                        <li>Do not curl, tint or perm your lashes </li>
                        <li>Do not wear mascara on your lashes as it will loosen the bond. It is always extremely difficult to remove mascara from your extensions. If it is not fully removed, the lash extension will not adhere properly to your natural lashes at your next refill appointment. </li>
                        <li>Avoid coming in contact with extreme heat such as the barbeque, oven, blowdryer, lighters. Extreme heat can burn your lashes and/or loosen the curl of the extension. </li>
                        <li>Don’t remove lashes on your own, seek for a lash professional to quickly remove your lashes pain free! This will ensure the integrity of your natural lashes.</li>

                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

            <div style={{marginTop: '10%'}}>
            <div className="faq-subtitle">
                <p>BROWS</p>
            </div>
            <div>
            <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className="faq-section">Which brow service will give me the most natural look?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className="faq-desc">
                        <p>It really depends on the client’s existing brow hairs! At the beginning of every appointment, there is a consultation. We can discuss which method is most natural for you! </p>
                        <p>You can always email your BARE BROW PHOTOS to <a href="mailto:info@goldnhour.ca">info@goldnhour.ca</a>.</p>
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className="faq-section">Which brow service is most suitable for me? </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className="faq-desc">
                    Again, this depends on the client’s existing brow hairs, skin type, etc. 
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className="faq-section">Am I a suitable candidate for PMU?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className="faq-desc">
                        <p>It is not recommended for those who are: </p>
                        <li>If you are pregnant/or nursing</li>
                        <li>Have any viral infections, sicknesses and/or diseases (ie flu, cold, etc)</li>
                        <li>Going through Chemotherapy/Radiation therapy </li>
                        <li>Using Accutane in the past 12 months  </li>
                        <li>Major heart problems or use of pacemaker </li>
                        <li>Had an organ transplant </li>
                        <li>History of Keloids/hypertrophic scarring (ie tendency to get keloids on face)</li>
                        <li>Epilepsy </li>
                        <li>Skin irritations near the brow area (ie eczema, dermatitis, psoriasis, rashes, sunburn, acne, etc) </li>
                        <li>Had botox/needling facials on or around the area in the past 2 months </li>
                        <li>Used any Retin A or Retinol in the past 3 weeks </li>
                        <li>Severe heart conditions, uncontrolled high blood pressure, poor general health</li>
                        <li>Any treatment, medication, or illness that compromises your immune system or healing would make you a poor candidate for micropigmentation procedures</li>
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className="faq-section">Does it hurt?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className="faq-desc">
                        <p>The discomfort is different for everyone due to each individual's level of sensitivity. According to most, the pain is minimal to no pain. The topical numbing cream is applied throughout the procedure to minimize any discomfort. Quite often, clients find it relaxing and they fall asleep! </p>
                        <li>Remember, women tend to be naturally more sensitive during our menstrual cycle. If you have a low pain tolerance, do not book during this time.</li>
                        <li>If you are a frequent smoker, the topical anesthetics used during the treatment may not last as long and may also lead to poor pigment retention</li>
                        <li>If you have been diagnosed with Fibromyalgia, be aware that this may affect your sensitivity tolerance to the procedure as well </li>
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className="faq-section">What is the healing process?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className="faq-desc">
                        <p>After your procedure, it is normal to experience minimal swelling, redness and tenderness–usually subsides within 24 hours. The scabbing process takes about 7-14 days. </p>
                        Day 1: "I love my brows"<br/>
                        <br/>
                        Day 2-5: "Oh no, they're too dark and thick"<br/>
                        
                        The first few days, you'll notice that the pigment will appear much darker–THIS IS NORMAL! The reason this happens is (1) larger scabs are forming over the pigment and (2) the color oxidizes (darkens) as it comes into contact with air. <br/>
                        <br/>
                        Day 5-10: "Ew my brows are scabbing and flaking off!!" <br/>
                        
                        Once the scabs start to flake off, you'll be tempted to pick at the rest. DO NOT pick off your scabs as it may result in scarring and patchy brows. <br/>
                        <br/>
                        Day 10+: "Oh my, my brows are too light" 

                        Once healed, the brows will look very light or almost next to nothing–This is normal! The color will resurface by the end of the 4-6 week healing period. Thus, allow 6 weeks to see the true results. Any changes can be down at the touch-up appointments. <br/>
                    <br/>
                    <p>For more details regarding the healing process, please see the 'aftercare' section. </p>                        
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className="faq-section">How long does it last? </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className="faq-desc">
                        <p>The color will lighten over time, so it is recommended to get annual touch-ups to keep the brows looking their best. Your brow retention can last between 1-5 years depending on your skin type, lifestyle, pre-care, after care and brow history (previous work vs virgin brows). When referring to your lifestyle, if you use acids/facials/peels as a part of your skincare routine, the frequency of being exposed to sun or salt water, certain medications, etc– can alter the retention of your brows. </p>
                        <p>Tips to extend the longevity of your brows can be found in the aftercare section. </p>

                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className="faq-section">What if I have previous work done? </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className="faq-desc">
                        <p>Please email a photo of your bare eyebrows to <a href="mailto:info@goldnhour.ca">info@goldnhour.ca</a> for consultation.</p>
                        <p>Any previous work done is considered corrective work. A correction or cover up is dependent on the age and colour of the previous tattoo. </p>
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className="faq-section">Can I wear makeup after my brow tattoo treatment? </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className="faq-desc">
                    It is recommended that you do not wear any makeup during the healing process (approx. two weeks) as the treated area is very sensitive and prone to infections. You are allowed to apply it on other parts of your face, just not directly on or around. 
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className="faq-section">What are the Pros of Ombre powder brows?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className="faq-desc">
                        <li>The Ombre/powder brow technique uses a more traditional tattooing method, which means that the results are longer lasting than other methods (ie microblading). </li>
                        <li>This procedure is great for most skin types, including oily skin–which is usually not recommended for microblading.</li>
                        <li>Less invasive on the skin and less painful compared to other methods</li>
                        <li>It can heal more defined, fuller and more dramatic </li>
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className="faq-section">Brows pre-care</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className="faq-desc">
                        <p>Please note that you will be more sensitive during your menstrual cycle, thus, feeling more discomfort as usual. </p>
                        <li>Refrain from regularly shaping your brows (ie wax, threaded, tint, etc) within 3 weeks of your appointment</li>
                        <li>If you plan to go on vacation, it is recommended to plan your trip a minimum of 2 weeks after the procedure</li>
                        <li>Avoid any blood thinning medication for a minimum of 48 hours prior to their appointment (ie advil, aspirin, vitamin E, etc)</li>
                        <li>Do not drink any alcohol or caffeine 48 hrs prior to your appointment </li>
                        <li>Stay hydrated and drink plenty of water</li>
                        <li>Avoid the sun and tanning one week prior. We cannot perform the procedure over sunburned areas, moreover, you will lose your deposit if you show up with a fresh tan/sunburn. Naturally, your skin exfoliates from a tan, thus, taking the pigment with it </li>
                        <li>If you are a frequent smoker, the topical numbing cream used during the treatment may not last as long and may also lead to poor pigment retention</li>
                        <li>Avoid any method of hair removal for at least 2 weeks </li>
                        <li>Do not work out 24 hours before the procedure </li>
                        <li>Avoid chemical peels, micro-dermabrasion or facials 4 weeks prior to the procedure </li>
                        <li>Do not use any AHA/retinol products close to the eyebrow area 1 month prior </li>
                        <li>Botox/filler on the forehead, temple and eye area should be avoided 1 month prior to the procedure and 1 month after until your brows heal </li>
                        <li>Accutane users must wait 12 months before considering this procedure </li>
                        <li>If you are allergic to Lidocaine, let your brow technician know </li>
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className="faq-section">Brows after-care</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className="faq-desc">
                    It is crucial to follow proper aftercare to ensure longevity, effectiveness, health and overall satisfaction with your new brow tattoo. Please follow the instructions below to achieve the best possible results. 
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className="faq-section">What to expect during the healing period</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className="faq-desc">
                    Day 1: "I love my brows" <br/><br/>

                    Day 2-5: "Oh no, they're too dark and thick"

                    The first few days, you'll notice that the pigment will appear much darker–THIS IS NORMAL! The reason this happens is (1) larger scabs are forming over the pigment and (2) the color oxidizes (darkens) as it comes into contact with air. 
                    <br/><br/>
                    By DAY 3:  you can use your A + D ointment on your brows and apply a grain size amount. However, use a slightly thicker amount before showering to protect it from getting wet. After you shower, gently dab off excess product to a thinner layer. 
                    <br/><br/>
                    Day 5-10: "Ew my brows are scabbing and flaking off!!" 

                    Once the scabs start to flake off, you'll be tempted to pick at the rest. DO NOT pick off your scabs as it may result in scarring and patchy brows. 
                    <br/><br/>
                    Day 10+: "Oh my, my brows are too light" 
                    <br/>
                    
                    <p>Once healed, the brows will look very light or almost next to nothing–This is normal! The color will resurface by the end of the 4-6 week healing period. Thus, allow 6 weeks to see the true results. Any changes can be down at the touch-up appointments. </p>
                    <p style={{fontWeight: 'bolder'}}>** A touch-up session will be scheduled 4-6 weeks after your initial service or until all flaking is off to achieve desired color and shape. The application of permanent cosmetics may be a 2-step procedure. Do not judge your brows while in the healing stage. </p>
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className="faq-section">What to avoid during the healing period</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className="faq-desc">
                        <li>Do not touch the treated area with your fingers as any potential bacteria can cause infection</li>
                        <li>Do not wet your eyebrows for 7 days </li>
                        <li>Avoid makeup on treated area </li>
                        <li>If lymph fluids surface, take a clean/dry tissue and pat it dry</li>
                        <li>Avoid sleeping on your face/brows for the first 10 days </li>
                        <li>Brows will itch, do not scratch as it can cause permanent scarring and loss of pigment </li>
                        <li>Avoid making extreme facial expressions as this may cause the scabs to prematurely fall off</li>
                        <li>Avoid direct sun exposure and tanning beds for 1 week after your procedure</li>
                        <li>Avoid pools, saunas, steam rooms, hot showers and/or hot baths for 1 week</li>
                        <li>No exercising for 1 week as sweating through the brows will expel pigment from the dermis producing poor results </li>
                        <li>Avoid Retin A, Glycolic acids, aloe, accutane and vitamin E products. Avoid ANY exfoliation products/medications until after your FINAL touch up</li>
                        <li>Avoid tinting of brows for 3 weeks following the procedure </li>
                        <li>Limit contact with animals near your face </li>
                        <li>Do not donate blood for one year after the procedure </li>
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className="faq-section">Tip to extend the life of your tattoo</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className="faq-desc">
                        <li>Cover your tattoo with vaseline when swimming in sea salt or chlorinated water </li>
                        <li>Avoid sun/UV exposure as it will cause the tattoo to fade and change </li>
                        <li>Avoid active skincare: skincare products and treatments with active ingredients (ie gycolic, AHAs, retinol, chemical peels) can fade your tattoo or alter the color. If you must apply any products, apply it below your eyes and not on or around the eyebrow</li>
                        <li>If you are planning a chemical peel, MRI, or other medical procedure, please inform the technician that you have had an iron-oxide cosmetic tattoo</li>
                        <li>If you plan to have laser treatments around the face, tell your specialist to avoid the pigmented area as it may turn the pigment black</li>
                        <br/>
                        <p>Note that all tattoos carry the inherent risk of infection and/or allergic reaction, so if swelling, pain, bruising persists for more than a few days, it may be a sign of infection.  If so, stop using your aftercare product and contact your doctor/brow technician right away. </p>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            </div>

            <div style={{marginTop: '10%', paddingBottom: '10%'}}>
                <div className="faq-subtitle">
                    <p>SCHEDULING</p>
                </div>
                <div>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className="faq-section">How do I schedule an appointment? </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography className="faq-desc">
                        To schedule any appointment, please click "booking" (whatever the page name is) and read all my policies prior to booking! 
                        </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className="faq-section">Why do I have to give you a non-refundable deposit when booking?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography className="faq-desc">
                        As a service professional, a lot of our business depends on people. If a client books an expensive, time-involved service, cancels or no-shows the appointment last minute–we likely won't be able to fill the time slot with another client. Deposits ensure that clients value our time the same way that we do because there's a cost associated. You will be less likely to forget an appointment if you've already paid a deposit! 
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Faq;