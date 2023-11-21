import React from 'react';
import logo from "../Assets/Images/logo.png";
import "../App.css";
import App from "../Assets/Images/App.png";
import { faMessageDots } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faMessageDots } from '@fortawesome/free-solid-svg-icons'


function Home() {
    return (
        <>
            <div className="why">
                <img src={logo}/>
                <h1>Why TALKIE?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis consequat, eleifend nunc sed, pretium arcu. Integer eget lobortis risus. Praesent nec lacus ex. Donec varius justo in ultricies suscipit. In non suscipit arcu. Mauris imperdiet sem massa, ac viverra mi consectetur eu.</p>
            </div>
            <div className="simple">
                <div>
                    <h2>Simple, Basic 🙌</h2>
                    <p>Curabitur a tortor nec magna molestie dapibus tristique a ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse pulvinar nibh consectetur augue euismod, eget malesuada neque maximus. Cras nec nisi a erat dignissim tempus. Integer interdum eros et enim fringilla pellentesque. Sed porttitor, enim id interdum porta, dolor neque accumsan neque, id semper magna sapien nec ex.</p>
                </div>
                <div>
                    <img src={App}/>
                </div>
            </div>
            <div className="history">
                <div>
                    <img src={App}/>
                </div>
                <div>
                    <h2>History</h2>
                    <p>Curabitur a tortor nec magna molestie dapibus tristique a ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse pulvinar nibh consectetur augue euismod, eget malesuada neque maximus. Cras nec nisi a erat dignissim tempus. Integer interdum eros et enim fringilla pellentesque. Sed porttitor, enim id interdum porta, dolor neque accumsan neque, id semper magna sapien nec ex.</p>
                </div>
            </div>
            <div className="match">
                <div>
                    <h2>It's a match 💗</h2>
                    <p>Curabitur a tortor nec magna molestie dapibus tristique a ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse pulvinar nibh consectetur augue euismod, eget malesuada neque maximus. Cras nec nisi a erat dignissim tempus. Integer interdum eros et enim fringilla pellentesque. Sed porttitor, enim id interdum porta, dolor neque accumsan neque, id semper magna sapien nec ex.</p>
                </div>
                <div>
                    <img src={App}/>
                </div>
            </div>
            <div className="value">
                <h1>All with respecting our values</h1>
                <div className="values">
                    <div className="courtesy">
                        {/*<FontAwesomeIcon icon={faMessageDots}/>*/}
                        <h3>Politesse</h3>
                        <p>Curabitur a tortor nec magna molestie dapibus tristique a ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse pulvinar nibh consectetur augue euismod, eget malesuada neque maximus.</p>
                        <p className="quote">Curabitur a tortor nec magna molestie dapibus tristique a ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse pulvinar nibh consectetur augue euismod, eget malesuada neque maximus.</p>
                    </div>
                    <div className="respect">
                        <h3>Respect</h3>
                        <p>Curabitur a tortor nec magna molestie dapibus tristique a ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse pulvinar nibh consectetur augue euismod, eget malesuada neque maximus.</p>
                        <p className="quote">Curabitur a tortor nec magna molestie dapibus tristique a ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse pulvinar nibh consectetur augue euismod, eget malesuada neque maximus.</p>
                    </div>
                    <div className="modesty">
                        <h3>Modesty</h3>
                        <p>Curabitur a tortor nec magna molestie dapibus tristique a ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse pulvinar nibh consectetur augue euismod, eget malesuada neque maximus.</p>
                        <p className="quote">Curabitur a tortor nec magna molestie dapibus tristique a ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse pulvinar nibh consectetur augue euismod, eget malesuada neque maximus.</p>
                    </div>
                    <div className="honesty">
                        <h3>Honesty</h3>
                        <p>Curabitur a tortor nec magna molestie dapibus tristique a ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse pulvinar nibh consectetur augue euismod, eget malesuada neque maximus.</p>
                        <p className="quote">Curabitur a tortor nec magna molestie dapibus tristique a ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse pulvinar nibh consectetur augue euismod, eget malesuada neque maximus.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
