import React from 'react';
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export const SocialMediaLinks = () => {
    const ICON_SIZE = 13        

    const socialMedias = [
        {icon:<FaFacebookF size={ICON_SIZE} className="icon"/>},
        {icon:<BsInstagram size={ICON_SIZE} className="icon"/>},
        {icon:<BsTwitter size={ICON_SIZE} className="icon"/>},
        {icon:<FaLinkedinIn size={ICON_SIZE} className="icon"/>}
    ]

    return (
        <ul className="social_media_links">
            {
                socialMedias.map(({icon})=>{
                    return icon
                })
            }
        </ul>
    )
}