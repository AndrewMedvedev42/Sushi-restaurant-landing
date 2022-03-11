import React from 'react';

export const NewsSubscribe:React.FC = () => {
    return (
        <section className="section">
            <section className="content_section">
                <article className="content_box content_box_black">
                    <header className="section_header">
                        <h2>Subcribe To Our Newsletter</h2>
                        <p className="paragraph">Email subsription is an opportunity to recevie 
                        an interting newsletter from a website. once a user
                        fills in the subscription from on a website.</p>
                        <div>
                            <input type="text" placeholder="Type your email..."/>
                            <button className="square_button">Subscribe</button>
                        </div>
                    </header>
                    <section>
                        <img src="#" alt="" />
                        <img src="#" alt="" />
                    </section>
                </article>
            </section>
        </section>
    )
}