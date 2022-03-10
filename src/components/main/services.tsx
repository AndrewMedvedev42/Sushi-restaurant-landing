import React from 'react';

export const Services:React.FC = () => {

    const servisesList = [
        {icon:"", title:"Qualityfull Food", text:"Lorem ipsum dolor sit amet"},
        {icon:"", title:"Healthy Food", text:"Lorem ipsum dolor sit amet"},
        {icon:"", title:"Fast Delivery", text:"Lorem ipsum dolor sit amet"},
    ]

    return (
        <section className="section">
            <section className="content_section">
                <article>
                    <h5 className="sub_title">Services</h5>
                    <h1 className="section_title">Why Choose Our Food</h1>
                </article>
                <section>
                    {
                        servisesList.map((item, index)=>{
                            const {title, text} = item
                            return (
                                <article className="content_box content_box_shadow" key={index}>
                                    <h4>{title}</h4>
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