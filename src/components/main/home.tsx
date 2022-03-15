import React from 'react';

import { MdArrowForwardIos } from 'react-icons/md';
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export const Home:React.FC = () => {
    return (
        <section className="section">
            <img className="home_image" src={`${process.env.PUBLIC_URL}/sushi-makizushi-japanese-cuisine-sashimi-onigiri-sushi-9e6bcd6afcf9adcea480cf8dc19d8fee.png`} alt="" />
            <section className="content_section">
                <header className="section_header home_section">
                    <h1 className="big_title">You Can Eat Any Tasty Food You Like.</h1>
                    <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    <button className="round_text_button"> Get Started <MdArrowForwardIos className="redirect_arrow"/></button>
                    <div className="social_media_links">
                        <FaFacebookF size={13} className="icon"/>
                        <BsInstagram size={13} className="icon"/>
                        <BsTwitter size={13} className="icon"/>
                        <FaLinkedinIn size={13} className="icon"/>
                    </div>
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