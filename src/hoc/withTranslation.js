import React, { useContext } from 'react';
import en from '../Lang/en';
import hi from '../Lang/hi';
import { LanguageContext } from '../Config/Language';

const languages = {
    en, hi
}

export default function withTranslator(key) {
    const TranslatedComponent = (Component) => {
        const TranslationComponent = (props) => {
            const { userLanguage } = useContext(LanguageContext);
            const strings = languages[userLanguage][key];
            return (
                <Component {...props} strings={strings} />
            )
        }
        return TranslationComponent;
    }
    return TranslatedComponent;
}