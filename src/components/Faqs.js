import React, { useRef, useState } from 'react'
import ReactDOM from "react-router-dom"

const faqs = [
    {
        id: 1,
        header: "What is ConnectLNM?",
        text: `ConnectLNM is a platform designed to bridge the gap between current students and alumni of our university. It allows students to seek guidance and support from alumni who have expertise in various domains, helping them connect and learn from experienced professionals.`
    },
    {
        id: 2,
        header: "How can ConnectLNM benefit me?",
        text: `ConnectLNM provides you with a directory of alumni and seniors who have expertise in different domains such as technology, marketing, design, and more. You can reach out to them for guidance, mentorship, and assistance in your academic and professional journey.`
    },
    {
        id: 3,
        header: "How do I search for mentors on ConnectLNM?",
        text: `You can easily search for mentors on ConnectLNM by heading to the 'Explore' section and entering the specific skill or domain you need help with. We will provide you with a list of alumni and seniors who possess expertise in that particular area, along with their contact information for further communication.`
    },
    {
        id: 4,
        header: "How do I contact a mentor on ConnectLNM?",
        text: `ConnectLNM provides you with the contact information, such as Email Addresses and LinkedIn handles, of the mentors listed on the platform. You can use this information to reach out to them directly and initiate a conversation regarding your specific query or request for guidance.`
    },
    {
        id: 5,
        header: "Is ConnectLNM only for technical skills?",
        text: `No, ConnectLNM caters to a wide range of skills and domains. While it includes technical skills like programming, web development, and data science, it also encompasses non-technical skills such as marketing, design, content writing, and more. The platform aims to connect students with mentors across diverse fields. We are open to suggestions for listing new domains as well.`
    },
    {
        id: 6,
        header: "How can I contribute to ConnectLNM?",
        text: `Absolutely! If you are an alumni or senior or anyone from the fraternity with expertise in a particular field, we encourage you to contribute to ConnectLNM. All you have to do is head to the 'Get Listed!' section and fill out a small form specifying to us your skills relevant and experience. You can share your knowledge, provide guidance, and support the current students in their academic and professional endeavors.`
    },
    {
        id: 7,
        header: "I have encountered an issue or need assistance with ConnectLNM. How can I get support?",
        text: `If you are facing any issues, suggestions to provide or require assistance with ConnectLNM, please reach out to our support team. You can contact the developers through the provided support channels, given on the 'Meet The Developers' section. We are here to help and ensure a smooth experience for all users.`
    }
]

const AccordionItem = (props) => {
    const contentEl = useRef();
    const { handleToggle, active, faq } = props;
    const { header, id, text } = faq;

    return (
        <div className="rc-accordion-card">
            <div className="rc-accordion-header">
                <div className={`rc-accordion-toggle p-3 ${active === id ? 'active' : ''}`} onClick={() => handleToggle(id)}>
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
                    <p className='mb-0'>{text}</p>
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
            <div className="container-fluid mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-2">
                        <div className="card">
                            <div className="card-body">
                              <h4 className="form-heading mb-4 text-primary text-center mt-3">Frequently Asked Questions [FAQs]</h4>
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


