import React from "react";
import './index.scss';

export const Window = ({window}) => {
    const classes = window.toString()
    return (
        <div className={classes.length < 10 ? "window fz70" : classes.length >= 15 ? "window fz30" : "window fz45"}>
            {window}
        </div>
    )
}