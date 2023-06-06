import React from "react"
import { Link } from "react-router-dom"
import DevCards from "../components/DevCards"

export default function ReachOut(){
    return(
        <div className="reachout">
        <h1>Meet The Developers</h1>
        <div className="dev_main">
            <DevCards name="Siddhant Shitole" skill="UI Designer & Full-Stack Developer" descp="Lorem ipsum dolor sit amet, consectetuer adipisg elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate." />
            
            <DevCards name="Divya Bajaj" skill="AI/ML & Backend Developer" descp="eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus" />
        </div>
        </div> 
    )
}