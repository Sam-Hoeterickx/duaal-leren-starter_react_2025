import { Trans } from "react-i18next";
import i18n from "../../../core/i18n/i18n.config";
import { MARKERS } from "../../../core/i18n/markers";
import { Link, useParams } from "react-router";
import { useChangeLanguage } from "~/shared/const/hooks/changeLanguage.hook";

export const Options = () => {

    // function setLanguage(language: string) {
    //     i18n.changeLanguage(language);

    //     const selectedLanguage = i18n.language;

    //     console.log(selectedLanguage);

    //     window.location.href = `http://localhost:5173/${selectedLanguage}/options`;
    // }

    // const { lang } = useParams<{lang: string}>();

    // console.log(lang, 'param');

    // const selectedLanguage = i18n.language;
    // console.log(selectedLanguage, "selectedLanguage");

    // i18n.changeLanguage(lang)
    // const update = i18n.language
    // console.log(update, "update")

    // useChangeLanguage();



    return(
        <>
            <div className="wrapper">
                <h3><Trans>{MARKERS.language_options_title}</Trans></h3>

                <Link to="http://localhost:5173/en/options"><Trans>{MARKERS.language_options_english}</Trans></Link>
                <Link to="http://localhost:5173/nl/options"><Trans>{MARKERS.language_options_dutch}</Trans></Link>


                {/* <button
                    onClick={() => setLanguage('nl')}
                ><Trans>{MARKERS.language_options_dutch}</Trans></button>
                <button
                    onClick={() => setLanguage('en')}
                ><Trans>{MARKERS.language_options_english}</Trans></button> */}
            </div>
        </>
    )
}