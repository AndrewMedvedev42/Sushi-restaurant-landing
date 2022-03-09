import React from 'react';

import Products from "../../modules/products.json";

export const OurProducts:React.FC = () => {
    return (
        <section>
            <section>
                <article>
                    <h5>Products</h5>
                    <h1>Our Most Popular Products</h1>
                </article>
                <section>
                    {
                        Products.products.map((item:any, index:number)=>{
                            const {image, title, price, rating} = item
                            return (
                                <article key={index}>
                                    <img src={image} alt="" />
                                    <h5>{title}</h5>
                                    <span>{price}</span>
                                    <span>{rating}</span>
                                </article>
                            )
                        })
                    }
                </section>
                <section>
                    <button>Learm More</button>
                </section>
            </section>
        </section>
    )
}