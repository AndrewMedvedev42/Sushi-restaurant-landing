import React from 'react';

export const Services:React.FC = () => {

    const servisesList = [
        {icon:"", title:"Qualityfull Food", text:"Lorem ipsum dolor sit amet"},
        {icon:"", title:"Healthy Food", text:"Lorem ipsum dolor sit amet"},
        {icon:"", title:"Fast Delivery", text:"Lorem ipsum dolor sit amet"},
    ]

    return (
        <section>
            <section>
                <article>
                    <h5>How to work</h5>
                    <h1>Why Choose Our Food</h1>
                </article>
                <section>
                    {
                        servisesList.map((item, index)=>{
                            const {title, text} = item
                            return (
                                <article key={index}>
                                    <h4>{title}</h4>
                                    <p>{text}</p>
                                </article>
                            )
                        })
                    }
                </section>
            </section>
        </section>
    )
}