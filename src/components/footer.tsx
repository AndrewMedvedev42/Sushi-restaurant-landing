import React from 'react';
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export const Footer:React.FC = () => {


    const footerData = [
        {title:"Opening Restaurant", details:["Mon - San: 09:00am - 10:00pm ", "Thursday: 09:00am - 05:00pm", "Friday: Closed"]},
        {title:"Contact Us", details:["999 Country Club Ave", "NC 27587, London, UK", "+1259 6541120"]},
    ]

    return (
        <footer className="section footer">
            <section className="content_section">
                <section className="main_details">
                    <article className="colunm main_colunm">
                        <img className="footer_logo" src={`${process.env.PUBLIC_URL}/logo.svg`} alt="" />
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
                    {
                        footerData.map((item, index)=>{
                            return (
                                <article className="colunm" key={index}>
                                    <h4>{item.title}</h4>
                                    <ul>
                                        {
                                            item.details.map((item, index)=>{
                                                return (
                                                    <li key={index}>{item}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </article>
                            )
                        })
                    }
                </section>
                <section>
                    <p className="paragraph year">2022</p>
                </section>
            </section>
        </footer>
    )
}