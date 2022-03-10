import React from 'react';

export const Footer:React.FC = () => {
    return (
        <footer className="section">
            <section className="content_section">
                <section>
                    <article>
                        <img src="." alt="image" />
                        <p>Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt.</p>
                        <div>
                            <a href="#">Facebook</a>
                            <a href="#">Instagram</a>
                            <a href="#">Twitter</a>
                            <a href="#">Linkedin</a>
                        </div>
                    </article>
                    <article>
                        <h4>Opening Restaurant</h4>
                        <ul>
                            <li>item</li>
                        </ul>
                    </article>
                    <article>
                        <h4>Contact Us</h4>
                        <ul>
                            <li>item</li>
                        </ul>
                    </article>
                </section>
                <section>
                    <p>2022</p>
                </section>
            </section>
        </footer>
    )
}