import React, { useRef } from 'react';
import './SearchBar.css';
import RoundedButton from "../../Buttons/RoundedButton";
import './SearchBar.css'

function SearchBar({width, height, backgroundColor, textColor, placeholder, icon}) {
    const searchBarStyle = {
        width: width,
        height: height,
        background: backgroundColor,
        color: textColor,
        placeholderColor: textColor
    }

    const inputRef = useRef(null);

    const handleButtonClick = () => {
        if(inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div className="search-bar" style={searchBarStyle} onClick={handleButtonClick}>
            <div className="custom-rounded-button">
                <RoundedButton src={icon}/>
            </div>
            <input ref={inputRef} className="search" style={searchBarStyle} placeholder={placeholder}/>
        </div>
    );
}

export default SearchBar;