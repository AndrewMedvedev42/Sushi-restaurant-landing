import React from 'react';
import { RedirectButton } from "../redirect-button";
import Products from "../../data/products.json";

export const OurProducts:React.FC = () => {
    return (
        <section className="section">
            <section className="content_section protucts_section">
                <header className="section_header">
                    <h5 className="sub_title">Products</h5>
                    <h1 className="section_title">Our Most Popular Products</h1>
                </header>
                <section className="products_list">
                    {
                        Products.products.map(({image, title, price, rating}, index:number)=>{
                            return (
                                <article className="product_item content_box content_box_shadow" key={index}>
                                    <img className="product_image" src={`${process.env.PUBLIC_URL}/${image}`} alt="" />
                                    <article className="product_details">
                                        <div>
                                            <h5 className="product_title">{title}</h5>
                                            <button className="round_text_button">Add to cart</button>
                                        </div>
                                        <div>
                                            <span className="product_rating">{rating}</span>
                                            <span className="product_price">{price}</span>
                                        </div>
                                    </article>
                                </article>
                            )
                        })
                    }
                </section>
                <section>
                    <RedirectButton text="See More Products"/>
                </section>
            </section>
        </section>
    )
}