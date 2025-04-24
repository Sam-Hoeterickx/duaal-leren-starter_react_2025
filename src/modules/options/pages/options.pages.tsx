import i18n from "../../../core/i18n/i18n.config";

export const Options = () => {

    function setLanguage(language: string) {
        i18n.changeLanguage(language);
    }

    return(
        <>
            <div className="wrapper">
                <h3>Choose language</h3>

                <button
                    onClick={() => setLanguage('nl')}
                >nl</button>
                <button
                    onClick={() => setLanguage('en')}
                >en</button>
            </div>
        </>
    )
}