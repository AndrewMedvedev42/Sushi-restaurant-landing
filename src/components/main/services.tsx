import React from 'react';
import { ImLeaf } from "react-icons/im";
import { GiKnifeFork } from "react-icons/gi";
import { FaTruckMoving } from "react-icons/fa";

export const Services:React.FC = () => {

    const servisesList = [
        {icon:<GiKnifeFork size={30} className="icon"/>, title:"Qualityfull Food", text:"Lorem ipsum dolor sit amet"},
        {icon:<ImLeaf size={30} className="icon"/>, title:"Healthy Food", text:"Lorem ipsum dolor sit amet"},
        {icon:<FaTruckMoving size={30} className="icon"/>, title:"Fast Delivery", text:"Lorem ipsum dolor sit amet"},
    ]

    return (
        <section className="section">
            <section className="content_section services_section">
                <header className="section_header">
                    <h5 className="sub_title">Services</h5>
                    <h1 className="section_title">Why Choose Our Food</h1>
                </header>
                <section className="services">
                    {
                        servisesList.map((item, index)=>{
                            const {icon, title, text} = item
                            return (
                                <article className="content_box content_box_shadow service_item" key={index}>
                                    {icon}
                                    <h4 className="service_title">{title}</h4>
                                    <p className="paragraph">{text}</p>
                                </article>
                            )
                        })
                    }
                </section>
            </section>
        </section>
    )
}