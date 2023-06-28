import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"

export default function Topbar() {
    return (
        <div className="topbar" id="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">alpha-dzee.</a>
                    <div className="item-container">
                        <Person className="icon"/>
                        <span>+234 706 6330 135</span>
                    </div> 
                    <div className="item-container">
                        <Mail className="icon"/>
                        <span>alphaadx6@gmail.com</span>
                    </div> 
                </div>
                <div className="right">
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
