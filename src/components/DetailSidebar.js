import React, { useRef, useState } from 'react'
import ReactDOM, { Link } from "react-router-dom"

const faqs = [
    {
        id: 1,
        header: "Web Technologies",
        text: <div className='links_div'>
        <Link to='/explore/web-technologies/frontend-development' ><span><img className='span_img' src={require('../images/domains/frontend-development.png')} /></span>Frontend Development</Link>
        <Link to='/explore/web-technologies/backend-development' ><span><img className='span_img' src={require('../images/domains/backend-development.png')} /></span>Backend Development</Link>
        <Link to='/explore/web-technologies/ai-ml' ><span><img className='span_img' src={require('../images/domains/ai-ml.png')} /></span>AI / ML</Link>
        <Link to='/explore/web-technologies/quantum-computing' ><span><img className='span_img' src={require('../images/domains/quantum-computing.png')} /></span>Quantum Computing</Link>
        <Link to='/explore/web-technologies/blockchain-development' ><span><img className='span_img' src={require('../images/domains/blockchain-development.png')} /></span>Blockchain Development</Link>
        <Link to='/explore/web-technologies/ar-vr' ><span><img className='span_img' src={require('../images/domains/ar-vr.png')} /></span>Augmented & Virtual Reality</Link>
        <Link to='/explore/web-technologies/cloud-computing' ><span><img className='span_img' src={require('../images/domains/cloud-computing.png')} /></span>Cloud Computing</Link>
        <Link to='/explore/web-technologies/data-science' ><span><img className='span_img' src={require('../images/domains/data-science.png')} /></span>Data Science</Link>
        <Link to='/explore/web-technologies/devops' ><span><img className='span_img' src={require('../images/domains/devops.png')} /></span>DevOps</Link>
        <Link to='/explore/web-technologies/cyber-security' ><span><img className='span_img' src={require('../images/domains/cyber-security.png')} /></span>Cyber Security</Link>
        <Link to='/explore/web-technologies/technical-writing' ><span><img className='span_img' src={require('../images/domains/technical-writing.png')} /></span>Technical Writing</Link>
        <Link to='/explore/web-technologies/game-development' ><span><img className='span_img' src={require('../images/domains/game-development.png')} /></span>Game Development</Link>
        <Link to='/explore/web-technologies/application-development' ><span><img className='span_img' src={require('../images/domains/application-development.png')} /></span>App Development</Link>
        <Link to='/explore/web-technologies/data-structures-algorithms' ><span><img className='span_img' src={require('../images/domains/backend-development.png')} /></span>Data Structures Algorithms</Link>
        </div>,
    },
    {
        id: 2,
        header: "Non-Technical",
        text: <div className='links_div'>
        <Link to='/explore/non-technical/sales' ><span><img className='span_img' src={require('../images/domains/sales.png')} /></span>Sales</Link>
        <Link to='/explore/non-technical/business-associate' ><span><img className='span_img' src={require('../images/domains/business-associate.png')} /></span>Business Associate</Link>
        <Link to='/explore/non-technical/scopy-writing' ><span><img className='span_img' src={require('../images/domains/copy-writing.png')} /></span>Copy Writing</Link>
        <Link to='/explore/non-technical/social-media-management' ><span><img className='span_img' src={require('../images/domains/social-media-management.png')} /></span>Social Media Management</Link>
        <Link to='/explore/non-technical/community-management' ><span><img className='span_img' src={require('../images/domains/community-management.png')} /></span>Community Management</Link>
        <Link to='/explore/non-technical/digital-marketing' ><span><img className='span_img' src={require('../images/domains/digital-marketing.png')} /></span>Digital Marketing</Link>
        <Link to='/explore/non-technical/graphic-designing' ><span><img className='span_img' src={require('../images/domains/graphic-designing.png')} /></span>Graphics Designing</Link>
        <Link to='/explore/non-technical/influencer-marketing' ><span><img className='span_img' src={require('../images/domains/influencer-marketing.png')} /></span>Influencer Marketing</Link>
        </div>,
    },
    {
        id: 3,
        header: "Core Domains",
        text: <div className='links_div'>
        <Link to='/explore/core-domains/3d-printing' ><span><img className='span_img' src={require('../images/domains/3d-printing.png')} /></span>3-D Printing</Link>
        <Link to='/explore/core-domains/welding' ><span><img className='span_img' src={require('../images/domains/welding.png')} /></span>Welding</Link>
        <Link to='/explore/core-domains/metal-forming' ><span><img className='span_img' src={require('../images/domains/metal-forming.png')} /></span>Metal Forming</Link>
        <Link to='/explore/core-domains/mechanical-design' ><span><img className='span_img' src={require('../images/domains/mechanical-design.png')} /></span>Mechanical Design & Modeling</Link>
        <Link to='/explore/core-domains/machine-operations' ><span><img className='span_img' src={require('../images/domains/machine-operations.png')} /></span>Machine Operations</Link>
        <Link to='/explore/core-domains/robotics-automation' ><span><img className='span_img' src={require('../images/domains/robotics-automation.png')} /></span>Robotics & Automation</Link>
        <Link to='/explore/core-domains/mechatronics' ><span><img className='span_img' src={require('../images/domains/mechatronics.png')} /></span>Mechatronics</Link>
        <Link to='/explore/core-domains/system-engineering' ><span><img className='span_img' src={require('../images/domains/system-engineering.png')} /></span>System Engineering</Link>
        <Link to='/explore/core-domains/embedded-systems' ><span><img className='span_img' src={require('../images/domains/embedded-systems.png')} /></span>Embedded Systems</Link>
        <Link to='/explore/core-domains/digital-signal-processing' ><span><img className='span_img' src={require('../images/domains/digital-signal-processing.png')} /></span>Digital Signal Processing</Link>
        <Link to='/explore/core-domains/microcontroller-programming' ><span><img className='span_img' src={require('../images/domains/microcontroller-programming.png')} /></span>Microcontroller Programming</Link>
        <Link to='/explore/core-domains/pcb-designing' ><span><img className='span_img' src={require('../images/domains/pcb-designing.png')} /></span>PCB Designing</Link>
        <Link to='/explore/core-domains/fgpa-programming' ><span><img className='span_img' src={require('../images/domains/fgpa-programming.png')} /></span>FGPA Programming</Link>
        <Link to='/explore/core-domains/internet-of-things' ><span><img className='span_img' src={require('../images/domains/internet-of-things.png')} /></span>Internet Of Things</Link>
        <Link to='/explore/core-domains/analog-digital-electronics' ><span><img className='span_img' src={require('../images/domains/analog-digital-electronics.png')} /></span>Analog & Digital Electronics</Link>
        <Link to='/explore/core-domains/wireless-communication' ><span><img className='span_img' src={require('../images/domains/frontend-development.png')} /></span>Wireless Communication</Link>
        </div>,
    },
    {
        id: 4,
        header: "Media & Design",
        text: <div className='links_div'>
        <Link to='/explore/media-design/ui-ux' ><span><img className='span_img' src={require('../images/domains/ui-ux.png')} /></span>UI UX Designing</Link>
        <Link to='/explore/media-design/product-designing' ><span><img className='span_img' src={require('../images/domains/product-designing.png')} /></span>Product Designing</Link>
        <Link to='/explore/media-design/film-making' ><span><img className='span_img' src={require('../images/domains/film-making.png')} /></span>Film Making</Link>
        <Link to='/explore/media-design/photography' ><span><img className='span_img' src={require('../images/domains/photography.png')} /></span>Photography</Link>
        <Link to='/explore/media-design/vfx' ><span><img className='span_img' src={require('../images/domains/vfx.png')} /></span>VFX</Link>
        <Link to='/explore/media-design/animations' ><span><img className='span_img' src={require('../images/domains/animations.png')} /></span>2-D Animation</Link>
        <Link to='/explore/media-design/3d-modeling' ><span><img className='span_img' src={require('../images/domains/3d-modeling.png')} /></span>3-D Modeling</Link>
        <Link to='/explore/media-design/motion-graphics' ><span><img className='span_img' src={require('../images/domains/frontend-development.png')} /></span>Motion Graphics</Link>
        <Link to='/explore/media-design/graphic-designing' ><span><img className='span_img' src={require('../images/domains/graphic-designing.png')} /></span>Graphic Designing</Link>
        <Link to='/explore/media-design/video-editing' ><span><img className='span_img' src={require('../images/domains/video-editing.png')} /></span>Video Editing</Link>
        </div>,
    }
]

const AccordionItem = (props) => {
    const contentEl = useRef();
    const { handleToggle, active, faq } = props;
    const { header, id, text } = faq;

    return (
        <div className="rc-accordion-card">
            <div className="rc-accordion-header">
                <div className={`rc-accordion-toggle ${active === id ? 'active' : ''}`} onClick={() => handleToggle(id)}>
                    <h5 className="rc-accordion-title">{header}</h5>
                    <i className="fa fa-chevron-down rc-accordion-icon"></i>
                </div>
            </div>
            <div ref={contentEl} className={`rc-collapse ${active === id ? 'show' : ''}`} style={
                active === id
                    ? { height: contentEl.current.scrollHeight }
                    : { height: "0px" }
            }>
                <div className="rc-accordion-body">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}


const DetailSidebar = () => {
    const [active, setActive] = useState(null);

    const handleToggle = (index) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    }
    
    return (
        <>
            <div>
                <div>
                    <div>
                        <div className="card">
                            <div className="card-body">
                              <h4 className="form-heading">Navigation</h4>
                                {faqs.map((faq, index) => {
                                     return (
                                            <AccordionItem key={index} active={active} handleToggle={handleToggle} faq={faq} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailSidebar


