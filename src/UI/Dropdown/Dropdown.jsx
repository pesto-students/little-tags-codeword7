import React, { useState, useContext } from 'react';
import './Dropdown.scss';
import { AiFillCaretDown } from 'react-icons/ai';
import { languageOptions } from '../../Lang';
import { LanguageContext } from '../../Config/Language';
const MAP_LANGUAGE_NAME_DICT = {
    en: 'English',
    hi: 'Hindi'
}
const Dropdown = (props) => {
    const [showDropDownItems, setShowDropDownItems] = useState(false);
    // const [selectedDropDownItem, setSelectedDropDownItem] = useState(languageOptions[0]);
    const { userLanguage, userLanguageChange } = useContext(LanguageContext);

    const handleChange = id => {
        setShowDropDownItems(false);
        userLanguageChange(id);
    }

    return (
        <div className="dropdown-wrapper">
            <div className="select-box--box">
                <div>
                    <div className="dropdown" onClick={() => setShowDropDownItems(!showDropDownItems)}>
                        <div className="selected-item">{MAP_LANGUAGE_NAME_DICT[userLanguage]}</div>
                        <AiFillCaretDown className="air-dropdown" />
                    </div>
                </div>
                {showDropDownItems && <div
                    className="selected-box--items">
                    {Object.entries(languageOptions).map(([id, name]) => (
                        <div
                            key={id}
                            onClick={() => handleChange(id)}
                            className="options">
                            {name}
                        </div>
                    ))}
                </div>}
            </div>
        </div>
    )
}

export default Dropdown;