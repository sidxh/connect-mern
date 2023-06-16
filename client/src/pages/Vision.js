import React from "react"
import Faqs from "../components/Faqs"

export default function Vision(){
    return(
        <div className="vision">
            <h1>Why ConnectLNM?</h1>
            <div className="vision_content">
                <p>🚨At our university, we've noticed a gap between juniors and seniors/alumni in terms of expertise and guidance in different fields. There are many students who want to seek help in various domains, but they often don't know who to reach out to. On the other hand, there are many seniors and alumni who have valuable experience and knowledge in these fields, but they don't always have an easy way to connect with students who need their help. That's why we created ConnectLNM. Our platform serves as an online directory of experts within our university, providing an easy and user-friendly way for juniors to find seniors and alumni with the specific skills and expertise they need.</p>
                <img src={require("../images/mentorship.png")} alt=""/>
            </div>
            <div className="vision_content" id="vision_content2">
                <img src={require("../images/mentor2.png")} alt=""/>
                <p>By simply searching for a particular domain or skill, students can find a list of experts and their contact information, making it easy to reach out and get the guidance and support they need. We believe that ConnectLNM has the potential to transform the way that students and alumni connect and collaborate within our university. By bridging the gap between juniors and seniors/alumni, we can create a more cohesive and supportive community that fosters learning and growth for all.✔️</p>
            </div>
            <Faqs />
        </div>
    )
}