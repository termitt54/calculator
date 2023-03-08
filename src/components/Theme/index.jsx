import React from "react";
import './index.scss';

export const Theme = ({theme, setTheme}) => {
    return (
        <button onClick={() => setTheme(!theme)} className={theme ? "theme" : "theme theme_light"}></button>
    )
}