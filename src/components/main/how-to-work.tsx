import React from 'react';
import { RedirectButton } from "../redirect-button";

export const HowToWorkSection:React.FC = () => {
    return (
        <section className="section">
            <img className="how_to_work_image" src={`${process.env.PUBLIC_URL}/sushi-sashimi.svg`} alt="" />
            <section className="content_section how_to_work_section">
                <article className="section_text">
                    <header className="section_header">
                        <h5 className="sub_title">How to work</h5>
                        <h1 className="section_title">Food Is An Important Part Of A Balanced Diet.</h1>
                    </header>
                    <section>
                        <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit 
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                        occaecat cupidatat non proident, sunt in culpa qui officia 
                        deserunt mollit anim id est laborum.</p>
                        <RedirectButton text="Learm More"/>
                    </section>
                </article>
            </section>
        </section>
    )
}