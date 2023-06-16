import React, { useRef, useState } from 'react'
import { Link } from "react-router-dom"

const faqs = [
    {
        id: 1,
        header: "Web Technologies",
        text: <div className='links_div'>
        <Link to='/explore/web-technologies/frontend-development' ><span><img className='span_img' src={require('../images/domains/frontend-development.png')} alt='Skill Logo' /></span>Frontend Development</Link>
        <Link to='/explore/web-technologies/backend-development' ><span><img className='span_img' src={require('../images/domains/backend-development.png')} alt='Skill Logo' /></span>Backend Development</Link>
        <Link to='/explore/web-technologies/ai-ml' ><span><img className='span_img' src={require('../images/domains/ai-ml.png')} alt='Skill Logo' /></span>AI / ML</Link>
        <Link to='/explore/web-technologies/quantum-computing' ><span><img className='span_img' src={require('../images/domains/quantum-computing.png')} alt='Skill Logo' /></span>Quantum Computing</Link>
        <Link to='/explore/web-technologies/blockchain-development' ><span><img className='span_img' src={require('../images/domains/blockchain-development.png')} alt='Skill Logo' /></span>Blockchain Development</Link>
        <Link to='/explore/web-technologies/ar-vr' ><span><img className='span_img' src={require('../images/domains/ar-vr.png')} alt='Skill Logo' /></span>Augmented & Virtual Reality</Link>
        <Link to='/explore/web-technologies/cloud-computing' ><span><img className='span_img' src={require('../images/domains/cloud-computing.png')} alt='Skill Logo' /></span>Cloud Computing</Link>
        <Link to='/explore/web-technologies/data-science' ><span><img className='span_img' src={require('../images/domains/data-science.png')} alt='Skill Logo' /></span>Data Science</Link>
        <Link to='/explore/web-technologies/devops' ><span><img className='span_img' src={require('../images/domains/devops.png')} alt='Skill Logo' /></span>DevOps</Link>
        <Link to='/explore/web-technologies/cyber-security' ><span><img className='span_img' src={require('../images/domains/cyber-security.png')} alt='Skill Logo' /></span>Cyber Security</Link>
        <Link to='/explore/web-technologies/technical-writing' ><span><img className='span_img' src={require('../images/domains/technical-writing.png')} alt='Skill Logo' /></span>Technical Writing</Link>
        <Link to='/explore/web-technologies/game-development' ><span><img className='span_img' src={require('../images/domains/game-development.png')} alt='Skill Logo' /></span>Game Development</Link>
        <Link to='/explore/web-technologies/application-development' ><span><img className='span_img' src={require('../images/domains/application-development.png')} alt='Skill Logo' /></span>App Development</Link>
        <Link to='/explore/web-technologies/data-structures-algorithms' ><span><img className='span_img' src={require('../images/domains/backend-development.png')} alt='Skill Logo' /></span>Data Structures Algorithms</Link>
        </div>,
    },
    {
        id: 2,
        header: "Non-Technical",
        text: <div className='links_div'>
        <Link to='/explore/non-technical/sales' ><span><img className='span_img' src={require('../images/domains/sales.png')} alt='Skill Logo' /></span>Sales</Link>
        <Link to='/explore/non-technical/business-associate' ><span><img className='span_img' src={require('../images/domains/business-associate.png')} alt='Skill Logo' /></span>Business Associate</Link>
        <Link to='/explore/non-technical/copy-writing' ><span><img className='span_img' src={require('../images/domains/copy-writing.png')} alt='Skill Logo' /></span>Copy Writing</Link>
        <Link to='/explore/non-technical/social-media-management' ><span><img className='span_img' src={require('../images/domains/social-media-management.png')} alt='Skill Logo' /></span>Social Media Management</Link>
        <Link to='/explore/non-technical/community-management' ><span><img className='span_img' src={require('../images/domains/community-management.png')} alt='Skill Logo' /></span>Community Management</Link>
        <Link to='/explore/non-technical/digital-marketing' ><span><img className='span_img' src={require('../images/domains/digital-marketing.png')} alt='Skill Logo' /></span>Digital Marketing</Link>
        <Link to='/explore/non-technical/graphic-designing' ><span><img className='span_img' src={require('../images/domains/graphic-designing.png')} alt='Skill Logo' /></span>Graphics Designing</Link>
        <Link to='/explore/non-technical/influencer-marketing' ><span><img className='span_img' src={require('../images/domains/influencer-marketing.png')} alt='Skill Logo' /></span>Influencer Marketing</Link>
        </div>,
    },
    {
        id: 3,
        header: "Core Domains",
        text: <div className='links_div'>
        <Link to='/explore/core-domains/3d-printing' ><span><img className='span_img' src={require('../images/domains/3d-printing.png')} alt='Skill Logo' /></span>3-D Printing</Link>
        <Link to='/explore/core-domains/welding' ><span><img className='span_img' src={require('../images/domains/welding.png')} alt='Skill Logo' /></span>Welding</Link>
        <Link to='/explore/core-domains/metal-forming' ><span><img className='span_img' src={require('../images/domains/metal-forming.png')} alt='Skill Logo' /></span>Metal Forming</Link>
        <Link to='/explore/core-domains/mechanical-design' ><span><img className='span_img' src={require('../images/domains/mechanical-design.png')} alt='Skill Logo' /></span>Mechanical Design & Modeling</Link>
        <Link to='/explore/core-domains/machine-operations' ><span><img className='span_img' src={require('../images/domains/machine-operations.png')} alt='Skill Logo' /></span>Machine Operations</Link>
        <Link to='/explore/core-domains/robotics-automation' ><span><img className='span_img' src={require('../images/domains/robotics-automation.png')} alt='Skill Logo' /></span>Robotics & Automation</Link>
        <Link to='/explore/core-domains/mechatronics' ><span><img className='span_img' src={require('../images/domains/mechatronics.png')} alt='Skill Logo' /></span>Mechatronics</Link>
        <Link to='/explore/core-domains/system-engineering' ><span><img className='span_img' src={require('../images/domains/system-engineering.png')} alt='Skill Logo' /></span>System Engineering</Link>
        <Link to='/explore/core-domains/embedded-systems' ><span><img className='span_img' src={require('../images/domains/embedded-systems.png')} alt='Skill Logo' /></span>Embedded Systems</Link>
        <Link to='/explore/core-domains/digital-signal-processing' ><span><img className='span_img' src={require('../images/domains/digital-signal-processing.png')} alt='Skill Logo' /></span>Digital Signal Processing</Link>
        <Link to='/explore/core-domains/microcontroller-programming' ><span><img className='span_img' src={require('../images/domains/microcontroller-programming.png')} alt='Skill Logo' /></span>Microcontroller Programming
        </Link>
        <Link to='/explore/core-domains/pcb-designing' ><span><img className='span_img' src={require('../images/domains/pcb-designing.png')} alt='Skill Logo' /></span>PCB Designing</Link>
        <Link to='/explore/core-domains/fgpa-programming' ><span><img className='span_img' src={require('../images/domains/fgpa-programming.png')} alt='Skill Logo' /></span>FGPA Programming</Link>
        <Link to='/explore/core-domains/internet-of-things' ><span><img className='span_img' src={require('../images/domains/internet-of-things.png')} alt='Skill Logo' /></span>Internet Of Things</Link>
        <Link to='/explore/core-domains/analog-digital-electronics' ><span><img className='span_img' src={require('../images/domains/analog-digital-electronics.png')} alt='Skill Logo' /></span>Analog & Digital Electronics</Link>
        <Link to='/explore/core-domains/wireless-communication' ><span><img className='span_img' src={require('../images/domains/frontend-development.png')} alt='Skill Logo' /></span>Wireless Communication</Link>
        </div>,
    },
    {
        id: 4,
        header: "Media & Design",
        text: <div className='links_div'>
        <Link to='/explore/media-design/ui-ux' ><span><img className='span_img' src={require('../images/domains/ui-ux.png')} alt='Skill Logo' /></span>UI UX Designing</Link>
        <Link to='/explore/media-design/product-designing' ><span><img className='span_img' src={require('../images/domains/product-designing.png')} alt='Skill Logo' /></span>Product Designing</Link>
        <Link to='/explore/media-design/film-making' ><span><img className='span_img' src={require('../images/domains/film-making.png')} alt='Skill Logo' /></span>Film Making</Link>
        <Link to='/explore/media-design/photography' ><span><img className='span_img' src={require('../images/domains/photography.png')} alt='Skill Logo' /></span>Photography</Link>
        <Link to='/explore/media-design/vfx' ><span><img className='span_img' src={require('../images/domains/vfx.png')} alt='Skill Logo' /></span>VFX</Link>
        <Link to='/explore/media-design/animations' ><span><img className='span_img' src={require('../images/domains/animations.png')} alt='Skill Logo' /></span>2-D Animation</Link>
        <Link to='/explore/media-design/3d-modeling' ><span><img className='span_img' src={require('../images/domains/3d-modeling.png')} alt='Skill Logo' /></span>3-D Modeling</Link>
        <Link to='/explore/media-design/motion-graphics' ><span><img className='span_img' src={require('../images/domains/frontend-development.png')} alt='Skill Logo' /></span>Motion Graphics</Link>
        <Link to='/explore/media-design/graphic-designing' ><span><img className='span_img' src={require('../images/domains/graphic-designing.png')} alt='Skill Logo' /></span>Graphic Designing</Link>
        <Link to='/explore/media-design/video-editing' ><span><img className='span_img' src={require('../images/domains/video-editing.png')} alt='Skill Logo' /></span>Video Editing</Link>
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


