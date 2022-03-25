import React from 'react';
import { SocialMediaLinks } from "../social-media-links";
import { RedirectButton } from "../redirect-button";

import { AiOutlineClockCircle } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill} from "react-icons/bs";


export const Home:React.FC = () => {
    return (
        <section className="section">
            <img className="home_image" src={`${process.env.PUBLIC_URL}/sushi-makizushi.png`} alt="" />
            <section className="content_section">
                <header className="section_header home_section">
                    <h1 className="big_title">You Can Eat Any Tasty Food You Like.</h1>
                    <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    <RedirectButton text="Get started"/>
                    <SocialMediaLinks/>
                </header>

                <article className="content_box content_box_shadow contacts_section">
                    <article className="contact_item">
                        <AiOutlineClockCircle size={16} className="icon"/>
                        <h4 className="contact_title">Today 10:00am - 09:00pm</h4>
                        <span className="paragraph">Working Time</span>
                    </article>
                    <article className="contact_item">
                        <HiLocationMarker size={16} className="icon"/>
                        <h4 className="contact_title">Washington, D.C., DC, USA</h4>
                        <span className="paragraph">Our Location</span>
                    </article>
                    <article className="contact_item">
                        <BsFillTelephoneFill size={16} className="icon"/>
                        <h4 className="contact_title">+17602781253</h4>
                        <span className="paragraph">Call Online</span>
                    </article>
                </article>
            </section>
        </section>
    )
}