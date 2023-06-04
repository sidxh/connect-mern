import React, { useRef, useState } from 'react'
import ReactDOM, { Link } from "react-router-dom"

const faqs = [
    {
        id: 1,
        header: "Web Technologies",
        text: <div className='links_div'>
        <Link to='/explore/webtech/frontend' >Frontend Development</Link>
        <Link to='/explore/webtech/backend' >Backend Development</Link>
        <Link to='/explore/webtech/machine' >AI / ML</Link>
        <Link to='/explore/webtech/quantum' >Quantum Computing</Link>
        <Link to='/explore/webtech/blockchain' >Blockchain Development</Link>
        <Link to='/explore/webtech/arvr' >Augmented & Virtual Reality</Link>
        <Link to='/explore/webtech/cloud' >Cloud Computing</Link>
        <Link to='/explore/webtech/datasci' >Data Science</Link>
        <Link to='/explore/webtech/devops' >DevOps</Link>
        <Link to='/explore/webtech/cyber' >Cyber Security</Link>
        <Link to='/explore/webtech/technical' >Technical Writing</Link>
        <Link to='/explore/webtech/gamedev' >Game Development</Link>
        <Link to='/explore/webtech/appdev' >App Development</Link>
        <Link to='/explore/webtech/dsa' >Data Structures Algorithms</Link>
        </div>,
    },
    {
        id: 2,
        header: "Non-Technical",
        text: <div className='links_div'>
        <Link to='/explore' >Sales</Link>
        <Link to='/explore' >Business Associate</Link>

        <Link to='/explore' >Content Writing</Link>
        <Link to='/explore' >Copy Writing</Link>
        <Link to='/explore' >Social Media Management</Link>
        <Link to='/explore' >Community Management</Link>
        <Link to='/explore' >Digital Marketing</Link>
        <Link to='/explore' >Graphics Designing</Link>
        <Link to='/explore' >Influencer Marketing</Link>
        <Link to='/explore' >Brand Management</Link>
        </div>,
    },
    {
        id: 3,
        header: "Core Domains",
        text: <div className='links_div'>
        <Link to='/explore' >3-D Printing</Link>
        <Link to='/explore' >Welding</Link>
        <Link to='/explore' >Metal Fabrication</Link>
        <Link to='/explore' >Mechanical Design & Modeling</Link>
        <Link to='/explore' >Machine Operations</Link>
        <Link to='/explore' >Robotics & Automation</Link>
        <Link to='/explore' >Mechatronics</Link>
        <Link to='/explore' >Systems Engineering</Link>
        <Link to='/explore' >Embedded Systems</Link>
        <Link to='/explore' >Digital Signal Processing</Link>
        <Link to='/explore' >Microcontroller Programming</Link>
        <Link to='/explore' >PCB Designing</Link>
        <Link to='/explore' >FGPA Programming</Link>
        <Link to='/explore' >Internet Of Things</Link>
        <Link to='/explore' >Analog & Digital Electronics</Link>
        <Link to='/explore' >Wireless Communication</Link>
        </div>,
    },
    {
        id: 4,
        header: "Media & Design",
        text: <div className='links_div'>
        <Link to='/explore' >UI UX Designing</Link>
        <Link to='/explore' >Product Designing</Link>
        <Link to='/explore' >Film Making</Link>
        <Link to='/explore' >Photography</Link>
        <Link to='/explore' >VFX</Link>
        <Link to='/explore' >2-D Animation</Link>
        <Link to='/explore' >3-D Modeling</Link>
        <Link to='/explore' >Motion Graphics</Link>
        <Link to='/explore' >Graphics Designing</Link>
        <Link to='/explore' >Video Editing</Link>
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


