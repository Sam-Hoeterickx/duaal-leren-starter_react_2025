import { useNavigate, useParams } from "react-router";
import i18n from "../../../../core/i18n/i18n.config";

export const useChangeLanguage = () => {

    const { lang } = useParams<{lang: string}>();
    console.log(lang);

    // if(!lang){
    //     // const navigate = useNavigate();
    //     console.log('nl')
    //     // navigate("nl/home");
    //     return
    // }


    // if(lang !== "en" && lang !== "nl"){
        
    //     i18n.changeLanguage("nl");
    // }
    // i18n.changeLanguage(lang);

}