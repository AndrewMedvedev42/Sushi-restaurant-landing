import React from 'react';

export const Home:React.FC = () => {
    return (
        <section className="section">
            <section className="content_section">
                <article>
                    <h1>You Can Eat Any Tasty Food You Like.</h1>
                    <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    <button className="round_text_button">Get Started</button>
                    <div>
                        <a href="#">Facebook</a>
                        <a href="#">Instagram</a>
                        <a href="#">Twitter</a>
                        <a href="#">Linkedin</a>
                    </div>
                </article>

                <article className="content_box content_box_shadow">
                    <article>
                        <img src="." alt="image" />
                        <h4>Today 10:00am - 09:00pm</h4>
                        <span>Working Time</span>
                    </article>
                    <article>
                        <img src="." alt="image" />
                        <h4>Washington, D.C., DC, USA</h4>
                        <span>Our Location</span>
                    </article>
                    <article>
                        <img src="." alt="image" />
                        <h4>+17602781253</h4>
                        <span>Call Online</span>
                    </article>
                </article>
            </section>
        </section>
    )
}