import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';

interface RedirectButtonProps {
    text:string
}

export const RedirectButton = (props:RedirectButtonProps) => {
    return <button className="round_text_button">{props.text}<MdArrowForwardIos className="redirect_arrow"/></button>
}