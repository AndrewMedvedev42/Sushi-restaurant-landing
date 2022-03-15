import React from 'react';
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export const Footer:React.FC = () => {
    return (
        <footer className="section footer">
            <section className="content_section">
                <section className="main_details">
                    <article className="colunm">
                        <img className="footer_logo" src="." alt="image" />
                        <p className="paragraph">Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt.</p>
                        <div className="social_media_links">
                            <FaFacebookF size={13} className="icon"/>
                            <BsInstagram size={13} className="icon"/>
                            <BsTwitter size={13} className="icon"/>
                            <FaLinkedinIn size={13} className="icon"/>
                        </div>
                    </article>
                    <article className="colunm">
                        <h4>Opening Restaurant</h4>
                        <ul>
                            <li>item</li>
                        </ul>
                    </article>
                    <article className="colunm">
                        <h4>Contact Us</h4>
                        <ul>
                            <li>item</li>
                        </ul>
                    </article>
                </section>
                <section>
                    <p className="paragraph year">2022</p>
                </section>
            </section>
        </footer>
    )
}